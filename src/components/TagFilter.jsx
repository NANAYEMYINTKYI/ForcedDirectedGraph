import React, { useEffect, useState, useMemo, useRef } from "react";
import CountryData from "./TransformDataCountryFunction";
import Select from 'react-select';

export default function TagFilter ({
    processedDatasets = {},
    currentDataset = 'people',
    onFilterChange,
    onTagSelect,
    selectedCountry = '',
    showCounts = true,
    width = 300,
}) {
    const dataset = processedDatasets && processedDatasets[currentDataset];
    const nodes = (dataset && dataset.nodes) || [];
    const links = (dataset && dataset.links) || [];
    const [filterTag, setFilterTag] = useState("");
    const [filterCountry, setFilterCountry]= useState(selectedCountry)
    const [localFilteredData, setLocalFilteredData] = useState({nodes:[], links:[]});
    const prevFilteredData = useRef({nodes: [], links: []});


    // Apply filter when dataset or tag changes
    //-- This extract all the unique tag from nodes in the current Dataset--//
    const allTags = useMemo(() => {
        if (!nodes || nodes.length === 0) return [];
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
        console.log("Sample of link:", links[0]);
        console.log("Source Type:", typeof links[0].source);
        console.log("Source Value:", links[0]?.source)

        let visibleNodes;
        let visibleLinks;

        if (!filterCountry & !filterTag) {
            visibleNodes = nodes;
            visibleLinks = links;
        } else {
            // Find nodes that match the tag (primary nodes)
            const primaryNodes = nodes.filter(node => {
                let tagMatch = true;
                let countryMatch = true;
                if(filterTag){
                    tagMatch = node.tags && node.tags.some(tag => {
                        const cleanTag = tag.replace(/^#/, "").trim().toLowerCase();
                        return cleanTag === filterTag.toLowerCase();
                    });
                }
                if(filterCountry){
                    countryMatch = node.country && node.country.toLowerCase() === filterCountry.toLowerCase()
                }
                return tagMatch && countryMatch;
                // if (!node.tags || node.tags.length === 0) return false;
                // return node.tags.some(tag => {
                //     const cleanTag = tag.replace(/^#/, "").trim().toLowerCase();
                //     return cleanTag === filterTag.toLowerCase();
                // });
            });
            // Find all nodes connected to primary nodes
            const primaryNodeIds = new Set(primaryNodes.map(n => n.id));
            const connectedNodeIds = new Set();
            // Find all links that connected to the primary node
            // Only includes link where both source and target nodes are visible
            links.forEach(link => {
            if (primaryNodeIds.has(link.source)) {
                connectedNodeIds.add(link.target);
            }
            if (primaryNodeIds.has(link.target)) {
                connectedNodeIds.add(link.source);
            }
            });
            // Combine primary nodes + connected nodes
            visibleNodes = nodes.filter(
                node => primaryNodeIds.has(node.id) || connectedNodeIds.has(node.id)
            );
            const visibleNodeIds = new Set(visibleNodes.map((n)=> n.id));
                visibleLinks = ((links || []).filter((links)=> visibleNodeIds.has(links.source)&&visibleNodeIds.has(links.target))
            );
        }
        // const prev = prevFilteredData.current;
        // const hasChanged = checkForChanges(visibleNodes, visibleLinks, prev)
        const result = { 
            nodes: visibleNodes.map(node =>({...node})), 
            links: visibleLinks.map(link =>({
                ...link,
                source: link.source,
                target: link.target
            }))
        };
        setLocalFilteredData({nodes: visibleNodes, links: visibleLinks});
        if(onFilterChange){
            onFilterChange(result);
        }
    }, [processedDatasets, currentDataset, filterTag, onFilterChange]);

    const options = [
        { value: '', label: `All ${showCounts ? `(${(nodes || []).length} nodes, ${(links || []).length} links)` : ''}` },
        ...allTags.map(tag => ({ value: tag, label: tag })),
    ];
    const selectedOption = options.find((options) => options.value === filterTag) || options[0];
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
                        container: (base) => ({...base,width: `${width}px`,}),
                        menu: (base) => ({...base, position: 'relative', zIndex: 1,})
                    }}
                />
            </label>
        </div>
    );
}