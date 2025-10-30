//--- This is where to collect all logic and useState for App.jsx ---//

import { useState, useEffect, useMemo, useCallback } from "react";
import rawData from "../data/Data.json";
import { CountryData } from "../utils/TransformDataCountryFunction.jsx";
import { PeopleData } from "../utils/TransformDataPeopleFunction.jsx";
import { colorScale } from "../utils/CustomData.jsx";

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
    setSelectedTitle(null);
    setSelectedConnection(null);
    setSelectedNode(null);
    setShowNode(null);
    setSelectedRoles(colorScale.domain());
  }, []);

  // Use for handle when filter change
  // const handleFilterChange = useCallback((data) => {
  //   setFilteredData(data);
  //   setSelectedNode(null);
  // }, []);

    // Handle filtered data from TagFilter
    const handleFilterChange = useCallback((data) => {
      console.log('handleFilterChange IN:', {
        nodes: data?.nodes?.length ?? 0,
        links: data?.links?.length ?? 0,
        sampleNode: data?.nodes?.[0]
      });
      if (!data || !Array.isArray(data.nodes) || !Array.isArray(data.links)) {
        console.warn('handleFilterChange: invalid payload, ignoring');
        return;
      }
      // defensive copy to ensure a new reference
      setFilteredData({
        nodes: data.nodes.map(n => ({ ...n })),
        links: data.links.map(l => ({ ...l }))
      });
      setSelectedNode(null);
    }, []);
  
    const handleCountryChange = useCallback((data) => {
    setFilteredData({
      nodes: data.nodes.map(n => ({ ...n })),
      links: data.links.map(l => ({ ...l }))
    });
    setSelectedNode(null);
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
  //Test
  useEffect(() => {
    console.log('filteredData updated (state):', {
      nodes: filteredData.nodes?.length ?? 0,
      links: filteredData.links?.length ?? 0,
      sampleNode: filteredData.nodes?.[0]
    });
  }, [filteredData]);

  // Use for define data in graph
  const graphProps = useMemo(
    () => ({
      datasets,
      currentDataset,
      handleDatasetChange,
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
      datasets,
      currentDataset,
      handleDatasetChange,
      filteredData.nodes,
      filteredData.links,
      selectedNode,
      isPlaying,
      showNode,
      selectedRoles,
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

    setIsPlaying(true)
    setShowNode(null)
    
    if(!isPlaying){
      setYearRange([1999,1999])
    }
  }, [isActive, isPlaying]);
  
  // Reset filter
  const resetFilter = useCallback(() => {
    setYearRange([1999, 2023]);
    // setFilteredData({ nodes: datasets[currentDataset].nodes, links: datasets[currentDataset].links })
    // setFilterTag([''])
    // setFilterCountry([''])
    setSelectedTitle(null)
    setSelectedConnection(null)
    setSelectedNode(null)
    setSelectedRoles(colorScale.domain())
    setShowNode(null)
    setIsPlaying(false)
  }, []);

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
    handleFilterChange,
    handleTitleChange,
    handleConnectionChange,
    toggleToolbar,
    closeDescription,
    handleRangeChange,
    resetFilter,
    handleCountryChange,

    // derived
    FilterData,
    datasets,
    projects,
    connection,
    graphProps,
  };
}