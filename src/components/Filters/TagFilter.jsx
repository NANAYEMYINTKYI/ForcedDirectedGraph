import React, { useEffect, useState, useMemo, useRef } from "react";
import {CountryData} from "../../utils/TransformDataCountryFunction";
import Select from 'react-select';
import ListSearch from "../DropDown/ListSearch";
import FilterNodesAndLinks from "../../helper/FilterNodesAndLinks"

const TagFilter=({
    datasets,
    filteredData = {},
    currentDataset = {},
    onFilterChange,
    onCountryChange,
    showCounts = true,
    width = 300,
    filterType = "both"
})=>{
    const dataset = datasets?.[currentDataset] || { nodes: [], links: [] };
    const nodes = filteredData.length ? filteredData.nodes : dataset.nodes;
    const links = dataset.links;
    const countryDataset = datasets['country'];
    const countryNodes = (countryDataset && countryDataset.nodes) || [];

    const [filterTag, setFilterTag] = useState("");
    const [filterCountry, setFilterCountry]= useState("")
   
    //-- This extract all the unique tag from nodes in the current Dataset--//
    const allTags = useMemo(() => {
        // const tagSet = new Set();
        const tagCategories = {
            country: new Set(),
            tags: new Set()
        }
        //--This is country tag date--//
        countryNodes.forEach(node => {
            if (node.group != 18) {
                if(node.id) {
                    tagCategories.country.add(node.id);
                }
            }
        });
        //--This is award type data--//
        countryNodes.forEach(node => {
            if (node.tag){
                const tagtoArray = node.tag
                    .split(/[#,']/) // split #
                    .map(function(item){return item.trim()}) //clean spaces
                    .filter(Boolean); // remove an empty
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
    }, [countryNodes]);

    // Reset filter when dataset changes
    useEffect(() => {
        setFilterTag("");
        setFilterCountry("");
    }, [currentDataset]);
 
    useEffect(() => {
        const result = FilterNodesAndLinks(nodes, countryNodes, links, filterTag, filterCountry);

        if (!filterTag && !filterCountry) {
            onFilterChange && onFilterChange(result);
            onCountryChange && onCountryChange(result);
        } else {
            if (filterTag) {
                onFilterChange(result);
            }
            if (filterCountry) {
                onCountryChange(result);
            }
        }
    }, [datasets, currentDataset, filterTag, filterCountry, onFilterChange, onCountryChange]);

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
    const selectedCountry = countryOptions.find((options) => options.value === filterCountry) || countryOptions[0];

    const handleChange = (selectedOption)=>{
        const value = selectedOption ? selectedOption.value: "" ;
        console.log("TagChanged:",value)
        setFilterTag(value);
        // onFilterSelect(value);
    }

    const handleCountryChange = (selectedCountry)=>{
        const value = selectedCountry ? selectedCountry.value: "";
        console.log("country changed:", value)
        setFilterCountry(value);
        // onCountrySelect(value);
    }

    return (
        <div style={{display:"flex", gap:"1rem", alignItems:"center" }}>
            {(filterType === "tag") && (
                <ListSearch
                    options={options}
                    value={selectedOption}
                    title="Search by Tag"
                    placeholder="Input tag"
                    onFilterChange={handleChange}
                    clearable={false}
                />
            )}
            {(filterType === "country" ) && (
                <ListSearch
                    options={countryOptions}
                    value={selectedCountry}
                    title="Search by Country"
                    placeholder="Input country"
                    onFilterChange={handleCountryChange}
                    clearable={false}
                />
            )}
        </div>
    );
};

export default TagFilter;
