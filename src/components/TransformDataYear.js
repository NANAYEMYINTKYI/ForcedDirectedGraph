import fs from "fs";

// ----- Customize Data Section-----
import rawData from './../data/mab2023Data.json' with { type: 'json' };
// node = Title // Focus Node
// connectionNode = Year // Node for connection
// Group 1-7 = Continent
// Group 8 = Unknown
// Group 9 = Project
// ----- End Section -----

// node → connectionNode
let links = rawData
  .filter(d => d.Title && d.Year)
  .map(d => ({
    source: d.Title,
    target: d.Year,
    strength: 1
  }));

let nodeMap = {};
let file = 0;
// Add nodes
rawData.forEach((item) => {
  if (!nodeMap[item.Title]) {
    nodeMap[item.Title] = {
      id: item.Title,
      year: item.Year,
      location: item.Location,
      description: item.Description,
      image: item["Images.1"],
      url: item.URL,
      size: 24,
      group: 9,
      file: file + ".jpg"
    };
    file++
  }
});

// Add connectionNode
rawData.forEach((item) => {
  if (!nodeMap[item.Year]) {
    nodeMap[item.Year] = {
      id: item.Year,
      size: 24,
      group: 1,
    };
  }
});

// Count occurrences
links.forEach((link) => {
  if (nodeMap[link.source]) {
    nodeMap[link.source].size = Math.min(nodeMap[link.source].size + 1, 50);
  }
  if (nodeMap[link.target]) {
    nodeMap[link.target].size = Math.min(nodeMap[link.target].size + 1, 50);
  }
});

const nodes = Object.values(nodeMap);

// Save Output
fs.writeFileSync("./../data/YearLink.json", JSON.stringify(links, null, 2));
fs.writeFileSync("./../data/YearNode.json", JSON.stringify(nodes, null, 2));

// console.log("✅ links.json and nodes.json generated!");
