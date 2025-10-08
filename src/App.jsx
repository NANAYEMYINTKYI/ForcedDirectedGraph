import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { CountryData } from "./components/TransformDataCountryFunction";
import { PeopleData } from "./components/TransformDataPeopleFunction";
import ForceDirectedGraph from "./components/ForcedDirectedGraph";
import TagManager from "./components/TagManager";
import ListSearch from "./components/ListSearch";
import Timeline from "./components/Timeline";
import rawData from "./Data.json";
import "./App.css";

const App = () => {
  const [yearRange, setYearRange] = useState([1999, 2024]); // state to store selected year
  const [filteredData, setFilteredData] = useState({ nodes: [], links: [] });
  const [filterTag, setFilterTag] = useState("");
  const [currentDataset, setCurrentDataset] = useState("people");
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [selectedConnection, setselectedConnection] = useState(null);
  const [selectedNode, setselectedNode] = useState(null);

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
  };
  const handleDatasetChange = useCallback((key) => {
    setCurrentDataset(key);
    setSelectedTitle(null);
    setselectedConnection(null);
    setselectedNode(null);
  }, []);

  // Handle filtered data from TagManager
  const handleFilterChange = useCallback((data) => {
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

  // Memoize the graph props to prevent unnecessary re-renders
  const graphProps = useMemo(
    () => ({
      datasets,
      currentDataset,
      handleDatasetChange,
      nodes: filteredData.nodes,
      links: filteredData.links,
      selectnode: selectedNode,
      filterTag: filterTag,
      width: window.innerWidth,
      height: window.innerHeight,
    }),
    [
      selectedNode,
      currentDataset,
      filteredData.nodes,
      filteredData.links,
      filterTag,
    ]
  );
  // console.log(filteredData.nodes)

  // Title list
  let projects = filteredData.nodes
    .filter((d) => d.group === 9)
    .map((d) => ({ value: d.id, label: d.id }));

  // non Title list
  let connection = filteredData.nodes
    .filter((d) => d.group !== 9)
    .map((d) => ({ value: d.id, label: d.id }));

  // UI
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>MAB Social Graph</h1>
      </header>
      <div className="topcontrols">
        {/* Dataset Selector */}
        <section className="dataset-selector">
          <div className="dataset-buttons">
            {Object.entries(datasets).map(([key, dataset]) => (
              <button
                key={key}
                className={`dataset-btn ${
                  currentDataset === key ? "active" : ""
                }`}
                onClick={() => handleDatasetChange(key)}
              >
                {dataset.name}
              </button>
            ))}
          </div>
        </section>
        {/* Tag Filter */}
        <TagManager
          datasets={datasets}
          currentDataset={currentDataset}
          mabData={FilterData}
          onFilterChange={handleFilterChange}
          onTagSelect={setFilterTag}
          showCounts={true}
        />
        <ListSearch
          options={projects}
          Title="Search by Title"
          placeholder="Input Title"
          onFilterChange={handleTitleChange}
          value={selectedTitle}
        />
        <ListSearch
          options={connection}
          Title="Search by People"
          placeholder="Input People"
          onFilterChange={handleConnectionChange}
          visible={currentDataset === "people"}
          value={selectedConnection}
        />
        <ListSearch
          options={connection}
          Title="Search by Country"
          placeholder="Input Country"
          onFilterChange={handleConnectionChange}
          visible={currentDataset === "country"}
          value={selectedConnection}
        />
      </div>
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
            label="Select year range"
            width={Math.min(500, window.innerWidth - 100)} // Make responsive
          />
        </section>
      </div>
    </div>
  );
};

export default App;
