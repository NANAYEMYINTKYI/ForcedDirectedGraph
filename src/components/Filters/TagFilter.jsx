// This is the component of tag filter

import { useEffect, useMemo } from "react";
import ListSearch from "../DropDown/ListSearch";

const TagFilter = ({
    datasets,
    countryDataset,
    tag,
    setTag,
    title,
    placeholder,
    showCounts = true,
    width = 300,
    filterType
}) => {
    // const dataset = JSON.parse(JSON.stringify(datasets[currentDataset])) || { nodes: [], links: [] };
    const dataset = datasets || { nodes: [], links: [] };
    const nodes = dataset.nodes;
    const links = dataset.links;
    
    // const countryDataset = datasets['country'];
    const countryNodes = (countryDataset && countryDataset.nodes) || [];
   
    //-- This extract all the unique tag from nodes in the current Dataset--//
    const allTags = useMemo(() => {
        if(!countryNodes || countryNodes.length === 0){
            return {country:[], tags:[]};
        }

        const tagCategories = {
            country: new Set(),
            tags: new Set()
        }
        
        //--This extract country tag--//
        countryNodes.forEach(node => {
            if (node.group != 18 && node.id) {
                tagCategories.country.add(node.id);
            }
        });

        //--This extract award type tag--//
        countryNodes.forEach(node => {
            if (node.tag) {
                const tagsArray = node.tag
                    .split(/[#,']/)
                    .map(tag => tag.trim().replace(/[\[\]#'"]/g, "").toLowerCase())
                    .filter(tag => tag && !/^\d+$/.test(tag) && !tagCategories.country.has(tag));

                tagsArray.forEach(tag => tagCategories.tags.add(tag));
            } 
        })
        return {
            country: tagCategories.country,
            tags: tagCategories.tags
        };
    }, [countryNodes]);

    const activeCategories = useMemo(() => {
        if (!nodes || nodes.length === 0) return { country: [], tags: [] };
        
        const presentCategories = {
            country: new Set(),
            tags: new Set()
        }

        nodes.forEach(node => {
            if(node.group === 18 && node.tag) {
                let tagsArray = node.tag
                    .toLowerCase()
                    .replace(/^\[|\]$/g, '')
                    .split(',')
                    .map(tag => tag.trim().replace(/[\[\]#'"]/g,""))
                    .filter(Boolean);

                // Find matching and add each matched tag to present
                tagsArray.forEach(tag => {
                    if (allTags.country.has(tag)) presentCategories.country.add(tag);
                    if (allTags.tags.has(tag)) presentCategories.tags.add(tag);
                });
            }
        });
        return {
            country: Array.from(presentCategories.country).sort(),
            tags: Array.from(presentCategories.tags).sort()
        };
    }, [nodes]);

    // Reset filter when dataset changes
    useEffect(() => {
        setTag("");
    }, [setTag]);

    const createOptions = (items, showCounts, nodes = [], links = []) => [
        {
            value: '',
            label: `All ${showCounts ? `(${nodes.length} nodes, ${links.length} links)` : ''}`,
        },
        ...items.map(item => ({ value: item, label: item.toUpperCase() })),
    ];

    let tagOptions
    if (filterType === "tag"){
        tagOptions = createOptions(activeCategories.tags, showCounts, nodes, links);
    } else if (filterType === "country"){
        tagOptions = createOptions(activeCategories.country, showCounts, nodes, links);
    }

    // Select the current values (defaults to "All")
    const selectedOption = tagOptions.find(opt => opt.value === tag) || tagOptions[0];

    const handleChange = (selectedOption) => {
        const value = selectedOption ? selectedOption.value: "" ;
        setTag (value);
    }

    return (
        <div style = {{display: "flex", gap: "1rem", alignItems: "center" }}>
            <ListSearch
                options = {tagOptions}
                title = {title}
                placeholder = {placeholder}
                onFilterChange = {handleChange}
                value = {selectedOption}
                clearable = {false}
                width = {width}
            />
        </div>
    );
};

export default TagFilter;
