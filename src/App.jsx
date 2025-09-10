import ForceDirectedGraph from "./components/ForcedDirectedGraph";
import './App.css'
import nodesData from './utilities/NodeData.json'
import linksData from './utilities/LinkData.json'
const App = () => {
  // Calculate and display graph statistics
  return (
    <div className="app">
      {/* Background */}
      <div className="app-background"></div>
        <ForceDirectedGraph
          nodes={nodesData} links={linksData} width={928} height={600} 
        />
      </div>
  );
};

export default App;   