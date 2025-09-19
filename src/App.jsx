import {useState, useEffect, useMemo, useCallback } from "react";
import ForceDirectedGraph from "./components/ForcedDirectedGraph";
import Timeline from './components/Timeline';
import { PeopleData } from "./components/TransformDataPeopleFunction";
import { CountryData } from "./components/TransformDataCountryFunction";
import rawData from './data/mabData.json';
import countrylink from '../src/data/CountryLink.json';
import countrynode from '../src/data/CountryNode.json';
import yearlink from '../src/data/YearLink.json';
import yearnode from '../src/data/YearNode.json';
import peoplenode from '../src/data/PeopleNode.json';
import peoplelink from '../src/data/PeopleLink.json';
import TagManager from "./components/TagManager";
import './App.css'

const App = () => {
  const [yearRange, setYearRange] = useState([1999, 2024]); // state to store selected year

  const [processedDatasets, setProcessedDatasets] = useState({});

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
  
  const { nodes, links } = PeopleData(FilterData);

  const datasets ={
    country: {nodes:countrynode, links:countrylink, name:"Social Graph By Country"},
    year: {nodes:yearnode, links: yearlink, name: "Social graph by Year"},
    people: { nodes: peoplenode, links: peoplelink, name: "Social graph by People" }
  };

  const [currentDataset, setCurrentDataset] = useState('people');
  const [filteredData, setFilteredData] = useState({ nodes: [], links: [] });
  const graphData = datasets[currentDataset];

  const handleRangeChange = (event, newValue) => {
    setYearRange(newValue);
  };

 return (
    <div className="app">
      {/* Header */}
      <div className="header">
        <h1>🌐 Force-Directed Graph</h1>
      </div>
      {/* Background */}
      <div className="app-background"></div>
       {/* Header */}
      <div className="header" 
        style = {{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', 
        marginTop: '0px'
        }}>
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
         <div className="app-content">
            {/* Timeline */}
            <div style={{
        display: 'flex',
        justifyContent: 'center', 
        gap: "15px" 
        }}>
        <p style={{ fontWeight: '600', margin: '2.5px' }}>Select Year Range:</p>
          <Timeline
            value={yearRange}
            onChange={handleRangeChange}
            label="Select year range"
            width={500}
          />
          
      </div>
        
          {/* Force-directed graph component */}
          {/* <ForceDirectedGraph 
            datasets={datasets}
            currentDataset={currentDataset}
            handleDatasetChange={handleDatasetChange}
            nodes={graphData.nodes}
            links={graphData.links}
            // nodes={filteredNodes}
            // links={filteredLinks}
            width={800}
            height={600}
          /> */}
      
          <ForceDirectedGraph
          nodes={nodes} links={links} width={928} height={400} 
        />
        </div>        
      </div>
  );
  
};

export default App;