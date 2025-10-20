// This file have 3 sections: Color, Data, Image Assets

import * as d3 from 'd3';
import countryToContinent from 'country-json/src/country-by-continent.json' with { type: 'json' };

// ----- Color -----
export const graphcolor = {
  inactive: "rgba(135, 135, 135, 1)",
};

export const colorScale = d3.scaleOrdinal()
   .domain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18])
   .range(["#eb7270", "#eb9d70", "#ebc970", 
     "#e2eb70", "#b6eb70", "#8beb70", 
     "#70eb80", "#70ebac","#70ebd7",
     "#70d3eb","#70a8eb","#707ceb",
     "#8f70eb","#ba70eb","#e670eb",
     "#eb70c5","#eb7099","#000000ff"]);




// ----- Data -----
export const continentList = [
  { id: 1, name: "Africa" },
  { id: 3, name: "Asia" },
  { id: 5, name: "Europe" },
  { id: 7, name: "North America" },
  { id: 9, name: "South America" },
  { id: 11, name: "Antarctica" },
  { id: 13, name: "Oceania" }
];

export const defaultContinent = { id: 8, name: "Unknown" };

export const contributorFields = [
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



