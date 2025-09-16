import {useState } from "react";
import ForceDirectedGraph from "./components/ForcedDirectedGraph";
import countrylink from '../src/data/CountryLink.json';
import countrynode from '../src/data/CountryNode.json';
import yearlink from '../src/data/YearLink.json';
import yearnode from '../src/data/YearNode.json';
import './App.css'


const datasets ={
  country: {nodes:countrynode, links:countrylink, name:"Social Graph By Country"},
  year: {nodes:yearnode, links: yearlink, name: "Social graph by Year"}
};

const App = () => {
  const [currentDataset, setCurrentDataset] = useState('country');
  const graphData = datasets[currentDataset];
  // Handle dataset change
  const handleDatasetChange = (datasetsKey) => {
    setCurrentDataset(datasetsKey);
  };
  return (
    <div className="app">
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