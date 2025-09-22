import { useState, useEffect, useMemo } from "react";

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
  showCounts = true 
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

    // 👇 Apply filtering immediately after processing
    const activeDataset = mergedDatasets[currentDataset];
    if (!activeDataset) return;

    const { nodes, links } = activeDataset;

    let visibleNodes;
    let visibleLinks;

    if (!filterTag) {
      visibleNodes = nodes;
      visibleLinks = links;
    } else {
      const primaryNodes = nodes.filter(node => {
        if (!node.tags || node.tags.length === 0) return false;

        return node.tags.some(tag => {
          const cleanTag = tag.replace(/^#/, "").trim().toLowerCase();
          return cleanTag === filterTag.toLowerCase();
        });
      });

      const primaryNodeIds = new Set(primaryNodes.map(n => n.id));
      const connectedNodeIds = new Set();

      links.forEach(link => {
        if (primaryNodeIds.has(link.source)) {
          connectedNodeIds.add(link.target);
        }
        if (primaryNodeIds.has(link.target)) {
          connectedNodeIds.add(link.source);
        }
      });

      visibleNodes = nodes.filter(node =>
        primaryNodeIds.has(node.id) || connectedNodeIds.has(node.id)
      );

      const visibleNodeTitles = new Set(visibleNodes.map(n => n.id));
      visibleLinks = links.filter(link => {
        return visibleNodeTitles.has(link.source) && visibleNodeTitles.has(link.target);
      });
    }

    const filteredResult = {
      nodes: visibleNodes,
      links: visibleLinks
    };

    setFilteredData(filteredResult);

    if (onFilterChange) {
      onFilterChange(filteredResult);
    }

  }, [datasets, mabData, currentDataset, filterTag, onFilterChange]);

  // Generate unique tags for dropdown
  const allTags = useMemo(() => {
    if (!processedDatasets[currentDataset]) return [];
    
    const tagSet = new Set();
    processedDatasets[currentDataset].nodes.forEach(node => {
      if (node.tags && node.tags.length > 0) {
        node.tags.forEach(tag => {
          if (tag) {
            const cleanTag = tag.replace(/^#/, "").trim();
            if (cleanTag) tagSet.add(cleanTag);
          }
        });
      }
    });
    
    return Array.from(tagSet).sort();
  }, [processedDatasets, currentDataset]);

  // Apply filter when dataset or tag changes
  useEffect(() => {
    if (!processedDatasets[currentDataset]) return;
    
    const { nodes, links } = processedDatasets[currentDataset];
    
    let visibleNodes;
    let visibleLinks;
    
    if (!filterTag) {
      visibleNodes = nodes;
      visibleLinks = links;
    } else {
      // Find nodes that match the tag (primary nodes)
      const primaryNodes = nodes.filter(node => {
        if (!node.tags || node.tags.length === 0) return false;
        
        return node.tags.some(tag => {
          const cleanTag = tag.replace(/^#/, "").trim().toLowerCase();
          return cleanTag === filterTag.toLowerCase();
        });
      });

      // Find all nodes connected to primary nodes
      const primaryNodeIds = new Set(primaryNodes.map(n => n.id));
      const connectedNodeIds = new Set();
      
      links.forEach(link => {
        if (primaryNodeIds.has(link.source)) {
          connectedNodeIds.add(link.target);
        }
        if (primaryNodeIds.has(link.target)) {
          connectedNodeIds.add(link.source);
        }
      });

      // Combine primary nodes + connected nodes
      visibleNodes = nodes.filter(node => 
        primaryNodeIds.has(node.id) || connectedNodeIds.has(node.id)
      );

      // Filter links to only show connections between visible nodes
      const visibleNodeTitles = new Set(visibleNodes.map(n => n.id));
      visibleLinks = links.filter(link => {
        const hasSource = visibleNodeTitles.has(link.source);
        const hasTarget = visibleNodeTitles.has(link.target);
        return hasSource && hasTarget;
      });
    }

    const filteredResult = {
      nodes: visibleNodes,
      links: visibleLinks
    };

    setFilteredData(filteredResult);
    
    // Pass filtered data back to parent
    if (onFilterChange) {
      onFilterChange(filteredResult);
    }
  }, [processedDatasets, currentDataset, filterTag, onFilterChange]);

  // Handle tag filter change
  const handleTagChange = (tag) => {
    setFilterTag(tag);
  };

  // Reset filter when dataset changes
  useEffect(() => {
    setFilterTag("");
  }, [currentDataset]);

  return (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <label>
        Filter by Tag:{" "}
        <select value={filterTag} onChange={(e) => handleTagChange(e.target.value)}>
          <option value="">
            All {showCounts && `(${filteredData.nodes.length} nodes, ${filteredData.links.length} links)`}
          </option>
          {allTags.map(tag => (
            <option key={tag} value={tag}>{tag}</option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default TagManager;