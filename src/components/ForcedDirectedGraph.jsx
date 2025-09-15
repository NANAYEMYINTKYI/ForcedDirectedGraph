import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as d3 from 'd3';
// import linkdata from './../utilities/LinkData.json'
// import nodedata from './../utilities/NodeData.json'
// import pic from './pic.jpg'
import './ForcedDirectedGraph.css'
const ForceDirectedGraph = ({ 
  nodes = linkdata, 
  links = nodedata,
  width = 300,
  height = 400
}) => {
  // Refs
  const svgRef = useRef();
  const simulationRef = useRef();
  const tooltipRef = useRef();
  // State
  const [chargeStrength, setChargeStrength] = useState(300);
  const [linkStrength, setLinkStrength] = useState(1);
  const [centerStrength, setCenterStrength] = useState(0.3);
  const [isPaused, setIsPaused] = useState(false);
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, content: '' });

  // Color scale
  const colorScale = d3.scaleOrdinal()
    .domain([1, 2, 3, 4, 5, 6, 7, 8, 9])
    .range(["#cb6bffff", "#6e4ecdff", "#4594d1ff", "#96cea2ff", "#e6ff6bff", "#cd9a4eff", "#d14545ff", "#676a68ff", "#c8c8c8ff"]);

  // Drag functions
  const dragstarted = useCallback((event, d) => {
    console.log('Drag started:', d.id)
    if (!event.active) simulationRef.current.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
    d3.select(this) // `this` is the node where drag happend
      .select("circle")
      .style("stroke", "red");
  }, []);

  const dragged = useCallback((event, d) => {
    console.log('Dragging:', d.id, event.x, event.y);
    d.fx = event.x;
    d.fy = event.y;
    d3.select(this) // `this` is the node where drag happend
      .select("circle")
      .style("stroke", "red");
  }, []);

  const dragended = useCallback((event, d) => {
    if (!event.active) simulationRef.current.alphaTarget(0);
    d.fx = null;
    d.fy = null;
    d3.select(this) // `this` is the node where drag happend
      .select("circle")
      .style("stroke", "steelblue");
  }, []);

  // Initialize and update graph
  useEffect(() => {
    if (!svgRef.current || !nodes || !links) return;
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous content 
    if (!tooltipRef.current) {
      tooltipRef.current = d3.select("body")
        .append("div")
        .attr("class", "tooltip")
        .style("position", "absolute")
        .style("pointer-events", "none")
        .style("opacity", 0)
        .style("background", "rgba(0,0,0,0.8)")
        .style("color", "#fff")
        .style("padding", "6px 8px")
        .style("border-radius", "4px")
        .style("font-size", "12px")
        .style("z-index", 1000);
    }
    // Create groups
    const g=svg.append("g").attr("class","graph-group");
    const defs = svg.append("defs");

    const zoomHandler = (event) => {
      g.attr("transform", event.transform);
    };
    const zoom = d3.zoom()
      .scaleExtent([0.1, 8]) // Sets min and max zoom levels
      .on("zoom", zoomHandler);
     svg.call(zoom);
     
    const linkGroup = g.append("g").attr("class", "links");
    const nodeGroup = g.append("g").attr("class", "nodes");
    // Create simulation
    const simulation = d3.forceSimulation(nodes)

      .force("link", d3.forceLink(links).id(d => d.id))//.strength(d => d.strength/5))
      .force("charge", d3.forceManyBody().strength(-chargeStrength*2))
      .force("center", d3.forceCenter(width / 2, height / 2).strength(centerStrength))
      .force("collision", d3.forceCollide().radius(d => d.size*4/3))
      .force("y", d3.forceY(height/2))
      .force("x", d3.forceX(width/2))
      .alphaDecay(0.1);
      

//       .force("link", d3.forceLink(links).id(d => d.id).strength(d => d.strength))
//       .force("charge", d3.forceManyBody().strength(-chargeStrength))
//       .force("center", d3.forceCenter(width / 2, height / 2).strength(centerStrength))
//       .force("collision", d3.forceCollide().radius(d => d.size + 5));

    simulationRef.current = simulation;
    // Create links
    const link = linkGroup.selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke", d => colorScale(d.group) || "#999")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .attr("stroke-width", d => Math.sqrt(d.strength) * 2);
  
    // Create nodes
    const node = nodeGroup.selectAll("g")
      .data(nodes)
      .join ("g")
      .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended)
      )
      // node.append("clipPath")
      //   .attr("id", "clip-img")
      //   .append("circle")
      //   .attr("r", 20)
      //   // .attr("cx", 60)
      //   // .attr("cy", 60);
      node.append("clipPath")
        .attr("id", "circle-cliip")
        .append("circle")
        .attr("r", d => d.size)
    // .attr("cx", 60)
    // .attr("cy", 60);

      // node.append("image")
      // // .attr("xlink:href", d => d.image)
      //   .attr("href", "https://avatars.githubusercontent.com/u/104527737?s=400&u=3f0e4f3a5a5f5e2f1e6e8e4f4f4f4f4f4f4f4f&v=4")
      //   .attr("x", -20)    // cx - r
      //   .attr("y", -20)    // cy - r
      //   // .attr("height", d=> d.size)
      //   // .attr("width", d=> d.size)
      //   .attr("width", 40)
      //   .attr("height", 40)
      //   .attr("clip-path", "url(#clip-img)");

      node.append("circle")
        .attr("r", d => d.size)
        .attr("fill", d => colorScale(d.group))
        // .attr("r", 20)
        // .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 2)
        .style("cursor", "pointer")
        .on("mouseenter", (event, d) => {
          tooltipRef.current
            .style("opacity", 1)
            .html(`<strong>${d.id}</strong><br/>Group: ${d.group}<br/>Size: ${d.size}<br/>${d.description}`);
        })
        .on("mousemove", (event) => {
          tooltipRef.current
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY + 10) + "px");
        })
        .on("mouseleave", () => {
          tooltipRef.current.style("opacity", 0);
        });

      node.append("text")
        // .text(d => d.id)
        .attr("font-size", 12)
        .attr("font-weight", "bold")
        .attr("text-anchor", "middle")
        .attr("x", 4)
        .attr("dy", 4)
        .attr("fill", "#333")
        .style("pointer-events", "none")
        .style("text-shadow", "1px 1px 2px rgba(255,255,255,0.8)")
         .attr("clip-path", "url(#circleClip)");

      node.append("foreignObject")
        .attr("x", -40)
        .attr("y", -20)
        .attr("width", 80)   // box width
        .attr("height", 50)  // box height
        .append("xhtml:div")
        .style("font-size", "12px")
        .style("font-weight", "bold")
        .style("text-align", "center")
        .style("color", "#333")
        .style("word-wrap", "break-word")
        .text(d => d.id)

      // node.append("svg:image")
      //   .attr("xlink:href", ahwoo)
      //   // .attr("xlink:href", d => d.image)
      //   // .attr("xlink:href", ahwoo)
      //   .attr("x", d=>(-25))
      //   .attr("y", d=> (-25))
      //   .attr("height", d=> d.size)
      //   .attr("width", d=> d.size)
      //   // .attr("clip-path", `url(#${d.img})`);
      //   .attr("clip-path", `url(#${ahwoo})`);
      //   console.log("where is ahwoo")
    // Update positions on tick
    simulation.on("tick", () => {
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);
      node.attr("transform", d => `translate(${d.x},${d.y})`);

    });

    return () => {
      simulation.stop();
    };
  }, [nodes, links, width, height, chargeStrength, linkStrength, centerStrength, colorScale, dragstarted, dragged, dragended]);
  // [nodes, links, width, height, chargeStrength, linkStrength, centerStrength, colorScale, dragstarted, dragged, dragended, showTooltip, hideTooltip]);

  // Control functions
  const resetSimulation = useCallback(() => {
    nodes.forEach(node => {
      node.fx = null;
      node.fy = null;
    });
    if (simulationRef.current) {
      simulationRef.current.alpha(1).restart();
    }
  }, [nodes]);

  const togglePause = useCallback(() => {
    setIsPaused(prev => {
      const newPaused = !prev;
      if (simulationRef.current) {
        if (newPaused) {
          simulationRef.current.stop();
        } else {
          simulationRef.current.restart();
        }
      }
      return newPaused;
    });
  }, []);

  const handleChargeChange = useCallback((e) => {
    const value = parseInt(e.target.value);
    setChargeStrength(value);
    if (simulationRef.current) {
      simulationRef.current.force("charge", d3.forceManyBody().strength(-value));
      simulationRef.current.alpha(0.3).restart();
    }
  }, []);

  const handleLinkStrengthChange = useCallback((e) => {
    const value = parseFloat(e.target.value);
    setLinkStrength(value);
    if (simulationRef.current) {
      simulationRef.current.force("link", d3.forceLink(links).id(d => d.id).strength(value));
      simulationRef.current.alpha(0.5).restart();
    }
  }, [links]);

  const handleCenterStrengthChange = useCallback((e) => {
    const value = parseFloat(e.target.value);
    setCenterStrength(value);
    if (simulationRef.current) {
      simulationRef.current.force("center", d3.forceCenter(width / 2, height / 2).strength(value));
      simulationRef.current.alpha(0.3).restart();
    }
  }, [width, height]);

  return (
    <div className="force-graph-container">
      {/* Header */}
      {/* <div className="header">
        <h1>🌐 Force-Directed Graph</h1>
        <p className="subtitle">Interactive network visualization with physics simulation</p>
      </div> */}

      {/* Controls */}
      <div className="controls">
        <div className="control-group">
          <label htmlFor="charge-strength">Repulsion: {chargeStrength}</label>
          <input
            type="range"
            id="charge-strength"
            min="10"
            max="300"
            value={chargeStrength}
            onChange={handleChargeChange}
          />
        </div>
        
        <div className="control-group">
          <label htmlFor="link-strength">Link Strength: {linkStrength}</label>
          <input
            type="range"
            id="link-strength"
            min="0.1"
            max="2"
            step="0.1"
            value={linkStrength}
            onChange={handleLinkStrengthChange}
          />
        </div>
        
        <div className="control-group">
          <label htmlFor="center-strength">Centering: {centerStrength}</label>
          <input
            type="range"
            id="center-strength"
            min="0"
            max="1"
            step="0.1"
            value={centerStrength}
            onChange={handleCenterStrengthChange}
          />
        </div>
        
        {/* <button onClick={resetSimulation} className="control-button">
          🔄 Reset
        </button>
        
        <button onClick={togglePause} className="control-button">
          {isPaused ? '▶️ Resume' : '⏸️ Pause'}
        </button> */}
      </div>

      {/* Graph */}
      <div className="graph-container">
        <svg
          ref={svgRef}
          // width={width}
          // height={height}
          viewBox={`0 0 ${width} ${height}`} // Add this line
          className="graph-svg"
        />

        
        {/* Tooltip */}
        {tooltip.visible && (
          <div
            className="tooltip"
            style={{
              position: 'absolute',
              left: tooltip.x,
              top: tooltip.y,
              background: 'rgba(0, 0, 0, 0.8)',
              color: 'white',
              padding: '8px 12px',
              borderRadius: '6px',
              fontSize: '12px',
              pointerEvents: 'none',
              zIndex: 1000
            }} 
            dangerouslySetInnerHTML={{ __html: tooltip.content }}
          />
        )}
      </div>
    </div>
  );
};

export default ForceDirectedGraph;
