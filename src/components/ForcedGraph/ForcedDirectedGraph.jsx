//--- This is the forced-directed graph component ---//
// NOTE: For changing color go to CustomData
// CSS SECTION: Force Graph

import React, { useEffect, useRef, useState, useCallback } from 'react';
import {LoadingOutlined} from '@ant-design/icons';
import * as d3 from 'd3';
import '../../styles/ForcedDirectedGraph.css'
import {colorScale, graphcolor, getImages, continentList, contributorFields} from '../../utils/CustomData.jsx';
import UserActivityDetector from "../../utils/UserAction.jsx"

const image = getImages();

// this is forced-directed graph component
const ForceDirectedGraph = ({
  currentDataset,
  nodes,
  links,
  selectnode,
  width,
  height,
  onPlayingChange,
  nodeSelect,
  onNodeSelect,
  selectedRoles,
  currentdataset,
  setIsActive
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
  const [isVisible, setIsVisible] = useState(true);
  const [groupsReady, setGroupsReady] = useState(false);

  //This use to detect whether user active or not
  const isActive = UserActivityDetector(300000);
  useEffect(() => {
    setIsActive(isActive);
  }, [isActive]);




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
    const connectedLinks = links.filter(l=> l.source === d || l.target === d);
    const connectedNodes = connectedLinks.map(l => l.source === d ? l.target : l.source);
    let scale;
    if(connectedNodes.length<3){
      scale = Math.min(width,height/400);
    } else {
      scale = Math.min(width, height/800); 
    }
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
    if(d.group === 18){
      return d.group;
    }
    const groups = Array.isArray(d.group) ? d.group : [d.group];
    const matchedGroup = groups.find(groupId => selectedRoles.includes(groupId));
    const color = matchedGroup
      ? (currentdataset === 'people'
          ? contributorFields[matchedGroup - 1]?.groupid
          : continentList[matchedGroup - 1]?.groupid)
      : null;
    return color;
  }




  // INITIALIZE GRAPH
  useEffect(() => {
    const svg = d3.select(svgRef.current); // select the current node and link into svg
    svg.selectAll("*").remove(); // Clear previous content

    // create groups
    const g = svg.append("g").attr("class", "graph-group");
    const linkGroup = g.append("g").attr("class", "links");
    const nodeGroup = g.append("g").attr("class", "nodes");

    // set scale size from svg
    let ticking = false;
    let lastCall = 0;
    let currentTransform = d3.zoomIdentity;

    function zoomHandler(event) {
      // g.attr("transform", event.transform);
      currentTransform = event.transform;

      // Throttle updates (every 30ms max)
      const now = Date.now();
      if (now - lastCall < 30) return;
      lastCall = now;

      if (!ticking) {
        requestAnimationFrame(() => {
          g.attr("transform", currentTransform);
          ticking = false;
        });
        ticking = true;
      }
    }

    // call zoom function from D3
    const zoom = d3
      .zoom()
      .scaleExtent([0.1, 10]) 
      .on("zoom", zoomHandler);
    svg.call(zoom);

    if(!onPlayingChange){
      setIsVisible(false);
    }
    // Save references
    zoomRef.current = zoom;
    groupsRef.current = { svg, g, linkGroup, nodeGroup };
    setGroupsReady(true);

    return () => svg.selectAll("*").remove();
  }, [currentdataset]);




  // CREATE AND UPDATE GRAPH WITH FORCE
  useEffect(() => {
    if (!groupsReady) return;




    let iszoom = false;
    const zoom = zoomRef.current;
    const { svg, g, linkGroup, nodeGroup } = groupsRef.current;

    // ----- LINKS -----
    const link = linkGroup
      .selectAll("line")
      .data(links, d => `${d.source.id}-${d.target.id}`);

    // EXIT links
    link.exit().remove();

    // ENTER links
    const linkEnter = link.enter()
      .append("line")
      .attr("class", "link-line")
      .attr("stroke", graphcolor.link)
      .attr("stroke-width", graphcolor.stroke)
      .attr("stroke-opacity", 0);
    
    linkEnter.transition()
      .duration(500)
      .attr("stroke-opacity", 1);
    
    const linkMerge = linkEnter.merge(link);




    // ----- NODES -----
    // Preserve old x/y positions
    const RADIUS = Math.min(width, height) / 3;
    nodes.forEach(d => {
      if (d.x === undefined || d.y === undefined) {
        const linkedNode = links.find(l => l.target.id === d.id)?.source;
        if (linkedNode) {
          d.x = linkedNode.x + (Math.random() - 0.5) * RADIUS;
          d.y = linkedNode.y + (Math.random() - 0.5) * RADIUS;
        } else {
          d.x = width/2 + (Math.random() - 0.5) * RADIUS;
          d.y = height/2 + (Math.random() - 0.5) * RADIUS;
        }
      }
    });

    const node = nodeGroup
      .selectAll("g")
      .data(nodes, d => d.id);
  
    // EXIT nodes
    node.exit().remove();

    // ENTER nodes
    const nodeEnter = node.enter()
      .append("g")
      .attr("opacity", 0)
      .attr("transform", d => `translate(${d.x || width/2},${d.y || height/2})`)
      .call(
        d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended)
      );

    // Set up clipPath
    nodeEnter
      .append("clipPath")
      .attr("id", (d) => `circle-clip-${d.size}`) // unique id per node
      .append("circle")
      .attr("r", (d) => d.size);

    // Create circle
    nodeEnter
      .append("circle")
      .attr("class", "node-circle") 
      .attr("fill", (d) => {return setcolor(d) ? colorScale(setcolor(d)) : graphcolor.inactive})
      .attr("stroke", graphcolor.circlestroke)
      .attr("stroke-width", graphcolor.circlestrokesize)
      .style("cursor", "pointer")
      .attr("r", (d) => d.size);
    
    // Style circle
    nodeEnter
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

    // Aligh text in node to be center
    nodeEnter.append("foreignObject")
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

    nodeEnter.transition()
      .duration(500)
      .attr("opacity", 1);

    const nodeMerge = nodeEnter.merge(node);

    // Optimized node size updates
    nodeMerge.each(function(d) {
      const node = d3.select(this);

      // Update visible circle
      node.select(".node-circle")
        .attr("r", d.size);

      // Update clipPath radius
      node.select("clipPath circle")
        .attr("r", d.size);

      // Update image dimensions if present
      const img = node.select("image");
      if (!img.empty()) {
        img
          .attr("x", -d.size * 1.5)
          .attr("y", -d.size * 1.5)
          .attr("width", d.size * 3)
          .attr("height", d.size * 3);
      }

      // Update text box position & size
      const textBox = node.select("foreignObject");
      if (!textBox.empty()) {
        textBox
          .attr("x", -d.size)
          .attr("width", d.size * 2)
          .attr("y", d.file ? d.size + 5 : -50)
          .select("div")
          .style("font-size", d.file ? "12px" : `${d.size / 4}px`);
      }
    });

    



    // ----- NODE EVENTS -----
    nodeMerge
      .on("mouseenter", (event, d) => {
        // Highlight connected links
        linkMerge
          .filter((l) => l.source.id === d.id || l.target.id === d.id)
          .attr("stroke", graphcolor.focuslink)
          .attr("stroke-width", graphcolor.focusstroke);
      })

      .on("mouseleave", (event, d) => {
        // Restore connected style
        linkMerge
          .filter((l) => l.source.id === d.id || l.target.id === d.id)
          .attr("stroke", graphcolor.link)
          .attr("stroke-width", graphcolor.stroke);
        highlightNode(selectedRef.current, nodeGroup, linkGroup)
      })
      
      .on("click", function (event, d) {
        console.log("Clicking!!!")
        // Track selected node(s) temporarily
        let tempSelectedNodes = [d];
        // Zoom to selection
        if (tempSelectedNodes.length === 1) {
          zoomRef.current = true;
          selectedRef.current = tempSelectedNodes[0].id;
          zoomToNode(tempSelectedNodes[0], svg, zoom);
          onNodeSelect(tempSelectedNodes[0].id);
          highlightNode(tempSelectedNodes[0].id, nodeGroup, linkGroup);
        } 
        // Clear selection array
        tempSelectedNodes = [];
        
        zoomRef.current = zoom;
      });


      

      
    if (simulationRef.current) simulationRef.current.stop();
  
    // ----- SIMULATION -----
    const simulation = d3
      .forceSimulation(nodes)
      .force("y", d3.forceY(height / 2).strength(0.1))  // Fix: y uses height
      .force("x", d3.forceX(width / 2).strength(0.1))   // Fix: x uses width
      .force("link", d3.forceLink(links).id((d) => d.id)
      .distance(100)
      .strength(0.5))
      .force("charge", d3.forceManyBody().strength(-chargeStrength))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius((d) => (d.size * 4) / 3))
      .alpha(onPlayingChange? 2 : 3)
      .alphaDecay(onPlayingChange? 0.07 : 0.05)   
      .velocityDecay(0.4);
    
    


    simulation.on("tick", () => {
        linkMerge
          .attr("x1", (d) => d.source.x)
          .attr("y1", (d) => d.source.y)
          .attr("x2", (d) => d.target.x)
          .attr("y2", (d) => d.target.y);
        nodeMerge
          .attr("transform", (d) => `translate(${d.x},${d.y})`);

        const alpha = simulation.alpha()
        const ALPHA_THRESHOLD = 0.5
        if(ALPHA_THRESHOLD > alpha && !iszoom){
          if(zoomRef.current === true){
            return;
          }       
          const contentBounds = g.node().getBBox();
          if (contentBounds.width === 0 || contentBounds.height === 0) return;
          
          const scale = Math.min(
            (width / contentBounds.width) * 0.8,
            (height / contentBounds.height) * 0.8
          );
          const translateX = (width - contentBounds.width * scale) / 2 - contentBounds.x * scale ;
          const translateY = (height - contentBounds.height * scale) / 2 - contentBounds.y * scale - 75 ;
          // Create the desired zoom transform
          const transform = d3.zoomIdentity
            .translate(translateX, translateY)
            .scale(scale);

          // Apply smooth transition
          svg
            .transition()
            .duration(750) 
            .ease(d3.easeCubicInOut) 
            .call(zoom.transform, transform);
          zoomRef.current = zoom;
          iszoom = true;
        }
        // if(alpha < 0.2){
        //   setIsVisible(true)
        // }
        console.log("Current Dataset:", currentDataset)
        if(currentDataset == "people" && alpha<0.2){
          setIsVisible(true)
        } else if(currentDataset == "country" && alpha < 0.025){
          console.log("Alpha:",alpha)
          setIsVisible(true)
        }
      })

      .on("end", () => {
        simulation.stop();
      });

      simulationRef.current = simulation;
      zoomRef.current = zoom;
      groupsRef.current = { svg, g, linkGroup, nodeGroup };
      
    return () => {
      simulation.stop();
    };
  }, [
    nodes,
    links,
    groupsReady,
  ]);




  // SELECTROLES
  useEffect(() => {
    if (!groupsReady) return;

    const { nodeGroup } = groupsRef.current;

    // Update node colors
    nodeGroup
      .selectAll("circle")
      .transition()
      .duration(300)
      .attr("fill", (d) => {return setcolor(d) ? colorScale(setcolor(d)) : graphcolor.inactive})

  }, [selectedRoles]);
  



  // Restore style when close description
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
            selectnode.value.toLowerCase().replace(/\s+/g, "_")
        );
        if (select) {
          console.log(select);     
          highlightNode(select.id, nodeGroup, linkGroup);

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