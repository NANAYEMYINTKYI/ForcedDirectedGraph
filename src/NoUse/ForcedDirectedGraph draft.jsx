//--- This is the forced-directed graph component ---//
// NOTE: For changing color go to CustomData
// CSS SECTION: Force Graph

import React, { useEffect, useRef, useState, useCallback } from 'react';
import {LoadingOutlined} from '@ant-design/icons';
import * as d3 from 'd3';
import './ForcedDirectedGraph.css'
import {colorScale, graphcolor, getImages} from './CustomData.jsx';

const image = getImages();

// this is forced-directed graph component
const ForceDirectedGraph = ({
  nodes,
  links,
  selectnode,
  filterTag,
  width,
  height,
  onPlayingChange,
  nodeSelect,
  onNodeSelect,
  selectedRoles
}) => {
  // Refs
  const svgRef = useRef();
  const simulationRef = useRef();
  const zoomRef = useRef(false)

  // State
  const [chargeStrength, setChargeStrength] = useState(1000);
  const [linkStrength, setLinkStrength] = useState(0.1);
  const [centerStrength, setCenterStrength] = useState(0.3);
  const [isVisible, setIsVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false);




  // DRAG FUNCTIONS
  const dragstarted = useCallback(function (event, d) {
    if (!event.active)
      simulationRef.current.alphaTarget(0.01).alpha(1.01).restart();
    d.fx = d.x;
    d.fy = d.y;
  }, []);

  const dragged = useCallback(function (event, d) {
    d.fx = event.x;
    d.fy = event.y;
    setIsDragging(true)
    setIsVisible(true)
  }, []);

  const dragended = useCallback(function (event, d) {
    if (!event.active) 
      simulationRef.current.alphaTarget(0.5).alpha(1.01);

    setTimeout(() => {
      simulationRef.current.alphaTarget(0);
    }, 1000);
    d.fx = null;
    d.fy = null;
  }, []);




  // Clear selected node when nodes change
  useEffect(() => {
    onNodeSelect(null);
  }, [nodes, onNodeSelect]);
  
  // Initialize and update graph when dependent
  useEffect(() => {
    const svg = d3.select(svgRef.current); // select the current node and link into svg
    svg.selectAll("*").remove(); // Clear previous content

    // Create groups
    const g = svg.append("g").attr("class", "graph-group");
    // set zoom behavior
    const zoomHandler = (event) => {
      g.attr("transform", event.transform);
      setIsVisible(true); // Hide during zoom
    };
    const zoom = d3
      .zoom()
      .scaleExtent([0.01, 20]) 
      .on("zoom", zoomHandler);
    svg.call(zoom);

    function zoomToNode(d) {
      const scale = Math.min(width, height/800);
      const transform = d3.zoomIdentity
        .translate(width / 2, height / 2)
        .scale(scale)
        .translate(-d.x, -d.y); 
      svg.transition().duration(750).call(zoom.transform, transform);
    }
    const linkGroup = g.append("g").attr("class", "links");
    const nodeGroup = g.append("g").attr("class", "nodes");
    // Create links
    const link = linkGroup
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("class", "link-line")
      .attr("stroke", graphcolor.link)
      .attr("stroke-width", graphcolor.stroke);
    // Create nodes
    const node = nodeGroup
      .selectAll("g")
      .data(nodes)
      .join("g")
      .call(
        d3
          .drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended)
      );
    // Set up clipPath
    node
      .append("clipPath")
      .attr("id", (d) => `circle-clip-${d.size}`) // unique id per node
      .append("circle")
      .attr("r", (d) => d.size);

    // create circle
    node
      .each(function (d) {
        const current = d3.select(this);
        if (d.file) {
          // If image exists, append image
          current
            .append("image")
            .attr("href", (d) => image[d.file])
            .attr("x", (d) => -d.size * 1.5)
            .attr("y", (d) => -d.size * 1.5)
            .attr("width", (d) => d.size * 3)
            .attr("height", (d) => d.size * 3)
            .attr("clip-path", (d) => `url(#circle-clip-${d.size})`)
            .attr("stroke", graphcolor.circlestroke)
            .attr("stroke-width", graphcolor.circlestrokesize)
            .style("cursor", "pointer");
        } else {
          // Otherwise, append a colored circle
          current
            .append("circle")
            .attr("r", (d) => d.size)
            // .attr("fill", (d) => colorScale(d.group))
            // .attr("fill", (d) => selectedRoles.includes(d.group) ? colorScale(d.group) :graphcolor.inactive )
            .attr("fill", (d) => {
              const matchedGroup = d.group?.find(groupId => selectedRoles.includes(groupId));
              return matchedGroup ? colorScale(matchedGroup) : graphcolor.inactive;
            })
            .attr("stroke", graphcolor.circlestroke)
            .attr("stroke-width", graphcolor.circlestrokesize)
            .style("cursor", "pointer");
        }
      })

      .on("mouseenter", (event, d) => {
        // Highlight connected links
        d3.selectAll(".link-line")
          .filter((l) => l.source.id === d.id || l.target.id === d.id)
          .attr("stroke", graphcolor.focuslink)
          .attr("stroke-width", graphcolor.focusstroke);
      })

      .on("mouseleave", (event, d) => {
        d3.selectAll(".link-line")
          .filter((l) => l.source.id === d.id || l.target.id === d.id)
          .attr("stroke", graphcolor.link)
          .attr("stroke-width", graphcolor.stroke);
      })
      .on("click", function (event, d) {
        // Track selected node(s) temporarily
        // let selectedNodes = [];
        
        if(!isDragging){
          let tempSelectedNodes = [d];
          // Zoom to selection
          if (tempSelectedNodes.length === 1) {
            zoomRef.current=true;
            zoomToNode(tempSelectedNodes[0]);
            onNodeSelect(tempSelectedNodes[0].id)
          } else if (tempSelectedNodes.length > 1) {
            zoomToNode(tempSelectedNodes);
            console.log("StopPropagation")
          }
          // Clear selection array
          tempSelectedNodes = [];
          setIsDragging(false)
      }});

    const simulation = d3
      .forceSimulation(nodes)
      .force("y", d3.forceY(height / 2).strength(0.1))  // Fix: y uses height
      .force("x", d3.forceX(width / 2).strength(0.1))   // Fix: x uses width
      .force("link", d3.forceLink(links).id((d) => d.id)
      .distance(10)        // Increased from 10
      .strength(0.2))      // Increased from 0.2
      .force("charge", d3.forceManyBody().strength(-chargeStrength))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius((d) => (d.size * 4) / 3))
      // .alpha(2)
      .alpha( onPlayingChange? 1 : 3)  // Conditional alpha
      // console.log(alpha)
      .alphaDecay(0.15)      // Reduced from 0.05 for smoother settling
      .velocityDecay(0.4)    // Add friction
      .on("tick", () => {
        link
          .attr("x1", (d) => d.source.x)
          .attr("y1", (d) => d.source.y)
          .attr("x2", (d) => d.target.x)
          .attr("y2", (d) => d.target.y);
        node.attr("transform", (d) => `translate(${d.x},${d.y})`);
                const alpha = simulation.alpha()

        const alphaMin = simulation.alphaMin()

        if(alpha<0.2){
          setIsVisible(true)
        }
      })

      .on("end", () => {

        console.log("On playing changed vlaue is:",onPlayingChange)
        if(zoomRef.current == true){
          return;
        }       
        // console.log("Initial zoomed:", zoomRef)
        const contentBounds = g.node().getBBox();
        if (contentBounds.width === 0 || contentBounds.height === 0) return;
        
        const scale = Math.min(
          (width / contentBounds.width) * 0.9,
          (height / contentBounds.height) * 0.9
        );
        // console.log("Finishes scale calculated")
        // console.log("Calculated scale")
        const translateX = (width - contentBounds.width * scale) / 2 - contentBounds.x * scale;
        const translateY = (height - contentBounds.height * scale) / 2 - contentBounds.y * scale;
        // console.log("Finished Translate")
        svg.call(zoom.transform, d3.zoomIdentity.translate(translateX, translateY).scale(scale));
        setIsVisible(true);
        simulation.stop();
        // zoomRef.current = true;
        // console.log("zoomref is", zoomRef);
      });

    simulationRef.current = simulation;
    if (selectnode) {
      // setIsVisible(true);
      onNodeSelect(selectnode.value)
      setTimeout(() => {
        const select = nodes.find(
          (n) =>
            n.id.toLowerCase().replace(/\s+/g, "_") ===
            selectnode.value.toLowerCase().replace(/\s+/g, "_")
        );
        if (select) {
          // ensure simulation updates positions before zoom
          // simulationRef.current.alpha(0.3).restart();

          setTimeout(() => {
            zoomToNode(select);
            // setIsVisible(true);
          }, 2000);
        }
      }, 100);
    } else if (filterTag) {
      setIsVisible(false);
      setTimeout(() => {
        const matchingNode = nodes.find((node) => {
          if (!node.tags || node.tags.length === 0) return false;
          return node.tags.some((tag) => {
            const cleanTag = tag.replace(/^#/, "").trim().toLowerCase();
            return cleanTag === filterTag.toLowerCase();
          });
        });
        // if (matchingNode) {
        //   // simulationRef.current.alpha(0.3).restart();
        //   setTimeout(() => {
        //     zoomToNode(matchingNode);
        //   }, 300);
        // }
      }, 50);
    }

      // Aligh text in node to be center
      node.append("foreignObject")
        .each(function(d) {
          const current = d3.select(this);
          if (d.file) {
            current.attr("y", d.size + 5)
            .style("font-size", "12px")
            .style("color", graphcolor.nodetext)
          } else {
            current.attr("y", -50)
            .style("font-size", d => d.size/4)
            .style("color", graphcolor.connectiontext)
          }})
        .attr("x", d => -d.size*1)
        .attr("width", d => d.size*2) 
        .attr("height", 100) 
        .append("xhtml:div")
        .style("display", "flex")
        .style("flex-direction", "column")
        .style("justify-content", d => d.file ? "flex-start" : "center")
        .style("width", "100%")
        .style("height", "100%")
        .style("font-weight", "bold")
        .style("text-align", "center")
        .style("word-wrap", "break-word")
        .text(d => d.label)
      
    return () => {
      simulation.stop();
    };
  }, [
    nodes,
    links,
    // width,
    // height,
    filterTag,
    // chargeStrength,
    // linkStrength,
    // centerStrength,
    // colorScale,
    // dragstarted,
    // dragged,
    // dragended,
    selectnode,
    onPlayingChange,
    selectedRoles
  ]);

  return (
    <div className="force-graph-container">
      {/* Graph */}
      <div className="graph-container">
        {!isVisible && (
          // <p> loading Data</p>
           <div
      style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
      }}>
            <LoadingOutlined
              style={{
                fontSize: 100,
                color: 'white',
              }}
            />
          </div>
         )}
        {/* )} */}
        <div className="graph-svg" style={{visibility: isVisible ? 'visible': 'hidden'}}>
          <svg ref={svgRef} width={width} height={height}/>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ForceDirectedGraph);
