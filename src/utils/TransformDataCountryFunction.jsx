//--- This is the function to transform rawdata to nodes and links for "Country Dataset" ---//
// NOTE: For changing countryToContinent go to CustomData
// node = Title // Focus Node
// connectionNode = continent // Node for connection
// Group 1-17 = continent
// Group 18 = Project

import {defaultContinent, continentList, updatedCountriesToContinent} from './CustomData.jsx';

export function CountryData(rawData) {
  const countryToContinent = updatedCountriesToContinent()

  const groupCache = new Map();
  // DEFINE GROUP AND CONTINENT
  function setGroup(location, isproject = false) {
    if (isproject) return { groupid: 18, name: "Project", idx: 18 };
    if (!location) return { groupid: 8, name: "Unknown", idx: 8 };

    const key = location.toLowerCase();
    if (groupCache.has(key)) return groupCache.get(key);
    
    const entry = countryToContinent.find(
      (c) => c.country.toLowerCase() === key
    );
    let result;

    if (!entry) {
      result = { ...defaultContinent, idx: defaultContinent.groupid ?? 8 };
    } else {
      const foundIndex = continentList.findIndex(c => c.name === entry.continent);
      result = foundIndex >= 0 ? { ...continentList[foundIndex], idx: foundIndex + 1 } : { ...defaultContinent, idx: defaultContinent.groupid ?? 8 };
    }

    groupCache.set(key, result);
    return result;
  }

  // GET TYPE TAGS
  function getType(tag, location) {

    // Clean and split tags
    const tags = tag
      .replace(/[\[\]#']/g, '')
      .split(',')
      .map(t => t.trim())
      .filter(Boolean);

    // Clean and split location
    const loclist = (location || "")
      .split(",")
      .map(s => s.trim())
      .filter(Boolean);

    return tags.filter(t => !/^\d{4}$/.test(t) && !loclist.some(l => l.toLowerCase() === t.toLowerCase()));
  }


  
  
  const seenLinks = new Set();

  // CREATE LINKS
  const links = rawData 
    .filter(item => item.Title && item.Location)
    .flatMap(item => item.Location 
      .split(",") 
      .map(l => l.trim()) 
      .filter(l => setGroup(l).idx !== 8) 
      .map(l => {

        const key = `${item.Title}→${l.toLowerCase()}`; 
        if (seenLinks.has(key)) return null; 

        seenLinks.add(key); 
        return { 
          source: item.Title.toUpperCase(), 
          target: l.toLowerCase(), 
          strength: 1 
        }; 
      }) 
    ) 
    .filter(Boolean);




  let nodeMap = {};

  // CREATE NODES FOR TITLES (FOCUS NODE)
  rawData.forEach((item) => {
    if (!nodeMap[item.Title]) {
      nodeMap[item.Title] = {
        id: item.Title.toUpperCase(),
        label: item.Title,
        year: item.Year,
        location: item.Location,
        description: item.Description,
        tag: item.Tag,
        url: item.URL,
        file: item.URL.split("/")[5] + ".jpg",
        size: 49,
        group: 18
      };
    }
      // Having this to handle image of same title but different projects
      item.file = item.URL.split("/")[5] + ".jpg";
      item.type = getType(item.Tag, item.Location).join(", ")
  });

  // CREATE NODES FOR CONTRIBUTORS (CONNECTION NODE)
  rawData.forEach((item) => {
    if (!item.Location) return;
    item.Location
      .split(",")
      .map(l => l.trim())
      .filter(l => l)
      .filter(l => setGroup(l).idx !== 8 )
      .forEach(l => {
        const normalized = l.toLowerCase();
        if (!nodeMap[normalized]) {
          // New node
          nodeMap[normalized] = {
            id: normalized,
            label: l,
            size: 24,
            group: [setGroup(normalized).idx],
            continent: setGroup(normalized).name
          };
        }
      });
  });

  // Count occurrences to adjust node size
  links.forEach(({ source, target }) => {
    if (nodeMap[source]) {
      nodeMap[source].size = Math.min(nodeMap[source].size + 4, 100);
    }
    if (nodeMap[target]) {
      nodeMap[target].size = Math.min(nodeMap[target].size + 4, 100);
    }
  });

  const nodes = Object.values(nodeMap);  

  return { nodes, links };
}