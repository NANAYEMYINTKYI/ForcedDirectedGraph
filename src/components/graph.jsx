import React, { useEffect, useRef,useCallback } from 'react';
import * as d3 from 'd3';

import linkdata from '../data/linkdata.json';
import nodedata from '../data/nodedata.json';
import './ForcedDirectedGraph.css';

const Graph = () => {
  const svgRef = useRef();
  const simulationRef = useRef();
  
  const width = 928;
  const height = 600;
  const color = d3.scaleOrdinal(d3.schemeCategory10);

  // Prepare data - create copies to avoid mutating original data
  const links = linkdata.links.map(d => ({ ...d }));
  const nodes = nodedata.nodes.map(d => ({ ...d }));

  // Drag functions
  const dragstarted = useCallback((event) => {
    if (!event.active) simulationRef.current.alphaTarget(0.3).restart();
    event.subject.fx = event.subject.x;
    event.subject.fy = event.subject.y;
  }, []);

  const dragged = useCallback((event) => {
    event.subject.fx = event.x;
    event.subject.fy = event.y;
  }, []);

  const dragended = useCallback((event) => {
    if (!event.active) simulationRef.current.alphaTarget(0);
    event.subject.fx = null;
    event.subject.fy = null;
  }, []);

  // Tick function
  const ticked = useCallback(() => {
    const svg = d3.select(svgRef.current);
    
    svg.selectAll('.link')
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);

    svg.selectAll('.node')
      .attr("cx", d => d.x)
      .attr("cy", d => d.y);
  }, []);

  useEffect(() => {
    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    // Clear any existing content
    svg.selectAll("*").remove();

    // Create simulation
    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id))
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(width / 2, height / 2))
      .on("tick", ticked);

    // Store simulation reference for drag handlers
    simulationRef.current = simulation;

    // Add a line for each link
    const link = svg.append("g")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .selectAll(".link")
      .data(links)
      .join("line")
      .attr("class", "link")
      .attr("stroke-width", d => Math.sqrt(d.value));

    // Add a circle for each node
    const node = svg.append("g")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
      .selectAll(".node")
      .data(nodes)
      .join("circle")
      .attr("class", "node")
      .attr("r", 5)
      .attr("fill", d => color(d.group));

    // Add titles to nodes
    node.append("title")
      .text(d => d.id);

    // Add drag behavior
    node.call(d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended));

    // Cleanup function to stop simulation when component unmounts
    return () => {
      if (simulationRef.current) {
        simulationRef.current.stop();
      }
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="force-directed-graph">
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default Graph;