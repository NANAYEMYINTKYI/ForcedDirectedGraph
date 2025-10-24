import React, { useState, useEffect } from "react";
import NetworkGraph from "./components/testgraph";

function App() {
  const [nodes, setNodes] = useState([{ id: "A" }, { id: "B" }, { id: "C" }]);
  const [links, setLinks] = useState([
    { source: "A", target: "B" },
    { source: "B", target: "C" },
  ]);

  // Example: dynamically add nodes from App
  const addNode = () => {
    const newNodeId = String.fromCharCode(65 + nodes.length);
    const targetNode = nodes[Math.floor(Math.random() * nodes.length)];
    setNodes([...nodes, { id: newNodeId }]);
    setLinks([...links, { source: newNodeId, target: targetNode.id }]);
  };

  return (
    <div>
      <button onClick={addNode}>Add Node</button>
      <NetworkGraph nodes={nodes} links={links} />
    </div>
  );
}

export default App;

