import { useState, useMemo, useCallback } from "react";
import ForceDirectedGraph from "./components/ForcedDirectedGraph";
import TagManager from "./components/TagManager";
import countrylink from '../src/data/CountryLink.json';
import countrynode from '../src/data/CountryNode.json';
import yearlink from '../src/data/YearLink.json';
import yearnode from '../src/data/YearNode.json';
import peoplenode from '../src/data/PeopleNode.json';
import peoplelink from '../src/data/PeopleLink.json';
import mabdata from '../src/data/mabData.json';
import './App.css';

const datasets = {
  country: { nodes: countrynode, links: countrylink, name: "Social Graph By Country" },
  year: { nodes: yearnode, links: yearlink, name: "Social graph by Year" },
  people: { nodes: peoplenode, links: peoplelink, name: "Social graph by People" }
};

const App = () => {
  const [currentDataset, setCurrentDataset] = useState('people');
  const [filteredData, setFilteredData] = useState({ nodes: [], links: [] });

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
      
      {/* Background */}
      <div className="app-background"></div>
      
      <div className="app-content">
        <div style={{ margin: "1rem", display: "flex", gap: "1rem", alignItems: "center" }}>
          {/* Dataset selector */}
          <label>
            Dataset:{" "}
            <select value={currentDataset} onChange={(e) => handleDatasetChange(e.target.value)}>
              {Object.keys(datasets).map(key => (
                <option key={key} value={key}>{datasets[key].name}</option>
              ))}
            </select>
          </label>
          
          {/* Tag filter component */}
          <TagManager 
            datasets={datasets}
            currentDataset={currentDataset}
            mabData={mabdata}
            onFilterChange={handleFilterChange}
            showCounts={true}
          />
        </div>
        
        {/* Force-directed graph component */}
        <ForceDirectedGraph {...graphProps} />
      </div>        
    </div>
  );
};

export default App;