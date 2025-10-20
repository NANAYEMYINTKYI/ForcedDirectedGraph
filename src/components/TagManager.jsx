//-- This feature is used to merge Tag data with the node and link in network graph--//
import React, { useState, useEffect, useMemo } from "react";
import Select from 'react-select';
import { CountryData } from "./TransformDataCountryFunction";
import TagFilter from "./TagFilter"
// Parse tag arrays from JSON strings
// Converts various tag into a consistencty array//
const parseTagsArray = (tagData) => {
  if (!tagData) return [];
  if (Array.isArray(tagData)) return tagData;
  if (typeof tagData === 'string') {
    try {
      // Parse JSON array strings like "['#Germany', '#2018']"
      const parsed = JSON.parse(tagData.replace(/'/g, '"'));
      return Array.isArray(parsed) ? parsed : [parsed];
    } catch {
      return [tagData];
    }
  }
  
  return [String(tagData)];
};
//Standard title for consistency match
const normalizeTitle = (title) => {
  if (!title) return ""; // handle null or undefined
  return String(title).trim().toLowerCase().replace(/\s+/g, "_");
};
const TagManager = ({ 
  datasets, 
  currentDataset, 
  mabData, 
  onFilterChange,
  onTagSelect,
  showCounts = true,
  width = '300'
}) => {
  // const [filterTag, setFilterTag] = useState("");
  const [processedDatasets, setProcessedDatasets] = useState({});
  // const [filteredData, setFilteredData] = useState({ nodes: [], links: [] });
  useEffect(() => {
    if (!mabData || !datasets) return;
    // Build tag lookup from mabData
    const tagLookup = {};
    mabData.forEach(item => {
      const normalizedTitle = normalizeTitle(item.Title);
      tagLookup[normalizedTitle] = item.Tag;
    });

    const mergedDatasets = {};

    Object.keys(datasets).forEach(key => {
      const dataset = datasets[key];
      const transformedNodes = dataset.nodes.map(node => {
        const originalTitle = node.id; // Keep node ID as the priginal title
        const normalizedId = normalizeTitle(node.id); // Add normalixed for internal matching
        const tags = parseTagsArray(tagLookup[normalizedId]); // Look up and parsed tag from NormalizedID
        // Attach parsed  tag array to each nodes
        return {
          ...node,
          id: originalTitle,
          normalizedId: normalizedId,
          title: node.id,
          tags: tags
        };
      });
      // Passed it through links properties with unchanged
      const transformedLinks = dataset.links.map(link => ({
        ...link,
        source: link.source,
        target: link.target
      }));
      // The merged data set for tag and node and link are store in processed dataset 
      mergedDatasets[key] = {
        nodes: transformedNodes,
        links: transformedLinks,
        name: dataset.name
      }; 
      // allNodes.push(...transformedNodes);
      // allLinks.push(...transformedLinksL);
    });

    setProcessedDatasets(mergedDatasets);
  // }, [nodes, links])
  }, [datasets, mabData])
  
  // Log what's being passed to TagFilter
  console.log('Rendering TagFilter with:', {
    currentDataset,
    // datasetKeys: Object.keys(processedDatasets),
    // hasCurrentDataset: Boolean(processedDatasets[currentDataset]),
    // currentDatasetStats: processedDatasets[currentDataset] ? {
    //   nodes: processedDatasets[currentDataset].nodes.length,
    //   links: processedDatasets[currentDataset].links.length
    // } : null
  });

  return (
    <TagFilter
    processedDatasets = {processedDatasets}
    currentDataset= {currentDataset}
    onFilterChange= {onFilterChange}
    onTagSelect = {onTagSelect}
    showCounts={showCounts}
    width={width}
    />
  );
};

export default TagManager;