import countryToContinent from 'country-json/src/country-by-continent.json' with { type: 'json' };// ----- Customize Data Section-----


// ----- Customize Data Section-----
// import rawData from './../data/FilterData.json' with { type: 'json' };
// node = Title // Focus Node
// connectionNode = country // Node for connection
// Group 1-7 = Continent
// Group 8 = Unknown
// Group 9 = Project
// ----- End Section -----

export function CountryData(rawData) {
  // Add new country
  let Add = [
    { country: "United States of America", continent: "North America" }, 
    { country: "Kosovo", continent: "Europe" },
    { country: "Taiwan", continent: "Asia" }
  ];
  countryToContinent.push(...Add);

  // Define Group
  function setGroup(location, isproject = false) {
    if (isproject) return {id: 9, name: "Project"};
    if (!location) return {id: 8, name: "Unknown"};

    const country = location.split(",")[0].trim();

    const entry = countryToContinent.find(
      (c) => c.country.toLowerCase() === country.toLowerCase()
    );

    if (!entry) return {id: 8, name: "Unknown"};
    switch (entry.continent) {
      case "Africa":
        return {id: 1, name: "Africa"};
      case "Asia":
        return {id: 2, name: "Asia"};
      case "Europe":
        return {id: 3, name: "Europe"};
      case "North America":
        return {id: 4, name: "North America"};
      case "South America":
        return {id: 5, name: "South America"};
      case "Antarctica":
        return {id: 6, name: "Antarctica"};
      case "Australia":
        return {id: 7, name: "Australia"};
      default:
        return {id: 8, name: "Unknown"};
    }
  }
  
  // node → connectionNode
  const seenLinks = new Set();
  let links = rawData 
  .filter(d => d.Title && d.Location)
  .flatMap(d => d.Location 
      .split(",") 
      .map(l => l.trim()) 
      .filter(l => setGroup(l).id !== 8) 
      .map(l => {
      const key = `${d.Title}→${l}`; 
      if (seenLinks.has(key)) return null; 
      seenLinks.add(key); 
      return { 
          source: d.Title, 
          target: l, 
          strength: 1 
      }; 
      }) 
  ) 
  .filter(Boolean); // Remove nulls

    let nodeMap = {};

    // Add nodes
    rawData.forEach((item) => {
      if (!nodeMap[item.Title]) {
        nodeMap[item.Title] = {
          id: item.Title,
          year: item.Year,
          location: item.Location,
          description: item.Description,
          tag: item.Tag,
          image: item["Images.1"],
          url: item.URL,
          size: 49,
          group: 9,
          file: item.URL.split("/")[5] + ".jpg"
        };
      }
    });

    // Add connectionNode
    rawData.forEach((item) => {
      if (!item.Location) return;
      item.Location
        .split(",")
        .map(name => name.trim())
        .filter(name => name)
        .filter(name => setGroup(name).id !== 8 )
        .forEach(location => {
          if (!nodeMap[location]) {
            nodeMap[location] = {
              id: location,
              size: 24,
              group: setGroup(location).id,
              continent: setGroup(location).name
            };
          }
        });
    });

    // Count occurrences
    links.forEach((link) => {
    if (nodeMap[link.source]) {
        nodeMap[link.source].size = Math.min(nodeMap[link.source].size + 4, 100);
    }
    if (nodeMap[link.target]) {
        nodeMap[link.target].size = Math.min(nodeMap[link.target].size + 4, 100);
    }
    });

    const nodes = Object.values(nodeMap);  

    // console.log(nodes);
    return { nodes, links };
}