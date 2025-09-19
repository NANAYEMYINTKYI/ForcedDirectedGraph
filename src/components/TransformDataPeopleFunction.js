// ----- Customize Data Section-----
// import rawData from './../data/FilterData.json' with { type: 'json' };
// node = Title // Focus Node
// connectionNode = People // Node for connection
// Group 1-7 = Continent
// Group 8 = Unknown
// Group 9 = Project
// ----- End Section -----

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
    "Kinetic engineering",
    "Contributors"
];

export function PeopleData(rawData) {
  // Clean contributors
rawData.forEach(title => {
  const contributors = [];

  contributorFields.forEach(field => {
    let value = title[field];

    if (
      value &&
      value.trim() !== "" &&
      !["n/a", "none", "na", "/"].includes(value.trim().toLowerCase())
    ) {
      // Clean parentheses
      let cleaned = value.trim().replace(/\s*\([^)]*\)/g, "");

      // Skip if contains .com or .net
      if (cleaned.includes(".com") || cleaned.includes(".net")) return;

      // Remove &amp
      cleaned = cleaned.replace(/amp/g, "");
      cleaned = cleaned.replace(/AV&C/g, "");

      // Replace /, \, & (not comma) with |
      cleaned = cleaned.replace(/, (?=(?!inc|ltd|llc|corp|co))/gi, "|");
      cleaned = cleaned.replace(/[\\&;]/g, "|");

      contributors.push(cleaned);
    }

    delete title[field];
  });

  title.Contributors = contributors.join("| ");
});




  // rawData.forEach(title => {
  //   const contributors = [];

  //   contributorFields.forEach(field => {
  //     if (
  //       title[field] &&
  //       title[field].trim() !== "" &&
  //       !["n/a", "none", "na"].includes(title[field].trim().toLowerCase())
  //     ) {
  //       const cleaned = title[field].trim().replace(/\s*\([^)]*\)/g, "");
  //       contributors.push(cleaned);
  //     }
  //     delete title[field];
  //   });

  //   title.Contributors = contributors.join("| ");
  // });
  
    // node → connectionNode
    const seenLinks = new Set();

    let links = rawData 
    .filter(d => d.Title && d.Contributors) 
    .flatMap(d => d.Contributors 
        .split("|") 
        .map(c => c.trim()) 
        .filter(c => c) 
        .map(c => { 
        const key = `${d.Title}→${c}`; 
        if (seenLinks.has(key)) return null; 
        seenLinks.add(key); 
        return { 
            source: d.Title, 
            target: c, 
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
        size: 54,
        group: 9,
        file: item.URL.split("/")[5] + ".jpg"
        };
    }
    });

    // Add connectionNode
    rawData.forEach((item) => {
    if (!item.Contributors) return;
    item.Contributors
        .split("|")
        .map(name => name.trim())
        .filter(name => name)
        .forEach(contributor => {
        if (!nodeMap[contributor]) {
            nodeMap[contributor] = {
            id: contributor,
            size: 34,
            group: 8
            };
        }
        });
    });

    // Count occurrences
    links.forEach((link) => {
    if (nodeMap[link.source]) {
        nodeMap[link.source].size = Math.min(nodeMap[link.source].size + 1, 100);
    }
    if (nodeMap[link.target]) {
        nodeMap[link.target].size = Math.min(nodeMap[link.target].size + 1, 100);
    }
    });

    const nodes = Object.values(nodeMap);  

    // console.log(nodes);
    return { nodes, links };
}
