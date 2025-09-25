import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as d3 from 'd3';
// import linkdata from './../utilities/LinkData.json'
// import nodedata from './../utilities/NodeData.json'
import './ForcedDirectedGraph.css'

// Import all images from a folder
const imageslist = import.meta.glob('./../data/image/*.{png,jpg,jpeg,svg}', { eager: true });

const image = {};
Object.keys(imageslist).forEach((path) => {
  const fileName = path.split('/').pop();
  image[fileName] = imageslist[path].default || imageslist[path];
});

// this is forced-directed graph component
const ForceDirectedGraph = ({ 
  datasets,
  currentDataset,
  handleDatasetChange,
  nodes,
  links,
  width,
  height
}) => {
  // Refs
  const svgRef = useRef();
  const simulationRef = useRef();
  const tooltipRef = useRef();
  // State
  const [chargeStrength, setChargeStrength] = useState(700);
  const [linkStrength, setLinkStrength] = useState(0.01);
  const [centerStrength, setCenterStrength] = useState(0.3);
  const [tooltip] = useState({ visible: false, x: 0, y: 0, content: '' });

  // Color scale
  const colorScale = d3.scaleOrdinal()
    .domain([1, 2, 3, 4, 5, 6, 7, 8, 9])
    .range(["#cb6bffff", "#6e4ecdff", "#4594d1ff", "#96cea2ff", "#e6ff6bff", "#cd9a4eff", "#d14545ff", "#c8c8c8ff", "#000000ff"]);

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

  
  // Initialize and update graph when dependent
  useEffect(() => {
    const svg = d3.select(svgRef.current); // select the current node and link into svg 
    svg.selectAll("*").remove(); // Clear previous content 
    // tooltip appear by checking current tooltip 
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
    // set zoom behavior
    const zoomHandler = (event) => {
      g.attr("transform", event.transform);
    };
    const zoom = d3.zoom()
      .scaleExtent([0.01, 30]) // Sets min and max zoom levels
      .on("zoom", zoomHandler);
    svg.call(zoom);

    // set the initial zoom/translate when entering
    const initialTransform = d3.zoomIdentity.translate(900,425).scale(0.2); 

    svg.call(zoom.transform, initialTransform); // apply starting transform
    g.attr("transform", initialTransform);      // also set g’s transform

    const linkGroup = g.append("g").attr("class", "links");
    const nodeGroup = g.append("g").attr("class", "nodes");
    // Create D3 force simulation
    const simulation = d3.forceSimulation(nodes)
      .force("y", d3.forceY(1048/2))
      .force("x", d3.forceX(705/2))
      .force("link", d3.forceLink(links).id(d => d.id).distance(10).strength(0.2)) // Attraction
      // .force("charge", d3.forceManyBody().strength(chargeStrength)) 
      .force("charge", d3.forceManyBody().strength(-chargeStrength)) // simulate gravity attrction // negativre represent repulsion // impact every node
      .force("center", d3.forceCenter(width / 2, height / 2)) // update new centering force
      .force("collision", d3.forceCollide().radius(d => d.size*4/3)) // update new circle collision // prevent node from overlapping
      .alpha(3)
      .alphaDecay(0.05) 

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

      // Set up clipPath
      node.append("clipPath")
        .attr("id", d => `circle-clip-${d.size}`)  // unique id per node
        .append("circle")
        .attr("r", d => d.size)

      // create circle
      node.append("circle")
        .attr("r", d => d.size)
        .attr("fill", d => colorScale(d.group))
        // .attr("r", 20)
        // .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 2)
        .style("cursor", "pointer")
      
      node.each(function(d) {
        const current = d3.select(this);
        if (d.file) {
          // If image exists, append image
          current.append("image")
          .attr("href", d => image[d.file])
          .attr("x", d => -d.size*1.5)
          .attr("y", d => -d.size*1.5)
          .attr("width", d => d.size*3)
          .attr("height", d => d.size*3)
          .attr("clip-path", d => `url(#circle-clip-${d.size})`)
          .style("cursor", "pointer");
        } else {
          // Otherwise, append a colored circle
          current.append("circle")
          .attr("r", d => d.size)
          .attr("fill", d => colorScale(d.group))
          .attr("stroke", "steelblue")
          .attr("stroke-width", 2)
          .style("cursor", "pointer");
        }
      })
        .on("mouseenter", (event, d) => {
          // tootip reference and design 
          tooltipRef.current
          // Two conditions
          if (d.group === 9) {
            tooltipRef.current
              .style("opacity", 1)
              .html(`
                <strong>${d.id}</strong><br/>
                Year: ${d.year}<br/>
                Location: ${d.location}<br/>
                Description: ${d.description}<br/>
                Tag: ${d.tag}
              `);
          } else {
            tooltipRef.current
              .style("opacity", 1)
              .html(`
                <strong>${d.id}</strong>
              `);
          }
            // .style("opacity", 1)
            // .html(`<strong>${d.id}</strong><br/>Group: ${d.group}<br/>Size: ${d.size}<br/>${d.description}`);
        })
        // mousemove update position in mousemove
        .on("mousemove", (event) => {
          tooltipRef.current
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY + 10) + "px");
        })
        .on("mouseleave", () => {
          tooltipRef.current.style("opacity", 0);
        });

      // Append text into node
      // node.append("text")
      //   // .text(d => d.id)
      //   .attr("font-size", 12)
      //   .attr("font-weight", "bold")
      //   .attr("text-anchor", "middle")
      //   .attr("x", 4)
      //   .attr("dy", 4)
      //   .attr("fill", "#333")
      //   .style("pointer-events", "none")
      //   .style("text-shadow", "1px 1px 2px rgba(255,255,255,0.8)")
      //    .attr("clip-path", "url(#circleClip)");

        // Aligh text in node to be center
      node.append("foreignObject")
        .each(function(d) {
          const current = d3.select(this);
          if (d.file) {
            current.attr("y", d.size + 5)
            .style("font-size", "12px")
          } else {
            current.attr("y", -50)
            .style("font-size", "8px")
          }})
        .attr("x", d => -d.size*1)
        .attr("width", d => d.size*2)   // box width
        .attr("height", 100)  // box height
        .append("xhtml:div")
        .style("display", "flex")
        .style("flex-direction", "column")
        .style("justify-content", d => d.file ? "flex-start" : "center")
        .style("width", "100%")
        .style("height", "100%")
        .style("font-weight", "bold")
        .style("text-align", "center")
        .style("color", "#333")
        .style("word-wrap", "break-word")
        .text(d => d.id)
        
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

  // Handle repulsion
  const handleChargeChange = useCallback((e) => {
    const value = parseInt(e.target.value);
    setChargeStrength(value);
    if (simulationRef.current) {
      simulationRef.current.force("charge", d3.forceManyBody().strength(-value));
      simulationRef.current.alpha(0.3).restart();
    }
  }, []);
  // handle link strength
  const handleLinkStrengthChange = useCallback((e) => {
    const value = parseFloat(e.target.value);
    setLinkStrength(value);
    if (simulationRef.current) {
      simulationRef.current.force("link", d3.forceLink(links).id(d => d.id).strength(-value));
      simulationRef.current.alpha(0.5).restart();
    }
  }, [links]);
  // handle node center change
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
      <div className="controls">
        <div className="control-group">
          <label htmlFor="charge-strength">Repulsion: {chargeStrength}</label>
          <input
            type="range"
            id="charge-strength"
            min="10"
            max="500"
            value={chargeStrength}
            onChange={handleChargeChange}
          />
        </div>

        <div className="control-group">
          <label htmlFor="link-strength">Attraction: {linkStrength}</label>
          <input
            type="range"
            id="link-strength"
            min="0.01"
            max="20"
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
            max="1000"
            step="0.1"
            value={centerStrength}
            onChange={handleCenterStrengthChange}
          />
        </div>
      </div>

      {/* Graph */}
      <div className="graph-container">
        <svg
          ref={svgRef}
          width={width}
          height={height}
          // viewBox={`0 0 ${width} ${height}`} 
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

export default React.memo(ForceDirectedGraph);
