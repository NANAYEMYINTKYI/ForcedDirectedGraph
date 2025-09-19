import {useState, useEffect, useMemo } from "react";
import ForceDirectedGraph from "./components/ForcedDirectedGraph";
import countrylink from '../src/data/CountryLink.json';
import countrynode from '../src/data/CountryNode.json';
import yearlink from '../src/data/YearLink.json';
import yearnode from '../src/data/YearNode.json';
import peoplenode from '../src/data/PeopleNode.json';
import peoplelink from '../src/data/PeopleLink.json';
import mabdata from '../src/data/mabData.json';
import './App.css'
const datasets ={
  country: {nodes:countrynode, links:countrylink, name:"Social Graph By Country"},
  year: {nodes:yearnode, links: yearlink, name: "Social graph by Year"},
  people: {nodes:peoplenode, links:peoplelink, name: "Social graph by People"}
};

const App = () => {
  const [currentDataset, setCurrentDataset] = useState('people');
  const graphData = datasets[currentDataset];
  // const [processedDatasets, setProcessedDatasets] = useState({});
   // Handle dataset change
  const handleDatasetChange = (key) => setCurrentDataset(key);

  return (
    <div className="app">
      {/* Header */}
      <div className="header">
        <h1>🌐 Force-Directed Graph</h1>
      </div>
      {/* Background */}
      <div className="app-background"></div>
         <div className="app-content">
        
          {/* Force-directed graph component */}
          <ForceDirectedGraph 
            datasets={datasets}
            currentDataset={currentDataset}
            handleDatasetChange={handleDatasetChange}
            nodes={graphData.nodes}
            links={graphData.links}
            // nodes={filteredNodes}
            // links={filteredLinks}
            width={800}
            height={600}
          />
          {/* <ForceDirectedGraph
          nodes={nodesData} links={linksData} width={928} height={400} 
        /> */}
        </div>        
      </div>
  );
  
};

export default App;   