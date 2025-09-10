import { useState } from "react";
import ForceDirectedGraph from "./components/ForcedDirectedGraph";
import { sampleLinks, sampleNodes, networkNodes, networkLinks, socialLinks, socialNodes, graphUtils, mabLinks, mabNodes } from "./utilities/GraphData";
import './App.css'
import nodesData from './utilities/NodeData.json'
import linksData from './utilities/LinkData.json'
// Dataset options
const datasets = {
  sample: { nodes: sampleNodes, links: sampleLinks, name: "Sample Network" },
  mab: {nodes: mabNodes, links: mabLinks, name: "MAB"}
};

const App = () => {
  const [currentDataset, setCurrentDataset] = useState('sample');
  const [graphData, setGraphData] = useState(datasets.sample);
  const [showStats, setShowStats] = useState(false);

  // Handle dataset change
  const handleDatasetChange = (datasetKey) => {
    setCurrentDataset(datasetKey);
    setGraphData(datasets[datasetKey]);
  };

  // Generate random graph
  const handleGenerateRandom = () => {
    const nodeCount = Math.floor(Math.random() * 10) + 8; // 8-17 nodes
    const linkDensity = Math.random() * 0.4 + 0.2; // 0.2-0.6 density
    const randomData = graphUtils.generateRandomGraph(nodeCount, linkDensity);
    
    setCurrentDataset('random');
    setGraphData({ 
      ...randomData, 
      name: `Random Graph (${nodeCount} nodes)` 
    });
  };

  // Calculate and display graph statistics
  const stats = graphUtils.getGraphStats(graphData.nodes, graphData.links);

  return (
    <div className="app">
      {/* Background */}
      <div className="app-background"></div>
      
      {/* Main content */}
      <div className="app-content">
        
        {/* Dataset selector */}
        {/* <div className="dataset-selector">
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
            <button
              className={`dataset-btn random ${currentDataset === 'random' ? 'active' : ''}`}
              onClick={handleGenerateRandom}
            >
              🎲 Generate Random
            </button>
          </div>
        </div> */}

        {/* Graph statistics toggle */}
        <div className="stats-toggle">
          <button 
            className="stats-btn"
            onClick={() => setShowStats(!showStats)}
          >
            📊 {showStats ? 'Hide' : 'Show'} Stats
          </button>
        </div>

        {/* Statistics panel */}
        {showStats && (
          <div className="stats-panel">
            <h4>Graph Statistics</h4>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-label">Nodes:</span>
                <span className="stat-value">{stats.nodeCount}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Links:</span>
                <span className="stat-value">{stats.linkCount}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Density:</span>
                <span className="stat-value">{stats.density}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Avg Degree:</span>
                <span className="stat-value">{stats.avgDegree}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Max Degree:</span>
                <span className="stat-value">{stats.maxDegree}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Min Degree:</span>
                <span className="stat-value">{stats.minDegree}</span>
              </div>
            </div>
          </div>
        )}

        {/* Force-directed graph component */}
        <ForceDirectedGraph
          // nodes={graphData.nodes}
          // links={graphData.links}
          // width={800}
          // height={600}
          nodes={nodesData} links={linksData} width={window.innerWidth} height={window.innerHeight}
        />

        {/* Footer */}
        <div className="app-footer">
          <p>
            Built with React and D3.js • 
            Current dataset: <strong>{graphData.name || datasets[currentDataset]?.name}</strong>
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default App;