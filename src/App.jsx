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

const normalizeTitle = (title) => {
    if (!title) return ""; // handle null or undefined
    return String(title).trim().toLowerCase().replace(/\s+/g, "_");
  };

  // Transform node: normalize ID and attach tags
  const transformNode = (node, tagLookup) => ({
    ...node,
    id: normalizeTitle(node.id), // D3-safe ID
    title: node.id,              // original title for display
    tags: tagLookup[normalizeTitle(node.id)] || []
  });
  // Transform link: normalize source/target
  const transformLink = (link) => ({
    ...link,
    source: normalizeTitle(link.source),
    target: normalizeTitle(link.target)
  });
  
const App = () => {
  const [currentDataset, setCurrentDataset] = useState('people');
  const [processedDatasets, setProcessedDatasets] = useState({});
  const [filterTag, setFilterTag] = useState("");
  const [filteredNodes, setFilteredNodes] = useState([]);
  const [filteredLinks, setFilteredLinks] = useState([]);

  // Preprocess all datasets once
  useEffect(() => {
    // Build tag lookup from mabdata
    console.log(mabdata)
    const tagLookup = Object.fromEntries(
      mabdata.map(item => [normalizeTitle(item.Title), item.Tag])
    );
    const peopleNodesWithoutTags = peoplenode.filter(node => 
        !tagLookup[normalizeTitle(node.id)]
      );
    const mergedDatasets = {};
    Object.keys(datasets).forEach(key => {
      const dataset = datasets[key];
      mergedDatasets[key] = {
        nodes: dataset.nodes.map(n => transformNode(n, tagLookup)),
        links: dataset.links.map(transformLink),
        name: dataset.name
      };
    });
      setProcessedDatasets(mergedDatasets);
  }, []);
   // --- Generate tag selection options ---\
 // --- Generate tag selection options ---
  const [allTags, setAllTags] = useState([]);
  useEffect(() => {
    console.log("Processed dataset for", currentDataset, processedDatasets[currentDataset]);
    if (!processedDatasets[currentDataset]) return;
    const nodes = processedDatasets[currentDataset].nodes;
    const tagSet = new Set();
    
    nodes.forEach(n => {
      if (!n.tags) return; // skip nodes without tags
      
      // Handle both array and string tags
      // const tagsArray = Array.isArray(n.tags) ? n.tags : [n.tags];
      // Parse string representation of array into actual array
      let tagsArray;
      if (Array.isArray(n.tags)) {
        tagsArray = n.tags;
      } else if (typeof n.tags === 'string') {
        try {
          // Parse string like "['#Germany', '#2018']" into actual array
          tagsArray = JSON.parse(n.tags.replace(/'/g, '"'));
        } catch (e) {
          // If parsing fails, treat as single tag
          tagsArray = [n.tags];
        }
      } else {
        tagsArray = [n.tags];
      }
      
      tagsArray.forEach(tag => {
        if (tag) {
          // Clean the tag: remove hash, trim whitespace
          const cleanTag = tag.replace(/^#/, "").trim();
          if (cleanTag) { // only add non-empty tags
            tagSet.add(cleanTag);
          }
        }
      });
    });
    
    setAllTags(Array.from(tagSet).sort());
  }, [processedDatasets, currentDataset]);
   // Apply filter when dataset or tag changes
  useEffect(() => {
    if (!processedDatasets[currentDataset]) return;
    const { nodes, links } = processedDatasets[currentDataset];
    // const visibleNodes = nodes.filter(n =>
    //    !filterTag || (Array.isArray(n.tags) && n.tags.some(tag => tag.replace(/^#/, "").trim().toLowerCase() === filterTag.toLowerCase()))
    //   );
    const visibleNodes = nodes.filter(n => {
      if (!filterTag) return true; // show all if no filter
      if (!n.tags) return false; // no tags = not visible when filtering
      // Convert to array if it's not already
      const tagsArray = Array.isArray(n.tags) ? n.tags : [n.tags];
      return tagsArray.some(tag => tag.replace(/^#/, "").trim().toLowerCase() === filterTag.toLowerCase());
    });
    const visibleIds = new Set(visibleNodes.map(n => n.id));
    const visibleLinks = links.filter(l => visibleIds.has(l.source) && visibleIds.has(l.target));
    // console.log("Filter tag:", filterTag);
    // console.log("Visible nodes:", visibleNodes.map(n => n.title));
    // console.log("Visible links:", visibleLinks);
    console.log("All node IDs:", nodes.map(n => n.id));
    console.log("All link sources:", links.map(l => l.source));
    console.log("All link targets:", links.map(l => l.target));
    console.log("Visible node IDs:", Array.from(visibleIds));
    console.log("Links before filter:", links.length);
    console.log("Links after filter:", visibleLinks.length);
    setFilteredNodes(visibleNodes);
    setFilteredLinks(visibleLinks);
  }, [processedDatasets, currentDataset, filterTag]);
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
        
        {/* Tag filter dropdown */}
        <label style={{ marginLeft: "1rem" }}>
          Filter by Tag:{" "}
          <select value={filterTag} onChange={(e) => setFilterTag(e.target.value)}>
            <option value="">All</option>
            {allTags.map(tag => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </label>
          {/* Force-directed graph component */}
          <ForceDirectedGraph 
            datasets={processedDatasets}
            currentDataset={currentDataset}
            handleDatasetChange={handleDatasetChange}
            // nodes={graphData.nodes}
            // links={graphData.links}
            nodes={filteredNodes}
            links={filteredLinks}
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