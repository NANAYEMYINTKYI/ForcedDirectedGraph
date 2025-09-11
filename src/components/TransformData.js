import fs from "fs";
import countryToContinent from 'country-json/src/country-by-continent.json' with { type: 'json' };


// ----- Customize Data Section-----
import rawData from './../data/mab2023Data.json' with { type: 'json' };
// node = Title // Focus Node
// connectionNode = Location // Node for connection
// nodeEdge = Year // What edge told
// Group 1-7 = Continent
// Group 8 = Unknown
// Group 9 = Project
// ----- End Section -----


// Add new country
let Add = { country: "United States of America", continent: "North America" };
countryToContinent.push(Add);

// Define Group
function setGroup(location, isproject = false) {
  if (isproject) return 9;
  if (!location) return 8;

  const country = location.split(",")[0].trim();

  const entry = countryToContinent.find(
    (c) => c.country.toLowerCase() === country.toLowerCase()
  );

  if (!entry) return 8;

  // console.log(entry.continent);

  switch (entry.continent) {
    case "Africa":
      return 1;
    case "Asia":
      return 2;
    case "Europe":
      return 3;
    case "North America":
      return 4;
    case "South America":
      return 5;
    case "Antarctica":
      return 6;
    case "Australia":
      return 7;
  }
}

// node → connectionNode
let links = rawData
  .filter(d => d.Title && d.Location)
  .map(d => ({
    source: d.Title,
    target: d.Location,
    strength: 1
  }));

// node → node links for same data
for (let i = 0; i < rawData.length; i++) {
  for (let j = i + 1; j < rawData.length; j++) {
    if (rawData[i].Year && rawData[i].Year === rawData[j].Year) {
      links.push({
        source: rawData[i].Title,
        target: rawData[j].Title,
        strength: 2
      });
    }
  }
}

let nodeMap = {};

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
      group: setGroup(item.Location, true),
    };
  }
});

// Add connectionNode
rawData.forEach((item) => {
  if (!nodeMap[item.Location]) {
    nodeMap[item.Location] = {
      id: item.Location,
      size: 24,
      group: setGroup(item.Location),
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
fs.writeFileSync("./../data/LinkData.json", JSON.stringify(links, null, 2));
fs.writeFileSync("./../data/NodeData.json", JSON.stringify(nodes, null, 2));

// console.log("✅ links.json and nodes.json generated!");
