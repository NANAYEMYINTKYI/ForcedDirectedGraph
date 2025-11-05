// This file have 3 sections: Color, Data, Image Assets

import * as d3 from 'd3';
import countryToContinent from 'country-json/src/country-by-continent.json' with { type: 'json' };

// ----- Color -----
export const graphcolor = {
  inactive: "rgba(135, 135, 135, 1)",
  link: "#ffffff62",
  stroke: 2.5,
  focuslink: "#FF5c00",
  focuscircle: "#FF5c00",
  focusstroke: 5,
  circlestroke: "steelblue",
  circlestrokesize: 2,
  nodetext: "#ffffffff",
  connectiontext: "#ffffffff",
};

export const colorScale = d3.scaleOrdinal()
   .domain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18])
   .range(["#3dc447", "#ef840f", "#0074fa", 
     "#d23be7", "#4355db", "#34bbe6", 
     "#49da9a", "#fcb337","#eb7532",
     "#e6261f","","",
     "","","",
     "","","#000000ff"]);

// ----- Data -----
export const continentList = [
  { groupid: 4, name: "Africa" },
  { groupid: 5, name: "Asia" },
  { groupid: 6, name: "Europe" },
  { groupid: 7, name: "North America" },
  { groupid: 8, name: "South America" },
  { groupid: 9, name: "Antarctica" },
  { groupid: 10, name: "Oceania" }
];

export const defaultContinent = { groupid: 8, name: "Unknown" };

export const contributorFields = [
  { groupid: 1, oldname: "Building or project owner", name: "Project owner"},
  { groupid: 1, oldname: "Project co-ordination", name: "Project co-ordination"},
  { groupid: 1, oldname: "Host organization", name: "Host organization"},
  { groupid: 1, oldname: "Project sponsor/ support", name: "Project support"},
  { groupid: 1, oldname: "Mediacredits", name: "Mediacredits"},
  { groupid: 2, oldname: "Architecture", name: "Architecture"},
  { groupid: 2, oldname: "Facade design", name: "Facade design"},
  { groupid: 2, oldname: "Light design", name: "Lighting design"},
  { groupid: 2, oldname: "Project artist/ concept/ design/ planning", name: "Project artist"},
  { groupid: 2, oldname: "Display content/ visuals/ showreel", name: "Visual content"},
  { groupid: 2, oldname: "Interaction design/ programming", name: "Interaction design"},
  { groupid: 3, oldname: "Structural engineering", name: "Structural engineer"},
  { groupid: 3, oldname: "Facade construction", name: "Facade construction"},
  { groupid: 3, oldname: "Kinetic engineering", name: "Kinetic engineering"},
  { groupid: 3, oldname: "Technical layout light", name: "Technical layout light"},
  { groupid: 3, oldname: "Light hardware (LED hardware)", name: "LED hardware"},
  { groupid: 3, oldname: "Lighting control software", name: "Lighting ctrl SW"},
];

export const contributergroup = [
  { groupid: 1, name: "Project Oversight and Stakeholders"},
  { groupid: 2, name: "Design and Concept Team"},
  { groupid: 3, name: "Engineering and Technical Team"},
]

export function updatedCountriesToContinent() {
  const additionalCountries = [
    { country: "United States of America", continent: "North America" }, 
    { country: "Kosovo", continent: "Europe" },
    { country: "Taiwan", continent: "Asia" }
  ];

  return [...countryToContinent, ...additionalCountries];
}


// ----- Image Assets -----
export function getImages() {
  const imageslist = import.meta.glob("../asset/image/*.{png,jpg,jpeg,svg}", {
    eager: true,
  });

  const image = {};
  
  Object.keys(imageslist).forEach((path) => {
    const fileName = path.split("/").pop();
    image[fileName] = imageslist[path].default || imageslist[path];
  });

  return image;
}
