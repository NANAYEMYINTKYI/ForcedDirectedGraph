import { useState, useEffect, useMemo, useCallback } from "react";
import rawData from "../data/Data.json";
import { CountryData } from "../utils/TransformDataCountryFunction.jsx";
import { PeopleData } from "../utils/TransformDataPeopleFunction.jsx";
import { colorScale } from "../utils/CustomData.jsx";

export default function useAppState() {
  // ...existing code...
  const [yearRange, setYearRange] = useState([1999, 2023]);
  const [filteredData, setFilteredData] = useState({ nodes: [], links: [] });
  const [filterTag, setFilterTag] = useState("");
  const [filterCountry, setFilterCountry] = useState("");
  const [currentDataset, setCurrentDataset] = useState("people");
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [selectedConnection, setselectedConnection] = useState(null);
  const [selectedNode, setselectedNode] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showNode, setShowNode] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [time, setTime] = useState(false);
  const [selectedRoles, setSelectedRoles] = useState(colorScale.domain());

  // useEffect(() => {
  //   if (isClicked) {
  //     setTime(0);
  //     setIsClicked(false)
  //   }

  //   const intervalId = setInterval(() => {
  //     setTime((prevTime) => {
  //       console.log(prevTime)
  //       console.log(isPlaying)
  //       if (prevTime === 100) {
  //           setIsPlaying(true);
  //         if (!isPlaying) {
  //           setYearRange([1999, 1999]);
  //         } else if (yearRange == [2023, 2023]) {
  //             setTime(0);
  //         }
  //         return prevTime;
  //       }
  //       return prevTime + 1;
  //     });
  //   }, 10);

  //   return () => clearInterval(intervalId);
  // }, [isClicked, isPlaying]);

  const FilterData = useMemo(() => {
    const [startYear, endYear] = yearRange;
    return rawData.filter((data) => {
      let dataYear = parseInt(data.Year, 10);
      if (dataYear > 10000) dataYear = dataYear % 10000;
      return dataYear >= startYear && dataYear <= endYear;
    });
  }, [yearRange]);

  const datasets = useMemo(
    () => ({
      country: { ...CountryData(FilterData), name: "Social Graph By Country" },
      people: { ...PeopleData(FilterData), name: "Social Graph By People" },
    }),
    [FilterData]
  );

  const projects = useMemo(
    () =>
      (filteredData.nodes || [])
        .filter((d) => d.group === 18)
        .map((d) => ({ value: d.id, label: d.label })),
    [filteredData.nodes]
  );

  const connection = useMemo(
    () =>
      (filteredData.nodes || [])
        .filter((d) => d.group !== 18)
        .map((d) => ({ value: d.id, label: d.label })),
    [filteredData.nodes]
  );

  const handleRangeChange = (event, newValue) => {
    setYearRange(newValue);
    setShowNode(null);
  };

  const handleAction = () => setIsClicked(true);
  const toggleToolbar = () => setIsCollapsed((s) => !s);

  const handleDatasetChange = useCallback((key) => {
    setCurrentDataset(key);
    setSelectedTitle(null);
    setselectedConnection(null);
    setselectedNode(null);
    setShowNode(null);
    setSelectedRoles(colorScale.domain());
  }, []);

  const handleFilterChange = useCallback((data) => {
    setFilteredData(data);
    setselectedNode(null);
  }, []);

  const handleTitleChange = useCallback((data) => {
    setSelectedTitle(data);
    setselectedConnection(null);
    setselectedNode(data);
  }, []);

  const handleConnectionChange = useCallback((data) => {
    setselectedConnection(data);
    setSelectedTitle(null);
    setselectedNode(data);
  }, []);

  const closeDescription = useCallback(() => {
    setselectedConnection(null);
    setSelectedTitle(null);
    setselectedNode(null);
    setShowNode(null);
  }, []);

  const graphProps = useMemo(
    () => ({
      datasets,
      currentDataset,
      handleDatasetChange,
      nodes: filteredData.nodes,
      links: filteredData.links,
      selectnode: selectedNode,
      filterTag,
      width: window.innerWidth,
      height: window.innerHeight,
      onPlayingChange: isPlaying,
      onNodeSelect: setShowNode,
      nodeSelect: showNode,
      selectedRoles,
      currentdataset: currentDataset,
    }),
    [
      datasets,
      currentDataset,
      handleDatasetChange,
      filteredData.nodes,
      filteredData.links,
      selectedNode,
      filterTag,
      isPlaying,
      showNode,
      selectedRoles,
    ]
  );

  return {
    // state
    yearRange,
    setYearRange,
    filteredData,
    setFilteredData,
    filterTag,
    setFilterTag,
    filterCountry,
    setFilterCountry,
    currentDataset,
    setCurrentDataset,
    selectedTitle,
    selectedConnection,
    selectedNode,
    isPlaying,
    setIsPlaying,
    isCollapsed,
    toggleToolbar,
    showNode,
    setShowNode,
    isClicked,
    handleAction,
    time,
    selectedRoles,
    setSelectedRoles,
    // derived
    FilterData,
    datasets,
    projects,
    connection,
    graphProps,
    // handlers
    handleRangeChange,
    handleDatasetChange,
    handleFilterChange,
    handleTitleChange,
    handleConnectionChange,
    closeDescription,
  };
  // ...existing code...
}