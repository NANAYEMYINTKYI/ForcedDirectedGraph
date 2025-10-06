// ----- Customize Data Section-----
// import rawData from './../data/FilterData.json' with { type: 'json' };
// node = Title // Focus Node
// connectionNode = People // Node for connection
// Group 1-7 = Continent
// Group 8 = Unknown
// Group 9 = Project
// ----- End Section -----

import { group } from "d3";

// export function processData(rawData) {
// Fields to merge
const contributorFields = [
  "Building or project owner",
  "Architecture",
  "Project artist/ concept/ design/ planning",
  "Structural engineering",
  "Light design",
  "Technical layout light",
  "Display content/ visuals/ showreel",
  "Light hardware (LED hardware)",
  "Lighting control software",
  "Interaction design/ programming",
  "Mediacredits",
  "Project co-ordination",
  "Project sponsor/ support",
  "Host organization",
  "Facade design",
  "Facade construction",
  "Kinetic engineering"
];

export function PeopleData(rawData) {

// Clean contributors and set position
rawData.forEach(title => {
  const contributors = [];

  contributorFields.forEach(field => {
    let value = title[field];

    if (
      value &&
      String(value).trim() !== "" &&
      !["n/a", "none", "na", "/"].includes(String(value).trim().toLowerCase())
    ) {
      // Clean parentheses
      let cleaned = String(value).trim().replace(/\s*\([^)]*\)/g, "");

      // Normalize for case-insensitive checks
      const lowerCleaned = cleaned.toLowerCase();

      // Skip if contains .com or .net
      if (lowerCleaned.includes(".com") || lowerCleaned.includes(".net")) return;

      // Remove &amp and AV&C (case-insensitive)
      cleaned = cleaned.replace(/amp/gi, "");
      cleaned = cleaned.replace(/AV&C/gi, "");

      // Replace comma unless followed by exact suffixes (case-insensitive)
      cleaned = cleaned.replace(/, (?!(inc\b|ltd\b|llc\b|corp\b|co\b))/gi, "|");

      // Replace /, \, &, ; with |
      cleaned = cleaned.replace(/[\\\/&;] /g, "|");

      cleaned
        .split("|")
        .map(c => c.trim())
        .filter(Boolean)
        .forEach(name => {
          contributors.push({
            name,
            normalized: name.toLowerCase(),
            position: field,
            group: contributorFields.indexOf(field) + 1
          });
        });
    }
  });

  title.Contributors = contributors;
});

  
    // node → connectionNode
    const seenLinks = new Set();
    let links = rawData 
    .filter(d => d.Title && d.Contributors) 
    .flatMap(d => d.Contributors 
        // .split("|") 
        // .map(c => c.trim()) 
        // .filter(c => c) 
        .map(c => { 
        const key = `${d.Title.toLowerCase()}→${c.normalized}`;
        if (seenLinks.has(key)) return null; 
        seenLinks.add(key); 
        return { 
            source: d.Title, 
            target: c.normalized, 
            strength: 1 
        }; 
        }) 
    ) 
    .filter(Boolean);

    let nodeMap = {};

    // Add nodes
    rawData.forEach((item) => {
    if (!nodeMap[item.Title]) {
        nodeMap[item.Title] = {
        id: item.Title,
        label: item.Title,
        year: item.Year,
        location: item.Location,
        description: item.Description,
        tag: item.Tag,
        image: item["Images.1"],
        url: item.URL,
        size: 44,
        group: 9,
        file: item.URL.split("/")[5] + ".jpg"
        };
    }
    });

    // Add connectionNode
    rawData.forEach((item) => {
    if (!item.Contributors) return;
    item.Contributors
        // .split("|")
        // .map(name => name.trim())
        // .filter(name => name)
        .forEach(contributor => {
          const name = contributor.name;
          const position = contributor.position;
          const normalizedName = contributor.normalized;

        if (!nodeMap[normalizedName]) {
            nodeMap[normalizedName] = {
            id: normalizedName,
            label: name,
            size: 34,
            group: [group],
            positions: [position],
            projects: [item.Title]
            };
    } else {
      if (!nodeMap[normalizedName].positions.includes(position)) {
        nodeMap[normalizedName].positions.push(position);
      }
      if (!nodeMap[normalizedName].projects.includes(item.Title)) {
        nodeMap[normalizedName].projects.push(item.Title);
      }
        }
        });
    });

    // Count occurrences
    links.forEach((link) => {
    if (nodeMap[link.source]) {
        nodeMap[link.source].size = Math.min(nodeMap[link.source].size + 5, 100);
    }
    if (nodeMap[link.target]) {
        nodeMap[link.target].size = Math.min(nodeMap[link.target].size + 5, 100);
    }
    });

    const nodes = Object.values(nodeMap);  
    
    return { nodes, links };
}
