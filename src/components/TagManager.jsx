import React, { useState, useEffect, useMemo } from "react";
import Select from 'react-select';
import TagFilter from "./TagFilter"
// Parse tag arrays from JSON strings
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
  const [filterTag, setFilterTag] = useState("");
  const [processedDatasets, setProcessedDatasets] = useState({});
  const [filteredData, setFilteredData] = useState({ nodes: [], links: [] });

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
        const originalTitle = node.id;
        const normalizedId = normalizeTitle(node.id);
        const tags = parseTagsArray(tagLookup[normalizedId]);

        return {
          ...node,
          id: originalTitle,
          normalizedId: normalizedId,
          title: node.id,
          tags: tags
        };
      });

      const transformedLinks = dataset.links.map(link => ({
        ...link,
        source: link.source,
        target: link.target
      }));

      mergedDatasets[key] = {
        nodes: transformedNodes,
        links: transformedLinks,
        name: dataset.name
      };
    });

    setProcessedDatasets(mergedDatasets);
  }, [datasets, mabData]);
  
  return (
    <TagFilter
    processedDatasets = {processedDatasets}
    currentDataset= {currentDataset}
    onFilterChange= {onFilterChange}
    onTagSelect = {onTagSelect}
    showCount={showCounts}
    width={width}
    />
  );
};

export default TagManager;