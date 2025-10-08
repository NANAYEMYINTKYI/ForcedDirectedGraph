import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as d3 from 'd3';
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
  nodes,
  links,
  selectnode,
  filterTag,
  width,
  height
}) => {
  // Refs
  const svgRef = useRef();
  const simulationRef = useRef();
  const tooltipRef = useRef();

  // State
  const [chargeStrength] = useState(1000);
  const [linkStrength] = useState(0.1);
  const [centerStrength] = useState(0.3);
  const [tooltip] = useState({ visible: false, x: 0, y: 0, content: '' });

  // Color scale
  const colorScale = d3.scaleOrdinal()
    .domain([1, 2, 3, 4, 5, 6, 7, 8, 9])
    .range(["#cb6bffff", "#6e4ecdff", "#4594d1ff", "#96cea2ff", "#e6ff6bff", "#cd9a4eff", "#d14545ff", "#c8c8c8ff", "#000000ff"]);


  // Drag functions
  const dragstarted = useCallback(function(event, d) {
    if (!event.active ) simulationRef.current
    .alphaTarget(0.01)
    .alpha(1.01)
    .restart();
    d.fx = d.x;
    d.fy = d.y;
  
    // Highlight connected links
    d3.selectAll(".link-line")
      .filter(l => l.source.id === d.id || l.target.id === d.id)
      .attr("stroke", "#FF5c00")
      .attr("stroke-width", 10);
  }, []);

  const dragged = useCallback(function(event, d) {
    d.fx = event.x;
    d.fy = event.y;
  }, []);

  const dragended = useCallback(function(event, d) {
    if (!event.active) simulationRef.current
      .alphaTarget(0.5)
      .alpha(1.01)

    setTimeout(() => {
      simulationRef.current.alphaTarget(0);
    }, 1000);
    d.fx = null;
    d.fy = null;
  
    // Restore connected links to original style
    d3.selectAll(".link-line")
      .filter(l => l.source.id === d.id || l.target.id === d.id)
      .attr("stroke", "#46444dff")
      .attr("stroke-width", d => Math.sqrt(d.strength) * 2);
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
      .scaleExtent([0.01, 20]) // Sets min and max zoom levels
      .on("zoom", zoomHandler);
    svg.call(zoom);
    // set the initial zoom/translate when entering
    const initialTransform = d3.zoomIdentity.translate(750,300).scale(0.06); 
    svg.call(zoom.transform, initialTransform); // apply starting transform
    g.attr("transform", initialTransform);      // also set g’s transform

    function zoomToNode(d) {
      const { width: svgWidth, height: svgHeight } = svg.node().getBoundingClientRect();
      
      const connectedLinks = links.filter(l => l.source === d || l.target === d);
      const connectedNodes = connectedLinks.map(l => l.source === d ? l.target : l.source);
          
      // Calculate average distance to connections
        let avgDistance = 0;
        if (connectedNodes.length > 0) {
          const totalDistance = connectedNodes.reduce((sum, node) => {
            const dx = node.x - d.x;
            const dy = node.y - d.y;
            return sum + Math.sqrt(dx * dx + dy * dy);
          }, 0);
          avgDistance = totalDistance / connectedNodes.length;
        }
        // Scale based on how spread out the connections are
        const targetRadius = 100; // How much space you want to see
        const scale = Math.min(
          Math.max(targetRadius / avgDistance, 0.5),
          3
        );
      const transform = d3.zoomIdentity
        .translate(svgWidth / 2, svgHeight / 2)
        .scale(scale)
        .translate(-d.x, -d.y);
      
      svg.transition()
        .duration(750)
        .call(zoom.transform, transform);
      
      // Step 2: Pull connected nodes closer WHILE zooming
      const attractForce = (alpha) => {
        connectedNodes.forEach(node => {
          const dx = d.x - node.x;
          const dy = d.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy) || 1;
          
          // Pull nodes within a certain radius
          const targetDistance = 200; // Desired distance from center node
          if (distance > targetDistance) {
            const strength = 0.5 * alpha;
            node.vx += (dx / distance) * strength;
            node.vy += (dy / distance) * strength;
          }
        });
      };
  
    simulationRef.current
      .force("tempAttract", attractForce)
      .alphaTarget(0.3)
      .restart();
    
    // Step 3: Remove temporary force after animation
    setTimeout(() => {
      simulationRef.current
        .force("tempAttract", null)
        .alphaTarget(0);
    }, 1500);
  }
    const linkGroup = g.append("g").attr("class", "links");
    const nodeGroup = g.append("g").attr("class", "nodes");

    // Create D3 force simulation
    const simulation = d3.forceSimulation(nodes)
      .force("y", d3.forceY(width))
      .force("x", d3.forceX(height))
      .force("link", d3.forceLink(links).id(d => d.id).distance(10).strength(0.2)) // Attraction
      .force("charge", d3.forceManyBody().strength(-chargeStrength)) // simulate gravity attrction (negative represent repulsion, impact every node)
      .force("center", d3.forceCenter(width / 2, height / 2)) // update new centering force
      .force("collision", d3.forceCollide().radius(d => d.size*4/3)) // update new circle collision // prevent node from overlapping
      .alpha(10)
      .alphaDecay(0.05) 
      // Update positions on tick
      .on("tick", () => {
        link
          .attr("x1", d => d.source.x)
          .attr("y1", d => d.source.y)
          .attr("x2", d => d.target.x)
          .attr("y2", d => d.target.y);
        node.attr("transform", d => `translate(${d.x},${d.y})`);
      });
    simulationRef.current = simulation;
    // Create links
    const link = linkGroup.selectAll("line")

      .data(links)
      .join("line")
      .attr("class", "link-line")
      .attr("stroke", "#46444dff")
      .attr("stroke-opacity", 0.7)
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
        // Set tooltip
        if (d.group === 9) {
          tooltipRef.current
            .style("opacity", 1)
            .html(`<strong>${d.id}</strong><br/> 
              <strong>Year:</strong> ${d.year}<br/> 
              <strong>Location:</strong> ${d.location}<br/> 
              <strong>Description:</strong> ${d.description}<br/> 
              <strong>Tag:</strong> ${d.tag}`);
        } else if (d.positions !== undefined) {
          tooltipRef.current
            .style("opacity", 1)
            .html(`<strong>${d.id}</strong><br/> 
              <strong>Position:</strong> ${d.positions.join(", ")}`);
        } else {
          tooltipRef.current
            .style("opacity", 1)
            .html(`<strong>${d.id}</strong><br/> 
              <strong>Continent:</strong> ${d.continent}`);
        }

        // Move tooltip to mouse position
        tooltipRef.current
          .style("left", (event.pageX + 10) + "px")
          .style("top", (event.pageY + 10) + "px");

        // Highlight connected links
        d3.selectAll(".link-line")
          .filter(l => l.source.id === d.id || l.target.id === d.id)
          .attr("stroke", "#FF5c00")
          .attr("stroke-width", 10);
      })

      // mousemove update position in mousemove
      .on("mousemove", (event) => {
        tooltipRef.current
          .style("left", (event.pageX + 10) + "px")
          .style("top", (event.pageY + 10) + "px");
      })

      .on("mouseleave", (event, d) => {
        tooltipRef.current.style("opacity", 0);
          d3.selectAll(".link-line")
            .filter(l => l.source.id === d.id || l.target.id === d.id)
            .attr("stroke", "#46444dff")
            .attr("stroke-width", l => Math.sqrt(l.strength) * 2);
      })
      .on("click", function(event, d) {
        // Track selected node(s) temporarily
        // let selectedNodes = [];
        let tempSelectedNodes = [d];
        // Zoom to selection
        if (tempSelectedNodes.length === 1) {
          zoomToNode(tempSelectedNodes[0]);
        } else if (tempSelectedNodes.length > 1) {
          zoomToNode(tempSelectedNodes);
        }
        // Clear selection array

        // tempSelectedNodes = [];
      })
      if (selectnode) {
      setTimeout(() => {
        const select = nodes.find(
          n => n.id.toLowerCase().replace(/\s+/g, "_") === 
              selectnode.value.toLowerCase().replace(/\s+/g, "_")
        );
        if (select) {
          // ensure simulation updates positions before zoom
          simulationRef.current.alpha(0.3).restart();

          setTimeout(() => {
            zoomToNode(select);
          }, 300);
        }
      }, 100);
    } else if (filterTag) {
      setTimeout(() => {
        const matchingNode = nodes.find(node => {
          if (!node.tags || node.tags.length === 0) return false;
          return node.tags.some(tag => {
            const cleanTag = tag.replace(/^#/, "").trim().toLowerCase();
            return cleanTag === filterTag.toLowerCase();
          });
        });
        if (matchingNode) {
          // simulationRef.current.alpha(0.3).restart();
          setTimeout(() => {
            zoomToNode(matchingNode);
          }, 300);
        }
      }, 50);
    }

      // Aligh text in node to be center
      node.append("foreignObject")
        .each(function(d) {
          const current = d3.select(this);
          if (d.file) {
            current.attr("y", d.size + 5)
            .style("font-size", "12px")
          } else {
            current.attr("y", -50)
            .style("font-size", d => d.size/4)
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
    return () => {
      simulation.stop();
    };
  }, [nodes, links, width, height, filterTag, chargeStrength, linkStrength, centerStrength, colorScale, dragstarted, dragged, dragended, selectnode]);

  return (
    <div className="force-graph-container">
      {/* Graph */}
      <div className="graph-container">
        <svg
          ref={svgRef}
          width={width}
          height={height}
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