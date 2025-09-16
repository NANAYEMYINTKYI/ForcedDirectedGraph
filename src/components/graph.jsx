// This used for maping node and link not append it in to G
import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import "./ForcedDirectedGraph.css";

/**
 * ForceDirectedGraph
 * @param {Array} nodes - Array of node objects with at least { id }
 * @param {Array} links - Array of link objects with { source, target }
 * @param {number} width - SVG width
 * @param {number} height - SVG height
 * @param {number} batchSize - Number of nodes added per step
 * @param {number} intervalMs - Delay between batches in milliseconds
 */
const ForceDirectedGraph = ({
  nodes,
  links,
  width = window.innerWidth,
  height = window.innerHeight,
  batchSize = 5,
  intervalMs = 250
}) => {
  const svgRef = useRef();
  const simulationRef = useRef();
  const [visible, setVisible] = useState({ nodes: [], links: [] });

  // Helper: map links to actual node references
  const mapLinks = (nodesSubset, allLinks) => {
    const nodeById = new Map(nodesSubset.map((n) => [n.id, n]));
    return allLinks
      .filter(
        (l) => nodeById.has(l.source) && nodeById.has(l.target)
      )
      .map((l) => ({
        ...l,
        source: nodeById.get(l.source),
        target: nodeById.get(l.target)
      }));
  };

  // Progressive reveal of nodes and links
  useEffect(() => {
    if (!nodes || !links) return;
    let i = 0;
    const timer = setInterval(() => {
      i += batchSize;
      const currentNodes = nodes.slice(0, i);
      const currentLinks = mapLinks(currentNodes, links);
      setVisible({ nodes: currentNodes, links: currentLinks });

      if (i >= nodes.length) {
        clearInterval(timer);
      }
    }, intervalMs);

    return () => clearInterval(timer);
  }, [nodes, links, batchSize, intervalMs]);

  // Render graph whenever visible data changes
  useEffect(() => {
    const { nodes: visNodes, links: visLinks } = visible;
    if (!svgRef.current || visNodes.length === 0) return;

    // Clear old content
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    // Main group for zoom/pan
    const g = svg.append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);
    // Zoom behavior
    svg.call(
      d3.zoom().on("zoom", (event) => g.attr("transform", event.transform))
    );

    // Links
    const link = g
      .append("g")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(visLinks)
      .join("line");

    // Nodes
    const node = g
      .append("g")
      .selectAll("circle")
      .data(visNodes)
      .join("circle")
      .attr("r", 15)
      .attr("fill", "steelblue")
      .style("cursor", "pointer")
      .call(
        d3.drag()
          .on("start", (event, d) => {
            if (!event.active) simulationRef.current.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          })
          .on("drag", (event, d) => {
            d.fx = event.x;
            d.fy = event.y;
          })
          .on("end", (event, d) => {
            if (!event.active) simulationRef.current.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          })
      );

    // Simulation
    const simulation = d3
      .forceSimulation(visNodes)
      .force("link", d3.forceLink(visLinks).id((d) => d.id).distance(100))
      .force("charge", d3.forceManyBody().strength(-200))
      .force("center", d3.forceCenter(width / 2, height / 2));

    simulationRef.current = simulation;

    simulation.on("tick", () => {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
    });

    return () => simulation.stop();
  }, [visible, width, height]);

  return <svg ref={svgRef} width={width} height={height}></svg>;
};

export default ForceDirectedGraph;
