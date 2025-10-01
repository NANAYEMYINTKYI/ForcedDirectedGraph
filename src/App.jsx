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

const App = () => {
  const [yearRange, setYearRange] = useState([1999, 2024]); // state to store selected year
  const [filteredData, setFilteredData] = useState({ nodes: [], links: [] });
  const [currentDataset, setCurrentDataset] = useState('people');

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
    width: window.innerWidth ,
    height: window.innerHeight
  }), [currentDataset, filteredData.nodes, filteredData.links]);

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
              className={`dataset-btn ${currentDataset === key ? 'active' : ''}`}
              onClick={() => handleDatasetChange(key)}
            >
              {dataset.name}
            </button>
          ))}
        </div>
      </section>
     
        {/* Tag Filter */}
        <section>
          <TagManager
            datasets={datasets}
            currentDataset={currentDataset}
            mabData={FilterData}
            onFilterChange={handleFilterChange}
            showCounts={true}
          />
        </section>
         {/* <section className="tagmanager-section">
          <TagManager
            datasets={datasets}
            currentDataset={currentDataset}
            mabData={FilterData}
            onFilterChange={handleFilterChange}
            showCounts={true}
          />
        </section>
         <section className="tagmanager-section">
          <TagManager
            datasets={datasets}
            currentDataset={currentDataset}
            mabData={FilterData}
            onFilterChange={handleFilterChange}
            showCounts={true}
          />
        </section> */}
        </div>
      {/* Graph Container */}
      <main className="app-content">
        <ForceDirectedGraph {...graphProps} />
      </main>
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

}

export default App;