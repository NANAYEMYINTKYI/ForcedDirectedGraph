import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { CountryData}  from "./utils/TransformDataCountryFunction.jsx";
import { PeopleData } from "./utils/TransformDataPeopleFunction.jsx";
import ForceDirectedGraph from "./components/ForcedGraph/ForcedDirectedGraph.jsx";
// import TagFilter from "./components/TagFilter";
// import TagManager from "./components/TagManager";
import TagFilter from "./components/Filters/TagFilter.jsx";
import ListSearch from "./components/DropDown/ListSearch.jsx";
import Timeline from './components/TimeLine/Timeline.jsx';
import Toolbar from './components/ToolBar/ToolBar.jsx';
import rawData from "./data/Data.json";
import Description from "./components/Description/DrawerDescription.jsx";
import Legend from './components/ColorLegend/ColorLegend.jsx';
import {colorScale, contributorFields, continentList, contributergroup} from './utils/CustomData.jsx';
import * as Icons from '@ant-design/icons';
import * as d3 from 'd3';
import './styles/App.css'
import countrySelector from "./components/Filters/CountryFilter.jsx";
const App = () => {
  const [yearRange, setYearRange] = useState([1999, 2024]); // state to store selected year
  const [filteredData, setFilteredData ] = useState({ nodes: [], links: [] });
  const [filteredCountry, setFilteredCountry] = useState({nodes: [], links: []})
  const [filterTag, setFilterTag] = useState("");
  const [filterCountry, setFilterCountry] =useState("")
  const [currentDataset, setCurrentDataset] = useState("people");
  // const [selectedCountry, setselectedCountry] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [selectedConnection, setselectedConnection] = useState(null);
  const [selectedNode, setselectedNode] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [showNode, setShowNode] = useState(null);
  const [selectedRoles, setSelectedRoles] = useState(colorScale.domain());

  // Filter data where Year is between start and end year
  const FilterData = useMemo(() => {
    const [startYear, endYear] = yearRange;
    return rawData.filter((data) => {
      let dataYear = parseInt(data.Year);
      if (dataYear > 10000) {
        dataYear = dataYear % 10000;
      }
      return dataYear >= startYear && dataYear <= endYear;
    });
  }, [yearRange]);

  // dataset
  const datasets = useMemo(() => {
    return {
      country: {
        ...CountryData(FilterData),
        name: "Social Graph By Country",
      },
      people: {
        ...PeopleData(FilterData),
        name: "Social Graph By People",
      },
    };
  }, [FilterData]);
  
  const handleRangeChange = (event, newValue) => {
    setYearRange(newValue);
    setShowNode(null);
  };
  
  const toggleToolbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleDatasetChange = useCallback((key) => {
    setCurrentDataset(key);
    setSelectedTitle(null);
    setselectedConnection(null);
    setselectedNode(null);
    setShowNode(null);
    setSelectedRoles(colorScale.domain());
  }, []);

  // Handle filtered data from TagManager
  const handleFilterChange = useCallback((data) => {
    console.log("handleFilterChange:", data)
    setFilteredData(data)
    setselectedNode(null)
  }, []);

  const handleCountryChange = useCallback((data)=> {
    console.log("HandleCountryChnage:", data)
    setselectedNode(null)
    setFilteredData(data);
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
  
  // Title list
  let projects = filteredData.nodes 
  .filter(d => d.group === 18)
  .map(d => ({value: d.id, label: d.label}));

  // non Title list
  let connection = filteredData.nodes 
  .filter(d => d.group !== 18)
  .map(d => ({value: d.id, label: d.label}));
  

  // Memoize the graph props to prevent unnecessary re-renders
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
      onPlayingChange : isPlaying,
      onNodeSelect: setShowNode,
      nodeSelect: showNode,
      selectedRoles: selectedRoles,
      currentdataset: currentDataset
    }),
    [
      isPlaying,
      selectedNode,
      setShowNode,
      currentDataset,
      filteredData.nodes,
      filteredData.links,
      selectedRoles,
      showNode
    ]
  );

  // UI
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>MAB Social Graph</h1>
      </header>
      <div className="toolbar">
        <Toolbar 
          datasets={datasets}
          currentDataset={currentDataset}
          handleDatasetChange={handleDatasetChange}
          FilterData={FilterData}
          handleFilterChange={handleFilterChange}
          handleCountryChange={handleCountryChange}
          setFilterTag={setFilterTag}
          setFilterCountry={setFilterCountry}
          projects={projects}
          connection={connection}
          handleTitleChange={handleTitleChange}
          handleConnectionChange={handleConnectionChange}
          selectedTitle={selectedTitle}
          selectedConnection={selectedConnection}
          toggleToolbar = {toggleToolbar}
          isCollapsed = {isCollapsed}
          selectedRoles = {selectedRoles}
          setSelectedRoles = {setSelectedRoles} 
        />
      </div>
        {showNode && (
      <div className="description">
            <div style={{display: 'inline-block' }}>
              <button className={'closebutton'} onClick={closeDescription}>
                <Icons.CloseOutlined /> 
              </button>
            </div>
              <Description 
                name = {showNode}
                data = {FilterData}
                nodelist = {datasets[currentDataset].nodes}
                dataset = {currentDataset}
              />
              </div>)}
      <div className="app-content">
        {/* Force-directed graph component */}
        <ForceDirectedGraph {...graphProps} />
      </div>
      <div className="buttom-controls">
        {/* Timeline */}
        <section className="timeline-section">
          <p>Select Year Range:</p>
          <Timeline
            value={yearRange}
            onChange={handleRangeChange}
            OnPlayingChange={isPlaying => {
              setIsPlaying(isPlaying);
            }}
            label="Select year range"
            width={Math.min(500, window.innerWidth - 100)} // Make responsive
          />
        </section>
      </div>
    </div>
  );
};
export default App;