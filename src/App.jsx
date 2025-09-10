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

  // Calculate and display graph statistics
  const stats = graphUtils.getGraphStats(nodesData.nodes, linksData.links);

  return (
    <div className="app">
      {/* Background */}
      <div className="app-background"></div>
      
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
        <ForceDirectedGraph
          // nodes={graphData.nodes}
          // links={graphData.links}
          // width={800}
          // height={600}
          nodes={nodesData} links={linksData} width={928} height={600} 
        />
      </div>
  );
};

export default App;