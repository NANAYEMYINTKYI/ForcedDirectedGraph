//--- This is the forced-directed graph component ---//
// NOTE: For changing color go to CustomData
// CSS SECTION: Force Graph

import React, { useEffect, useRef, useState, useCallback } from 'react';
import {LoadingOutlined} from '@ant-design/icons';
import * as d3 from 'd3';
import '../../styles/ForcedDirectedGraph.css'
import {colorScale, graphcolor, getImages, continentList, contributorFields} from '../../utils/CustomData.jsx';

const image = getImages();

// this is forced-directed graph component
const ForceDirectedGraph = ({
  nodes,
  links,
  selectnode,
  width,
  height,
  onPlayingChange,
  nodeSelect,
  onNodeSelect,
  selectedRoles,
  currentdataset
}) => {
  // Refs
  const svgRef = useRef();
  const simulationRef = useRef();
  const zoomRef = useRef(false);
  const selectedRef = useRef();
  const groupsRef = useRef({
    svg: null,
    g: null,
    linkGroup: null,
    nodeGroup: null
  });

  // State
  const [chargeStrength, setChargeStrength] = useState(1000);
  const [linkStrength, setLinkStrength] = useState(0.1);
  const [centerStrength, setCenterStrength] = useState(0.3);
  const [isVisible, setIsVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [groupsReady, setGroupsReady] = useState(false);

  // console.log("Node in graph:", nodes)
  // console.log("Links in graph", links)


  // DRAG FUNCTIONS
  const DRAG_THRESHOLD = 5;

  const dragstarted = useCallback(function (event, d) {
    if (!event.active)
      simulationRef.current.alphaTarget(0.1).alpha(1.01).restart();

    // Store initial location
    d._dragStartX = event.x;
    d._dragStartY = event.y;
    d.fx = d.x;
    d.fy = d.y;
  }, []);

  const dragged = useCallback(function (event, d) {
    // Check distance from drag start
    const dx = event.x - d._dragStartX;
    const dy = event.y - d._dragStartY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > DRAG_THRESHOLD) {
      d.fx = event.x;
      d.fy = event.y;
      // setIsDragging(true);
      setIsVisible(true);
      d._isRealDrag = true;
    }
  }, []);

  const dragended = useCallback(function (event, d) {
    const zoom = zoomRef.current;
    const { svg, linkGroup, nodeGroup } = groupsRef.current;

    if (!event.active){
      simulationRef.current.alphaTarget(0.5).alpha(1.01);
    if (d._isRealDrag) {
    //   Position update if real drag
      d.fx = null;
      d.fy = null;
    } else {
      // Freeze if it is a click
      d.fx = d.x;
      d.fy = d.y;
      selectedRef.current = d.id;
      zoomToNode(d, svg, zoom);
      onNodeSelect(d.id);
      highlightNode(d.id, nodeGroup, linkGroup);
    }}

    setTimeout(() => {
      simulationRef.current.alphaTarget(0);
    }, 1000);

    setTimeout(() => {
      d.fx = null;
      d.fy = null;
    }, 3000);

    // Clean temp drag properties
    delete d._dragStartX;
    delete d._dragStartY;
    delete d._isRealDrag;
  }, []);




  // ZOOM TO NODE FUNCTION
  function zoomToNode(d, svg, zoom) {
    if (!svg || !zoom || !zoom.transform) {
      console.error("Missing zoom or svg in zoomToNode:", { svg, zoom });
      return;
    }
    const scale = Math.min(width, height/800);
    const transform = d3.zoomIdentity
      .translate(width / 2, height / 2)
      .scale(scale)
      .translate(-d.x, -d.y); 
    svg.transition().duration(750).call(zoom.transform, transform);
  }
  
    


  // HIGHLIGHT NODE FUNCTION
  function highlightNode(selectedNode, nodeGroup, linkGroup) {
  // Reset styles
  nodeGroup.selectAll("circle")
    .attr("stroke", graphcolor.circlestroke)
    .attr("stroke-width", graphcolor.circlestrokesize)

  linkGroup.selectAll("line")
    .attr("stroke", graphcolor.link)
    .attr("stroke-width", graphcolor.stroke);

  if (selectedNode) {
    // Highlight selected node
    nodeGroup.selectAll("circle")
      .filter((d) => d.id === selectedNode)
      .attr("stroke", graphcolor.focuscircle)
      .attr("stroke-width", graphcolor.focusstroke)
      
  linkGroup.selectAll("line")
    .filter((l) => l.source.id === selectedNode || l.target.id === selectedNode)
    .attr("stroke", graphcolor.focuslink)
    .attr("stroke-width", graphcolor.focusstroke);
  }  
}




  // SET COLOR FUNCTION
  function setcolor(d) {
    const groups = Array.isArray(d.group) ? d.group : [d.group];
    const matchedGroup = groups.find(groupId => selectedRoles.includes(groupId));
    const color = matchedGroup
      ? (currentdataset === 'people'
          ? contributorFields[matchedGroup - 1]?.groupid
          : continentList[matchedGroup - 1]?.groupid)
      : null;
    return color;
  }




  // INITIALIZE AND UPDATE GRAPH WHEN NODES CHANGE
  useEffect(() => {
    const svg = d3.select(svgRef.current); // select the current node and link into svg
    svg.selectAll("*").remove(); // Clear previous content

    // create groups
    const g = svg.append("g").attr("class", "graph-group");
    const linkGroup = g.append("g").attr("class", "links");
    const nodeGroup = g.append("g").attr("class", "nodes");

    // set scale size from svg
    const zoomHandler = (event) => {
      g.attr("transform", event.transform);
      setIsVisible(true); // Hide during zoom
    };

    // call zoom function from D3
    const zoom = d3
      .zoom()
      .scaleExtent([0.01, 20]) 
      .on("zoom", zoomHandler);
    svg.call(zoom);

    if(!onPlayingChange){
      setIsVisible(false);
    }
    console.log("Graph initialized");
    // Save references
    zoomRef.current = zoom;
    groupsRef.current = { svg, g, linkGroup, nodeGroup };
    setGroupsReady(true);

    return () => svg.selectAll("*").remove();
  }, [
    nodes,
  ]);


  

  // CREATE GRAPH WITH FORCE
  useEffect(() => {
    if (!groupsReady) return;

    let iszoom = false;
    const zoom = zoomRef.current;
    const { svg, g, linkGroup, nodeGroup } = groupsRef.current;

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

    // Create circle
    node
      .append("circle")
      .attr("r", (d) => d.size)
      .attr("fill", (d) => {return setcolor(d) ? colorScale(setcolor(d)) : graphcolor.inactive})
      .attr("stroke", graphcolor.circlestroke)
      .attr("stroke-width", graphcolor.circlestrokesize)
      .style("cursor", "pointer");
    
    // Style circle
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
        // Restore connected style
        d3.selectAll(".link-line")
          .filter((l) => l.source.id === d.id || l.target.id === d.id)
          .attr("stroke", graphcolor.link)
          .attr("stroke-width", graphcolor.stroke);
        highlightNode(selectedRef.current, nodeGroup, linkGroup)
      })
      
      .on("click", function (event, d) {
        console.log("Clicking!!!")
        // Track selected node(s) temporarily
        // let selectedNodes = [];
        
        if(!isDragging){
          let tempSelectedNodes = [d];
          // Zoom to selection
          if (tempSelectedNodes.length === 1) {
            zoomRef.current = true;
            selectedRef.current = tempSelectedNodes[0].id;
            zoomToNode(tempSelectedNodes[0], svg, zoom);
            onNodeSelect(tempSelectedNodes[0].id);
            highlightNode(tempSelectedNodes[0].id, nodeGroup, linkGroup);
          } else if (tempSelectedNodes.length > 1) {
            zoomToNode(tempSelectedNodes, svg, zoom);
            console.log("StopPropagation")
          }
          // Clear selection array
          tempSelectedNodes = [];
        }
        zoomRef.current = zoom;
      });

    const simulation = d3
      .forceSimulation(nodes)
      .force("y", d3.forceY(height / 2).strength(0.1))  // Fix: y uses height
      .force("x", d3.forceX(width / 2).strength(0.1))   // Fix: x uses width
      .force("link", d3.forceLink(links).id((d) => d.id)
      .distance(50)
      .strength(0.5))
      .force("charge", d3.forceManyBody().strength(-chargeStrength))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius((d) => (d.size * 4) / 3))
      // .alpha(2)
      .alpha( onPlayingChange? 1 : 3)
      .alphaDecay(0.05)   
      .velocityDecay(0.4)
      .on("tick", () => {
        link
          .attr("x1", (d) => d.source.x)
          .attr("y1", (d) => d.source.y)
          .attr("x2", (d) => d.target.x)
          .attr("y2", (d) => d.target.y);
        node.attr("transform", (d) => `translate(${d.x},${d.y})`);

        const alpha = simulation.alpha()
        const ALPHA_THRESHOLD = 0.25
        if(ALPHA_THRESHOLD > alpha && !iszoom && !onPlayingChange){
          if(zoomRef.current === true){
            return;
          }       
          console.log("zoooooooooom!")
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
          zoomRef.current = zoom;
          iszoom = true;
        }
        if(alpha < 0.2){
          setIsVisible(true)
        }
      })

      .on("end", () => {
        simulation.stop();
      });

    simulationRef.current = simulation;

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
        .style("text-align", "center")
        .style("word-wrap", "break-word")
        .style("user-select", "none")
        .text(d => d.label)
            
      zoomRef.current = zoom;
      groupsRef.current = { svg, g, linkGroup, nodeGroup };
      
    return () => {
      simulation.stop();
    };
  }, [
    nodes,
    groupsReady,
  ]);




  // SELECTROLES
  useEffect(() => {
    if (!groupsReady) return;

    const zoom = zoomRef.current;
    const { svg, g, linkGroup, nodeGroup } = groupsRef.current;
    
    const node = nodeGroup
      .selectAll("g")
      .data(nodes)
      .join("g")

    node
      .filter((d) => d.group !== 18)
      .append("circle")
      .attr("r", (d) => d.size)
      .attr("fill", (d) => {return setcolor(d) ? colorScale(setcolor(d)) : graphcolor.inactive})
      .attr("stroke", graphcolor.circlestroke)
      .attr("stroke-width", graphcolor.circlestrokesize)
      .style("cursor", "pointer");

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
      .style("text-align", "center")
      .style("word-wrap", "break-word")
      .text(d => d.label)

    zoomRef.current = zoom;
    groupsRef.current = { svg, g, linkGroup, nodeGroup };
      
  }, [
  selectedRoles,
]);
  



  // Restore style when close descfription
  useEffect(() => {  
    const { linkGroup, nodeGroup } = groupsRef.current;

    if(!nodeSelect){
      highlightNode(null, nodeGroup, linkGroup);
      selectedRef.current = null
    }
  }, [
    nodeSelect,
  ]);
  



  // ZOOM SEARCH NODE
  useEffect(() => {
    if (!groupsReady) return;

    const zoom = zoomRef.current;
    const { svg, g, linkGroup, nodeGroup } = groupsRef.current;

    if (selectnode) {
      onNodeSelect(selectnode.value)
      selectedRef.current = selectnode.value
  
      setTimeout(() => {
        const select = nodes.find(
          (n) =>
            n.id.toLowerCase().replace(/\s+/g, "_") ===
            // selectnode.value.toLowerCase().replace(/\s+/g, "_")
            selectnode.value.toLowerCase().replace(/\s+/g, "_")
        );
        if (select) {
          console.log(select);     
          highlightNode(select.id, nodeGroup, linkGroup);
          // simulationRef.current.alpha(0.3).restart();

          setTimeout(() => {
            zoomToNode(select, svg, zoom);
          }, 500);
        }
      }, 100);
    } 

    zoomRef.current = zoom;
    groupsRef.current = { svg, g, linkGroup, nodeGroup };
      
  }, [
    selectnode,
  ]);




  // Clear selected node when nodes change
  useEffect(() => {
    onNodeSelect(null);
  }, [nodes, onNodeSelect]);

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
            }}
          >
            <LoadingOutlined
              style={{
                fontSize: 100,
                color: 'white',
              }}
            />
          </div>
        )}
        <div className="graph-svg" style={{visibility: isVisible ? 'visible': 'hidden'}}>
          <svg ref={svgRef} width={width} height={height}/>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ForceDirectedGraph);