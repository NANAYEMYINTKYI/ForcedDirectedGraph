import ForceDirectedGraph from "./components/ForcedDirectedGraph";
import Graph from "./components/graph";
import './App.css'
import nodesData from './data/NodeData.json'
import linksData from './data/LinkData.json'
// import nodesData from '../public/data/NodeData.json'
// import linksData from '../public/data/LinkData.json'
import { useEffect, useState } from "react";

const App = () => {
  // Calculate and display graph statistics
//   const [nodes,setnodes]=useState(null);
//   const [links,setlinks]=useState(null);

// useEffect(() => {
//     Promise.all([
//       fetch("./data/NodeData.json").then((res) => res.json()),
//       fetch("./data/LinkData.json").then((res) => res.json())
//     ]).then(([n, l]) => {
//       setnodes(n);
//       setlinks(l);
//     });
//   }, []);

  return (
    <div className="app">
      {/* Background */}
      <div className="app-background"></div>
        <ForceDirectedGraph
          nodes={nodesData} links={linksData} width={928} height={400} 
        />
        
      </div>
  );
  // return (
  //   <div className="app">
  //     {nodes && links ? (
  //       <Graph
  //         nodes={nodes}
  //         links={links}
  //         width={window.innerWidth}
  //         height={window.innerHeight}
  //         batchSize={4}     // nodes per step
  //         intervalMs={300}  // delay between steps
  //       />
  //     ) : (
  //       <p>Loading graph...</p>
  //     )}
  //   </div>
  // );
  
};

export default App;   