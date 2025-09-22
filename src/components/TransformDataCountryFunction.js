import countryToContinent from 'country-json/src/country-by-continent.json' with { type: 'json' };// ----- Customize Data Section-----

// import rawData from './../data/FilterData.json' with { type: 'json' };
// node = Title // Focus Node
// connectionNode = People // Node for connection
// Group 1-7 = Continent
// Group 8 = Unknown
// Group 9 = Project
// ----- End Section -----

export function CountryData(rawData) {
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
  .filter(d => d.Title && d.Location.split(",")[0].trim())
  .map(d => ({
    source: d.Title,
    target: d.Location.split(",")[0].trim(),
    strength: 1
  }));

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
      size: 54,
      group: setGroup(item.Location, true),
      file: item.URL.split("/")[5] + ".jpg"
    };
  }
});

// Add connectionNode
rawData.forEach((item) => {
  if (!nodeMap[item.Location.split(",")[0].trim()]) {
    nodeMap[item.Location.split(",")[0].trim()] = {
      id: item.Location.split(",")[0].trim(),
      size: 34,
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

    // console.log(nodes);
    return { nodes, links };
}
