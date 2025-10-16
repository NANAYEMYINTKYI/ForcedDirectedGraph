import React, { useEffect, useState } from "react";
import Select from 'react-select';


export default function TagFilter ({
    processedDatasets = {},
    currentDataset = 'people',
    onFilterChange,
    onTagSelect,
    showCounts = true,
    width = 300,
    // filterTag = "",
    // setFilterTag = () => {},
    // filteredData = {nodes: [], links:[]},
    // onTagSelect,
    // showCounts = true,
    // width = 300
}) {
    const dataset = processedDatasets && processedDatasets(currentDataset);
    const nodes = (dataset && dataset.nodes) || [];
    const links = (dataset && dataset.links) || [];
    const [filterTag, setFilterTag] = useState("");

    // Apply filter when dataset or tag changes
    const allTags = useMemo(() => {
        if (!nodes || node.length === 0) return [];
        const tagSet = new Set();
        nodes.forEach(node => {
            if (node.tags && node.tags.length > 0) {
                node.tags.forEach(tag => {
                if (tag) {
                    const cleanTag = tag.replace(/^#/, "").trim();
                    // Filter out tags that are purely numbers
                    if (cleanTag && !/^\d+$/.test(cleanTag)) {
                    tagSet.add(cleanTag);
                    }
                }
                });
            }
        });
        return Array.from(tagSet).sort();
    }, [nodes]);

    // Reset filter when dataset changes
    useEffect(() => {
        setFilterTag("");
    }, [currentDataset, setFilterTag]);

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
    const options = [
        { value: '', label: `All ${showCounts ? `(${filteredData.nodes.length} nodes, ${filteredData.links.length} links)` : ''}` },
        ...allTags.map(tag => ({ value: tag, label: tag })),
    ];
    const selectedOption = options.find((options) => options.value ==filterTag) || options[0];
    const handleChange = (selectedOption)=>{
        const value = selectedOption ? selectedOption.value: "";
        setFilterTag(value);
        if(onTagSelect){
            onTagSelect(value);
        }
    }
    return (
        <div style={{display:"flex", gap:"1rem", alignItems:"center" }}>
            <label>
                Filter by Tag; (" ")
                <Select
                    value={selectedOption}
                    onChange={handleChange}
                    options={options}
                    menuIsOpen={true}
                    isSearchable
                    styles={{
                        container: (base) => ({
                        ...base,
                        width: `${width}px`,
                        }),
                        menu: (base) => ({
                        ...base,
                        position: 'relative',
                        zIndex: 1,
                        })
                    }}
                />
            </label>
        </div>
    );
}