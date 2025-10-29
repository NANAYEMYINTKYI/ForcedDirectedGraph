import React, { useEffect, useState, useMemo, useRef } from "react";
import {CountryData} from "../../utils/TransformDataCountryFunction";
import Select from 'react-select';
import ListSearch from "../DropDown/ListSearch";

const TagFilter=({
    datasets,
    // datasets = {},
    currentDataset = {},
    onFilterChange,
    onCountryChange,
    onFilterSelect,
    onCountrySelect,
    showCounts = true,
    width = 300,
    filterType = "both"
})=>{
    const dataset = datasets && datasets[currentDataset];
    // const nodes = (dataset && dataset.nodes) || [];
    const nodes = useMemo(() => {
        return (dataset && dataset.nodes) || [];
    }, [dataset]);
    const links = useMemo(() => {
        return (dataset && dataset.links) || [];
    }, [dataset]);

    const countryDataset = datasets['country'];
    const countryNodes = (countryDataset && countryDataset.nodes) || [];

    const [filterTag, setFilterTag] = useState("");
    const [filterCountry, setFilterCountry]= useState("")
   
    //-- This extract all the unique tag from nodes in the current Dataset--//
    const allTags = useMemo(() => {
        // console.log("MergedNodes:", nodes)
        // console.log("MergeLinks:",links)
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
            if (node.tag){
            // console.log("type of nodetags:", typeof(node.tag))
            // console.log("node tags:",node.tag)
            const tagtoArray =  node.tag
            .split(/[#,']/) // split #
            .map(function(item){return item.trim()}) //clean spaces
            .filter(Boolean); // remove an empty
            console.log("type of typeofArray:", typeof(tagtoArray))
            tagtoArray.forEach(tag => {
                if (tag) {
                    const cleanTag = tag.replace(/[\[\]#'"]/g,"").trim().toLowerCase();
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
    }, [nodes,links,countryNodes]);

    // console.log("datasets nodes:", datasets)
    // console.log("Nodes:",nodes)
    // console.log("All Tags:", allTags)

    // Reset filter when dataset changes
    useEffect(() => {
        setFilterTag("");
        setFilterCountry("");
    }, [currentDataset, setFilterTag, setFilterCountry]);
 
    useEffect(() => {
        if (!datasets[currentDataset]) return;
        const { nodes = [], links = [] } = datasets[currentDataset];

        // Normalize tags for all nodes
        const normalizedNodes = nodes.map(node => {
            let tagsArr = [];
            if (Array.isArray(node.tags)) {
                tagsArr = node.tags.map(tag => tag.toLowerCase());
            } else if (typeof node.tag === 'string') {
                tagsArr = node.tag
                    .split(/[#,']/)
                    .map(item => item.trim().toLowerCase())
                    .filter(Boolean);
            }
            return { ...node, tags: tagsArr };
        });

        let visibleNodes = [];
        let visibleLinks = [];

        if (!filterTag && !filterCountry) {
            visibleNodes = normalizedNodes.slice();
            visibleLinks = links.slice();
        } else if (filterTag) {
            // Filter by tag
            const primaryNodes = normalizedNodes.filter(node =>
                node.tags && node.tags.some(tag => tag === filterTag.toLowerCase())
            );
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

            visibleNodes = normalizedNodes.filter(
                node => primaryNodeIds.has(node.id) || connectedNodeIds.has(node.id)
            );
            const visibleNodeIds = new Set(visibleNodes.map(n => n.id));
            visibleLinks = (links || []).filter(
                link => visibleNodeIds.has(link.source) && visibleNodeIds.has(link.target)
            );
        } else if (filterCountry) {
            // Filter by country (similar logic, adapt as needed)
            const primaryNodes = normalizedNodes.filter(node =>
                node.id && node.id.toLowerCase() === filterCountry.toLowerCase()
            );
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

            visibleNodes = normalizedNodes.filter(
                node => primaryNodeIds.has(node.id) || connectedNodeIds.has(node.id)
            );
            const visibleNodeIds = new Set(visibleNodes.map(n => n.id));
            visibleLinks = (links || []).filter(
                link => visibleNodeIds.has(link.source) && visibleNodeIds.has(link.target)
            );
        }

        // ensure fallback to arrays
        visibleNodes = Array.isArray(visibleNodes) ? visibleNodes : [];
        visibleLinks = Array.isArray(visibleLinks) ? visibleLinks : [];

        const result = {
            nodes: visibleNodes.map(node => ({ ...node })),
            links: visibleLinks.map(link => ({ ...link, source: link.source, target: link.target }))
        };

        console.log('TagFilter emitting result:', {
          filterTag, filterCountry,
          nodes: result.nodes.length,
          links: result.links.length,
          sampleNode: result.nodes[0]
        });

       // emit according to which callbacks are present
        if (!filterTag && !filterCountry) {
            onFilterChange && onFilterChange(result);
            onCountryChange && onCountryChange(result);
        } else {
            if (filterTag) onFilterChange && onFilterChange(result);
            if (filterCountry) onCountryChange && onCountryChange(result);
        }
    }, [datasets, currentDataset, filterTag ,filterCountry, onFilterChange, onCountryChange]);

    // const options = [
    //     {
    //         value: "",
    //         label: `All ${showCounts ? `($node.length) nodes, ${links.length} links)` : ""}`,
    //     },
    //     ...allTags.tags.map(function(tag) {return{value:tag, label:tag.toUpperCase()}})
    // ]

    // const countryOptions = [
    //     {
    //         value: "",
    //         label: `All ${showCounts ? `($node.length) nodes, ${links.length} links)` : ""}`,
    //     },
    //     ...allTags.country.map(country=>({value: country, label:country.toUpperCase()}))
    // ]

    // useEffect(()=> {
    //     if(onFilterChange){
    //         onFilterChange(
    //             {filterTag,nodes,links}
    //         )
    //     }
    //     if(onCountryChange){
    //         onCountryChange(
    //             {filterCountry,nodes,links}
    //         )
    //     }
    // }, [filterTag, filterCountry]);

    // console.log("Rendering component")
    // return <div>debug</div>
//     return {
//     nodes,
//     links,
//     countryNodes,
//     options,
//     countryOptions,
//     filterTag,
//     filterCountry,
//     setFilterTag,
//     setFilterCountry,
//     };
// }
    const options = [
        { value: '', 
            label: `All ${showCounts ? `(${(nodes || []).length} nodes, ${(links || []).length} links)` : ''}` },
        ...allTags.tags.map(tag => ({ value: tag, label: tag.toUpperCase()})),
    ];
    const countryOptions = [
        { value: '', label: `All ${showCounts ? `(${(nodes || []).length} nodes, ${(links || []).length} links)` : ''}` },
        ...allTags.country.map(country => ({ value: country, label: country.toUpperCase()})),
    ];

    const selectedOption = options.find((options) => options.value === filterTag) || options[0];
    const selectedCountry = countryOptions.find((options) => options.value === filterTag) || countryOptions[0];
    // const selectedTags = tagsOptions.find((options) => options.value === filterTag) || tagsOptions[0];

   
    const handleChange = (selectedOption)=>{
        const value = selectedOption ? selectedOption.value: "" ;
        console.log("TagChanged:",value)
        setFilterTag(value);
        if(onFilterSelect){
            console.log("calling tags with:", value)
            onFilterSelect(value);
        }
    }

    const handleCountryChange = (selectedCountry)=>{
        const value = selectedCountry ? selectedCountry.value: "";
        console.log("country changed:", value)
        setFilterCountry(value);
        if(onCountrySelect){
            console.log("calling contry with:", value)
            onCountrySelect(value);
        } else {
            console.log("Oncoutnry is not defined")
        }
    }

    return (
        <div style={{display:"flex", gap:"1rem", alignItems:"center" }}>
            {(filterType === "tag") && (
                <label>
                {/* <Select
                    value={selectedOption}
                    onChange={handleChange}
                    options={options}
                    menuIsOpen={true}
                    isSearchable
                    styles={{
                        container: (base) => ({...base,width: `${width}px`,}),
                        menu: (base) => ({...base, position: 'relative', zIndex: 1,})
                    }}
                /> */}
                <ListSearch
                    options={options}
                    title="Search by Tag"
                    placeholder="Input tag"
                    // onFilterChange={(selected) => setFilterTag(selected?.value || "")}
                    onFilterChange={(selected) => {
                        const value = selected?.value || "";
                        setFilterTag(value);
                        if(onFilterSelect) {
                            onFilterSelect(value);
                        }
                    }}
                    value={filterTag}
                    clearable={false}
                />
                </label>
            )}
            {(filterType === "country" ) && (
                <label>
                {/* Filter by Country */}
                {/* <Select
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    options={countryOptions}
                    menuIsOpen={true}
                    isSearchable
                    styles={{
                        container: (base) => ({...base,width: `${width}px`,}),
                        menu: (base) => ({...base, position: 'relative', zIndex: 1,})
                    }}
                /> */}
                <ListSearch
                    value={selectedCountry}
                    options={countryOptions}
                    title="Search by Country"
                    placeholder="Input country"
                    // onFilterChange={(selected) => setFilterCountry(selected?.value || "")}
                    onFilterChange={(selectedCountry) => {
                        const value = selectedCountry?.value || "";
                        setFilterCountry(value);
                        if(onCountrySelect) {
                            onCountrySelect(value);
                        }
                    }}
                    clearable={false}
                />
                </label>
            )}
        </div>
    );
};

export default TagFilter;
// export default TagFilter;