//--- This is where to collect all logic and useState for App.jsx ---//

import { useState, useEffect, useMemo, useCallback } from "react";
import rawData from "../data/Data.json";
import { CountryData } from "../utils/TransformDataCountryFunction.jsx";
import { PeopleData } from "../utils/TransformDataPeopleFunction.jsx";
import { colorScale } from "../utils/CustomData.jsx";
import FilterNodesAndLinks from "../helper/FilterNodesAndLinks"

export default function useAppState() {
  // ----- STATE -----
  const [currentDataset, setCurrentDataset] = useState("people");
  const [yearRange, setYearRange] = useState([1999, 2023]);
  const [filteredData, setFilteredData] = useState({ nodes: [], links: [] });
  const [filterTag, setFilterTag] = useState("");
  const [filterCountry, setFilterCountry] = useState("");
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [selectedConnection, setSelectedConnection] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedRoles, setSelectedRoles] = useState(colorScale.domain());
  const [showNode, setShowNode] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isActive, setIsActive] = useState(true);


  // ----- HANDLERS -----
  // Use for handle when dataset change
  const handleDatasetChange = useCallback((key) => {
    setCurrentDataset(key);
    setFilterTag("")
    setFilterCountry("")
    setSelectedTitle(null);
    setSelectedConnection(null);
    setSelectedNode(null);
    setShowNode(null);
    setSelectedRoles(colorScale.domain());
  }, []);

  // Use for handle when change the search title
  const handleTitleChange = useCallback((data) => {
    setSelectedTitle(data);
    setSelectedConnection(null);
    setSelectedNode(data);
  }, []);
  
  // Use for handle when change the search connection
  const handleConnectionChange = useCallback((data) => {
    setSelectedConnection(data);
    setSelectedTitle(null);
    setSelectedNode(data);
  }, []);

  // Use for handle when toolbar toggle
  const toggleToolbar = () => setIsCollapsed((s) => !s);
  
  // Use for closing Description
  const closeDescription = useCallback(() => {
    setSelectedConnection(null);
    setSelectedTitle(null);
    setSelectedNode(null);
    setShowNode(null);
  }, []);
  
  // Use for handle when change year range
  const handleRangeChange = (event, newValue) => {
    setYearRange(newValue);
    setShowNode(null);
  };

  // Use for handle when change year range
  const handleClick = () => {
    if(isPlaying === true) {
      setIsPlaying(false)
    }
  };
  
  // ----- DERIVED -----
  // Use to filter data when change year
  const FilterData = useMemo(() => {
    const [startYear, endYear] = yearRange;
    return rawData.filter((data) => {
      let dataYear = parseInt(data.Year, 10);
      if (dataYear > 10000) dataYear = dataYear % 10000;
      return dataYear >= startYear && dataYear <= endYear;
    });
  }, [yearRange]);

  // Use for defining datasets
  const datasets = useMemo (
    () => ({
      country: { 
        ...CountryData(FilterData), 
        name: "Social Graph By Country" 
      },
      people: { 
        ...PeopleData(FilterData), 
        name: "Social Graph By People" 
      },
    }),
    [FilterData]
  );

  // Use for listing all project
  const projects = useMemo(
    () =>
      (filteredData.nodes || [])
        .filter((d) => d.group === 18)
        .map((d) => ({ value: d.id, label: d.label })),
    [filteredData.nodes]
  );

  // Use for listing all connection
  const connection = useMemo(
    () =>
      (filteredData.nodes || [])
        .filter((d) => d.group !== 18)
        .map((d) => ({ value: d.id, label: d.label })),
    [filteredData.nodes]
  );

  // Use for define data in graph
  const graphProps = useMemo(
    () => ({
      nodes: filteredData.nodes,
      links: filteredData.links,
      selectnode: selectedNode,
      width: window.innerWidth,
      height: window.innerHeight,
      onPlayingChange: isPlaying,
      onNodeSelect: setShowNode,
      nodeSelect: showNode,
      selectedRoles,
      currentdataset: currentDataset,
      setIsActive: setIsActive,
    }),
    [
      currentDataset,
      filteredData.nodes,
      filteredData.links,
      selectedNode,
      isPlaying,
      selectedRoles,
      showNode
    ]
  );

  // Use to set action when not active
  useEffect(() => {
    if (isActive && isPlaying) {
      setIsPlaying(true)
      return;

    } else if (isActive && !isPlaying) {
      setIsPlaying(false)
      return;
    };

    if (isPlaying) return;

    setFilterTag("")
    setFilterCountry("")
    setSelectedTitle(null)
    setSelectedConnection(null)
    setSelectedNode(null)
    setSelectedRoles(colorScale.domain())
    setShowNode(null)
    setIsPlaying(true)

    if(!isPlaying){
      setIsPlaying(false)
      const timer = setTimeout(() => {
        setIsPlaying(true)
        setYearRange([1999,1999])
      }, 10000);
    return () => clearTimeout(timer);
    }
  }, [isActive, isPlaying]);

  // Reset filter
  const resetFilter = useCallback(() => {
    setYearRange([1999, 2023]);
    setFilterTag("")
    setFilterCountry("")
    setSelectedTitle(null)
    setSelectedConnection(null)
    setSelectedNode(null)
    setSelectedRoles(colorScale.domain())
    setShowNode(null)
    setIsPlaying(false)
  }, []);

  // Use to filter graph nodes and links
  useEffect(() => {
    if (!datasets || !datasets[currentDataset]) return;

    const base = JSON.parse(JSON.stringify(datasets[currentDataset]));
    const nodes = base.nodes || [];
    const links = base.links || [];
    const countryNodes = datasets["country"]?.nodes || [];

    let filtered = { nodes, links };

    // Apply tag filter
    if (filterTag) {
      filtered = FilterNodesAndLinks(filtered.nodes, countryNodes, filtered.links, filterTag);
    }

    // Apply country filter (AND condition)
    if (filterCountry) {
      filtered = FilterNodesAndLinks(filtered.nodes, countryNodes, filtered.links, filterCountry);
    }

    setFilteredData(filtered);
    setSelectedNode(null);
  }, [filterTag, filterCountry, datasets, currentDataset]);

  return {
    // state
    currentDataset,
    setCurrentDataset,
    yearRange,
    setYearRange,
    filteredData,
    setFilteredData,
    filterTag,
    setFilterTag,
    filterCountry,
    setFilterCountry,
    selectedTitle,
    setSelectedTitle,
    selectedConnection,
    setSelectedConnection,
    selectedNode,
    setSelectedNode,
    isCollapsed,
    setIsCollapsed,
    selectedRoles,
    setSelectedRoles,
    showNode,
    setShowNode,
    isPlaying,
    setIsPlaying,
    isActive, 
    setIsActive,

    // handlers
    handleDatasetChange,
    handleTitleChange,
    handleConnectionChange,
    toggleToolbar,
    closeDescription,
    handleRangeChange,
    resetFilter,
    handleClick,

    // derived
    FilterData,
    datasets,
    projects,
    connection,
    graphProps,
  };
}