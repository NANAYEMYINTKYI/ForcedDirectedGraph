import React, { useEffect, useState, useMemo, useRef } from "react";
import {CountryData} from "./TransformDataCountryFunction";
import Select from 'react-select';
import { count, index } from "d3";
import { Tag } from "@mui/icons-material";

export default function TagFilter ({
    processedDatasets = {},
    currentDataset = {},
    onFilterChange,
    onTagSelect,
    onCountrySelect,
    showCounts = true,
    width = 300,
}) {
    const dataset = processedDatasets && processedDatasets[currentDataset];
    const nodes = (dataset && dataset.nodes) || [];
    const links = (dataset && dataset.links) || [];

    const countryDataset = processedDatasets['country'];
    const countryNodes = (countryDataset && countryDataset.nodes) || [];

    const [filterTag, setFilterTag] = useState("");
    const [filterCountry, setFilterCountry]= useState("")
    const [localFilteredData, setLocalFilteredData] = useState({nodes:[], links:[]});
    const prevFilteredData = useRef({nodes: [], links: []});

    //-- This extract all the unique tag from nodes in the current Dataset--//
    const allTags = useMemo(() => {
        console.log("MergedNodes:", nodes)
        console.log("MergeLinks:",links)
        // if (!nodes || nodes.length === 0) return [];
        if(!countryNodes|| countryNodes === 0){
            return {country:[], tags:[]};
        }
        console.log("Node in AllTags:",nodes)
        console.log("Links in AllTags:",links)
        // const tagSet = new Set();
        const tagCategories = {
            country: new Set(),
            tags: new Set()
        }
        //--This is country tag date--//
        countryNodes.forEach(node => {
            if (node.group != 18) {
                // console.log("node:", node)
                if(node.id) {
                    const cleanCountryId = node.id.replace(/^#/, "").trim().toLowerCase();
                    tagCategories.country.add(cleanCountryId);
                }
            }
        });
        //--This is award type data--//
        countryNodes.forEach(node => {
            if (node.tags){
            // console.log("node tags:",node.tags)
                node.tags.forEach(tag => {
                if (tag) {
                    const cleanTag = tag.replace(/^#/, "").trim().toLowerCase();
                    if(cleanTag &&!/^\d+$/.test(cleanTag)){
                        if(!tagCategories.country.has(cleanTag)){
                            tagCategories.tags.add(cleanTag);
                        }
                    }
                }
            });
            } 
        })
        console.log("country categories:", tagCategories.country)
        return {
            country: Array.from(tagCategories.country).sort(),
            tags: Array.from(tagCategories.tags).sort()
        };
        // return Array.from(tagCategories.tags).sort();
    }, [nodes]);

    // console.log("ProcessedDatasets nodes:", processedDatasets)
    // console.log("Nodes:",nodes)
    // console.log("All Tags:", allTags)

    // Reset filter when dataset changes
    useEffect(() => {
        setFilterTag("");
        setFilterCountry("");
    }, [currentDataset, setFilterTag, setFilterCountry]);

    useEffect(() => {
        if (!processedDatasets[currentDataset]) return;
        const { nodes, links } = processedDatasets[currentDataset];
        let visibleNodes;
        let visibleLinks;

        if (!filterCountry & !filterTag) {
            visibleNodes = nodes;
            visibleLinks = links;
        } else {
            console.log("Node:",nodes)
            console.log("Links:",links)
            // Find nodes that match the tag (primary nodes)
            const primaryNodes = nodes.filter(node => {
                let tagMatch = true;
                let countryMatch = true;
                if(filterTag){
                    console.log("It's filter Tag")
                    tagMatch = node.id && node.id.toLowerCase() === filterCountry.toLowerCase() || node.tags && node.tags.some(tag => {
                        const cleanTag = tag.replace(/^#/, "").trim().toLowerCase();
                        return cleanTag === filterTag.toLowerCase();
                    });
                }
                // console.log("Check node tags:",node.tags)
                // if(filterCountry){
                //     console.log("it's filter country")
                //     // console.log("Check node tags:",node.tags)
                //     // console.log("Check node country:", node.country)
                //     countryMatch = node.id && node.id.toLowerCase() === filterCountry.toLowerCase()
                //     console.log("countryMatch:",countryMatch)
                // }
                // return tagMatch && countryMatch;
                return tagMatch;
                // if (!node.tags || node.tags.length === 0) return false;
                // return node.tags.some(tag => {
                //     const cleanTag = tag.replace(/^#/, "").trim().toLowerCase();
                //     return cleanTag === filterTag.toLowerCase();
                // });
            });       
            // Find all nodes connected to primary nodes
            const primaryNodeIds = new Set(primaryNodes.map(n => n.id));
            const connectedNodeIds = new Set();

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
        // console.log("Current Filter:", {filterCountry, filterTag})
        // setLocalFilteredData({nodes: visibleNodes, links: visibleLinks});
        if(onFilterChange){
            onFilterChange(result);
        }
    }, [processedDatasets, currentDataset, filterTag ,filterCountry, onFilterChange]);


    const options = [
        { value: '', label: `All ${showCounts ? `(${(nodes || []).length} nodes, ${(links || []).length} links)` : ''}` },
        ...allTags.tags.map(tag => ({ value: tag, label: tag})),
    ];
    const countryOptions = [
        { value: '', label: `All ${showCounts ? `(${(nodes || []).length} nodes, ${(links || []).length} links)` : ''}` },
        ...allTags.country.map(country => ({ value: country, label: country})),
    ];


    // const tagsOptions = [
    //     { value: '', label: `All ${showCounts ? `(${(nodes || []).length} nodes, ${(links || []).length} links)` : ''}` },
    //     ...allTags.tags.map(tag => ({ value: tag, label: tag})),
    // ]
    const selectedOption = options.find((options) => options.value === filterTag) || options[0];
    const selectedCountry = countryOptions.find((options) => options.value === filterTag) || countryOptions[0];
    // const selectedTags = tagsOptions.find((options) => options.value === filterTag) || tagsOptions[0];

   
    const handleChange = (selectedOption)=>{
        const value = selectedOption ? selectedOption.value: "" ;
        setFilterTag(value);
        if(onTagSelect){
            onTagSelect(value);
        }
    }

    const handleCountryChange = (selectedCountry)=>{
        const value = selectedCountry ? selectedCountry.value: "";
        setFilterCountry(value);
        if(onCountrySelect){
            onCountrySelect(value);
        }
    }
        
    // const handleTagChange = (selectedTags)=>{
    //     const value = selectedTags ? selectedTags.value: "";
    //     setFilterTag(value);
    //     if(onTagSelect){
    //         onTagSelect(value);
    //     }
    // }
    if(setFilterCountry){
        console.log("setFilterCountry")
    } else {
        console.log("setFilterTag")
    }

    return (
        <div style={{display:"flex", gap:"1rem", alignItems:"center" }}>
            {setFilterTag ? (<label>
                Filter by Tags
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
            </label>): setFilterCountry ? ( <label>
                Filter by Country
                <Select
                    value={selectedCountry}
                    onChange={handleChange}
                    options={countryOptions}
                    menuIsOpen={true}
                    isSearchable
                    styles={{
                        container: (base) => ({...base,width: `${width}px`,}),
                        menu: (base) => ({...base, position: 'relative', zIndex: 1,})
                    }}
                />
            </label>):null}
        </div>
    );
}