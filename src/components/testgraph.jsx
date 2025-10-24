import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const DynamicNetworkGraph = ({ nodes, links }) => {
  const svgRef = useRef();
  const width = 800;
  const height = 600;

  useEffect(() => {
    if (!nodes || !links) return;

    const svg = d3.select(svgRef.current);

    // Create simulation
    const simulation = d3
      .forceSimulation()
      .force("link", d3.forceLink().id(d => d.id).distance(100))
      .force("charge", d3.forceManyBody().strength(-200))
      .force("center", d3.forceCenter(width / 2, height / 2));

    // LINKS
    const linkSelection = svg.selectAll("line").data(links, d => d.source.id + "-" + d.target.id);
    linkSelection.exit().transition().duration(300).style("opacity", 0).remove();
    const linkEnter = linkSelection
      .enter()
      .append("line")
      .attr("stroke-width", 2)
      .style("opacity", 0);
    linkEnter.transition().duration(300).style("opacity", 1);
    const link = linkEnter.merge(linkSelection);

    // NODES
    const nodeSelection = svg.selectAll("circle").data(nodes, d => d.id);
    nodeSelection.exit().transition().duration(300).attr("r", 0).remove();
    const nodeEnter = nodeSelection
      .enter()
      .append("circle")
      .attr("r", 0)
      .attr("fill", "steelblue")
      .call(
        d3.drag()
          .on("start", (event, d) => {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          })
          .on("drag", (event, d) => {
            d.fx = event.x;
            d.fy = event.y;
          })
          .on("end", (event, d) => {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          })
      );
    nodeEnter.transition().duration(300).attr("r", 10);
    const node = nodeEnter.merge(nodeSelection);

    // Start simulation
    simulation.nodes(nodes).on("tick", () => {
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      node.attr("cx", d => d.x).attr("cy", d => d.y);
    });
    simulation.force("link").links(links);
    simulation.alpha(0.5).restart();

    // Clean up on unmount
    return () => simulation.stop();
  }, [nodes, links]);

  return <svg ref={svgRef} width={width} height={height}></svg>;
};

export default DynamicNetworkGraph;
