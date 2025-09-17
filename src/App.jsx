import ForceDirectedGraph from "./components/ForcedDirectedGraph";
import Graph from "./components/graph";
import Slidebar from './components/Slidebar';
import './App.css'
// import nodesData from './data/PeopleNode.json'
// import linksData from './data/PeopleLink.json'
// import nodesData from '../public/data/NodeData.json'
// import linksData from '../public/data/LinkData.json'
import React,{ useMemo, useEffect, useState } from "react";
import { PeopleData } from "./components/TransformDataPeopleFunction";
import rawData from './data/mabData.json';


const App = () => {
  const [yearRange, setYearRange] = useState([1999, 2024]); // state to store selected year

  // Filter data where Year is between start and end year
  const FilterData = useMemo(() => {
    const [startYear, endYear] = yearRange;
    return rawData.filter(data => {
      let dataYear = parseInt(data.Year);
      if (dataYear === 202021){
        dataYear = 2024
      }
      return dataYear >= startYear && dataYear <= endYear;
    });
  }, [yearRange]);

  const { nodes, links } = PeopleData(FilterData);

  const handleRangeChange = (event, newValue) => {
    setYearRange(newValue);
  };

  return (
    <div className="app" style = {{height: "100vh"}}>
      {/* Background */}
      <div className="app-background">
      </div>
        <ForceDirectedGraph
          nodes={nodes} links={links} width={928} height={400} 
        />
        <div style={{ margin: '20px' }}>
          <Slidebar
            value={yearRange}
            onChange={handleRangeChange}
            label="Select year range"
            width={1500}
          />
        </div>
      </div>
  );
};

export default App;
// ---- No use ----
// const App = () => {
//   // Calculate and display graph statistics
// //   const [nodes,setnodes]=useState(null);
// //   const [links,setlinks]=useState(null);

// // useEffect(() => {
// //     Promise.all([
// //       fetch("./data/NodeData.json").then((res) => res.json()),
// //       fetch("./data/LinkData.json").then((res) => res.json())
// //     ]).then(([n, l]) => {
// //       setnodes(n);
// //       setlinks(l);
// //     });
// //   }, []);

// let FilterData;
// let year = null;

// if (year !== null){
//   FilterData = rawData.filter(data => data.Year === year.toString());
// } else {
//   FilterData = rawData;
// }

// const App = () => {
//   const { nodes, links } = PeopleData(FilterData);
//   const [range, setRange] = useState([0, 100]);
//   const handleRangeChange = (event, newValue) => {
//     setRange(newValue);
//   };


// //   // return (
// //   //   <div className="app">
// //   //     {nodes && links ? (
// //   //       <Graph
// //   //         nodes={nodes}
// //   //         links={links}
// //   //         width={window.innerWidth}
// //   //         height={window.innerHeight}
// //   //         batchSize={4}     // nodes per step
// //   //         intervalMs={300}  // delay between steps
// //   //       />
// //   //     ) : (
// //   //       <p>Loading graph...</p>
// //   //     )}
// //   //   </div>
// //   // );
  
