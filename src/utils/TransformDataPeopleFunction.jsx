//--- This is the function to transform rawdata to nodes and links for "People Dataset" ---//
// NOTE: For changing contributerFields go to CustomData
// node = Title // Focus Node
// connectionNode = contributer // Node for connection
// Group 1-17 = Contributer Role
// Group 18 = Project

import {contributorFields} from './CustomData.jsx';

export function PeopleData(rawData) {

  // CLEAN CONTRIBUTORS AND SET POSITION IN RAWDATA
  rawData.forEach(title => {
    const contributors = [];

    contributorFields.forEach((field, idx) => {
      let value = title[field.oldname];

      if (
        // Ignore empty or invalid values
        value &&
        String(value).trim() !== "" &&
        !["n/a", "none", "na", "/"].includes(String(value).trim().toLowerCase())
      ) {
        // Clean parentheses
        let cleaned = String(value).trim()
          .replace(/\s*\([^)]*\)/g, "");

        // Normalize to all lower case
        const lowerCleaned = cleaned.toLowerCase();

        // Skip if contains .com or .net
        if (lowerCleaned.includes(".com") || lowerCleaned.includes(".net")) return;

        // Remove &amp and AV&C (case-insensitive)
        // Replace comma unless followed by exact suffixes (case-insensitive)
        // Replace /, \, &, ; with |
        cleaned = cleaned.replace(/amp/gi, "")
          .replace(/AV&C/gi, "")
          .replace(/, (?!(inc\b|ltd\b|llc\b|corp\b|co\b))/gi, "|")
          .replace(/[\\\/&;] /g, "|");

        // Create contributer fields in rawData
        cleaned
          .split("|")
          .map(c => c.trim())
          .filter(Boolean)
          .forEach(name => {
            contributors.push({
              name,
              normalized: name.toLowerCase(),
              position: field.name,
              group: idx + 1
            });
          }
        );
      }
    });
    title.contributors = contributors;
  });




  const seenLinks = new Set();

  // CREATE LINKS
  const links = rawData
    .filter(item => item.Title && item.contributors)
    .flatMap(item =>
      (item.contributors || [])
        .map(c => {
          if (!c.normalized) return null;

          const key = `${item.Title.toLowerCase()}→${c.normalized}`;
          if (seenLinks.has(key)) return null;

          seenLinks.add(key);
          return {
            source: item.Title.toUpperCase(),
            target: c.normalized,
            strength: 1
          };
        })
        .filter(Boolean)
    );




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
          contributors: item.contributors,
          size: 44,
          group: 18
        };
      }
    });

    // CREATE NODES FOR CONTRIBUTORS (CONNECTION NODE)
    rawData.forEach((item) => {
      if (!item.contributors) return;
      item.contributors
        .forEach(({ name, position, normalized, group }) => {
          const node = nodeMap[normalized];

          if (!node) {
            // New node
            nodeMap[normalized] = {
              id: normalized,
              label: name,
              size: 34,
              group: [group],
              positions: [position],
              projects: [item.Title]
            };
          } else {
            // Existing node - update positions, projects, group
            if (!node.positions.includes(position)) {
              node.positions.push(position);
            }
            if (!node.projects.includes(item.Title)) {
              node.projects.push(item.Title);
            }
            if (!node.group.includes(group)) {
              node.group.push(group);
            }
          }
        });
    });

    // Count occurrences to adjust node size
    links.forEach(({ source, target })  => {
      if (nodeMap[source]) {
        nodeMap[source].size = Math.min(nodeMap[source].size + 5, 100);
      }
      if (nodeMap[target]) {
        nodeMap[target].size = Math.min(nodeMap[target].size + 5, 100);
      }
    });

    const nodes = Object.values(nodeMap);  
    
    return { nodes, links };
}
