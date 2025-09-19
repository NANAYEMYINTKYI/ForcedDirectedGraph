// import fs from "fs";

// // ----- Customize Data Section -----
// import rawData from './../data/mabData.json' with { type: 'json' };
// // node = Title // Focus Node
// // connectionNode = People // Node for connection
// // Group 1-7 = Continent
// // Group 8 = Unknown
// // Group 9 = Project
// // ----- End Section -----

// const contributorFields = [
//   "Building or project owner",
//   "Architecture",
//   "Project artist/ concept/ design/ planning",
//   "Structural engineering",
//   "Light design",
//   "Technical layout light",
//   "Display content/ visuals/ showreel",
//   "Light hardware (LED hardware)",
//   "Lighting control software",
//   "Interaction design/ programming",
//   "Mediacredits",
//   "Project co-ordination",
//   "Project sponsor/ support",
//   "Host organization",
//   "Facade design",
//   "Facade construction",
//   "Kinetic engineering",
//   "Contributors"
// ];

// rawData.forEach(title => {
//   const contributors = [];

//   contributorFields.forEach(field => {
//     let value = title[field];

//     if (
//       value &&
//       value.trim() !== "" &&
//       !["n/a", "none", "na", "/"].includes(value.trim().toLowerCase())
//     ) {
//       let cleaned = value.trim().replace(/\s*\([^)]*\)/g, "");

//       if (cleaned.includes(".com") || cleaned.includes(".net")) return;

//       cleaned = cleaned.replace(/amp/g, "");
//       cleaned = cleaned.replace(/AV&C/g, "");
//       cleaned = cleaned.replace(/, (?=(?!inc|ltd|llc|corp|co))/gi, "|");
//       cleaned = cleaned.replace(/[\\&;]/g, "|");

//       // ✅ Store as object { name, position }
//       cleaned
//         .split("|")
//         .map(c => c.trim())
//         .filter(Boolean)
//         .forEach(c => {
//           contributors.push({ name: c, position: field });
//         });
//     }

//     delete title[field];
//   });

//   title.Contributors = contributors; // array of {name, position}
// });

// const seenLinks = new Set();

// let links = rawData
//   .filter(d => d.Title && d.Contributors && d.Contributors.length > 0)
//   .flatMap(d =>
//     d.Contributors.map(c => {
//       const key = `${d.Title}→${c.name}`;
//       if (seenLinks.has(key)) return null;
//       seenLinks.add(key);
//       return {
//         source: d.Title,
//         target: c.name,
//         strength: 1,
//         position: c.position // keep the edge role
//       };
//     })
//   )
//   .filter(Boolean);

// let nodeMap = {};

// // Add Title nodes (projects)
// rawData.forEach(item => {
//   if (!nodeMap[item.Title]) {
//     nodeMap[item.Title] = {
//       id: item.Title,
//       year: item.Year,
//       location: item.Location,
//       description: item.Description,
//       tag: item.Tag,
//       image: item["Images.1"],
//       url: item.URL,
//       size: 24,
//       group: 9,
//       file: item.URL.split("/")[5] + ".jpg"
//     };
//   }
// });

// // Add contributor nodes
// rawData.forEach(item => {
//   if (!item.Contributors) return;

//   item.Contributors.forEach(contributor => {
//     if (!nodeMap[contributor.name]) {
//       nodeMap[contributor.name] = {
//         id: contributor.name,
//         size: 24,
//         group: 8,
//         positions: [contributor.position],   // ✅ multiple roles
//         projects: [item.Title]               // ✅ start project list
//       };
//     } else {
//       // ✅ merge multiple positions
//       if (!nodeMap[contributor.name].positions.includes(contributor.position)) {
//         nodeMap[contributor.name].positions.push(contributor.position);
//       }
//       // ✅ merge multiple projects
//       if (!nodeMap[contributor.name].projects.includes(item.Title)) {
//         nodeMap[contributor.name].projects.push(item.Title);
//       }
//     }
//   });
// });

// // Count occurrences
// links.forEach(link => {
//   if (nodeMap[link.source]) {
//     nodeMap[link.source].size = Math.min(nodeMap[link.source].size + 1, 50);
//   }
//   if (nodeMap[link.target]) {
//     nodeMap[link.target].size = Math.min(nodeMap[link.target].size + 1, 50);
//   }
// });

// const nodes = Object.values(nodeMap);

// // Save Output
// fs.writeFileSync("./../data/PeopleLink.json", JSON.stringify(links, null, 2));
// fs.writeFileSync("./../data/PeopleNode.json", JSON.stringify(nodes, null, 2));

// console.log("✅ PeopleLink.json and PeopleNode.json generated with positions + projects!");

import fs from "fs";


// ----- Customize Data Section-----
import rawData from './../data/mabData.json' with { type: 'json' };
// node = Title // Focus Node
// connectionNode = People // Node for connection
// Group 1-7 = Continent
// Group 8 = Unknown
// Group 9 = Project
// ----- End Section -----


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

// Merge fields
// rawData.forEach(title => {
//   const contributors = [];

//   contributorFields.forEach(field => {
//     if (title[field] && title[field].trim() !== "" && title[field].trim() !== "n/a" && title[field].trim() !== "none") {
//       contributors.push(title[field].trim());
//     }
//     delete title[field];
//   });

//   title.Contributors = contributors.join(", ");
// });


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

//   contributorFields.forEach(field => {
//     if (title[field] 
//       && title[field].trim() !== "" 
//       && title[field].trim().toLowerCase() !== "n/a" 
//       && title[field].trim().toLowerCase() !== "none" 
//       && title[field].trim().toLowerCase() !== "na") {
//       const cleaned = title[field].trim().replace(/\s*\([^)]*\)/g, "");
//       contributors.push(cleaned);
//     }
//     delete title[field];
//   });

//   title.Contributors = contributors.join(", ");
// });



// node → connectionNode
const seenLinks = new Set();

let links = rawData 
  .filter(d => d.Title && d.Contributors) 
  .flatMap(d => d.Contributors 
    .split("") 
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

// Save Output
fs.writeFileSync("./../data/PeopleLink.json", JSON.stringify(links, null, 2));
fs.writeFileSync("./../data/PeopleNode.json", JSON.stringify(nodes, null, 2));

// console.log("✅ links.json and nodes.json generated!");