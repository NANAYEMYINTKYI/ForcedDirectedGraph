import {useState, useEffect, useMemo, useCallback } from "react";
import { CountryData } from "./components/TransformDataCountryFunction";
import { PeopleData } from "./components/TransformDataPeopleFunction";
import ForceDirectedGraph from "./components/ForcedDirectedGraph";
import TagManager from "./components/TagManager";
import Timeline from './components/Timeline';
import rawData from './data/mabData.json';
import countrylink from '../src/data/CountryLink.json';
import countrynode from '../src/data/CountryNode.json';
import yearlink from '../src/data/YearLink.json';
import yearnode from '../src/data/YearNode.json';
import peoplenode from '../src/data/PeopleNode.json';
import peoplelink from '../src/data/PeopleLink.json';
import './App.css'

  // const datasets ={
  //   country: {nodes:countrynode, links:countrylink, name:"Social Graph By Country"},
  //   // year: {nodes:yearnode, links: yearlink, name: "Social graph by Year"},
  //   people: { nodes: peoplenode, links: peoplelink, name: "Social graph by People" }
  // };

const App = () => {
  const [yearRange, setYearRange] = useState([1999, 2024]); // state to store selected year
  // const [processedDatasets, setProcessedDatasets] = useState({});
  const [filteredData, setFilteredData] = useState({ nodes: [], links: [] });

  // Filter data where Year is between start and end year
  const FilterData = useMemo(() => {
    const [startYear, endYear] = yearRange;
    return rawData.filter(data => {
      let dataYear = parseInt(data.Year);
      if (dataYear > 10000){
        dataYear = dataYear % 10000;
      }
      return dataYear >= startYear && dataYear <= endYear;
    });
  }, [yearRange]);
  
  const datasets = useMemo(() => {
    return {
      country: {
        ...CountryData(FilterData),
        name: "Social Graph By Country"
      },
      people: {
        ...PeopleData(FilterData),
        name: "Social Graph By People"
      }
    };
  }, [FilterData]);
  
  const [currentDataset, setCurrentDataset] = useState('people');
  // const [filteredData, setFilteredData] = useState({ nodes: [], links: [] });
  const graphData = datasets[currentDataset];

  const handleRangeChange = (event, newValue) => {
    setYearRange(newValue);
  };

  // const handleDatasetChange = (key) => setCurrentDataset(key);

  // Handle dataset change - also memoized
  const handleDatasetChange = useCallback((key) => {
    setCurrentDataset(key);
  }, []);

  // Handle filtered data from TagManager
  const handleFilterChange = useCallback((data) => {
    setFilteredData(data);
  }, []);

  // Memoize the graph props to prevent unnecessary re-renders
  const graphProps = useMemo(() => ({
    datasets,
    currentDataset,
    handleDatasetChange,
    nodes: filteredData.nodes,
    links: filteredData.links,
    width: 800,
    height: 600
  }), [currentDataset, filteredData.nodes, filteredData.links]);

  return (
    <div className="app">
      {/* Header */}
      <div className="header">
        <h1>🌐 Force-Directed Graph</h1>
      </div>
      {/* Controls */}
      <div className="dataset-selector">
        <h3>Choose Dataset:</h3>
        <div className="dataset-buttons">
          {Object.entries(datasets).map(([key, dataset]) => (
            <button
              key={key}
              className={`dataset-btn ${currentDataset === key ? 'active' : ''}`}
              onClick={() => handleDatasetChange(key)}
            >
              {dataset.name}
            </button>
          ))}
        </div>
      </div>
        {/* Timeline */}
        <div style={{
          display: 'flex',
          justifyContent: 'center', 
          gap: "15px", 
          marginBottom: "10px"
        }}>
          <p style={{ fontWeight: '600', margin: '2.5px' }}>Select Year Range:</p>
          <Timeline
            value={yearRange}
            onChange={handleRangeChange}
            label="Select year range"
            width={500}
          />
        </div>
      {/* Tag filter component */}
      <TagManager 
        datasets={datasets}
        currentDataset={currentDataset}
        mabData={rawData}
        onFilterChange={handleFilterChange}
        showCounts={true}
      />
      <div className="app-content">
        {/* Force-directed graph component */}
        {/* <ForceDirectedGraph 
          datasets={datasets}
          currentDataset={currentDataset}
          handleDatasetChange={handleDatasetChange}
          nodes={graphData.nodes}
          links={graphData.links}
          width={800}
          height={600}
        /> */}
        {/* Force-directed graph component */}
        <ForceDirectedGraph {...graphProps} />
      </div>
    </div>
  );
}

export default App;