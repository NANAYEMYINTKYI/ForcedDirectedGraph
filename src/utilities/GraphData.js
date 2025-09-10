// Add new data here
// graphData.js - Data and utility functions for the force-directed graph

// Sample graph data
export const sampleNodes = [
  { id: "A", group: 1, size: 50, description: "Central Hub" },
  { id: "B", group: 1, size: 25, description: "Primary Node" },
  { id: "C", group: 2, size: 20, description: "Secondary Node" },
  { id: "D", group: 2, size: 18, description: "Data Processing" },
  { id: "E", group: 3, size: 10, description: "Edge Node" },
  { id: "F", group: 3, size: 14, description: "Analytics" },
  { id: "G", group: 1, size: 16, description: "Core System" },
  { id: "H", group: 2, size: 11, description: "Monitoring" },
  { id: "I", group: 3, size: 13, description: "Backup" },
  { id: "J", group: 1, size: 17, description: "Gateway" },
  { id: "K", group: 4, size: 9, description: "Satellite" },
  { id: "L", group: 4, size: 12, description: "Storage" }
];
// max:50 medium:25 
export const sampleLinks = [
  { source: "A", target: "B", strength: 1 },
  { source: "A", target: "C", strength: 0.8 },
  { source: "A", target: "D", strength: 1.2 },
  { source: "B", target: "E", strength: 0.6 },
  { source: "B", target: "G", strength: 1 },
  { source: "C", target: "F", strength: 0.7 },
  { source: "D", target: "H", strength: 0.9 },
  { source: "E", target: "I", strength: 0.5 },
  { source: "F", target: "J", strength: 0.8 },
  { source: "G", target: "J", strength: 1.1 },
  { source: "H", target: "I", strength: 0.6 },
  { source: "I", target: "K", strength: 0.4 },
  { source: "J", target: "L", strength: 0.7 },
  { source: "K", target: "L", strength: 0.5 },
  { source: "A", target: "J", strength: 1.3 }
];

// Alternative dataset - Network topology
export const networkNodes = [
  { id: "Router-1", group: 1, size: 25, description: "Main Router" },
  { id: "Switch-1", group: 2, size: 20, description: "Core Switch" },
  { id: "Switch-2", group: 2, size: 20, description: "Distribution Switch" },
  { id: "Server-1", group: 3, size: 18, description: "Web Server" },
  { id: "Server-2", group: 3, size: 18, description: "Database Server" },
  { id: "PC-1", group: 4, size: 12, description: "Workstation 1" },
  { id: "PC-2", group: 4, size: 12, description: "Workstation 2" },
  { id: "PC-3", group: 4, size: 12, description: "Workstation 3" },
  { id: "Printer", group: 5, size: 10, description: "Network Printer" },
  { id: "WiFi-AP", group: 6, size: 15, description: "WiFi Access Point" }
];

export const networkLinks = [
  { source: "Router-1", target: "Switch-1", strength: 1.5 },
  { source: "Switch-1", target: "Switch-2", strength: 1.2 },
  { source: "Switch-1", target: "Server-1", strength: 1.0 },
  { source: "Switch-1", target: "Server-2", strength: 1.0 },
  { source: "Switch-2", target: "PC-1", strength: 0.8 },
  { source: "Switch-2", target: "PC-2", strength: 0.8 },
  { source: "Switch-2", target: "PC-3", strength: 0.8 },
  { source: "Switch-2", target: "Printer", strength: 0.6 },
  { source: "Router-1", target: "WiFi-AP", strength: 1.0 }
];

// Social network dataset
export const socialNodes = [
  { id: "Alice", group: 1, size: 22, description: "Product Manager" },
  { id: "Bob", group: 1, size: 18, description: "Developer" },
  { id: "Carol", group: 2, size: 20, description: "Designer" },
  { id: "Dave", group: 2, size: 16, description: "UX Researcher" },
  { id: "Eve", group: 3, size: 19, description: "Marketing Lead" },
  { id: "Frank", group: 3, size: 15, description: "Content Creator" },
  { id: "Grace", group: 1, size: 17, description: "QA Engineer" },
  { id: "Henry", group: 4, size: 14, description: "Data Analyst" },
  { id: "Ivy", group: 4, size: 21, description: "DevOps Engineer" },
  { id: "Jack", group: 2, size: 13, description: "Junior Designer" }
];

export const socialLinks = [
  { source: "Alice", target: "Bob", strength: 1.2 },
  { source: "Alice", target: "Carol", strength: 0.9 },
  { source: "Alice", target: "Eve", strength: 1.0 },
  { source: "Bob", target: "Grace", strength: 1.1 },
  { source: "Carol", target: "Dave", strength: 1.3 },
  { source: "Carol", target: "Jack", strength: 0.8 },
  { source: "Dave", target: "Jack", strength: 1.0 },
  { source: "Eve", target: "Frank", strength: 1.2 },
  { source: "Henry", target: "Ivy", strength: 0.9 },
  { source: "Bob", target: "Ivy", strength: 0.7 },
  { source: "Alice", target: "Henry", strength: 0.6 }
];

// MABData

export const mabNodes = [
  [
  {
    "id": "Merck Light Cloud",
    "group": 5,
    "size": 25,
    "description": "Central Hub"
  },
  {
    "id": "+++ (read +�)",
    "group": 3,
    "size": 46,
    "description": "Central Hub"
  },
  {
    "id": "Halo",
    "group": 8,
    "size": 39,
    "description": "Central Hub"
  },
  {
    "id": "Light Cube",
    "group": 5,
    "size": 41,
    "description": "Central Hub"
  },
  {
    "id": "NSOMNIUM",
    "group": 5,
    "size": 45,
    "description": "Central Hub"
  },
  {
    "id": "Zoom Blue Dot",
    "group": 7,
    "size": 38,
    "description": "Central Hub"
  },
  {
    "id": "INSIDE OUT",
    "group": 4,
    "size": 43,
    "description": "Central Hub"
  },
  {
    "id": "Osmanthus Theme Park in Jinzhai Anhui",
    "group": 1,
    "size": 14,
    "description": "Central Hub"
  },
  {
    "id": "Solar Shimmer",
    "group": 8,
    "size": 43,
    "description": "Central Hub"
  },
  {
    "id": "Beijing Topwin Center",
    "group": 1,
    "size": 48,
    "description": "Central Hub"
  },
  {
    "id": "IMMERSION",
    "group": 4,
    "size": 43,
    "description": "Central Hub"
  },
  {
    "id": "Architecture Infinite Proliferating Geometry",
    "group": 2,
    "size": 1,
    "description": "Central Hub"
  },
  {
    "id": "Wavelength",
    "group": 2,
    "size": 34,
    "description": "Central Hub"
  },
  {
    "id": "GRCB BANK - Time Tells a Luminous Story",
    "group": 3,
    "size": 31,
    "description": "Central Hub"
  },
  {
    "id": "MUURmelaar",
    "group": 2,
    "size": 41,
    "description": "Central Hub"
  },
  {
    "id": "The residential complex \"Signature",
    "group": 6,
    "size": 42,
    "description": "Central Hub"
  },
  {
    "id": "Multifunctional complex \"Cascade Plaza",
    "group": 8,
    "size": 14,
    "description": "Central Hub"
  },
  {
    "id": "The shopping center \"Kubometr",
    "group": 3,
    "size": 24,
    "description": "Central Hub"
  },
  {
    "id": "UK Pavilion Light Sculpture and Panorama",
    "group": 7,
    "size": 10,
    "description": "Central Hub"
  },
  {
    "id": "Media sculpture \"Particles of life",
    "group": 1,
    "size": 3,
    "description": "Central Hub"
  },
  {
    "id": "Hyundai Pavilion Field of Stars",
    "group": 4,
    "size": 10,
    "description": "Central Hub"
  },
  {
    "id": "Interactive Media Structure \"Pulse of Life",
    "group": 4,
    "size": 26,
    "description": "Central Hub"
  },
  {
    "id": "Hyundai Pavilion Interactive Water Installation",
    "group": 2,
    "size": 35,
    "description": "Central Hub"
  },
  {
    "id": "Shopping center \"Passage",
    "group": 1,
    "size": 14,
    "description": "Central Hub"
  },
  {
    "id": "Residential complex \"Tetris Hall",
    "group": 4,
    "size": 25,
    "description": "Central Hub"
  },
  {
    "id": "Restaurant \"Normal",
    "group": 5,
    "size": 29,
    "description": "Central Hub"
  },
  {
    "id": "Residential complex \"Chicago Central House",
    "group": 2,
    "size": 28,
    "description": "Central Hub"
  },
  {
    "id": "Zeitkugeln",
    "group": 1,
    "size": 44,
    "description": "Central Hub"
  },
  {
    "id": "Terrell Place",
    "group": 3,
    "size": 38,
    "description": "Central Hub"
  },
  {
    "id": "The Infinity Room",
    "group": 3,
    "size": 43,
    "description": "Central Hub"
  },
  {
    "id": "Where Do We Go From Here?",
    "group": 2,
    "size": 19,
    "description": "Central Hub"
  },
  {
    "id": "Changi airport's terminal 4 \"Theatre of experience",
    "group": 7,
    "size": 21,
    "description": "Central Hub"
  },
  {
    "id": "One Shenzhen Bay",
    "group": 1,
    "size": 27,
    "description": "Central Hub"
  },
  {
    "id": "Firefly",
    "group": 2,
    "size": 1,
    "description": "Central Hub"
  },
  {
    "id": "Ralph Lauren 50th Anniversary Reflection",
    "group": 6,
    "size": 13,
    "description": "Central Hub"
  },
  {
    "id": "CyclePhilly",
    "group": 4,
    "size": 8,
    "description": "Central Hub"
  },
  {
    "id": "The Chanel Ginza Tower",
    "group": 2,
    "size": 33,
    "description": "Central Hub"
  },
  {
    "id": "USA 221",
    "group": 1,
    "size": 7,
    "description": "Central Hub"
  },
  {
    "id": "Wilkie Edge - Aamp, Singapore 2009",
    "group": 4,
    "size": 30,
    "description": "Central Hub"
  },
  {
    "id": "GS Caltex Pavilion",
    "group": 3,
    "size": 41,
    "description": "Central Hub"
  },
  {
    "id": "Dia Lights / Urban Canvas",
    "group": 3,
    "size": 19,
    "description": "Central Hub"
  },
  {
    "id": "Denmark Pavilion, Expo",
    "group": 7,
    "size": 12,
    "description": "Central Hub"
  },
  {
    "id": "Tha Paper Wave",
    "group": 7,
    "size": 50,
    "description": "Central Hub"
  },
  {
    "id": "UEC Iluma - Crystal Mesh",
    "group": 6,
    "size": 24,
    "description": "Central Hub"
  },
  {
    "id": "State Grid Pavilion",
    "group": 5,
    "size": 45,
    "description": "Central Hub"
  },
  {
    "id": "Sanya Phoenix Island",
    "group": 5,
    "size": 5,
    "description": "Central Hub"
  },
  {
    "id": "BIRLOKI System",
    "group": 4,
    "size": 33,
    "description": "Central Hub"
  },
  {
    "id": "Screens in the Wild",
    "group": 4,
    "size": 45,
    "description": "Central Hub"
  },
  {
    "id": "Harpa",
    "group": 7,
    "size": 42,
    "description": "Central Hub"
  },
  {
    "id": "Portable/Deflatable LED Matrix",
    "group": 5,
    "size": 13,
    "description": "Central Hub"
  },
  {
    "id": "Luanda Sports Pavilion",
    "group": 6,
    "size": 20,
    "description": "Central Hub"
  },
  {
    "id": "Walk of Stars",
    "group": 2,
    "size": 19,
    "description": "Central Hub"
  },
  {
    "id": "In The Air, Tonight",
    "group": 6,
    "size": 50,
    "description": "Central Hub"
  },
  {
    "id": "Living Sculpture",
    "group": 4,
    "size": 25,
    "description": "Central Hub"
  },
  {
    "id": "KPN Tower",
    "group": 2,
    "size": 9,
    "description": "Central Hub"
  },
  {
    "id": "Our Meeting Places",
    "group": 4,
    "size": 3,
    "description": "Central Hub"
  },
  {
    "id": "The World's Largest Time Piece",
    "group": 5,
    "size": 26,
    "description": "Central Hub"
  },
  {
    "id": "Morgan Stanley - Times Square Headquarters",
    "group": 3,
    "size": 23,
    "description": "Central Hub"
  },
  {
    "id": "Xindie",
    "group": 7,
    "size": 28,
    "description": "Central Hub"
  },
  {
    "id": "LED Frieze of the New Building of the Kunstmuseum Basel",
    "group": 2,
    "size": 37,
    "description": "Central Hub"
  },
  {
    "id": "Taman Anggrek",
    "group": 4,
    "size": 8,
    "description": "Central Hub"
  },
  {
    "id": "STAR",
    "group": 1,
    "size": 18,
    "description": "Central Hub"
  },
  {
    "id": "Silo 468 Kruunuvuorenranta",
    "group": 5,
    "size": 34,
    "description": "Central Hub"
  },
  {
    "id": "Hypersurface Architecture [Redux]",
    "group": 5,
    "size": 43,
    "description": "Central Hub"
  },
  {
    "id": "City of Dreams",
    "group": 8,
    "size": 10,
    "description": "Central Hub"
  },
  {
    "id": "Blinkenlights",
    "group": 5,
    "size": 27,
    "description": "Central Hub"
  },
  {
    "id": "Polymedia Pixel",
    "group": 4,
    "size": 9,
    "description": "Central Hub"
  },
  {
    "id": "Light Barrier",
    "group": 4,
    "size": 23,
    "description": "Central Hub"
  },
  {
    "id": "KLUBHAUS St. Pauli",
    "group": 1,
    "size": 16,
    "description": "Central Hub"
  },
  {
    "id": "NamyangJu Clean Center",
    "group": 5,
    "size": 29,
    "description": "Central Hub"
  },
  {
    "id": "The Sentiment Cocoon",
    "group": 3,
    "size": 4,
    "description": "Central Hub"
  },
  {
    "id": "Inteference",
    "group": 5,
    "size": 21,
    "description": "Central Hub"
  },
  {
    "id": "Urban Echoes",
    "group": 1,
    "size": 49,
    "description": "Central Hub"
  },
  {
    "id": "Star Place",
    "group": 8,
    "size": 17,
    "description": "Central Hub"
  },
  {
    "id": "Galleria Centercity",
    "group": 3,
    "size": 44,
    "description": "Central Hub"
  },
  {
    "id": "Digital Fountain",
    "group": 7,
    "size": 45,
    "description": "Central Hub"
  },
  {
    "id": "Mondeal Square",
    "group": 3,
    "size": 20,
    "description": "Central Hub"
  },
  {
    "id": "AEC - Ars Electronica Center",
    "group": 6,
    "size": 42,
    "description": "Central Hub"
  },
  {
    "id": "Floating Island",
    "group": 6,
    "size": 29,
    "description": "Central Hub"
  },
  {
    "id": "Nova",
    "group": 8,
    "size": 48,
    "description": "Central Hub"
  },
  {
    "id": "Distributed Projection Structure 2004",
    "group": 7,
    "size": 38,
    "description": "Central Hub"
  },
  {
    "id": "Filament Mind",
    "group": 6,
    "size": 36,
    "description": "Central Hub"
  },
  {
    "id": "In The Air, Tonight",
    "group": 6,
    "size": 24,
    "description": "Central Hub"
  },
  {
    "id": "Pipette",
    "group": 3,
    "size": 6,
    "description": "Central Hub"
  },
  {
    "id": "City Lights Orchestra",
    "group": 5,
    "size": 10,
    "description": "Central Hub"
  },
  {
    "id": "Spine",
    "group": 7,
    "size": 14,
    "description": "Central Hub"
  },
  {
    "id": "City Bug Report",
    "group": 5,
    "size": 25,
    "description": "Central Hub"
  },
  {
    "id": "Mendelssohn Effektorium",
    "group": 3,
    "size": 12,
    "description": "Central Hub"
  },
  {
    "id": "Le Circuit de Bachelard",
    "group": 5,
    "size": 6,
    "description": "Central Hub"
  },
  {
    "id": "Photophore",
    "group": 7,
    "size": 25,
    "description": "Central Hub"
  },
  {
    "id": "The Energy Tower fa��ade lighting",
    "group": 5,
    "size": 32,
    "description": "Central Hub"
  },
  {
    "id": "boxLEDs",
    "group": 2,
    "size": 3,
    "description": "Central Hub"
  },
  {
    "id": "Orkhestra, Orchestrating the Depth of Light",
    "group": 7,
    "size": 36,
    "description": "Central Hub"
  },
  {
    "id": "Augmented Urban Reality",
    "group": 7,
    "size": 39,
    "description": "Central Hub"
  },
  {
    "id": "Train station Falkenberg",
    "group": 2,
    "size": 8,
    "description": "Central Hub"
  },
  {
    "id": "Shanghai World Financial Center (SWFC)",
    "group": 3,
    "size": 29,
    "description": "Central Hub"
  },
  {
    "id": "Field of Light",
    "group": 5,
    "size": 12,
    "description": "Central Hub"
  },
  {
    "id": "National Library",
    "group": 3,
    "size": 46,
    "description": "Central Hub"
  },
  {
    "id": "Affinity : Interactive Art Installation",
    "group": 4,
    "size": 43,
    "description": "Central Hub"
  },
  {
    "id": "Urban Alphabets",
    "group": 4,
    "size": 22,
    "description": "Central Hub"
  },
  {
    "id": "C4 Espacio de Creaci�n Art��stica Contempor�nea",
    "group": 4,
    "size": 10,
    "description": "Central Hub"
  },
  {
    "id": "TWEETx",
    "group": 7,
    "size": 48,
    "description": "Central Hub"
  },
  {
    "id": "Grand Lisboa",
    "group": 4,
    "size": 19,
    "description": "Central Hub"
  },
  {
    "id": "Marnix",
    "group": 5,
    "size": 43,
    "description": "Central Hub"
  },
  {
    "id": "Submergence",
    "group": 6,
    "size": 34,
    "description": "Central Hub"
  },
  {
    "id": "Kunsthaus - BIX",
    "group": 6,
    "size": 48,
    "description": "Central Hub"
  },
  {
    "id": "Human BEEing",
    "group": 5,
    "size": 9,
    "description": "Central Hub"
  },
  {
    "id": "FLARE Fa��ade",
    "group": 3,
    "size": 21,
    "description": "Central Hub"
  },
  {
    "id": "YTN Center",
    "group": 3,
    "size": 20,
    "description": "Central Hub"
  },
  {
    "id": "Augmented Structures v1.1",
    "group": 6,
    "size": 10,
    "description": "Central Hub"
  },
  {
    "id": "FLUIDIC",
    "group": 3,
    "size": 22,
    "description": "Central Hub"
  },
  {
    "id": "Lotus Dome",
    "group": 7,
    "size": 25,
    "description": "Central Hub"
  },
  {
    "id": "Waterlicht",
    "group": 7,
    "size": 6,
    "description": "Central Hub"
  },
  {
    "id": "The ARC River Culture Pavilion",
    "group": 7,
    "size": 29,
    "description": "Central Hub"
  },
  {
    "id": "Megaphone",
    "group": 6,
    "size": 32,
    "description": "Central Hub"
  },
  {
    "id": "Kinetic Fa��ade - Theme Pavilion",
    "group": 6,
    "size": 23,
    "description": "Central Hub"
  },
  {
    "id": "digitalMatatus",
    "group": 7,
    "size": 21,
    "description": "Central Hub"
  },
  {
    "id": "Thought Process",
    "group": 6,
    "size": 23,
    "description": "Central Hub"
  },
  {
    "id": "Control no control",
    "group": 2,
    "size": 33,
    "description": "Central Hub"
  },
  {
    "id": "Water Light Graffiti",
    "group": 7,
    "size": 17,
    "description": "Central Hub"
  },
  {
    "id": "Ninety Six",
    "group": 1,
    "size": 28,
    "description": "Central Hub"
  },
  {
    "id": "MegaFaces",
    "group": 8,
    "size": 10,
    "description": "Central Hub"
  },
  {
    "id": "Spaxels",
    "group": 1,
    "size": 47,
    "description": "Central Hub"
  },
  {
    "id": "Klubhaus St.Pauli - Mediafa��ade Lift",
    "group": 2,
    "size": 50,
    "description": "Central Hub"
  },
  {
    "id": "Discovery Wall",
    "group": 4,
    "size": 2,
    "description": "Central Hub"
  },
  {
    "id": "Lummoblocks",
    "group": 6,
    "size": 2,
    "description": "Central Hub"
  },
  {
    "id": "Galleria Store",
    "group": 4,
    "size": 43,
    "description": "Central Hub"
  },
  {
    "id": "Qube",
    "group": 4,
    "size": 31,
    "description": "Central Hub"
  },
  {
    "id": "LAX - Tom Bradley International Terminal",
    "group": 5,
    "size": 23,
    "description": "Central Hub"
  },
  {
    "id": "Flyfire",
    "group": 4,
    "size": 28,
    "description": "Central Hub"
  },
  {
    "id": "The Luminous Pathway in the Quartier des Spectacles",
    "group": 8,
    "size": 15,
    "description": "Central Hub"
  },
  {
    "id": "Saxo Reactive Ceiling",
    "group": 1,
    "size": 10,
    "description": "Central Hub"
  },
  {
    "id": "Seestadt.bot",
    "group": 2,
    "size": 47,
    "description": "Central Hub"
  },
  {
    "id": "ARCHIVE DREAMING",
    "group": 3,
    "size": 9,
    "description": "Central Hub"
  },
  {
    "id": "The Dash Wall",
    "group": 4,
    "size": 13,
    "description": "Central Hub"
  },
  {
    "id": "iLIGHT",
    "group": 6,
    "size": 37,
    "description": "Central Hub"
  },
  {
    "id": "World Collider",
    "group": 7,
    "size": 20,
    "description": "Central Hub"
  },
  {
    "id": "UNIFUN Tianfu Chengdu",
    "group": 7,
    "size": 8,
    "description": "Central Hub"
  },
  {
    "id": "Sonic Runway",
    "group": 6,
    "size": 37,
    "description": "Central Hub"
  },
  {
    "id": "urban lights contact",
    "group": 1,
    "size": 11,
    "description": "Central Hub"
  },
  {
    "id": "Synergies",
    "group": 2,
    "size": 42,
    "description": "Central Hub"
  },
  {
    "id": "Uptown Underground",
    "group": 7,
    "size": 33,
    "description": "Central Hub"
  },
  {
    "id": "The labyrinth",
    "group": 4,
    "size": 48,
    "description": "Central Hub"
  },
  {
    "id": "Rosa Center shopping mall",
    "group": 7,
    "size": 49,
    "description": "Central Hub"
  },
  {
    "id": "XII Porcelanosa architecture and interior design awards",
    "group": 6,
    "size": 6,
    "description": "Central Hub"
  },
  {
    "id": "Data Eye of Wangjing",
    "group": 5,
    "size": 17,
    "description": "Central Hub"
  },
  {
    "id": "Simple Sensors",
    "group": 7,
    "size": 29,
    "description": "Central Hub"
  },
  {
    "id": "LAN - 4",
    "group": 5,
    "size": 37,
    "description": "Central Hub"
  },
  {
    "id": "DAZZLE | San Diego International Airport",
    "group": 1,
    "size": 30,
    "description": "Central Hub"
  },
  {
    "id": "eCLOUD | San Jose International Airport",
    "group": 8,
    "size": 24,
    "description": "Central Hub"
  },
  {
    "id": "Maanaviat (spirituality)",
    "group": 1,
    "size": 12,
    "description": "Central Hub"
  },
  {
    "id": "building dawn",
    "group": 5,
    "size": 2,
    "description": "Central Hub"
  },
  {
    "id": "Community Engagement through Augmented Reality - Curiocity Brisbane",
    "group": 4,
    "size": 9,
    "description": "Central Hub"
  },
  {
    "id": "Son et Culinaire",
    "group": 5,
    "size": 6,
    "description": "Central Hub"
  },
  {
    "id": "Radisson BLU Scandinavia",
    "group": 6,
    "size": 6,
    "description": "Central Hub"
  },
  {
    "id": "Shenzhen Planning Exhibition",
    "group": 7,
    "size": 37,
    "description": "Central Hub"
  },
  {
    "id": "AMANDOLIER FA��ADE",
    "group": 2,
    "size": 12,
    "description": "Central Hub"
  },
  {
    "id": "TIETO HQ",
    "group": 3,
    "size": 31,
    "description": "Central Hub"
  },
  {
    "id": "Sunscriber",
    "group": 6,
    "size": 3,
    "description": "Central Hub"
  },
  {
    "id": "Preservation of Silence",
    "group": 6,
    "size": 23,
    "description": "Central Hub"
  },
  {
    "id": "The abode of the outside",
    "group": 7,
    "size": 19,
    "description": "Central Hub"
  },
  {
    "id": "Hearing From You",
    "group": 2,
    "size": 39,
    "description": "Central Hub"
  },
  {
    "id": "Variegation Index",
    "group": 7,
    "size": 26,
    "description": "Central Hub"
  },
  {
    "id": "Shadow Wall",
    "group": 4,
    "size": 29,
    "description": "Central Hub"
  },
  {
    "id": "Woodie",
    "group": 6,
    "size": 44,
    "description": "Central Hub"
  },
  {
    "id": "FUTURE VISION LAB",
    "group": 2,
    "size": 40,
    "description": "Central Hub"
  },
  {
    "id": "Aukio",
    "group": 5,
    "size": 33,
    "description": "Central Hub"
  },
  {
    "id": "Media architecture cluster Real-scene simulation and design prototype",
    "group": 1,
    "size": 38,
    "description": "Central Hub"
  },
  {
    "id": "VIRTUAL WALLS - TORRECARDENAS",
    "group": 4,
    "size": 46,
    "description": "Central Hub"
  },
  {
    "id": "Spatial Animacy",
    "group": 8,
    "size": 37,
    "description": "Central Hub"
  },
  {
    "id": "Interactive Media Sculpture \"The Tree of Knowledge",
    "group": 7,
    "size": 31,
    "description": "Central Hub"
  },
  {
    "id": "Loom Light",
    "group": 8,
    "size": 3,
    "description": "Central Hub"
  },
  {
    "id": "Interactive application Dolphins Creator",
    "group": 5,
    "size": 19,
    "description": "Central Hub"
  },
  {
    "id": "Architectural and Decorative Lighting of Freedom Square in Mariupol",
    "group": 5,
    "size": 23,
    "description": "Central Hub"
  },
  {
    "id": "Interactive Screen on the Boulevard of arts",
    "group": 3,
    "size": 46,
    "description": "Central Hub"
  },
  {
    "id": "Lighting for Boulevard of Arts",
    "group": 2,
    "size": 7,
    "description": "Central Hub"
  },
  {
    "id": "REQUIEM",
    "group": 5,
    "size": 48,
    "description": "Central Hub"
  },
  {
    "id": "SP_Urban Arte Conecta",
    "group": 2,
    "size": 33,
    "description": "Central Hub"
  },
  {
    "id": "MAX CENTER",
    "group": 6,
    "size": 21,
    "description": "Central Hub"
  },
  {
    "id": "Novartis Pavillon",
    "group": 4,
    "size": 10,
    "description": "Central Hub"
  },
  {
    "id": "Light art installation Beacon",
    "group": 6,
    "size": 46,
    "description": "Central Hub"
  },
  {
    "id": "atmospheric spaces",
    "group": 6,
    "size": 35,
    "description": "Central Hub"
  },
  {
    "id": "Star Hunters",
    "group": 2,
    "size": 43,
    "description": "Central Hub"
  },
  {
    "id": "Catholic Church of St. Nicholas",
    "group": 5,
    "size": 50,
    "description": "Central Hub"
  },
  {
    "id": "Optical Footprint",
    "group": 7,
    "size": 4,
    "description": "Central Hub"
  },
  {
    "id": "Spectator and Spectacle",
    "group": 4,
    "size": 19,
    "description": "Central Hub"
  },
  {
    "id": "Interactive Media Sculpture The Cube",
    "group": 5,
    "size": 35,
    "description": "Central Hub"
  },
  {
    "id": "Lighting for the Tetris Hall Residential Complex",
    "group": 7,
    "size": 28,
    "description": "Central Hub"
  },
  {
    "id": "Between Waves",
    "group": 7,
    "size": 16,
    "description": "Central Hub"
  },
  {
    "id": "The 4th Street SW Underpass Enhancement Project",
    "group": 2,
    "size": 23,
    "description": "Central Hub"
  },
  {
    "id": "Dnipro Light Flower",
    "group": 1,
    "size": 40,
    "description": "Central Hub"
  },
  {
    "id": "Hamaja",
    "group": 7,
    "size": 27,
    "description": "Central Hub"
  },
  {
    "id": "The Pearl Divers",
    "group": 5,
    "size": 48,
    "description": "Central Hub"
  },
  {
    "id": "GROW",
    "group": 5,
    "size": 32,
    "description": "Central Hub"
  },
  {
    "id": "Urban Sun",
    "group": 4,
    "size": 38,
    "description": "Central Hub"
  },
  {
    "id": "LEVENSLICHT",
    "group": 7,
    "size": 6,
    "description": "Central Hub"
  },
  {
    "id": "Window into the Seas",
    "group": 7,
    "size": 28,
    "description": "Central Hub"
  },
  {
    "id": "Touching Night Skies 50°06'44\"N 8°40'36\"E",
    "group": 2,
    "size": 41,
    "description": "Central Hub"
  },
  {
    "id": "The Webster - Narrative Lighting Wall",
    "group": 7,
    "size": 32,
    "description": "Central Hub"
  },
  {
    "id": "Bahrain International Circuit",
    "group": 8,
    "size": 1,
    "description": "Central Hub"
  },
  {
    "id": "Landscapes of Dreams",
    "group": 8,
    "size": 14,
    "description": "Central Hub"
  },
  {
    "id": "INTERACTIVE CLOUD",
    "group": 8,
    "size": 17,
    "description": "Central Hub"
  },
  {
    "id": "MAGIC MIRROR",
    "group": 3,
    "size": 12,
    "description": "Central Hub"
  },
  {
    "id": "The Pipes",
    "group": 5,
    "size": 26,
    "description": "Central Hub"
  },
  {
    "id": "Still Light",
    "group": 2,
    "size": 37,
    "description": "Central Hub"
  },
  {
    "id": "Para Social",
    "group": 5,
    "size": 5,
    "description": "Central Hub"
  },
  {
    "id": "Wervel [Turmoil]",
    "group": 7,
    "size": 31,
    "description": "Central Hub"
  },
  {
    "id": "Guerrilha projections against Bolsonaro",
    "group": 5,
    "size": 19,
    "description": "Central Hub"
  },
  {
    "id": "M+ Facade",
    "group": 6,
    "size": 31,
    "description": "Central Hub"
  },
  {
    "id": "Peter Jones & Partners",
    "group": 8,
    "size": 33,
    "description": "Central Hub"
  },
  {
    "id": "Digital Phyllotaxy",
    "group": 4,
    "size": 46,
    "description": "Central Hub"
  },
  {
    "id": "Macula",
    "group": 8,
    "size": 24,
    "description": "Central Hub"
  },
  {
    "id": "ZIEN",
    "group": 3,
    "size": 27,
    "description": "Central Hub"
  },
  {
    "id": "ZOE",
    "group": 3,
    "size": 41,
    "description": "Central Hub"
  },
  {
    "id": "Ecran de Veille / Screen Savour",
    "group": 7,
    "size": 19,
    "description": "Central Hub"
  },
  {
    "id": "Chatty Bench Festival Community Media Visual Projections",
    "group": 5,
    "size": 26,
    "description": "Central Hub"
  },
  {
    "id": "The Cellular Fidelity",
    "group": 2,
    "size": 11,
    "description": "Central Hub"
  },
  {
    "id": "Orlando International Airport Terminal C",
    "group": 6,
    "size": 32,
    "description": "Central Hub"
  },
  {
    "id": "Spatial Intimacy",
    "group": 3,
    "size": 49,
    "description": "Central Hub"
  },
  {
    "id": "The Eye of Mexico",
    "group": 2,
    "size": 40,
    "description": "Central Hub"
  },
  {
    "id": "�Room of Negotiation�",
    "group": 7,
    "size": 38,
    "description": "Central Hub"
  },
  {
    "id": "Light Falls",
    "group": 3,
    "size": 42,
    "description": "Central Hub"
  },
  {
    "id": "ANTopolis",
    "group": 7,
    "size": 23,
    "description": "Central Hub"
  },
  {
    "id": "Helsinki Outlet",
    "group": 6,
    "size": 15,
    "description": "Central Hub"
  },
  {
    "id": "All Colors Are In The Lights",
    "group": 8,
    "size": 18,
    "description": "Central Hub"
  },
  {
    "id": "Greetings from Everywhere",
    "group": 4,
    "size": 3,
    "description": "Central Hub"
  },
  {
    "id": "Wandering Corners",
    "group": 7,
    "size": 7,
    "description": "Central Hub"
  },
  {
    "id": "High Speed Relations",
    "group": 6,
    "size": 3,
    "description": "Central Hub"
  },
  {
    "id": "Sunscriber",
    "group": 3,
    "size": 6,
    "description": "Central Hub"
  },
  {
    "id": "False Positive",
    "group": 8,
    "size": 39,
    "description": "Central Hub"
  },
  {
    "id": "Plant a Light",
    "group": 3,
    "size": 21,
    "description": "Central Hub"
  },
  {
    "id": "The Light House: 888 Collins St",
    "group": 2,
    "size": 18,
    "description": "Central Hub"
  },
  {
    "id": "The Digital Bricks",
    "group": 7,
    "size": 10,
    "description": "Central Hub"
  },
  {
    "id": "La Sprite",
    "group": 1,
    "size": 46,
    "description": "Central Hub"
  },
  {
    "id": "PASSAGES",
    "group": 1,
    "size": 21,
    "description": "Central Hub"
  },
  {
    "id": "ARCHIVE DREAMING",
    "group": 3,
    "size": 22,
    "description": "Central Hub"
  },
  {
    "id": "Northside Beacons",
    "group": 7,
    "size": 42,
    "description": "Central Hub"
  },
  {
    "id": "LightSpell",
    "group": 4,
    "size": 27,
    "description": "Central Hub"
  },
  {
    "id": "LightLines",
    "group": 7,
    "size": 33,
    "description": "Central Hub"
  },
  {
    "id": "Kipnes Lantern",
    "group": 2,
    "size": 31,
    "description": "Central Hub"
  },
  {
    "id": "Arena",
    "group": 6,
    "size": 7,
    "description": "Central Hub"
  },
  {
    "id": "Salling Lights",
    "group": 3,
    "size": 38,
    "description": "Central Hub"
  },
  {
    "id": "Digital Calligraffiti",
    "group": 7,
    "size": 41,
    "description": "Central Hub"
  },
  {
    "id": "Monument Remix",
    "group": 6,
    "size": 31,
    "description": "Central Hub"
  },
  {
    "id": "Federation Square Digital Canvas",
    "group": 1,
    "size": 38,
    "description": "Central Hub"
  },
  {
    "id": "waterlight graffiti",
    "group": 3,
    "size": 5,
    "description": "Central Hub"
  },
  {
    "id": "Yagan Square",
    "group": 7,
    "size": 28,
    "description": "Central Hub"
  },
  {
    "id": "Smog Free Project",
    "group": 5,
    "size": 47,
    "description": "Central Hub"
  },
  {
    "id": "Digital neighbourhood",
    "group": 4,
    "size": 21,
    "description": "Central Hub"
  },
  {
    "id": "Chave do Centro or \"The Key to Downtown",
    "group": 3,
    "size": 47,
    "description": "Central Hub"
  },
  {
    "id": "BioLumen",
    "group": 4,
    "size": 46,
    "description": "Central Hub"
  },
  {
    "id": "Yellow Dust",
    "group": 2,
    "size": 42,
    "description": "Central Hub"
  },
  {
    "id": "Dragon Scale",
    "group": 5,
    "size": 18,
    "description": "Central Hub"
  },
  {
    "id": "The Playground",
    "group": 4,
    "size": 5,
    "description": "Central Hub"
  },
  {
    "id": "Chatty Bench Project: Radical Media Architecture in Precarious Times",
    "group": 6,
    "size": 42,
    "description": "Central Hub"
  },
  {
    "id": "Shuttercam",
    "group": 2,
    "size": 18,
    "description": "Central Hub"
  },
  {
    "id": "Sleepers of Haslev",
    "group": 6,
    "size": 44,
    "description": "Central Hub"
  },
  {
    "id": "Wuhan Optics Valley Square Complex Theme Ground Sculpture",
    "group": 2,
    "size": 35,
    "description": "Central Hub"
  },
  {
    "id": "La Lune Est' / 'The Moon Is'",
    "group": 2,
    "size": 35,
    "description": "Central Hub"
  },
  {
    "id": "PO�ME D'�CRAN' / 'SCREEN POEM'",
    "group": 4,
    "size": 39,
    "description": "Central Hub"
  },
  {
    "id": "[ i miss your touch ] by PluginHUMAN.",
    "group": 6,
    "size": 14,
    "description": "Central Hub"
  },
  {
    "id": "Inhibition",
    "group": 7,
    "size": 2,
    "description": "Central Hub"
  },
  {
    "id": "Gibigiana",
    "group": 7,
    "size": 14,
    "description": "Central Hub"
  },
  {
    "id": "Walk Walk Dance",
    "group": 5,
    "size": 40,
    "description": "Central Hub"
  },
  {
    "id": "Stadt der Temperamente",
    "group": 1,
    "size": 14,
    "description": "Central Hub"
  },
  {
    "id": "Citizen Dialog Kit",
    "group": 6,
    "size": 38,
    "description": "Central Hub"
  },
  {
    "id": "Project: Galath3a Germany",
    "group": 5,
    "size": 35,
    "description": "Central Hub"
  },
  {
    "id": "Commons Sense, Manifesta 14",
    "group": 4,
    "size": 13,
    "description": "Central Hub"
  }
]
]

export const mabLinks =[
  [
  {
    "source": "Merck Light Cloud",
    "target": "Germany, Darmstadt",
    "strength": 1
  },
  {
    "source": "+++ (read +�)",
    "target": "Brazil, Sao Paulo",
    "strength": 1
  },
  {
    "source": "Halo",
    "target": "United Kingdom, London",
    "strength": 1
  },
  {
    "source": "Light Cube",
    "target": "Russia, Moscow",
    "strength": 1
  },
  {
    "source": "NSOMNIUM",
    "target": "Spain, MADRID",
    "strength": 1
  },
  {
    "source": "Zoom Blue Dot",
    "target": "United States of America, Norway, Trondheim",
    "strength": 1
  },
  {
    "source": "INSIDE OUT",
    "target": "Germany, Weimar",
    "strength": 1
  },
  {
    "source": "Osmanthus Theme Park in Jinzhai Anhui",
    "target": "China, Lu'an, Anhui",
    "strength": 1
  },
  {
    "source": "Solar Shimmer",
    "target": "Qatar, Doha",
    "strength": 1
  },
  {
    "source": "Beijing Topwin Center",
    "target": "China, Beijing",
    "strength": 1
  },
  {
    "source": "IMMERSION",
    "target": "Spain, ASTURIAS",
    "strength": 1
  },
  {
    "source": "Architecture Infinite Proliferating Geometry",
    "target": "South Korea, Seoul",
    "strength": 1
  },
  {
    "source": "Wavelength",
    "target": "Australia, Sydney",
    "strength": 1
  },
  {
    "source": "GRCB BANK - Time Tells a Luminous Story",
    "target": "China, Guangzhou",
    "strength": 1
  },
  {
    "source": "MUURmelaar",
    "target": "Belgium, Leuven",
    "strength": 1
  },
  {
    "source": "The residential complex \"Signature",
    "target": "Ukraine, Kiev",
    "strength": 1
  },
  {
    "source": "Multifunctional complex \"Cascade Plaza",
    "target": "Ukraine, Dnipro",
    "strength": 1
  },
  {
    "source": "The shopping center \"Kubometr",
    "target": "Ukraine, Dnipro",
    "strength": 1
  },
  {
    "source": "UK Pavilion Light Sculpture and Panorama",
    "target": "Kazakhstan, Astana",
    "strength": 1
  },
  {
    "source": "Media sculpture \"Particles of life",
    "target": "Ukraine, Odesa",
    "strength": 1
  },
  {
    "source": "Hyundai Pavilion Field of Stars",
    "target": "South Korea, Pyeongchang",
    "strength": 1
  },
  {
    "source": "Interactive Media Structure \"Pulse of Life",
    "target": "France, Paris",
    "strength": 1
  },
  {
    "source": "Hyundai Pavilion Interactive Water Installation",
    "target": "South Korea, Pyeongchang",
    "strength": 1
  },
  {
    "source": "Shopping center \"Passage",
    "target": "Ukraine, Dnipro",
    "strength": 1
  },
  {
    "source": "Residential complex \"Tetris Hall",
    "target": "Ukraine, Kiev",
    "strength": 1
  },
  {
    "source": "Restaurant \"Normal",
    "target": "Ukraine, Kiev",
    "strength": 1
  },
  {
    "source": "Residential complex \"Chicago Central House",
    "target": "Ukraine, Dnipro",
    "strength": 1
  },
  {
    "source": "Zeitkugeln",
    "target": "Austria, Vienna",
    "strength": 1
  },
  {
    "source": "Terrell Place",
    "target": "United States of America, Washington, D.C.",
    "strength": 1
  },
  {
    "source": "The Infinity Room",
    "target": "Germany, Weimar",
    "strength": 1
  },
  {
    "source": "Where Do We Go From Here?",
    "target": "United Kingdom, Hull",
    "strength": 1
  },
  {
    "source": "Changi airport's terminal 4 \"Theatre of experience",
    "target": "Singapore, Singapore",
    "strength": 1
  },
  {
    "source": "One Shenzhen Bay",
    "target": "China, Shenzhen",
    "strength": 1
  },
  {
    "source": "Firefly",
    "target": "France, Paris",
    "strength": 1
  },
  {
    "source": "Ralph Lauren 50th Anniversary Reflection",
    "target": "United States of America, New York City",
    "strength": 1
  },
  {
    "source": "CyclePhilly",
    "target": "United States of America, Philadelphia",
    "strength": 1
  },
  {
    "source": "The Chanel Ginza Tower",
    "target": "Japan, Tokyo",
    "strength": 1
  },
  {
    "source": "USA 221",
    "target": "United States of America, San Francisco",
    "strength": 1
  },
  {
    "source": "Wilkie Edge - Aamp, Singapore 2009",
    "target": "Singapore, Singapore",
    "strength": 1
  },
  {
    "source": "GS Caltex Pavilion",
    "target": "South Korea, Yeosu",
    "strength": 1
  },
  {
    "source": "Dia Lights / Urban Canvas",
    "target": "Denmark, Aarhus",
    "strength": 1
  },
  {
    "source": "Denmark Pavilion, Expo",
    "target": "China, Shanghai",
    "strength": 1
  },
  {
    "source": "Tha Paper Wave",
    "target": "France, Paris",
    "strength": 1
  },
  {
    "source": "UEC Iluma - Crystal Mesh",
    "target": "Singapore, Singapore",
    "strength": 1
  },
  {
    "source": "State Grid Pavilion",
    "target": "China, Shanghai",
    "strength": 1
  },
  {
    "source": "Sanya Phoenix Island",
    "target": "China, Sanya",
    "strength": 1
  },
  {
    "source": "BIRLOKI System",
    "target": "Spain, Singapore, Bilbao, Singapore",
    "strength": 1
  },
  {
    "source": "Screens in the Wild",
    "target": "United Kingdom, London and Nottingham",
    "strength": 1
  },
  {
    "source": "Harpa",
    "target": "Iceland, Reykjavik",
    "strength": 1
  },
  {
    "source": "Portable/Deflatable LED Matrix",
    "target": "Austria, Vienna",
    "strength": 1
  },
  {
    "source": "Luanda Sports Pavilion",
    "target": "Angola, Luanda",
    "strength": 1
  },
  {
    "source": "Walk of Stars",
    "target": "China, Wuhan",
    "strength": 1
  },
  {
    "source": "In The Air, Tonight",
    "target": "Canada, Toronto",
    "strength": 1
  },
  {
    "source": "Living Sculpture",
    "target": "Germany, Frankfurt",
    "strength": 1
  },
  {
    "source": "KPN Tower",
    "target": "Netherlands, Rotterdam",
    "strength": 1
  },
  {
    "source": "Our Meeting Places",
    "target": "Germany, Weimar",
    "strength": 1
  },
  {
    "source": "The World's Largest Time Piece",
    "target": "Switzerland, Zurich",
    "strength": 1
  },
  {
    "source": "Morgan Stanley - Times Square Headquarters",
    "target": "United States of America, New York",
    "strength": 1
  },
  {
    "source": "Xindie",
    "target": "South Korea, Seoul",
    "strength": 1
  },
  {
    "source": "LED Frieze of the New Building of the Kunstmuseum Basel",
    "target": "Switzerland, Basel",
    "strength": 1
  },
  {
    "source": "Taman Anggrek",
    "target": "Indonesia, Jakarta",
    "strength": 1
  },
  {
    "source": "STAR",
    "target": "Malaysia, BUTTERWORTH, PENANG",
    "strength": 1
  },
  {
    "source": "Silo 468 Kruunuvuorenranta",
    "target": "Finland, Helsinki",
    "strength": 1
  },
  {
    "source": "Hypersurface Architecture [Redux]",
    "target": "Australia,",
    "strength": 1
  },
  {
    "source": "City of Dreams",
    "target": "China, Macau",
    "strength": 1
  },
  {
    "source": "Blinkenlights",
    "target": "Germany, Berlin",
    "strength": 1
  },
  {
    "source": "Polymedia Pixel",
    "target": "Australia,",
    "strength": 1
  },
  {
    "source": "Light Barrier",
    "target": "Russia, South Korea, Nikola-Lenivets and Seoul",
    "strength": 1
  },
  {
    "source": "KLUBHAUS St. Pauli",
    "target": "Germany, Hamburg",
    "strength": 1
  },
  {
    "source": "NamyangJu Clean Center",
    "target": "South Korea, Gyeomggi-do",
    "strength": 1
  },
  {
    "source": "The Sentiment Cocoon",
    "target": "United Kingdom, London",
    "strength": 1
  },
  {
    "source": "Inteference",
    "target": "Denmark, Kolding",
    "strength": 1
  },
  {
    "source": "Urban Echoes",
    "target": "Finland, Oulu",
    "strength": 1
  },
  {
    "source": "Star Place",
    "target": "Taiwan, Kaohsiung",
    "strength": 1
  },
  {
    "source": "Galleria Centercity",
    "target": "South Korea, Cheonan",
    "strength": 1
  },
  {
    "source": "Digital Fountain",
    "target": "United Kingdom, London",
    "strength": 1
  },
  {
    "source": "Mondeal Square",
    "target": "India, Ahmedabad",
    "strength": 1
  },
  {
    "source": "AEC - Ars Electronica Center",
    "target": "Austria, Linz",
    "strength": 1
  },
  {
    "source": "Floating Island",
    "target": "South Korea, Seoul",
    "strength": 1
  },
  {
    "source": "Nova",
    "target": "Switzerland, Zurich",
    "strength": 1
  },
  {
    "source": "Distributed Projection Structure 2004",
    "target": "Spain, Sweden, Hungary, Finland, Switzerland,",
    "strength": 1
  },
  {
    "source": "Filament Mind",
    "target": "United States of America, Jackson, Wyoming",
    "strength": 1
  },
  {
    "source": "In The Air, Tonight",
    "target": "Canada, Toronto",
    "strength": 1
  },
  {
    "source": "Pipette",
    "target": "United Kingdom, London",
    "strength": 1
  },
  {
    "source": "City Lights Orchestra",
    "target": "France, Strasbourg, Orl��ans, Mulhouse, Reims, etc..",
    "strength": 1
  },
  {
    "source": "Spine",
    "target": "Denmark, Aarhus",
    "strength": 1
  },
  {
    "source": "City Bug Report",
    "target": "Denmark, Aarhus",
    "strength": 1
  },
  {
    "source": "Mendelssohn Effektorium",
    "target": "Germany, Leipzig",
    "strength": 1
  },
  {
    "source": "Le Circuit de Bachelard",
    "target": "Canada, Montreal",
    "strength": 1
  },
  {
    "source": "Photophore",
    "target": "Germany, Frankfurt",
    "strength": 1
  },
  {
    "source": "The Energy Tower fa��ade lighting",
    "target": "Denmark, Roskilde",
    "strength": 1
  },
  {
    "source": "boxLEDs",
    "target": "Austria, Vienna",
    "strength": 1
  },
  {
    "source": "Orkhestra, Orchestrating the Depth of Light",
    "target": "Germany, Frankfurt",
    "strength": 1
  },
  {
    "source": "Augmented Urban Reality",
    "target": "United Kingdom, London",
    "strength": 1
  },
  {
    "source": "Train station Falkenberg",
    "target": "Germany, Falkenberg / Elster",
    "strength": 1
  },
  {
    "source": "Shanghai World Financial Center (SWFC)",
    "target": "China, Shanghai",
    "strength": 1
  },
  {
    "source": "Field of Light",
    "target": "Australia, Uluru",
    "strength": 1
  },
  {
    "source": "National Library",
    "target": "Belarus, Minsk",
    "strength": 1
  },
  {
    "source": "Affinity : Interactive Art Installation",
    "target": "Peru, Lima",
    "strength": 1
  },
  {
    "source": "Urban Alphabets",
    "target": "Finland, Helsinki",
    "strength": 1
  },
  {
    "source": "C4 Espacio de Creaci�n Art��stica Contempor�nea",
    "target": "Spain, Cordoba",
    "strength": 1
  },
  {
    "source": "TWEETx",
    "target": "Germany, Hamburg",
    "strength": 1
  },
  {
    "source": "Grand Lisboa",
    "target": "China, Macau",
    "strength": 1
  },
  {
    "source": "Marnix",
    "target": "Belgium, Brussels",
    "strength": 1
  },
  {
    "source": "Submergence",
    "target": "Norway, United Kingdom, New Zealand, Australia, exhibited in Oslo/Geneva/Bristol/Vlissingen/Bremen/Cologne",
    "strength": 1
  },
  {
    "source": "Kunsthaus - BIX",
    "target": "Austria, Graz",
    "strength": 1
  },
  {
    "source": "Human BEEing",
    "target": "Finland, Helsinki",
    "strength": 1
  },
  {
    "source": "FLARE Fa��ade",
    "target": "Germany,",
    "strength": 1
  },
  {
    "source": "YTN Center",
    "target": "South Korea, Seoul",
    "strength": 1
  },
  {
    "source": "Augmented Structures v1.1",
    "target": "Turkey, ISTANBUL",
    "strength": 1
  },
  {
    "source": "FLUIDIC",
    "target": "Italy, Milan",
    "strength": 1
  },
  {
    "source": "Lotus Dome",
    "target": "France, Lille",
    "strength": 1
  },
  {
    "source": "Waterlicht",
    "target": "Netherlands, Amsterdam",
    "strength": 1
  },
  {
    "source": "The ARC River Culture Pavilion",
    "target": "South Korea, Daegu",
    "strength": 1
  },
  {
    "source": "Megaphone",
    "target": "Canada, Montreal",
    "strength": 1
  },
  {
    "source": "Kinetic Fa��ade - Theme Pavilion",
    "target": "South Korea, Yeosu",
    "strength": 1
  },
  {
    "source": "digitalMatatus",
    "target": "Kenya, Nairobi",
    "strength": 1
  },
  {
    "source": "Thought Process",
    "target": "United States of America, Reading, Pennsylvania",
    "strength": 1
  },
  {
    "source": "Control no control",
    "target": "Netherlands, Eindhoven",
    "strength": 1
  },
  {
    "source": "Water Light Graffiti",
    "target": "France, Paris",
    "strength": 1
  },
  {
    "source": "Ninety Six",
    "target": "Austria, Linz",
    "strength": 1
  },
  {
    "source": "MegaFaces",
    "target": "Russia, Sochi",
    "strength": 1
  },
  {
    "source": "Spaxels",
    "target": "Germany, Tornesch",
    "strength": 1
  },
  {
    "source": "Klubhaus St.Pauli - Mediafa��ade Lift",
    "target": "Germany, Hamburg",
    "strength": 1
  },
  {
    "source": "Discovery Wall",
    "target": "United States of America, New York",
    "strength": 1
  },
  {
    "source": "Lummoblocks",
    "target": "Spain, MADRID",
    "strength": 1
  },
  {
    "source": "Galleria Store",
    "target": "South Korea, Seoul",
    "strength": 1
  },
  {
    "source": "Qube",
    "target": "Germany, Berlin",
    "strength": 1
  },
  {
    "source": "LAX - Tom Bradley International Terminal",
    "target": "United States of America, Los Angeles",
    "strength": 1
  },
  {
    "source": "Flyfire",
    "target": "United States of America,",
    "strength": 1
  },
  {
    "source": "The Luminous Pathway in the Quartier des Spectacles",
    "target": "Canada, Montreal",
    "strength": 1
  },
  {
    "source": "Saxo Reactive Ceiling",
    "target": "Denmark, Hellerup",
    "strength": 1
  },
  {
    "source": "Seestadt.bot",
    "target": "Austria, Vienna",
    "strength": 1
  },
  {
    "source": "ARCHIVE DREAMING",
    "target": "Turkey, ISTANBUL",
    "strength": 1
  },
  {
    "source": "The Dash Wall",
    "target": "Australia, Sydney",
    "strength": 1
  },
  {
    "source": "iLIGHT",
    "target": "Belgium, Wetteren",
    "strength": 1
  },
  {
    "source": "World Collider",
    "target": "Netherlands, Amsterdam",
    "strength": 1
  },
  {
    "source": "UNIFUN Tianfu Chengdu",
    "target": "China, Chengdu",
    "strength": 1
  },
  {
    "source": "Sonic Runway",
    "target": "United States of America, San Jose",
    "strength": 1
  },
  {
    "source": "urban lights contact",
    "target": "France, St Etienne",
    "strength": 1
  },
  {
    "source": "Synergies",
    "target": "France, St Etienne",
    "strength": 1
  },
  {
    "source": "Uptown Underground",
    "target": "United States of America, New York",
    "strength": 1
  },
  {
    "source": "The labyrinth",
    "target": "Germany, D�sseldorf",
    "strength": 1
  },
  {
    "source": "Rosa Center shopping mall",
    "target": "Spain, Santa Cruz de Tenerife",
    "strength": 1
  },
  {
    "source": "XII Porcelanosa architecture and interior design awards",
    "target": "Spain, MADRID",
    "strength": 1
  },
  {
    "source": "Data Eye of Wangjing",
    "target": "China, Beijing",
    "strength": 1
  },
  {
    "source": "Simple Sensors",
    "target": "Netherlands, Amsterdam",
    "strength": 1
  },
  {
    "source": "LAN - 4",
    "target": "Spain, Logro��o",
    "strength": 1
  },
  {
    "source": "DAZZLE | San Diego International Airport",
    "target": "United States of America, San Diego",
    "strength": 1
  },
  {
    "source": "eCLOUD | San Jose International Airport",
    "target": "United States of America, San Jose, California",
    "strength": 1
  },
  {
    "source": "Maanaviat (spirituality)",
    "target": "Iran, Mashhad",
    "strength": 1
  },
  {
    "source": "building dawn",
    "target": "Germany, B�blingen",
    "strength": 1
  },
  {
    "source": "Community Engagement through Augmented Reality - Curiocity Brisbane",
    "target": "Australia, Brisbane",
    "strength": 1
  },
  {
    "source": "Son et Culinaire",
    "target": "United Kingdom, London",
    "strength": 1
  },
  {
    "source": "Radisson BLU Scandinavia",
    "target": "Sweden, Gothenburg",
    "strength": 1
  },
  {
    "source": "Shenzhen Planning Exhibition",
    "target": "China, Shenzhen",
    "strength": 1
  },
  {
    "source": "AMANDOLIER FA��ADE",
    "target": "Switzerland, GENEVA",
    "strength": 1
  },
  {
    "source": "TIETO HQ",
    "target": "Finland, Helsinki",
    "strength": 1
  },
  {
    "source": "Sunscriber",
    "target": "Austria, Graz",
    "strength": 1
  },
  {
    "source": "Preservation of Silence",
    "target": "Russia, Moscow",
    "strength": 1
  },
  {
    "source": "The abode of the outside",
    "target": "Italy, Roma",
    "strength": 1
  },
  {
    "source": "Hearing From You",
    "target": "Australia, Sydney",
    "strength": 1
  },
  {
    "source": "Variegation Index",
    "target": "United Kingdom, London",
    "strength": 1
  },
  {
    "source": "Shadow Wall",
    "target": "United Kingdom, London",
    "strength": 1
  },
  {
    "source": "Woodie",
    "target": "Australia, Sydney",
    "strength": 1
  },
  {
    "source": "FUTURE VISION LAB",
    "target": "Taiwan, Taipei",
    "strength": 1
  },
  {
    "source": "Aukio",
    "target": "Finland, Helsinki",
    "strength": 1
  },
  {
    "source": "Media architecture cluster Real-scene simulation and design prototype",
    "target": "China, Beijing",
    "strength": 1
  },
  {
    "source": "VIRTUAL WALLS - TORRECARDENAS",
    "target": "Spain, Almer��a",
    "strength": 1
  },
  {
    "source": "Spatial Animacy",
    "target": "Japan, Tokyo",
    "strength": 1
  },
  {
    "source": "Interactive Media Sculpture \"The Tree of Knowledge",
    "target": "Ukraine, Kyiv",
    "strength": 1
  },
  {
    "source": "Loom Light",
    "target": "Netherlands, Eindhoven",
    "strength": 1
  },
  {
    "source": "Interactive application Dolphins Creator",
    "target": "Ukraine, Mariupol",
    "strength": 1
  },
  {
    "source": "Architectural and Decorative Lighting of Freedom Square in Mariupol",
    "target": "Ukraine, Mariupol",
    "strength": 1
  },
  {
    "source": "Interactive Screen on the Boulevard of arts",
    "target": "Ukraine, Dnipro",
    "strength": 1
  },
  {
    "source": "Lighting for Boulevard of Arts",
    "target": "Ukraine, Dnipro",
    "strength": 1
  },
  {
    "source": "REQUIEM",
    "target": "Spain, Bilbao",
    "strength": 1
  },
  {
    "source": "SP_Urban Arte Conecta",
    "target": "Brazil, Sao Paulo, Belo Horizonte, Rio de Janeiro and S��o Jos�� dos Campos",
    "strength": 1
  },
  {
    "source": "MAX CENTER",
    "target": "Spain, Bilbao",
    "strength": 1
  },
  {
    "source": "Novartis Pavillon",
    "target": "Switzerland, Basel",
    "strength": 1
  },
  {
    "source": "Light art installation Beacon",
    "target": "Kyiv",
    "strength": 1
  },
  {
    "source": "atmospheric spaces",
    "target": "Germany, Weimar",
    "strength": 1
  },
  {
    "source": "Star Hunters",
    "target": "Greece, Athens",
    "strength": 1
  },
  {
    "source": "Catholic Church of St. Nicholas",
    "target": "Ukraine, Kyiv",
    "strength": 1
  },
  {
    "source": "Optical Footprint",
    "target": "Germany, Weimar",
    "strength": 1
  },
  {
    "source": "Spectator and Spectacle",
    "target": "France, Paris",
    "strength": 1
  },
  {
    "source": "Interactive Media Sculpture The Cube",
    "target": "Ukraine, Kyiv",
    "strength": 1
  },
  {
    "source": "Lighting for the Tetris Hall Residential Complex",
    "target": "Ukraine, Kyiv",
    "strength": 1
  },
  {
    "source": "Between Waves",
    "target": "Romania, Bucharest",
    "strength": 1
  },
  {
    "source": "The 4th Street SW Underpass Enhancement Project",
    "target": "Canada, Calgary",
    "strength": 1
  },
  {
    "source": "Dnipro Light Flower",
    "target": "Ukraine, Dnipro",
    "strength": 1
  },
  {
    "source": "Hamaja",
    "target": "Iran, Tehran",
    "strength": 1
  },
  {
    "source": "The Pearl Divers",
    "target": "United Arab Emirates, Dubai",
    "strength": 1
  },
  {
    "source": "GROW",
    "target": "Netherlands, Rotterdam",
    "strength": 1
  },
  {
    "source": "Urban Sun",
    "target": "Netherlands, Rotterdam",
    "strength": 1
  },
  {
    "source": "LEVENSLICHT",
    "target": "Netherlands, Rotterdam",
    "strength": 1
  },
  {
    "source": "Window into the Seas",
    "target": "Germany, Bremerhaven",
    "strength": 1
  },
  {
    "source": "Touching Night Skies 50°06'44\"N 8°40'36\"E",
    "target": "Germany, Frankfurt am Main",
    "strength": 1
  },
  {
    "source": "The Webster - Narrative Lighting Wall",
    "target": "United States of America, Los Angeles",
    "strength": 1
  },
  {
    "source": "Bahrain International Circuit",
    "target": "Bahrain, Sakhir",
    "strength": 1
  },
  {
    "source": "Landscapes of Dreams",
    "target": "Spain, Barcelona",
    "strength": 1
  },
  {
    "source": "INTERACTIVE CLOUD",
    "target": "Spain, MADRID",
    "strength": 1
  },
  {
    "source": "MAGIC MIRROR",
    "target": "Spain, Seville",
    "strength": 1
  },
  {
    "source": "The Pipes",
    "target": "Australia, Melbourne",
    "strength": 1
  },
  {
    "source": "Still Light",
    "target": "Australia, Melbourne",
    "strength": 1
  },
  {
    "source": "Para Social",
    "target": "Germany, Hamburg",
    "strength": 1
  },
  {
    "source": "Wervel [Turmoil]",
    "target": "Netherlands, Groningen",
    "strength": 1
  },
  {
    "source": "Guerrilha projections against Bolsonaro",
    "target": "Brazil, Sao Paulo",
    "strength": 1
  },
  {
    "source": "M+ Facade",
    "target": "Hong Kong, Hong Kong",
    "strength": 1
  },
  {
    "source": "Peter Jones & Partners",
    "target": "United Kingdom, London",
    "strength": 1
  },
  {
    "source": "Digital Phyllotaxy",
    "target": "South Korea, Seoul",
    "strength": 1
  },
  {
    "source": "Macula",
    "target": "Australia, Sydney",
    "strength": 1
  },
  {
    "source": "ZIEN",
    "target": "Netherlands, Den Haag",
    "strength": 1
  },
  {
    "source": "ZOE",
    "target": "Netherlands, Rotterdam",
    "strength": 1
  },
  {
    "source": "Ecran de Veille / Screen Savour",
    "target": "Canada, Montreal",
    "strength": 1
  },
  {
    "source": "Chatty Bench Festival Community Media Visual Projections",
    "target": "Australia, Canada, Brisbane",
    "strength": 1
  },
  {
    "source": "The Cellular Fidelity",
    "target": "Austria, Vienna",
    "strength": 1
  },
  {
    "source": "Orlando International Airport Terminal C",
    "target": "United States of America, Orlando",
    "strength": 1
  },
  {
    "source": "Spatial Intimacy",
    "target": "Germany, Weimar",
    "strength": 1
  },
  {
    "source": "The Eye of Mexico",
    "target": "Mexico, Mexico City",
    "strength": 1
  },
  {
    "source": "�Room of Negotiation�",
    "target": "Switzerland, Zurich",
    "strength": 1
  },
  {
    "source": "Light Falls",
    "target": "Brazil, Germany, United States of America,",
    "strength": 1
  },
  {
    "source": "ANTopolis",
    "target": "Austria, Linz",
    "strength": 1
  },
  {
    "source": "Helsinki Outlet",
    "target": "Finland, Helsinki",
    "strength": 1
  },
  {
    "source": "All Colors Are In The Lights",
    "target": "Taiwan, Taichung",
    "strength": 1
  },
  {
    "source": "Greetings from Everywhere",
    "target": "Ukraine, Kyiv",
    "strength": 1
  },
  {
    "source": "Wandering Corners",
    "target": "China, shenyang",
    "strength": 1
  },
  {
    "source": "High Speed Relations",
    "target": "Taiwan, Hsinchu",
    "strength": 1
  },
  {
    "source": "Sunscriber",
    "target": "Austria, Graz",
    "strength": 1
  },
  {
    "source": "False Positive",
    "target": "Austria, Belgium, Germany, Spain, United Kingdom, Linz, Austria; Madrid, Spain; Brussels, Belgium; Hagen, Germany; Liverpool, UK",
    "strength": 1
  },
  {
    "source": "Plant a Light",
    "target": "Denmark, Aarhus",
    "strength": 1
  },
  {
    "source": "The Light House: 888 Collins St",
    "target": "Australia, Melbourne",
    "strength": 1
  },
  {
    "source": "The Digital Bricks",
    "target": "Australia, Melbourne",
    "strength": 1
  },
  {
    "source": "La Sprite",
    "target": "France, Le Havre",
    "strength": 1
  },
  {
    "source": "PASSAGES",
    "target": "France, Toulouse",
    "strength": 1
  },
  {
    "source": "ARCHIVE DREAMING",
    "target": "Turkey, ISTANBUL",
    "strength": 1
  },
  {
    "source": "Northside Beacons",
    "target": "Denmark, Aarhus",
    "strength": 1
  },
  {
    "source": "LightSpell",
    "target": "Canada, Toronto",
    "strength": 1
  },
  {
    "source": "LightLines",
    "target": "Australia, Buranda, Brisbane",
    "strength": 1
  },
  {
    "source": "Kipnes Lantern",
    "target": "Canada, Ottawa",
    "strength": 1
  },
  {
    "source": "Arena",
    "target": "Canada, Kitchener",
    "strength": 1
  },
  {
    "source": "Salling Lights",
    "target": "Denmark, Aarhus & Aalborg",
    "strength": 1
  },
  {
    "source": "Digital Calligraffiti",
    "target": "Germany, Berlin",
    "strength": 1
  },
  {
    "source": "Monument Remix",
    "target": "Brazil, Sao Paulo",
    "strength": 1
  },
  {
    "source": "Federation Square Digital Canvas",
    "target": "Australia, Melbourne",
    "strength": 1
  },
  {
    "source": "waterlight graffiti",
    "target": "France, Poitiers",
    "strength": 1
  },
  {
    "source": "Yagan Square",
    "target": "Australia, Perth",
    "strength": 1
  },
  {
    "source": "Smog Free Project",
    "target": "China, Netherlands, Poland, Opened in Beijing, Tianjin, Dalian, Rotterdam, Krakow",
    "strength": 1
  },
  {
    "source": "Digital neighbourhood",
    "target": "Denmark, Aarhus",
    "strength": 1
  },
  {
    "source": "Chave do Centro or \"The Key to Downtown",
    "target": "Brazil, Sao Paulo",
    "strength": 1
  },
  {
    "source": "BioLumen",
    "target": "Brazil, Sao Paulo",
    "strength": 1
  },
  {
    "source": "Yellow Dust",
    "target": "South Korea, Seoul",
    "strength": 1
  },
  {
    "source": "Dragon Scale",
    "target": "China, Shanghai",
    "strength": 1
  },
  {
    "source": "The Playground",
    "target": "Australia, Melbourne, Ararat, Gwangju",
    "strength": 1
  },
  {
    "source": "Chatty Bench Project: Radical Media Architecture in Precarious Times",
    "target": "Australia, Brisbane",
    "strength": 1
  },
  {
    "source": "Shuttercam",
    "target": "Netherlands, Amsterdam",
    "strength": 1
  },
  {
    "source": "Sleepers of Haslev",
    "target": "Denmark, Haslev",
    "strength": 1
  },
  {
    "source": "Wuhan Optics Valley Square Complex Theme Ground Sculpture",
    "target": "China, Beijing",
    "strength": 1
  },
  {
    "source": "La Lune Est' / 'The Moon Is'",
    "target": "Canada, United Kingdom, Montreal",
    "strength": 1
  },
  {
    "source": "PO�ME D'�CRAN' / 'SCREEN POEM'",
    "target": "Canada, United Kingdom, 1. Montreal, CA / 2. Barnsley, UK",
    "strength": 1
  },
  {
    "source": "[ i miss your touch ] by PluginHUMAN.",
    "target": "Australia, Melbourne",
    "strength": 1
  },
  {
    "source": "Inhibition",
    "target": "United Kingdom, London",
    "strength": 1
  },
  {
    "source": "Gibigiana",
    "target": "Italy, Rome",
    "strength": 1
  },
  {
    "source": "Walk Walk Dance",
    "target": "Canada, Montreal",
    "strength": 1
  },
  {
    "source": "Stadt der Temperamente",
    "target": "Austria, Vienna",
    "strength": 1
  },
  {
    "source": "Citizen Dialog Kit",
    "target": "Belgium, Netherlands, Leuven, Genk, Houthalen-Helchteren, Peer, Antwerpen, Heist-op-den-Berg, Gent, Amsterdam",
    "strength": 1
  },
  {
    "source": "Project: Galath3a Germany",
    "target": "Berlin",
    "strength": 1
  },
  {
    "source": "Commons Sense, Manifesta 14",
    "target": "Kosovo, Prishtina",
    "strength": 1
  },
  {
    "source": "Merck Light Cloud",
    "target": "+++ (read +�)",
    "strength": 2
  },
  {
    "source": "Merck Light Cloud",
    "target": "Halo",
    "strength": 2
  },
  {
    "source": "Merck Light Cloud",
    "target": "NSOMNIUM",
    "strength": 2
  },
  {
    "source": "Merck Light Cloud",
    "target": "Zoom Blue Dot",
    "strength": 2
  },
  {
    "source": "Merck Light Cloud",
    "target": "INSIDE OUT",
    "strength": 2
  },
  {
    "source": "Merck Light Cloud",
    "target": "Osmanthus Theme Park in Jinzhai Anhui",
    "strength": 2
  },
  {
    "source": "Merck Light Cloud",
    "target": "IMMERSION",
    "strength": 2
  },
  {
    "source": "Merck Light Cloud",
    "target": "Architecture Infinite Proliferating Geometry",
    "strength": 2
  },
  {
    "source": "Merck Light Cloud",
    "target": "Wavelength",
    "strength": 2
  },
  {
    "source": "Merck Light Cloud",
    "target": "GRCB BANK - Time Tells a Luminous Story",
    "strength": 2
  },
  {
    "source": "Merck Light Cloud",
    "target": "MUURmelaar",
    "strength": 2
  },
  {
    "source": "Merck Light Cloud",
    "target": "Media sculpture \"Particles of life",
    "strength": 2
  },
  {
    "source": "Merck Light Cloud",
    "target": "Hyundai Pavilion Field of Stars",
    "strength": 2
  },
  {
    "source": "Merck Light Cloud",
    "target": "Hyundai Pavilion Interactive Water Installation",
    "strength": 2
  },
  {
    "source": "Merck Light Cloud",
    "target": "Restaurant \"Normal",
    "strength": 2
  },
  {
    "source": "Merck Light Cloud",
    "target": "One Shenzhen Bay",
    "strength": 2
  },
  {
    "source": "Merck Light Cloud",
    "target": "Ralph Lauren 50th Anniversary Reflection",
    "strength": 2
  },
  {
    "source": "Merck Light Cloud",
    "target": "Seestadt.bot",
    "strength": 2
  },
  {
    "source": "Merck Light Cloud",
    "target": "The Dash Wall",
    "strength": 2
  },
  {
    "source": "Merck Light Cloud",
    "target": "Synergies",
    "strength": 2
  },
  {
    "source": "Merck Light Cloud",
    "target": "AMANDOLIER FA��ADE",
    "strength": 2
  },
  {
    "source": "Merck Light Cloud",
    "target": "The abode of the outside",
    "strength": 2
  },
  {
    "source": "Merck Light Cloud",
    "target": "Media architecture cluster Real-scene simulation and design prototype",
    "strength": 2
  },
  {
    "source": "Merck Light Cloud",
    "target": "VIRTUAL WALLS - TORRECARDENAS",
    "strength": 2
  },
  {
    "source": "Merck Light Cloud",
    "target": "Northside Beacons",
    "strength": 2
  },
  {
    "source": "Merck Light Cloud",
    "target": "LightLines",
    "strength": 2
  },
  {
    "source": "Merck Light Cloud",
    "target": "Arena",
    "strength": 2
  },
  {
    "source": "Merck Light Cloud",
    "target": "Monument Remix",
    "strength": 2
  },
  {
    "source": "Merck Light Cloud",
    "target": "Federation Square Digital Canvas",
    "strength": 2
  },
  {
    "source": "Merck Light Cloud",
    "target": "Yagan Square",
    "strength": 2
  },
  {
    "source": "Merck Light Cloud",
    "target": "Smog Free Project",
    "strength": 2
  },
  {
    "source": "Merck Light Cloud",
    "target": "BioLumen",
    "strength": 2
  },
  {
    "source": "Merck Light Cloud",
    "target": "Yellow Dust",
    "strength": 2
  },
  {
    "source": "Merck Light Cloud",
    "target": "Dragon Scale",
    "strength": 2
  },
  {
    "source": "Merck Light Cloud",
    "target": "Gibigiana",
    "strength": 2
  },
  {
    "source": "+++ (read +�)",
    "target": "Halo",
    "strength": 2
  },
  {
    "source": "+++ (read +�)",
    "target": "NSOMNIUM",
    "strength": 2
  },
  {
    "source": "+++ (read +�)",
    "target": "Zoom Blue Dot",
    "strength": 2
  },
  {
    "source": "+++ (read +�)",
    "target": "INSIDE OUT",
    "strength": 2
  },
  {
    "source": "+++ (read +�)",
    "target": "Osmanthus Theme Park in Jinzhai Anhui",
    "strength": 2
  },
  {
    "source": "+++ (read +�)",
    "target": "IMMERSION",
    "strength": 2
  },
  {
    "source": "+++ (read +�)",
    "target": "Architecture Infinite Proliferating Geometry",
    "strength": 2
  },
  {
    "source": "+++ (read +�)",
    "target": "Wavelength",
    "strength": 2
  },
  {
    "source": "+++ (read +�)",
    "target": "GRCB BANK - Time Tells a Luminous Story",
    "strength": 2
  },
  {
    "source": "+++ (read +�)",
    "target": "MUURmelaar",
    "strength": 2
  },
  {
    "source": "+++ (read +�)",
    "target": "Media sculpture \"Particles of life",
    "strength": 2
  },
  {
    "source": "+++ (read +�)",
    "target": "Hyundai Pavilion Field of Stars",
    "strength": 2
  },
  {
    "source": "+++ (read +�)",
    "target": "Hyundai Pavilion Interactive Water Installation",
    "strength": 2
  },
  {
    "source": "+++ (read +�)",
    "target": "Restaurant \"Normal",
    "strength": 2
  },
  {
    "source": "+++ (read +�)",
    "target": "One Shenzhen Bay",
    "strength": 2
  },
  {
    "source": "+++ (read +�)",
    "target": "Ralph Lauren 50th Anniversary Reflection",
    "strength": 2
  },
  {
    "source": "+++ (read +�)",
    "target": "Seestadt.bot",
    "strength": 2
  },
  {
    "source": "+++ (read +�)",
    "target": "The Dash Wall",
    "strength": 2
  },
  {
    "source": "+++ (read +�)",
    "target": "Synergies",
    "strength": 2
  },
  {
    "source": "+++ (read +�)",
    "target": "AMANDOLIER FA��ADE",
    "strength": 2
  },
  {
    "source": "+++ (read +�)",
    "target": "The abode of the outside",
    "strength": 2
  },
  {
    "source": "+++ (read +�)",
    "target": "Media architecture cluster Real-scene simulation and design prototype",
    "strength": 2
  },
  {
    "source": "+++ (read +�)",
    "target": "VIRTUAL WALLS - TORRECARDENAS",
    "strength": 2
  },
  {
    "source": "+++ (read +�)",
    "target": "Northside Beacons",
    "strength": 2
  },
  {
    "source": "+++ (read +�)",
    "target": "LightLines",
    "strength": 2
  },
  {
    "source": "+++ (read +�)",
    "target": "Arena",
    "strength": 2
  },
  {
    "source": "+++ (read +�)",
    "target": "Monument Remix",
    "strength": 2
  },
  {
    "source": "+++ (read +�)",
    "target": "Federation Square Digital Canvas",
    "strength": 2
  },
  {
    "source": "+++ (read +�)",
    "target": "Yagan Square",
    "strength": 2
  },
  {
    "source": "+++ (read +�)",
    "target": "Smog Free Project",
    "strength": 2
  },
  {
    "source": "+++ (read +�)",
    "target": "BioLumen",
    "strength": 2
  },
  {
    "source": "+++ (read +�)",
    "target": "Yellow Dust",
    "strength": 2
  },
  {
    "source": "+++ (read +�)",
    "target": "Dragon Scale",
    "strength": 2
  },
  {
    "source": "+++ (read +�)",
    "target": "Gibigiana",
    "strength": 2
  },
  {
    "source": "Halo",
    "target": "NSOMNIUM",
    "strength": 2
  },
  {
    "source": "Halo",
    "target": "Zoom Blue Dot",
    "strength": 2
  },
  {
    "source": "Halo",
    "target": "INSIDE OUT",
    "strength": 2
  },
  {
    "source": "Halo",
    "target": "Osmanthus Theme Park in Jinzhai Anhui",
    "strength": 2
  },
  {
    "source": "Halo",
    "target": "IMMERSION",
    "strength": 2
  },
  {
    "source": "Halo",
    "target": "Architecture Infinite Proliferating Geometry",
    "strength": 2
  },
  {
    "source": "Halo",
    "target": "Wavelength",
    "strength": 2
  },
  {
    "source": "Halo",
    "target": "GRCB BANK - Time Tells a Luminous Story",
    "strength": 2
  },
  {
    "source": "Halo",
    "target": "MUURmelaar",
    "strength": 2
  },
  {
    "source": "Halo",
    "target": "Media sculpture \"Particles of life",
    "strength": 2
  },
  {
    "source": "Halo",
    "target": "Hyundai Pavilion Field of Stars",
    "strength": 2
  },
  {
    "source": "Halo",
    "target": "Hyundai Pavilion Interactive Water Installation",
    "strength": 2
  },
  {
    "source": "Halo",
    "target": "Restaurant \"Normal",
    "strength": 2
  },
  {
    "source": "Halo",
    "target": "One Shenzhen Bay",
    "strength": 2
  },
  {
    "source": "Halo",
    "target": "Ralph Lauren 50th Anniversary Reflection",
    "strength": 2
  },
  {
    "source": "Halo",
    "target": "Seestadt.bot",
    "strength": 2
  },
  {
    "source": "Halo",
    "target": "The Dash Wall",
    "strength": 2
  },
  {
    "source": "Halo",
    "target": "Synergies",
    "strength": 2
  },
  {
    "source": "Halo",
    "target": "AMANDOLIER FA��ADE",
    "strength": 2
  },
  {
    "source": "Halo",
    "target": "The abode of the outside",
    "strength": 2
  },
  {
    "source": "Halo",
    "target": "Media architecture cluster Real-scene simulation and design prototype",
    "strength": 2
  },
  {
    "source": "Halo",
    "target": "VIRTUAL WALLS - TORRECARDENAS",
    "strength": 2
  },
  {
    "source": "Halo",
    "target": "Northside Beacons",
    "strength": 2
  },
  {
    "source": "Halo",
    "target": "LightLines",
    "strength": 2
  },
  {
    "source": "Halo",
    "target": "Arena",
    "strength": 2
  },
  {
    "source": "Halo",
    "target": "Monument Remix",
    "strength": 2
  },
  {
    "source": "Halo",
    "target": "Federation Square Digital Canvas",
    "strength": 2
  },
  {
    "source": "Halo",
    "target": "Yagan Square",
    "strength": 2
  },
  {
    "source": "Halo",
    "target": "Smog Free Project",
    "strength": 2
  },
  {
    "source": "Halo",
    "target": "BioLumen",
    "strength": 2
  },
  {
    "source": "Halo",
    "target": "Yellow Dust",
    "strength": 2
  },
  {
    "source": "Halo",
    "target": "Dragon Scale",
    "strength": 2
  },
  {
    "source": "Halo",
    "target": "Gibigiana",
    "strength": 2
  },
  {
    "source": "Light Cube",
    "target": "Solar Shimmer",
    "strength": 2
  },
  {
    "source": "Light Cube",
    "target": "UK Pavilion Light Sculpture and Panorama",
    "strength": 2
  },
  {
    "source": "Light Cube",
    "target": "Interactive Media Structure \"Pulse of Life",
    "strength": 2
  },
  {
    "source": "Light Cube",
    "target": "The Infinity Room",
    "strength": 2
  },
  {
    "source": "Light Cube",
    "target": "Where Do We Go From Here?",
    "strength": 2
  },
  {
    "source": "Light Cube",
    "target": "Changi airport's terminal 4 \"Theatre of experience",
    "strength": 2
  },
  {
    "source": "Light Cube",
    "target": "Firefly",
    "strength": 2
  },
  {
    "source": "Light Cube",
    "target": "ARCHIVE DREAMING",
    "strength": 2
  },
  {
    "source": "Light Cube",
    "target": "Sonic Runway",
    "strength": 2
  },
  {
    "source": "Light Cube",
    "target": "urban lights contact",
    "strength": 2
  },
  {
    "source": "Light Cube",
    "target": "DAZZLE | San Diego International Airport",
    "strength": 2
  },
  {
    "source": "Light Cube",
    "target": "TIETO HQ",
    "strength": 2
  },
  {
    "source": "Light Cube",
    "target": "INTERACTIVE CLOUD",
    "strength": 2
  },
  {
    "source": "Light Cube",
    "target": "Plant a Light",
    "strength": 2
  },
  {
    "source": "Light Cube",
    "target": "ARCHIVE DREAMING",
    "strength": 2
  },
  {
    "source": "Light Cube",
    "target": "LightSpell",
    "strength": 2
  },
  {
    "source": "Light Cube",
    "target": "Kipnes Lantern",
    "strength": 2
  },
  {
    "source": "Light Cube",
    "target": "Salling Lights",
    "strength": 2
  },
  {
    "source": "Light Cube",
    "target": "Digital Calligraffiti",
    "strength": 2
  },
  {
    "source": "Light Cube",
    "target": "Digital neighbourhood",
    "strength": 2
  },
  {
    "source": "Light Cube",
    "target": "Chave do Centro or \"The Key to Downtown",
    "strength": 2
  },
  {
    "source": "Light Cube",
    "target": "The Playground",
    "strength": 2
  },
  {
    "source": "NSOMNIUM",
    "target": "Zoom Blue Dot",
    "strength": 2
  },
  {
    "source": "NSOMNIUM",
    "target": "INSIDE OUT",
    "strength": 2
  },
  {
    "source": "NSOMNIUM",
    "target": "Osmanthus Theme Park in Jinzhai Anhui",
    "strength": 2
  },
  {
    "source": "NSOMNIUM",
    "target": "IMMERSION",
    "strength": 2
  },
  {
    "source": "NSOMNIUM",
    "target": "Architecture Infinite Proliferating Geometry",
    "strength": 2
  },
  {
    "source": "NSOMNIUM",
    "target": "Wavelength",
    "strength": 2
  },
  {
    "source": "NSOMNIUM",
    "target": "GRCB BANK - Time Tells a Luminous Story",
    "strength": 2
  },
  {
    "source": "NSOMNIUM",
    "target": "MUURmelaar",
    "strength": 2
  },
  {
    "source": "NSOMNIUM",
    "target": "Media sculpture \"Particles of life",
    "strength": 2
  },
  {
    "source": "NSOMNIUM",
    "target": "Hyundai Pavilion Field of Stars",
    "strength": 2
  },
  {
    "source": "NSOMNIUM",
    "target": "Hyundai Pavilion Interactive Water Installation",
    "strength": 2
  },
  {
    "source": "NSOMNIUM",
    "target": "Restaurant \"Normal",
    "strength": 2
  },
  {
    "source": "NSOMNIUM",
    "target": "One Shenzhen Bay",
    "strength": 2
  },
  {
    "source": "NSOMNIUM",
    "target": "Ralph Lauren 50th Anniversary Reflection",
    "strength": 2
  },
  {
    "source": "NSOMNIUM",
    "target": "Seestadt.bot",
    "strength": 2
  },
  {
    "source": "NSOMNIUM",
    "target": "The Dash Wall",
    "strength": 2
  },
  {
    "source": "NSOMNIUM",
    "target": "Synergies",
    "strength": 2
  },
  {
    "source": "NSOMNIUM",
    "target": "AMANDOLIER FA��ADE",
    "strength": 2
  },
  {
    "source": "NSOMNIUM",
    "target": "The abode of the outside",
    "strength": 2
  },
  {
    "source": "NSOMNIUM",
    "target": "Media architecture cluster Real-scene simulation and design prototype",
    "strength": 2
  },
  {
    "source": "NSOMNIUM",
    "target": "VIRTUAL WALLS - TORRECARDENAS",
    "strength": 2
  },
  {
    "source": "NSOMNIUM",
    "target": "Northside Beacons",
    "strength": 2
  },
  {
    "source": "NSOMNIUM",
    "target": "LightLines",
    "strength": 2
  },
  {
    "source": "NSOMNIUM",
    "target": "Arena",
    "strength": 2
  },
  {
    "source": "NSOMNIUM",
    "target": "Monument Remix",
    "strength": 2
  },
  {
    "source": "NSOMNIUM",
    "target": "Federation Square Digital Canvas",
    "strength": 2
  },
  {
    "source": "NSOMNIUM",
    "target": "Yagan Square",
    "strength": 2
  },
  {
    "source": "NSOMNIUM",
    "target": "Smog Free Project",
    "strength": 2
  },
  {
    "source": "NSOMNIUM",
    "target": "BioLumen",
    "strength": 2
  },
  {
    "source": "NSOMNIUM",
    "target": "Yellow Dust",
    "strength": 2
  },
  {
    "source": "NSOMNIUM",
    "target": "Dragon Scale",
    "strength": 2
  },
  {
    "source": "NSOMNIUM",
    "target": "Gibigiana",
    "strength": 2
  },
  {
    "source": "Zoom Blue Dot",
    "target": "INSIDE OUT",
    "strength": 2
  },
  {
    "source": "Zoom Blue Dot",
    "target": "Osmanthus Theme Park in Jinzhai Anhui",
    "strength": 2
  },
  {
    "source": "Zoom Blue Dot",
    "target": "IMMERSION",
    "strength": 2
  },
  {
    "source": "Zoom Blue Dot",
    "target": "Architecture Infinite Proliferating Geometry",
    "strength": 2
  },
  {
    "source": "Zoom Blue Dot",
    "target": "Wavelength",
    "strength": 2
  },
  {
    "source": "Zoom Blue Dot",
    "target": "GRCB BANK - Time Tells a Luminous Story",
    "strength": 2
  },
  {
    "source": "Zoom Blue Dot",
    "target": "MUURmelaar",
    "strength": 2
  },
  {
    "source": "Zoom Blue Dot",
    "target": "Media sculpture \"Particles of life",
    "strength": 2
  },
  {
    "source": "Zoom Blue Dot",
    "target": "Hyundai Pavilion Field of Stars",
    "strength": 2
  },
  {
    "source": "Zoom Blue Dot",
    "target": "Hyundai Pavilion Interactive Water Installation",
    "strength": 2
  },
  {
    "source": "Zoom Blue Dot",
    "target": "Restaurant \"Normal",
    "strength": 2
  },
  {
    "source": "Zoom Blue Dot",
    "target": "One Shenzhen Bay",
    "strength": 2
  },
  {
    "source": "Zoom Blue Dot",
    "target": "Ralph Lauren 50th Anniversary Reflection",
    "strength": 2
  },
  {
    "source": "Zoom Blue Dot",
    "target": "Seestadt.bot",
    "strength": 2
  },
  {
    "source": "Zoom Blue Dot",
    "target": "The Dash Wall",
    "strength": 2
  },
  {
    "source": "Zoom Blue Dot",
    "target": "Synergies",
    "strength": 2
  },
  {
    "source": "Zoom Blue Dot",
    "target": "AMANDOLIER FA��ADE",
    "strength": 2
  },
  {
    "source": "Zoom Blue Dot",
    "target": "The abode of the outside",
    "strength": 2
  },
  {
    "source": "Zoom Blue Dot",
    "target": "Media architecture cluster Real-scene simulation and design prototype",
    "strength": 2
  },
  {
    "source": "Zoom Blue Dot",
    "target": "VIRTUAL WALLS - TORRECARDENAS",
    "strength": 2
  },
  {
    "source": "Zoom Blue Dot",
    "target": "Northside Beacons",
    "strength": 2
  },
  {
    "source": "Zoom Blue Dot",
    "target": "LightLines",
    "strength": 2
  },
  {
    "source": "Zoom Blue Dot",
    "target": "Arena",
    "strength": 2
  },
  {
    "source": "Zoom Blue Dot",
    "target": "Monument Remix",
    "strength": 2
  },
  {
    "source": "Zoom Blue Dot",
    "target": "Federation Square Digital Canvas",
    "strength": 2
  },
  {
    "source": "Zoom Blue Dot",
    "target": "Yagan Square",
    "strength": 2
  },
  {
    "source": "Zoom Blue Dot",
    "target": "Smog Free Project",
    "strength": 2
  },
  {
    "source": "Zoom Blue Dot",
    "target": "BioLumen",
    "strength": 2
  },
  {
    "source": "Zoom Blue Dot",
    "target": "Yellow Dust",
    "strength": 2
  },
  {
    "source": "Zoom Blue Dot",
    "target": "Dragon Scale",
    "strength": 2
  },
  {
    "source": "Zoom Blue Dot",
    "target": "Gibigiana",
    "strength": 2
  },
  {
    "source": "INSIDE OUT",
    "target": "Osmanthus Theme Park in Jinzhai Anhui",
    "strength": 2
  },
  {
    "source": "INSIDE OUT",
    "target": "IMMERSION",
    "strength": 2
  },
  {
    "source": "INSIDE OUT",
    "target": "Architecture Infinite Proliferating Geometry",
    "strength": 2
  },
  {
    "source": "INSIDE OUT",
    "target": "Wavelength",
    "strength": 2
  },
  {
    "source": "INSIDE OUT",
    "target": "GRCB BANK - Time Tells a Luminous Story",
    "strength": 2
  },
  {
    "source": "INSIDE OUT",
    "target": "MUURmelaar",
    "strength": 2
  },
  {
    "source": "INSIDE OUT",
    "target": "Media sculpture \"Particles of life",
    "strength": 2
  },
  {
    "source": "INSIDE OUT",
    "target": "Hyundai Pavilion Field of Stars",
    "strength": 2
  },
  {
    "source": "INSIDE OUT",
    "target": "Hyundai Pavilion Interactive Water Installation",
    "strength": 2
  },
  {
    "source": "INSIDE OUT",
    "target": "Restaurant \"Normal",
    "strength": 2
  },
  {
    "source": "INSIDE OUT",
    "target": "One Shenzhen Bay",
    "strength": 2
  },
  {
    "source": "INSIDE OUT",
    "target": "Ralph Lauren 50th Anniversary Reflection",
    "strength": 2
  },
  {
    "source": "INSIDE OUT",
    "target": "Seestadt.bot",
    "strength": 2
  },
  {
    "source": "INSIDE OUT",
    "target": "The Dash Wall",
    "strength": 2
  },
  {
    "source": "INSIDE OUT",
    "target": "Synergies",
    "strength": 2
  },
  {
    "source": "INSIDE OUT",
    "target": "AMANDOLIER FA��ADE",
    "strength": 2
  },
  {
    "source": "INSIDE OUT",
    "target": "The abode of the outside",
    "strength": 2
  },
  {
    "source": "INSIDE OUT",
    "target": "Media architecture cluster Real-scene simulation and design prototype",
    "strength": 2
  },
  {
    "source": "INSIDE OUT",
    "target": "VIRTUAL WALLS - TORRECARDENAS",
    "strength": 2
  },
  {
    "source": "INSIDE OUT",
    "target": "Northside Beacons",
    "strength": 2
  },
  {
    "source": "INSIDE OUT",
    "target": "LightLines",
    "strength": 2
  },
  {
    "source": "INSIDE OUT",
    "target": "Arena",
    "strength": 2
  },
  {
    "source": "INSIDE OUT",
    "target": "Monument Remix",
    "strength": 2
  },
  {
    "source": "INSIDE OUT",
    "target": "Federation Square Digital Canvas",
    "strength": 2
  },
  {
    "source": "INSIDE OUT",
    "target": "Yagan Square",
    "strength": 2
  },
  {
    "source": "INSIDE OUT",
    "target": "Smog Free Project",
    "strength": 2
  },
  {
    "source": "INSIDE OUT",
    "target": "BioLumen",
    "strength": 2
  },
  {
    "source": "INSIDE OUT",
    "target": "Yellow Dust",
    "strength": 2
  },
  {
    "source": "INSIDE OUT",
    "target": "Dragon Scale",
    "strength": 2
  },
  {
    "source": "INSIDE OUT",
    "target": "Gibigiana",
    "strength": 2
  },
  {
    "source": "Osmanthus Theme Park in Jinzhai Anhui",
    "target": "IMMERSION",
    "strength": 2
  },
  {
    "source": "Osmanthus Theme Park in Jinzhai Anhui",
    "target": "Architecture Infinite Proliferating Geometry",
    "strength": 2
  },
  {
    "source": "Osmanthus Theme Park in Jinzhai Anhui",
    "target": "Wavelength",
    "strength": 2
  },
  {
    "source": "Osmanthus Theme Park in Jinzhai Anhui",
    "target": "GRCB BANK - Time Tells a Luminous Story",
    "strength": 2
  },
  {
    "source": "Osmanthus Theme Park in Jinzhai Anhui",
    "target": "MUURmelaar",
    "strength": 2
  },
  {
    "source": "Osmanthus Theme Park in Jinzhai Anhui",
    "target": "Media sculpture \"Particles of life",
    "strength": 2
  },
  {
    "source": "Osmanthus Theme Park in Jinzhai Anhui",
    "target": "Hyundai Pavilion Field of Stars",
    "strength": 2
  },
  {
    "source": "Osmanthus Theme Park in Jinzhai Anhui",
    "target": "Hyundai Pavilion Interactive Water Installation",
    "strength": 2
  },
  {
    "source": "Osmanthus Theme Park in Jinzhai Anhui",
    "target": "Restaurant \"Normal",
    "strength": 2
  },
  {
    "source": "Osmanthus Theme Park in Jinzhai Anhui",
    "target": "One Shenzhen Bay",
    "strength": 2
  },
  {
    "source": "Osmanthus Theme Park in Jinzhai Anhui",
    "target": "Ralph Lauren 50th Anniversary Reflection",
    "strength": 2
  },
  {
    "source": "Osmanthus Theme Park in Jinzhai Anhui",
    "target": "Seestadt.bot",
    "strength": 2
  },
  {
    "source": "Osmanthus Theme Park in Jinzhai Anhui",
    "target": "The Dash Wall",
    "strength": 2
  },
  {
    "source": "Osmanthus Theme Park in Jinzhai Anhui",
    "target": "Synergies",
    "strength": 2
  },
  {
    "source": "Osmanthus Theme Park in Jinzhai Anhui",
    "target": "AMANDOLIER FA��ADE",
    "strength": 2
  },
  {
    "source": "Osmanthus Theme Park in Jinzhai Anhui",
    "target": "The abode of the outside",
    "strength": 2
  },
  {
    "source": "Osmanthus Theme Park in Jinzhai Anhui",
    "target": "Media architecture cluster Real-scene simulation and design prototype",
    "strength": 2
  },
  {
    "source": "Osmanthus Theme Park in Jinzhai Anhui",
    "target": "VIRTUAL WALLS - TORRECARDENAS",
    "strength": 2
  },
  {
    "source": "Osmanthus Theme Park in Jinzhai Anhui",
    "target": "Northside Beacons",
    "strength": 2
  },
  {
    "source": "Osmanthus Theme Park in Jinzhai Anhui",
    "target": "LightLines",
    "strength": 2
  },
  {
    "source": "Osmanthus Theme Park in Jinzhai Anhui",
    "target": "Arena",
    "strength": 2
  },
  {
    "source": "Osmanthus Theme Park in Jinzhai Anhui",
    "target": "Monument Remix",
    "strength": 2
  },
  {
    "source": "Osmanthus Theme Park in Jinzhai Anhui",
    "target": "Federation Square Digital Canvas",
    "strength": 2
  },
  {
    "source": "Osmanthus Theme Park in Jinzhai Anhui",
    "target": "Yagan Square",
    "strength": 2
  },
  {
    "source": "Osmanthus Theme Park in Jinzhai Anhui",
    "target": "Smog Free Project",
    "strength": 2
  },
  {
    "source": "Osmanthus Theme Park in Jinzhai Anhui",
    "target": "BioLumen",
    "strength": 2
  },
  {
    "source": "Osmanthus Theme Park in Jinzhai Anhui",
    "target": "Yellow Dust",
    "strength": 2
  },
  {
    "source": "Osmanthus Theme Park in Jinzhai Anhui",
    "target": "Dragon Scale",
    "strength": 2
  },
  {
    "source": "Osmanthus Theme Park in Jinzhai Anhui",
    "target": "Gibigiana",
    "strength": 2
  },
  {
    "source": "Solar Shimmer",
    "target": "UK Pavilion Light Sculpture and Panorama",
    "strength": 2
  },
  {
    "source": "Solar Shimmer",
    "target": "Interactive Media Structure \"Pulse of Life",
    "strength": 2
  },
  {
    "source": "Solar Shimmer",
    "target": "The Infinity Room",
    "strength": 2
  },
  {
    "source": "Solar Shimmer",
    "target": "Where Do We Go From Here?",
    "strength": 2
  },
  {
    "source": "Solar Shimmer",
    "target": "Changi airport's terminal 4 \"Theatre of experience",
    "strength": 2
  },
  {
    "source": "Solar Shimmer",
    "target": "Firefly",
    "strength": 2
  },
  {
    "source": "Solar Shimmer",
    "target": "ARCHIVE DREAMING",
    "strength": 2
  },
  {
    "source": "Solar Shimmer",
    "target": "Sonic Runway",
    "strength": 2
  },
  {
    "source": "Solar Shimmer",
    "target": "urban lights contact",
    "strength": 2
  },
  {
    "source": "Solar Shimmer",
    "target": "DAZZLE | San Diego International Airport",
    "strength": 2
  },
  {
    "source": "Solar Shimmer",
    "target": "TIETO HQ",
    "strength": 2
  },
  {
    "source": "Solar Shimmer",
    "target": "INTERACTIVE CLOUD",
    "strength": 2
  },
  {
    "source": "Solar Shimmer",
    "target": "Plant a Light",
    "strength": 2
  },
  {
    "source": "Solar Shimmer",
    "target": "ARCHIVE DREAMING",
    "strength": 2
  },
  {
    "source": "Solar Shimmer",
    "target": "LightSpell",
    "strength": 2
  },
  {
    "source": "Solar Shimmer",
    "target": "Kipnes Lantern",
    "strength": 2
  },
  {
    "source": "Solar Shimmer",
    "target": "Salling Lights",
    "strength": 2
  },
  {
    "source": "Solar Shimmer",
    "target": "Digital Calligraffiti",
    "strength": 2
  },
  {
    "source": "Solar Shimmer",
    "target": "Digital neighbourhood",
    "strength": 2
  },
  {
    "source": "Solar Shimmer",
    "target": "Chave do Centro or \"The Key to Downtown",
    "strength": 2
  },
  {
    "source": "Solar Shimmer",
    "target": "The Playground",
    "strength": 2
  },
  {
    "source": "Beijing Topwin Center",
    "target": "The shopping center \"Kubometr",
    "strength": 2
  },
  {
    "source": "Beijing Topwin Center",
    "target": "Residential complex \"Tetris Hall",
    "strength": 2
  },
  {
    "source": "Beijing Topwin Center",
    "target": "Zeitkugeln",
    "strength": 2
  },
  {
    "source": "Beijing Topwin Center",
    "target": "Terrell Place",
    "strength": 2
  },
  {
    "source": "Beijing Topwin Center",
    "target": "In The Air, Tonight",
    "strength": 2
  },
  {
    "source": "Beijing Topwin Center",
    "target": "LED Frieze of the New Building of the Kunstmuseum Basel",
    "strength": 2
  },
  {
    "source": "Beijing Topwin Center",
    "target": "False Positive",
    "strength": 2
  },
  {
    "source": "Beijing Topwin Center",
    "target": "The Light House: 888 Collins St",
    "strength": 2
  },
  {
    "source": "IMMERSION",
    "target": "Architecture Infinite Proliferating Geometry",
    "strength": 2
  },
  {
    "source": "IMMERSION",
    "target": "Wavelength",
    "strength": 2
  },
  {
    "source": "IMMERSION",
    "target": "GRCB BANK - Time Tells a Luminous Story",
    "strength": 2
  },
  {
    "source": "IMMERSION",
    "target": "MUURmelaar",
    "strength": 2
  },
  {
    "source": "IMMERSION",
    "target": "Media sculpture \"Particles of life",
    "strength": 2
  },
  {
    "source": "IMMERSION",
    "target": "Hyundai Pavilion Field of Stars",
    "strength": 2
  },
  {
    "source": "IMMERSION",
    "target": "Hyundai Pavilion Interactive Water Installation",
    "strength": 2
  },
  {
    "source": "IMMERSION",
    "target": "Restaurant \"Normal",
    "strength": 2
  },
  {
    "source": "IMMERSION",
    "target": "One Shenzhen Bay",
    "strength": 2
  },
  {
    "source": "IMMERSION",
    "target": "Ralph Lauren 50th Anniversary Reflection",
    "strength": 2
  },
  {
    "source": "IMMERSION",
    "target": "Seestadt.bot",
    "strength": 2
  },
  {
    "source": "IMMERSION",
    "target": "The Dash Wall",
    "strength": 2
  },
  {
    "source": "IMMERSION",
    "target": "Synergies",
    "strength": 2
  },
  {
    "source": "IMMERSION",
    "target": "AMANDOLIER FA��ADE",
    "strength": 2
  },
  {
    "source": "IMMERSION",
    "target": "The abode of the outside",
    "strength": 2
  },
  {
    "source": "IMMERSION",
    "target": "Media architecture cluster Real-scene simulation and design prototype",
    "strength": 2
  },
  {
    "source": "IMMERSION",
    "target": "VIRTUAL WALLS - TORRECARDENAS",
    "strength": 2
  },
  {
    "source": "IMMERSION",
    "target": "Northside Beacons",
    "strength": 2
  },
  {
    "source": "IMMERSION",
    "target": "LightLines",
    "strength": 2
  },
  {
    "source": "IMMERSION",
    "target": "Arena",
    "strength": 2
  },
  {
    "source": "IMMERSION",
    "target": "Monument Remix",
    "strength": 2
  },
  {
    "source": "IMMERSION",
    "target": "Federation Square Digital Canvas",
    "strength": 2
  },
  {
    "source": "IMMERSION",
    "target": "Yagan Square",
    "strength": 2
  },
  {
    "source": "IMMERSION",
    "target": "Smog Free Project",
    "strength": 2
  },
  {
    "source": "IMMERSION",
    "target": "BioLumen",
    "strength": 2
  },
  {
    "source": "IMMERSION",
    "target": "Yellow Dust",
    "strength": 2
  },
  {
    "source": "IMMERSION",
    "target": "Dragon Scale",
    "strength": 2
  },
  {
    "source": "IMMERSION",
    "target": "Gibigiana",
    "strength": 2
  },
  {
    "source": "Architecture Infinite Proliferating Geometry",
    "target": "Wavelength",
    "strength": 2
  },
  {
    "source": "Architecture Infinite Proliferating Geometry",
    "target": "GRCB BANK - Time Tells a Luminous Story",
    "strength": 2
  },
  {
    "source": "Architecture Infinite Proliferating Geometry",
    "target": "MUURmelaar",
    "strength": 2
  },
  {
    "source": "Architecture Infinite Proliferating Geometry",
    "target": "Media sculpture \"Particles of life",
    "strength": 2
  },
  {
    "source": "Architecture Infinite Proliferating Geometry",
    "target": "Hyundai Pavilion Field of Stars",
    "strength": 2
  },
  {
    "source": "Architecture Infinite Proliferating Geometry",
    "target": "Hyundai Pavilion Interactive Water Installation",
    "strength": 2
  },
  {
    "source": "Architecture Infinite Proliferating Geometry",
    "target": "Restaurant \"Normal",
    "strength": 2
  },
  {
    "source": "Architecture Infinite Proliferating Geometry",
    "target": "One Shenzhen Bay",
    "strength": 2
  },
  {
    "source": "Architecture Infinite Proliferating Geometry",
    "target": "Ralph Lauren 50th Anniversary Reflection",
    "strength": 2
  },
  {
    "source": "Architecture Infinite Proliferating Geometry",
    "target": "Seestadt.bot",
    "strength": 2
  },
  {
    "source": "Architecture Infinite Proliferating Geometry",
    "target": "The Dash Wall",
    "strength": 2
  },
  {
    "source": "Architecture Infinite Proliferating Geometry",
    "target": "Synergies",
    "strength": 2
  },
  {
    "source": "Architecture Infinite Proliferating Geometry",
    "target": "AMANDOLIER FA��ADE",
    "strength": 2
  },
  {
    "source": "Architecture Infinite Proliferating Geometry",
    "target": "The abode of the outside",
    "strength": 2
  },
  {
    "source": "Architecture Infinite Proliferating Geometry",
    "target": "Media architecture cluster Real-scene simulation and design prototype",
    "strength": 2
  },
  {
    "source": "Architecture Infinite Proliferating Geometry",
    "target": "VIRTUAL WALLS - TORRECARDENAS",
    "strength": 2
  },
  {
    "source": "Architecture Infinite Proliferating Geometry",
    "target": "Northside Beacons",
    "strength": 2
  },
  {
    "source": "Architecture Infinite Proliferating Geometry",
    "target": "LightLines",
    "strength": 2
  },
  {
    "source": "Architecture Infinite Proliferating Geometry",
    "target": "Arena",
    "strength": 2
  },
  {
    "source": "Architecture Infinite Proliferating Geometry",
    "target": "Monument Remix",
    "strength": 2
  },
  {
    "source": "Architecture Infinite Proliferating Geometry",
    "target": "Federation Square Digital Canvas",
    "strength": 2
  },
  {
    "source": "Architecture Infinite Proliferating Geometry",
    "target": "Yagan Square",
    "strength": 2
  },
  {
    "source": "Architecture Infinite Proliferating Geometry",
    "target": "Smog Free Project",
    "strength": 2
  },
  {
    "source": "Architecture Infinite Proliferating Geometry",
    "target": "BioLumen",
    "strength": 2
  },
  {
    "source": "Architecture Infinite Proliferating Geometry",
    "target": "Yellow Dust",
    "strength": 2
  },
  {
    "source": "Architecture Infinite Proliferating Geometry",
    "target": "Dragon Scale",
    "strength": 2
  },
  {
    "source": "Architecture Infinite Proliferating Geometry",
    "target": "Gibigiana",
    "strength": 2
  },
  {
    "source": "Wavelength",
    "target": "GRCB BANK - Time Tells a Luminous Story",
    "strength": 2
  },
  {
    "source": "Wavelength",
    "target": "MUURmelaar",
    "strength": 2
  },
  {
    "source": "Wavelength",
    "target": "Media sculpture \"Particles of life",
    "strength": 2
  },
  {
    "source": "Wavelength",
    "target": "Hyundai Pavilion Field of Stars",
    "strength": 2
  },
  {
    "source": "Wavelength",
    "target": "Hyundai Pavilion Interactive Water Installation",
    "strength": 2
  },
  {
    "source": "Wavelength",
    "target": "Restaurant \"Normal",
    "strength": 2
  },
  {
    "source": "Wavelength",
    "target": "One Shenzhen Bay",
    "strength": 2
  },
  {
    "source": "Wavelength",
    "target": "Ralph Lauren 50th Anniversary Reflection",
    "strength": 2
  },
  {
    "source": "Wavelength",
    "target": "Seestadt.bot",
    "strength": 2
  },
  {
    "source": "Wavelength",
    "target": "The Dash Wall",
    "strength": 2
  },
  {
    "source": "Wavelength",
    "target": "Synergies",
    "strength": 2
  },
  {
    "source": "Wavelength",
    "target": "AMANDOLIER FA��ADE",
    "strength": 2
  },
  {
    "source": "Wavelength",
    "target": "The abode of the outside",
    "strength": 2
  },
  {
    "source": "Wavelength",
    "target": "Media architecture cluster Real-scene simulation and design prototype",
    "strength": 2
  },
  {
    "source": "Wavelength",
    "target": "VIRTUAL WALLS - TORRECARDENAS",
    "strength": 2
  },
  {
    "source": "Wavelength",
    "target": "Northside Beacons",
    "strength": 2
  },
  {
    "source": "Wavelength",
    "target": "LightLines",
    "strength": 2
  },
  {
    "source": "Wavelength",
    "target": "Arena",
    "strength": 2
  },
  {
    "source": "Wavelength",
    "target": "Monument Remix",
    "strength": 2
  },
  {
    "source": "Wavelength",
    "target": "Federation Square Digital Canvas",
    "strength": 2
  },
  {
    "source": "Wavelength",
    "target": "Yagan Square",
    "strength": 2
  },
  {
    "source": "Wavelength",
    "target": "Smog Free Project",
    "strength": 2
  },
  {
    "source": "Wavelength",
    "target": "BioLumen",
    "strength": 2
  },
  {
    "source": "Wavelength",
    "target": "Yellow Dust",
    "strength": 2
  },
  {
    "source": "Wavelength",
    "target": "Dragon Scale",
    "strength": 2
  },
  {
    "source": "Wavelength",
    "target": "Gibigiana",
    "strength": 2
  },
  {
    "source": "GRCB BANK - Time Tells a Luminous Story",
    "target": "MUURmelaar",
    "strength": 2
  },
  {
    "source": "GRCB BANK - Time Tells a Luminous Story",
    "target": "Media sculpture \"Particles of life",
    "strength": 2
  },
  {
    "source": "GRCB BANK - Time Tells a Luminous Story",
    "target": "Hyundai Pavilion Field of Stars",
    "strength": 2
  },
  {
    "source": "GRCB BANK - Time Tells a Luminous Story",
    "target": "Hyundai Pavilion Interactive Water Installation",
    "strength": 2
  },
  {
    "source": "GRCB BANK - Time Tells a Luminous Story",
    "target": "Restaurant \"Normal",
    "strength": 2
  },
  {
    "source": "GRCB BANK - Time Tells a Luminous Story",
    "target": "One Shenzhen Bay",
    "strength": 2
  },
  {
    "source": "GRCB BANK - Time Tells a Luminous Story",
    "target": "Ralph Lauren 50th Anniversary Reflection",
    "strength": 2
  },
  {
    "source": "GRCB BANK - Time Tells a Luminous Story",
    "target": "Seestadt.bot",
    "strength": 2
  },
  {
    "source": "GRCB BANK - Time Tells a Luminous Story",
    "target": "The Dash Wall",
    "strength": 2
  },
  {
    "source": "GRCB BANK - Time Tells a Luminous Story",
    "target": "Synergies",
    "strength": 2
  },
  {
    "source": "GRCB BANK - Time Tells a Luminous Story",
    "target": "AMANDOLIER FA��ADE",
    "strength": 2
  },
  {
    "source": "GRCB BANK - Time Tells a Luminous Story",
    "target": "The abode of the outside",
    "strength": 2
  },
  {
    "source": "GRCB BANK - Time Tells a Luminous Story",
    "target": "Media architecture cluster Real-scene simulation and design prototype",
    "strength": 2
  },
  {
    "source": "GRCB BANK - Time Tells a Luminous Story",
    "target": "VIRTUAL WALLS - TORRECARDENAS",
    "strength": 2
  },
  {
    "source": "GRCB BANK - Time Tells a Luminous Story",
    "target": "Northside Beacons",
    "strength": 2
  },
  {
    "source": "GRCB BANK - Time Tells a Luminous Story",
    "target": "LightLines",
    "strength": 2
  },
  {
    "source": "GRCB BANK - Time Tells a Luminous Story",
    "target": "Arena",
    "strength": 2
  },
  {
    "source": "GRCB BANK - Time Tells a Luminous Story",
    "target": "Monument Remix",
    "strength": 2
  },
  {
    "source": "GRCB BANK - Time Tells a Luminous Story",
    "target": "Federation Square Digital Canvas",
    "strength": 2
  },
  {
    "source": "GRCB BANK - Time Tells a Luminous Story",
    "target": "Yagan Square",
    "strength": 2
  },
  {
    "source": "GRCB BANK - Time Tells a Luminous Story",
    "target": "Smog Free Project",
    "strength": 2
  },
  {
    "source": "GRCB BANK - Time Tells a Luminous Story",
    "target": "BioLumen",
    "strength": 2
  },
  {
    "source": "GRCB BANK - Time Tells a Luminous Story",
    "target": "Yellow Dust",
    "strength": 2
  },
  {
    "source": "GRCB BANK - Time Tells a Luminous Story",
    "target": "Dragon Scale",
    "strength": 2
  },
  {
    "source": "GRCB BANK - Time Tells a Luminous Story",
    "target": "Gibigiana",
    "strength": 2
  },
  {
    "source": "MUURmelaar",
    "target": "Media sculpture \"Particles of life",
    "strength": 2
  },
  {
    "source": "MUURmelaar",
    "target": "Hyundai Pavilion Field of Stars",
    "strength": 2
  },
  {
    "source": "MUURmelaar",
    "target": "Hyundai Pavilion Interactive Water Installation",
    "strength": 2
  },
  {
    "source": "MUURmelaar",
    "target": "Restaurant \"Normal",
    "strength": 2
  },
  {
    "source": "MUURmelaar",
    "target": "One Shenzhen Bay",
    "strength": 2
  },
  {
    "source": "MUURmelaar",
    "target": "Ralph Lauren 50th Anniversary Reflection",
    "strength": 2
  },
  {
    "source": "MUURmelaar",
    "target": "Seestadt.bot",
    "strength": 2
  },
  {
    "source": "MUURmelaar",
    "target": "The Dash Wall",
    "strength": 2
  },
  {
    "source": "MUURmelaar",
    "target": "Synergies",
    "strength": 2
  },
  {
    "source": "MUURmelaar",
    "target": "AMANDOLIER FA��ADE",
    "strength": 2
  },
  {
    "source": "MUURmelaar",
    "target": "The abode of the outside",
    "strength": 2
  },
  {
    "source": "MUURmelaar",
    "target": "Media architecture cluster Real-scene simulation and design prototype",
    "strength": 2
  },
  {
    "source": "MUURmelaar",
    "target": "VIRTUAL WALLS - TORRECARDENAS",
    "strength": 2
  },
  {
    "source": "MUURmelaar",
    "target": "Northside Beacons",
    "strength": 2
  },
  {
    "source": "MUURmelaar",
    "target": "LightLines",
    "strength": 2
  },
  {
    "source": "MUURmelaar",
    "target": "Arena",
    "strength": 2
  },
  {
    "source": "MUURmelaar",
    "target": "Monument Remix",
    "strength": 2
  },
  {
    "source": "MUURmelaar",
    "target": "Federation Square Digital Canvas",
    "strength": 2
  },
  {
    "source": "MUURmelaar",
    "target": "Yagan Square",
    "strength": 2
  },
  {
    "source": "MUURmelaar",
    "target": "Smog Free Project",
    "strength": 2
  },
  {
    "source": "MUURmelaar",
    "target": "BioLumen",
    "strength": 2
  },
  {
    "source": "MUURmelaar",
    "target": "Yellow Dust",
    "strength": 2
  },
  {
    "source": "MUURmelaar",
    "target": "Dragon Scale",
    "strength": 2
  },
  {
    "source": "MUURmelaar",
    "target": "Gibigiana",
    "strength": 2
  },
  {
    "source": "The residential complex \"Signature",
    "target": "Residential complex \"Chicago Central House",
    "strength": 2
  },
  {
    "source": "The residential complex \"Signature",
    "target": "Uptown Underground",
    "strength": 2
  },
  {
    "source": "The residential complex \"Signature",
    "target": "building dawn",
    "strength": 2
  },
  {
    "source": "The residential complex \"Signature",
    "target": "Radisson BLU Scandinavia",
    "strength": 2
  },
  {
    "source": "The residential complex \"Signature",
    "target": "Preservation of Silence",
    "strength": 2
  },
  {
    "source": "The residential complex \"Signature",
    "target": "Variegation Index",
    "strength": 2
  },
  {
    "source": "The residential complex \"Signature",
    "target": "Shadow Wall",
    "strength": 2
  },
  {
    "source": "The residential complex \"Signature",
    "target": "Woodie",
    "strength": 2
  },
  {
    "source": "The residential complex \"Signature",
    "target": "Aukio",
    "strength": 2
  },
  {
    "source": "The residential complex \"Signature",
    "target": "Light art installation Beacon",
    "strength": 2
  },
  {
    "source": "The residential complex \"Signature",
    "target": "Star Hunters",
    "strength": 2
  },
  {
    "source": "The residential complex \"Signature",
    "target": "Catholic Church of St. Nicholas",
    "strength": 2
  },
  {
    "source": "The residential complex \"Signature",
    "target": "Interactive Media Sculpture The Cube",
    "strength": 2
  },
  {
    "source": "The residential complex \"Signature",
    "target": "Lighting for the Tetris Hall Residential Complex",
    "strength": 2
  },
  {
    "source": "The residential complex \"Signature",
    "target": "The 4th Street SW Underpass Enhancement Project",
    "strength": 2
  },
  {
    "source": "The residential complex \"Signature",
    "target": "The Pearl Divers",
    "strength": 2
  },
  {
    "source": "The residential complex \"Signature",
    "target": "Landscapes of Dreams",
    "strength": 2
  },
  {
    "source": "The residential complex \"Signature",
    "target": "MAGIC MIRROR",
    "strength": 2
  },
  {
    "source": "The residential complex \"Signature",
    "target": "The Pipes",
    "strength": 2
  },
  {
    "source": "The residential complex \"Signature",
    "target": "Wervel [Turmoil]",
    "strength": 2
  },
  {
    "source": "The residential complex \"Signature",
    "target": "All Colors Are In The Lights",
    "strength": 2
  },
  {
    "source": "The residential complex \"Signature",
    "target": "La Sprite",
    "strength": 2
  },
  {
    "source": "The residential complex \"Signature",
    "target": "PASSAGES",
    "strength": 2
  },
  {
    "source": "The residential complex \"Signature",
    "target": "Wuhan Optics Valley Square Complex Theme Ground Sculpture",
    "strength": 2
  },
  {
    "source": "The residential complex \"Signature",
    "target": "Stadt der Temperamente",
    "strength": 2
  },
  {
    "source": "The residential complex \"Signature",
    "target": "Citizen Dialog Kit",
    "strength": 2
  },
  {
    "source": "Multifunctional complex \"Cascade Plaza",
    "target": "CyclePhilly",
    "strength": 2
  },
  {
    "source": "Multifunctional complex \"Cascade Plaza",
    "target": "Tha Paper Wave",
    "strength": 2
  },
  {
    "source": "Multifunctional complex \"Cascade Plaza",
    "target": "BIRLOKI System",
    "strength": 2
  },
  {
    "source": "Multifunctional complex \"Cascade Plaza",
    "target": "Walk of Stars",
    "strength": 2
  },
  {
    "source": "Multifunctional complex \"Cascade Plaza",
    "target": "Our Meeting Places",
    "strength": 2
  },
  {
    "source": "Multifunctional complex \"Cascade Plaza",
    "target": "Light Barrier",
    "strength": 2
  },
  {
    "source": "Multifunctional complex \"Cascade Plaza",
    "target": "Inteference",
    "strength": 2
  },
  {
    "source": "Multifunctional complex \"Cascade Plaza",
    "target": "Mondeal Square",
    "strength": 2
  },
  {
    "source": "Multifunctional complex \"Cascade Plaza",
    "target": "In The Air, Tonight",
    "strength": 2
  },
  {
    "source": "Multifunctional complex \"Cascade Plaza",
    "target": "Pipette",
    "strength": 2
  },
  {
    "source": "Multifunctional complex \"Cascade Plaza",
    "target": "Mendelssohn Effektorium",
    "strength": 2
  },
  {
    "source": "Multifunctional complex \"Cascade Plaza",
    "target": "Le Circuit de Bachelard",
    "strength": 2
  },
  {
    "source": "Multifunctional complex \"Cascade Plaza",
    "target": "The Energy Tower fa��ade lighting",
    "strength": 2
  },
  {
    "source": "Multifunctional complex \"Cascade Plaza",
    "target": "Orkhestra, Orchestrating the Depth of Light",
    "strength": 2
  },
  {
    "source": "Multifunctional complex \"Cascade Plaza",
    "target": "Augmented Urban Reality",
    "strength": 2
  },
  {
    "source": "Multifunctional complex \"Cascade Plaza",
    "target": "Affinity : Interactive Art Installation",
    "strength": 2
  },
  {
    "source": "Multifunctional complex \"Cascade Plaza",
    "target": "Human BEEing",
    "strength": 2
  },
  {
    "source": "Multifunctional complex \"Cascade Plaza",
    "target": "digitalMatatus",
    "strength": 2
  },
  {
    "source": "Multifunctional complex \"Cascade Plaza",
    "target": "Ninety Six",
    "strength": 2
  },
  {
    "source": "Multifunctional complex \"Cascade Plaza",
    "target": "MegaFaces",
    "strength": 2
  },
  {
    "source": "Multifunctional complex \"Cascade Plaza",
    "target": "Discovery Wall",
    "strength": 2
  },
  {
    "source": "The shopping center \"Kubometr",
    "target": "Residential complex \"Tetris Hall",
    "strength": 2
  },
  {
    "source": "The shopping center \"Kubometr",
    "target": "Zeitkugeln",
    "strength": 2
  },
  {
    "source": "The shopping center \"Kubometr",
    "target": "Terrell Place",
    "strength": 2
  },
  {
    "source": "The shopping center \"Kubometr",
    "target": "In The Air, Tonight",
    "strength": 2
  },
  {
    "source": "The shopping center \"Kubometr",
    "target": "LED Frieze of the New Building of the Kunstmuseum Basel",
    "strength": 2
  },
  {
    "source": "The shopping center \"Kubometr",
    "target": "False Positive",
    "strength": 2
  },
  {
    "source": "The shopping center \"Kubometr",
    "target": "The Light House: 888 Collins St",
    "strength": 2
  },
  {
    "source": "UK Pavilion Light Sculpture and Panorama",
    "target": "Interactive Media Structure \"Pulse of Life",
    "strength": 2
  },
  {
    "source": "UK Pavilion Light Sculpture and Panorama",
    "target": "The Infinity Room",
    "strength": 2
  },
  {
    "source": "UK Pavilion Light Sculpture and Panorama",
    "target": "Where Do We Go From Here?",
    "strength": 2
  },
  {
    "source": "UK Pavilion Light Sculpture and Panorama",
    "target": "Changi airport's terminal 4 \"Theatre of experience",
    "strength": 2
  },
  {
    "source": "UK Pavilion Light Sculpture and Panorama",
    "target": "Firefly",
    "strength": 2
  },
  {
    "source": "UK Pavilion Light Sculpture and Panorama",
    "target": "ARCHIVE DREAMING",
    "strength": 2
  },
  {
    "source": "UK Pavilion Light Sculpture and Panorama",
    "target": "Sonic Runway",
    "strength": 2
  },
  {
    "source": "UK Pavilion Light Sculpture and Panorama",
    "target": "urban lights contact",
    "strength": 2
  },
  {
    "source": "UK Pavilion Light Sculpture and Panorama",
    "target": "DAZZLE | San Diego International Airport",
    "strength": 2
  },
  {
    "source": "UK Pavilion Light Sculpture and Panorama",
    "target": "TIETO HQ",
    "strength": 2
  },
  {
    "source": "UK Pavilion Light Sculpture and Panorama",
    "target": "INTERACTIVE CLOUD",
    "strength": 2
  },
  {
    "source": "UK Pavilion Light Sculpture and Panorama",
    "target": "Plant a Light",
    "strength": 2
  },
  {
    "source": "UK Pavilion Light Sculpture and Panorama",
    "target": "ARCHIVE DREAMING",
    "strength": 2
  },
  {
    "source": "UK Pavilion Light Sculpture and Panorama",
    "target": "LightSpell",
    "strength": 2
  },
  {
    "source": "UK Pavilion Light Sculpture and Panorama",
    "target": "Kipnes Lantern",
    "strength": 2
  },
  {
    "source": "UK Pavilion Light Sculpture and Panorama",
    "target": "Salling Lights",
    "strength": 2
  },
  {
    "source": "UK Pavilion Light Sculpture and Panorama",
    "target": "Digital Calligraffiti",
    "strength": 2
  },
  {
    "source": "UK Pavilion Light Sculpture and Panorama",
    "target": "Digital neighbourhood",
    "strength": 2
  },
  {
    "source": "UK Pavilion Light Sculpture and Panorama",
    "target": "Chave do Centro or \"The Key to Downtown",
    "strength": 2
  },
  {
    "source": "UK Pavilion Light Sculpture and Panorama",
    "target": "The Playground",
    "strength": 2
  },
  {
    "source": "Media sculpture \"Particles of life",
    "target": "Hyundai Pavilion Field of Stars",
    "strength": 2
  },
  {
    "source": "Media sculpture \"Particles of life",
    "target": "Hyundai Pavilion Interactive Water Installation",
    "strength": 2
  },
  {
    "source": "Media sculpture \"Particles of life",
    "target": "Restaurant \"Normal",
    "strength": 2
  },
  {
    "source": "Media sculpture \"Particles of life",
    "target": "One Shenzhen Bay",
    "strength": 2
  },
  {
    "source": "Media sculpture \"Particles of life",
    "target": "Ralph Lauren 50th Anniversary Reflection",
    "strength": 2
  },
  {
    "source": "Media sculpture \"Particles of life",
    "target": "Seestadt.bot",
    "strength": 2
  },
  {
    "source": "Media sculpture \"Particles of life",
    "target": "The Dash Wall",
    "strength": 2
  },
  {
    "source": "Media sculpture \"Particles of life",
    "target": "Synergies",
    "strength": 2
  },
  {
    "source": "Media sculpture \"Particles of life",
    "target": "AMANDOLIER FA��ADE",
    "strength": 2
  },
  {
    "source": "Media sculpture \"Particles of life",
    "target": "The abode of the outside",
    "strength": 2
  },
  {
    "source": "Media sculpture \"Particles of life",
    "target": "Media architecture cluster Real-scene simulation and design prototype",
    "strength": 2
  },
  {
    "source": "Media sculpture \"Particles of life",
    "target": "VIRTUAL WALLS - TORRECARDENAS",
    "strength": 2
  },
  {
    "source": "Media sculpture \"Particles of life",
    "target": "Northside Beacons",
    "strength": 2
  },
  {
    "source": "Media sculpture \"Particles of life",
    "target": "LightLines",
    "strength": 2
  },
  {
    "source": "Media sculpture \"Particles of life",
    "target": "Arena",
    "strength": 2
  },
  {
    "source": "Media sculpture \"Particles of life",
    "target": "Monument Remix",
    "strength": 2
  },
  {
    "source": "Media sculpture \"Particles of life",
    "target": "Federation Square Digital Canvas",
    "strength": 2
  },
  {
    "source": "Media sculpture \"Particles of life",
    "target": "Yagan Square",
    "strength": 2
  },
  {
    "source": "Media sculpture \"Particles of life",
    "target": "Smog Free Project",
    "strength": 2
  },
  {
    "source": "Media sculpture \"Particles of life",
    "target": "BioLumen",
    "strength": 2
  },
  {
    "source": "Media sculpture \"Particles of life",
    "target": "Yellow Dust",
    "strength": 2
  },
  {
    "source": "Media sculpture \"Particles of life",
    "target": "Dragon Scale",
    "strength": 2
  },
  {
    "source": "Media sculpture \"Particles of life",
    "target": "Gibigiana",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Field of Stars",
    "target": "Hyundai Pavilion Interactive Water Installation",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Field of Stars",
    "target": "Restaurant \"Normal",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Field of Stars",
    "target": "One Shenzhen Bay",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Field of Stars",
    "target": "Ralph Lauren 50th Anniversary Reflection",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Field of Stars",
    "target": "Seestadt.bot",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Field of Stars",
    "target": "The Dash Wall",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Field of Stars",
    "target": "Synergies",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Field of Stars",
    "target": "AMANDOLIER FA��ADE",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Field of Stars",
    "target": "The abode of the outside",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Field of Stars",
    "target": "Media architecture cluster Real-scene simulation and design prototype",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Field of Stars",
    "target": "VIRTUAL WALLS - TORRECARDENAS",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Field of Stars",
    "target": "Northside Beacons",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Field of Stars",
    "target": "LightLines",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Field of Stars",
    "target": "Arena",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Field of Stars",
    "target": "Monument Remix",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Field of Stars",
    "target": "Federation Square Digital Canvas",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Field of Stars",
    "target": "Yagan Square",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Field of Stars",
    "target": "Smog Free Project",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Field of Stars",
    "target": "BioLumen",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Field of Stars",
    "target": "Yellow Dust",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Field of Stars",
    "target": "Dragon Scale",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Field of Stars",
    "target": "Gibigiana",
    "strength": 2
  },
  {
    "source": "Interactive Media Structure \"Pulse of Life",
    "target": "The Infinity Room",
    "strength": 2
  },
  {
    "source": "Interactive Media Structure \"Pulse of Life",
    "target": "Where Do We Go From Here?",
    "strength": 2
  },
  {
    "source": "Interactive Media Structure \"Pulse of Life",
    "target": "Changi airport's terminal 4 \"Theatre of experience",
    "strength": 2
  },
  {
    "source": "Interactive Media Structure \"Pulse of Life",
    "target": "Firefly",
    "strength": 2
  },
  {
    "source": "Interactive Media Structure \"Pulse of Life",
    "target": "ARCHIVE DREAMING",
    "strength": 2
  },
  {
    "source": "Interactive Media Structure \"Pulse of Life",
    "target": "Sonic Runway",
    "strength": 2
  },
  {
    "source": "Interactive Media Structure \"Pulse of Life",
    "target": "urban lights contact",
    "strength": 2
  },
  {
    "source": "Interactive Media Structure \"Pulse of Life",
    "target": "DAZZLE | San Diego International Airport",
    "strength": 2
  },
  {
    "source": "Interactive Media Structure \"Pulse of Life",
    "target": "TIETO HQ",
    "strength": 2
  },
  {
    "source": "Interactive Media Structure \"Pulse of Life",
    "target": "INTERACTIVE CLOUD",
    "strength": 2
  },
  {
    "source": "Interactive Media Structure \"Pulse of Life",
    "target": "Plant a Light",
    "strength": 2
  },
  {
    "source": "Interactive Media Structure \"Pulse of Life",
    "target": "ARCHIVE DREAMING",
    "strength": 2
  },
  {
    "source": "Interactive Media Structure \"Pulse of Life",
    "target": "LightSpell",
    "strength": 2
  },
  {
    "source": "Interactive Media Structure \"Pulse of Life",
    "target": "Kipnes Lantern",
    "strength": 2
  },
  {
    "source": "Interactive Media Structure \"Pulse of Life",
    "target": "Salling Lights",
    "strength": 2
  },
  {
    "source": "Interactive Media Structure \"Pulse of Life",
    "target": "Digital Calligraffiti",
    "strength": 2
  },
  {
    "source": "Interactive Media Structure \"Pulse of Life",
    "target": "Digital neighbourhood",
    "strength": 2
  },
  {
    "source": "Interactive Media Structure \"Pulse of Life",
    "target": "Chave do Centro or \"The Key to Downtown",
    "strength": 2
  },
  {
    "source": "Interactive Media Structure \"Pulse of Life",
    "target": "The Playground",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Interactive Water Installation",
    "target": "Restaurant \"Normal",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Interactive Water Installation",
    "target": "One Shenzhen Bay",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Interactive Water Installation",
    "target": "Ralph Lauren 50th Anniversary Reflection",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Interactive Water Installation",
    "target": "Seestadt.bot",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Interactive Water Installation",
    "target": "The Dash Wall",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Interactive Water Installation",
    "target": "Synergies",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Interactive Water Installation",
    "target": "AMANDOLIER FA��ADE",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Interactive Water Installation",
    "target": "The abode of the outside",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Interactive Water Installation",
    "target": "Media architecture cluster Real-scene simulation and design prototype",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Interactive Water Installation",
    "target": "VIRTUAL WALLS - TORRECARDENAS",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Interactive Water Installation",
    "target": "Northside Beacons",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Interactive Water Installation",
    "target": "LightLines",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Interactive Water Installation",
    "target": "Arena",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Interactive Water Installation",
    "target": "Monument Remix",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Interactive Water Installation",
    "target": "Federation Square Digital Canvas",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Interactive Water Installation",
    "target": "Yagan Square",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Interactive Water Installation",
    "target": "Smog Free Project",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Interactive Water Installation",
    "target": "BioLumen",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Interactive Water Installation",
    "target": "Yellow Dust",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Interactive Water Installation",
    "target": "Dragon Scale",
    "strength": 2
  },
  {
    "source": "Hyundai Pavilion Interactive Water Installation",
    "target": "Gibigiana",
    "strength": 2
  },
  {
    "source": "Shopping center \"Passage",
    "target": "Harpa",
    "strength": 2
  },
  {
    "source": "Shopping center \"Passage",
    "target": "Taman Anggrek",
    "strength": 2
  },
  {
    "source": "Shopping center \"Passage",
    "target": "Digital Fountain",
    "strength": 2
  },
  {
    "source": "Shopping center \"Passage",
    "target": "Floating Island",
    "strength": 2
  },
  {
    "source": "Shopping center \"Passage",
    "target": "TWEETx",
    "strength": 2
  },
  {
    "source": "Shopping center \"Passage",
    "target": "Augmented Structures v1.1",
    "strength": 2
  },
  {
    "source": "Shopping center \"Passage",
    "target": "Qube",
    "strength": 2
  },
  {
    "source": "Shopping center \"Passage",
    "target": "Saxo Reactive Ceiling",
    "strength": 2
  },
  {
    "source": "Residential complex \"Tetris Hall",
    "target": "Zeitkugeln",
    "strength": 2
  },
  {
    "source": "Residential complex \"Tetris Hall",
    "target": "Terrell Place",
    "strength": 2
  },
  {
    "source": "Residential complex \"Tetris Hall",
    "target": "In The Air, Tonight",
    "strength": 2
  },
  {
    "source": "Residential complex \"Tetris Hall",
    "target": "LED Frieze of the New Building of the Kunstmuseum Basel",
    "strength": 2
  },
  {
    "source": "Residential complex \"Tetris Hall",
    "target": "False Positive",
    "strength": 2
  },
  {
    "source": "Residential complex \"Tetris Hall",
    "target": "The Light House: 888 Collins St",
    "strength": 2
  },
  {
    "source": "Restaurant \"Normal",
    "target": "One Shenzhen Bay",
    "strength": 2
  },
  {
    "source": "Restaurant \"Normal",
    "target": "Ralph Lauren 50th Anniversary Reflection",
    "strength": 2
  },
  {
    "source": "Restaurant \"Normal",
    "target": "Seestadt.bot",
    "strength": 2
  },
  {
    "source": "Restaurant \"Normal",
    "target": "The Dash Wall",
    "strength": 2
  },
  {
    "source": "Restaurant \"Normal",
    "target": "Synergies",
    "strength": 2
  },
  {
    "source": "Restaurant \"Normal",
    "target": "AMANDOLIER FA��ADE",
    "strength": 2
  },
  {
    "source": "Restaurant \"Normal",
    "target": "The abode of the outside",
    "strength": 2
  },
  {
    "source": "Restaurant \"Normal",
    "target": "Media architecture cluster Real-scene simulation and design prototype",
    "strength": 2
  },
  {
    "source": "Restaurant \"Normal",
    "target": "VIRTUAL WALLS - TORRECARDENAS",
    "strength": 2
  },
  {
    "source": "Restaurant \"Normal",
    "target": "Northside Beacons",
    "strength": 2
  },
  {
    "source": "Restaurant \"Normal",
    "target": "LightLines",
    "strength": 2
  },
  {
    "source": "Restaurant \"Normal",
    "target": "Arena",
    "strength": 2
  },
  {
    "source": "Restaurant \"Normal",
    "target": "Monument Remix",
    "strength": 2
  },
  {
    "source": "Restaurant \"Normal",
    "target": "Federation Square Digital Canvas",
    "strength": 2
  },
  {
    "source": "Restaurant \"Normal",
    "target": "Yagan Square",
    "strength": 2
  },
  {
    "source": "Restaurant \"Normal",
    "target": "Smog Free Project",
    "strength": 2
  },
  {
    "source": "Restaurant \"Normal",
    "target": "BioLumen",
    "strength": 2
  },
  {
    "source": "Restaurant \"Normal",
    "target": "Yellow Dust",
    "strength": 2
  },
  {
    "source": "Restaurant \"Normal",
    "target": "Dragon Scale",
    "strength": 2
  },
  {
    "source": "Restaurant \"Normal",
    "target": "Gibigiana",
    "strength": 2
  },
  {
    "source": "Residential complex \"Chicago Central House",
    "target": "Uptown Underground",
    "strength": 2
  },
  {
    "source": "Residential complex \"Chicago Central House",
    "target": "building dawn",
    "strength": 2
  },
  {
    "source": "Residential complex \"Chicago Central House",
    "target": "Radisson BLU Scandinavia",
    "strength": 2
  },
  {
    "source": "Residential complex \"Chicago Central House",
    "target": "Preservation of Silence",
    "strength": 2
  },
  {
    "source": "Residential complex \"Chicago Central House",
    "target": "Variegation Index",
    "strength": 2
  },
  {
    "source": "Residential complex \"Chicago Central House",
    "target": "Shadow Wall",
    "strength": 2
  },
  {
    "source": "Residential complex \"Chicago Central House",
    "target": "Woodie",
    "strength": 2
  },
  {
    "source": "Residential complex \"Chicago Central House",
    "target": "Aukio",
    "strength": 2
  },
  {
    "source": "Residential complex \"Chicago Central House",
    "target": "Light art installation Beacon",
    "strength": 2
  },
  {
    "source": "Residential complex \"Chicago Central House",
    "target": "Star Hunters",
    "strength": 2
  },
  {
    "source": "Residential complex \"Chicago Central House",
    "target": "Catholic Church of St. Nicholas",
    "strength": 2
  },
  {
    "source": "Residential complex \"Chicago Central House",
    "target": "Interactive Media Sculpture The Cube",
    "strength": 2
  },
  {
    "source": "Residential complex \"Chicago Central House",
    "target": "Lighting for the Tetris Hall Residential Complex",
    "strength": 2
  },
  {
    "source": "Residential complex \"Chicago Central House",
    "target": "The 4th Street SW Underpass Enhancement Project",
    "strength": 2
  },
  {
    "source": "Residential complex \"Chicago Central House",
    "target": "The Pearl Divers",
    "strength": 2
  },
  {
    "source": "Residential complex \"Chicago Central House",
    "target": "Landscapes of Dreams",
    "strength": 2
  },
  {
    "source": "Residential complex \"Chicago Central House",
    "target": "MAGIC MIRROR",
    "strength": 2
  },
  {
    "source": "Residential complex \"Chicago Central House",
    "target": "The Pipes",
    "strength": 2
  },
  {
    "source": "Residential complex \"Chicago Central House",
    "target": "Wervel [Turmoil]",
    "strength": 2
  },
  {
    "source": "Residential complex \"Chicago Central House",
    "target": "All Colors Are In The Lights",
    "strength": 2
  },
  {
    "source": "Residential complex \"Chicago Central House",
    "target": "La Sprite",
    "strength": 2
  },
  {
    "source": "Residential complex \"Chicago Central House",
    "target": "PASSAGES",
    "strength": 2
  },
  {
    "source": "Residential complex \"Chicago Central House",
    "target": "Wuhan Optics Valley Square Complex Theme Ground Sculpture",
    "strength": 2
  },
  {
    "source": "Residential complex \"Chicago Central House",
    "target": "Stadt der Temperamente",
    "strength": 2
  },
  {
    "source": "Residential complex \"Chicago Central House",
    "target": "Citizen Dialog Kit",
    "strength": 2
  },
  {
    "source": "Zeitkugeln",
    "target": "Terrell Place",
    "strength": 2
  },
  {
    "source": "Zeitkugeln",
    "target": "In The Air, Tonight",
    "strength": 2
  },
  {
    "source": "Zeitkugeln",
    "target": "LED Frieze of the New Building of the Kunstmuseum Basel",
    "strength": 2
  },
  {
    "source": "Zeitkugeln",
    "target": "False Positive",
    "strength": 2
  },
  {
    "source": "Zeitkugeln",
    "target": "The Light House: 888 Collins St",
    "strength": 2
  },
  {
    "source": "Terrell Place",
    "target": "In The Air, Tonight",
    "strength": 2
  },
  {
    "source": "Terrell Place",
    "target": "LED Frieze of the New Building of the Kunstmuseum Basel",
    "strength": 2
  },
  {
    "source": "Terrell Place",
    "target": "False Positive",
    "strength": 2
  },
  {
    "source": "Terrell Place",
    "target": "The Light House: 888 Collins St",
    "strength": 2
  },
  {
    "source": "The Infinity Room",
    "target": "Where Do We Go From Here?",
    "strength": 2
  },
  {
    "source": "The Infinity Room",
    "target": "Changi airport's terminal 4 \"Theatre of experience",
    "strength": 2
  },
  {
    "source": "The Infinity Room",
    "target": "Firefly",
    "strength": 2
  },
  {
    "source": "The Infinity Room",
    "target": "ARCHIVE DREAMING",
    "strength": 2
  },
  {
    "source": "The Infinity Room",
    "target": "Sonic Runway",
    "strength": 2
  },
  {
    "source": "The Infinity Room",
    "target": "urban lights contact",
    "strength": 2
  },
  {
    "source": "The Infinity Room",
    "target": "DAZZLE | San Diego International Airport",
    "strength": 2
  },
  {
    "source": "The Infinity Room",
    "target": "TIETO HQ",
    "strength": 2
  },
  {
    "source": "The Infinity Room",
    "target": "INTERACTIVE CLOUD",
    "strength": 2
  },
  {
    "source": "The Infinity Room",
    "target": "Plant a Light",
    "strength": 2
  },
  {
    "source": "The Infinity Room",
    "target": "ARCHIVE DREAMING",
    "strength": 2
  },
  {
    "source": "The Infinity Room",
    "target": "LightSpell",
    "strength": 2
  },
  {
    "source": "The Infinity Room",
    "target": "Kipnes Lantern",
    "strength": 2
  },
  {
    "source": "The Infinity Room",
    "target": "Salling Lights",
    "strength": 2
  },
  {
    "source": "The Infinity Room",
    "target": "Digital Calligraffiti",
    "strength": 2
  },
  {
    "source": "The Infinity Room",
    "target": "Digital neighbourhood",
    "strength": 2
  },
  {
    "source": "The Infinity Room",
    "target": "Chave do Centro or \"The Key to Downtown",
    "strength": 2
  },
  {
    "source": "The Infinity Room",
    "target": "The Playground",
    "strength": 2
  },
  {
    "source": "Where Do We Go From Here?",
    "target": "Changi airport's terminal 4 \"Theatre of experience",
    "strength": 2
  },
  {
    "source": "Where Do We Go From Here?",
    "target": "Firefly",
    "strength": 2
  },
  {
    "source": "Where Do We Go From Here?",
    "target": "ARCHIVE DREAMING",
    "strength": 2
  },
  {
    "source": "Where Do We Go From Here?",
    "target": "Sonic Runway",
    "strength": 2
  },
  {
    "source": "Where Do We Go From Here?",
    "target": "urban lights contact",
    "strength": 2
  },
  {
    "source": "Where Do We Go From Here?",
    "target": "DAZZLE | San Diego International Airport",
    "strength": 2
  },
  {
    "source": "Where Do We Go From Here?",
    "target": "TIETO HQ",
    "strength": 2
  },
  {
    "source": "Where Do We Go From Here?",
    "target": "INTERACTIVE CLOUD",
    "strength": 2
  },
  {
    "source": "Where Do We Go From Here?",
    "target": "Plant a Light",
    "strength": 2
  },
  {
    "source": "Where Do We Go From Here?",
    "target": "ARCHIVE DREAMING",
    "strength": 2
  },
  {
    "source": "Where Do We Go From Here?",
    "target": "LightSpell",
    "strength": 2
  },
  {
    "source": "Where Do We Go From Here?",
    "target": "Kipnes Lantern",
    "strength": 2
  },
  {
    "source": "Where Do We Go From Here?",
    "target": "Salling Lights",
    "strength": 2
  },
  {
    "source": "Where Do We Go From Here?",
    "target": "Digital Calligraffiti",
    "strength": 2
  },
  {
    "source": "Where Do We Go From Here?",
    "target": "Digital neighbourhood",
    "strength": 2
  },
  {
    "source": "Where Do We Go From Here?",
    "target": "Chave do Centro or \"The Key to Downtown",
    "strength": 2
  },
  {
    "source": "Where Do We Go From Here?",
    "target": "The Playground",
    "strength": 2
  },
  {
    "source": "Changi airport's terminal 4 \"Theatre of experience",
    "target": "Firefly",
    "strength": 2
  },
  {
    "source": "Changi airport's terminal 4 \"Theatre of experience",
    "target": "ARCHIVE DREAMING",
    "strength": 2
  },
  {
    "source": "Changi airport's terminal 4 \"Theatre of experience",
    "target": "Sonic Runway",
    "strength": 2
  },
  {
    "source": "Changi airport's terminal 4 \"Theatre of experience",
    "target": "urban lights contact",
    "strength": 2
  },
  {
    "source": "Changi airport's terminal 4 \"Theatre of experience",
    "target": "DAZZLE | San Diego International Airport",
    "strength": 2
  },
  {
    "source": "Changi airport's terminal 4 \"Theatre of experience",
    "target": "TIETO HQ",
    "strength": 2
  },
  {
    "source": "Changi airport's terminal 4 \"Theatre of experience",
    "target": "INTERACTIVE CLOUD",
    "strength": 2
  },
  {
    "source": "Changi airport's terminal 4 \"Theatre of experience",
    "target": "Plant a Light",
    "strength": 2
  },
  {
    "source": "Changi airport's terminal 4 \"Theatre of experience",
    "target": "ARCHIVE DREAMING",
    "strength": 2
  },
  {
    "source": "Changi airport's terminal 4 \"Theatre of experience",
    "target": "LightSpell",
    "strength": 2
  },
  {
    "source": "Changi airport's terminal 4 \"Theatre of experience",
    "target": "Kipnes Lantern",
    "strength": 2
  },
  {
    "source": "Changi airport's terminal 4 \"Theatre of experience",
    "target": "Salling Lights",
    "strength": 2
  },
  {
    "source": "Changi airport's terminal 4 \"Theatre of experience",
    "target": "Digital Calligraffiti",
    "strength": 2
  },
  {
    "source": "Changi airport's terminal 4 \"Theatre of experience",
    "target": "Digital neighbourhood",
    "strength": 2
  },
  {
    "source": "Changi airport's terminal 4 \"Theatre of experience",
    "target": "Chave do Centro or \"The Key to Downtown",
    "strength": 2
  },
  {
    "source": "Changi airport's terminal 4 \"Theatre of experience",
    "target": "The Playground",
    "strength": 2
  },
  {
    "source": "One Shenzhen Bay",
    "target": "Ralph Lauren 50th Anniversary Reflection",
    "strength": 2
  },
  {
    "source": "One Shenzhen Bay",
    "target": "Seestadt.bot",
    "strength": 2
  },
  {
    "source": "One Shenzhen Bay",
    "target": "The Dash Wall",
    "strength": 2
  },
  {
    "source": "One Shenzhen Bay",
    "target": "Synergies",
    "strength": 2
  },
  {
    "source": "One Shenzhen Bay",
    "target": "AMANDOLIER FA��ADE",
    "strength": 2
  },
  {
    "source": "One Shenzhen Bay",
    "target": "The abode of the outside",
    "strength": 2
  },
  {
    "source": "One Shenzhen Bay",
    "target": "Media architecture cluster Real-scene simulation and design prototype",
    "strength": 2
  },
  {
    "source": "One Shenzhen Bay",
    "target": "VIRTUAL WALLS - TORRECARDENAS",
    "strength": 2
  },
  {
    "source": "One Shenzhen Bay",
    "target": "Northside Beacons",
    "strength": 2
  },
  {
    "source": "One Shenzhen Bay",
    "target": "LightLines",
    "strength": 2
  },
  {
    "source": "One Shenzhen Bay",
    "target": "Arena",
    "strength": 2
  },
  {
    "source": "One Shenzhen Bay",
    "target": "Monument Remix",
    "strength": 2
  },
  {
    "source": "One Shenzhen Bay",
    "target": "Federation Square Digital Canvas",
    "strength": 2
  },
  {
    "source": "One Shenzhen Bay",
    "target": "Yagan Square",
    "strength": 2
  },
  {
    "source": "One Shenzhen Bay",
    "target": "Smog Free Project",
    "strength": 2
  },
  {
    "source": "One Shenzhen Bay",
    "target": "BioLumen",
    "strength": 2
  },
  {
    "source": "One Shenzhen Bay",
    "target": "Yellow Dust",
    "strength": 2
  },
  {
    "source": "One Shenzhen Bay",
    "target": "Dragon Scale",
    "strength": 2
  },
  {
    "source": "One Shenzhen Bay",
    "target": "Gibigiana",
    "strength": 2
  },
  {
    "source": "Firefly",
    "target": "ARCHIVE DREAMING",
    "strength": 2
  },
  {
    "source": "Firefly",
    "target": "Sonic Runway",
    "strength": 2
  },
  {
    "source": "Firefly",
    "target": "urban lights contact",
    "strength": 2
  },
  {
    "source": "Firefly",
    "target": "DAZZLE | San Diego International Airport",
    "strength": 2
  },
  {
    "source": "Firefly",
    "target": "TIETO HQ",
    "strength": 2
  },
  {
    "source": "Firefly",
    "target": "INTERACTIVE CLOUD",
    "strength": 2
  },
  {
    "source": "Firefly",
    "target": "Plant a Light",
    "strength": 2
  },
  {
    "source": "Firefly",
    "target": "ARCHIVE DREAMING",
    "strength": 2
  },
  {
    "source": "Firefly",
    "target": "LightSpell",
    "strength": 2
  },
  {
    "source": "Firefly",
    "target": "Kipnes Lantern",
    "strength": 2
  },
  {
    "source": "Firefly",
    "target": "Salling Lights",
    "strength": 2
  },
  {
    "source": "Firefly",
    "target": "Digital Calligraffiti",
    "strength": 2
  },
  {
    "source": "Firefly",
    "target": "Digital neighbourhood",
    "strength": 2
  },
  {
    "source": "Firefly",
    "target": "Chave do Centro or \"The Key to Downtown",
    "strength": 2
  },
  {
    "source": "Firefly",
    "target": "The Playground",
    "strength": 2
  },
  {
    "source": "Ralph Lauren 50th Anniversary Reflection",
    "target": "Seestadt.bot",
    "strength": 2
  },
  {
    "source": "Ralph Lauren 50th Anniversary Reflection",
    "target": "The Dash Wall",
    "strength": 2
  },
  {
    "source": "Ralph Lauren 50th Anniversary Reflection",
    "target": "Synergies",
    "strength": 2
  },
  {
    "source": "Ralph Lauren 50th Anniversary Reflection",
    "target": "AMANDOLIER FA��ADE",
    "strength": 2
  },
  {
    "source": "Ralph Lauren 50th Anniversary Reflection",
    "target": "The abode of the outside",
    "strength": 2
  },
  {
    "source": "Ralph Lauren 50th Anniversary Reflection",
    "target": "Media architecture cluster Real-scene simulation and design prototype",
    "strength": 2
  },
  {
    "source": "Ralph Lauren 50th Anniversary Reflection",
    "target": "VIRTUAL WALLS - TORRECARDENAS",
    "strength": 2
  },
  {
    "source": "Ralph Lauren 50th Anniversary Reflection",
    "target": "Northside Beacons",
    "strength": 2
  },
  {
    "source": "Ralph Lauren 50th Anniversary Reflection",
    "target": "LightLines",
    "strength": 2
  },
  {
    "source": "Ralph Lauren 50th Anniversary Reflection",
    "target": "Arena",
    "strength": 2
  },
  {
    "source": "Ralph Lauren 50th Anniversary Reflection",
    "target": "Monument Remix",
    "strength": 2
  },
  {
    "source": "Ralph Lauren 50th Anniversary Reflection",
    "target": "Federation Square Digital Canvas",
    "strength": 2
  },
  {
    "source": "Ralph Lauren 50th Anniversary Reflection",
    "target": "Yagan Square",
    "strength": 2
  },
  {
    "source": "Ralph Lauren 50th Anniversary Reflection",
    "target": "Smog Free Project",
    "strength": 2
  },
  {
    "source": "Ralph Lauren 50th Anniversary Reflection",
    "target": "BioLumen",
    "strength": 2
  },
  {
    "source": "Ralph Lauren 50th Anniversary Reflection",
    "target": "Yellow Dust",
    "strength": 2
  },
  {
    "source": "Ralph Lauren 50th Anniversary Reflection",
    "target": "Dragon Scale",
    "strength": 2
  },
  {
    "source": "Ralph Lauren 50th Anniversary Reflection",
    "target": "Gibigiana",
    "strength": 2
  },
  {
    "source": "CyclePhilly",
    "target": "Tha Paper Wave",
    "strength": 2
  },
  {
    "source": "CyclePhilly",
    "target": "BIRLOKI System",
    "strength": 2
  },
  {
    "source": "CyclePhilly",
    "target": "Walk of Stars",
    "strength": 2
  },
  {
    "source": "CyclePhilly",
    "target": "Our Meeting Places",
    "strength": 2
  },
  {
    "source": "CyclePhilly",
    "target": "Light Barrier",
    "strength": 2
  },
  {
    "source": "CyclePhilly",
    "target": "Inteference",
    "strength": 2
  },
  {
    "source": "CyclePhilly",
    "target": "Mondeal Square",
    "strength": 2
  },
  {
    "source": "CyclePhilly",
    "target": "In The Air, Tonight",
    "strength": 2
  },
  {
    "source": "CyclePhilly",
    "target": "Pipette",
    "strength": 2
  },
  {
    "source": "CyclePhilly",
    "target": "Mendelssohn Effektorium",
    "strength": 2
  },
  {
    "source": "CyclePhilly",
    "target": "Le Circuit de Bachelard",
    "strength": 2
  },
  {
    "source": "CyclePhilly",
    "target": "The Energy Tower fa��ade lighting",
    "strength": 2
  },
  {
    "source": "CyclePhilly",
    "target": "Orkhestra, Orchestrating the Depth of Light",
    "strength": 2
  },
  {
    "source": "CyclePhilly",
    "target": "Augmented Urban Reality",
    "strength": 2
  },
  {
    "source": "CyclePhilly",
    "target": "Affinity : Interactive Art Installation",
    "strength": 2
  },
  {
    "source": "CyclePhilly",
    "target": "Human BEEing",
    "strength": 2
  },
  {
    "source": "CyclePhilly",
    "target": "digitalMatatus",
    "strength": 2
  },
  {
    "source": "CyclePhilly",
    "target": "Ninety Six",
    "strength": 2
  },
  {
    "source": "CyclePhilly",
    "target": "MegaFaces",
    "strength": 2
  },
  {
    "source": "CyclePhilly",
    "target": "Discovery Wall",
    "strength": 2
  },
  {
    "source": "The Chanel Ginza Tower",
    "target": "Distributed Projection Structure 2004",
    "strength": 2
  },
  {
    "source": "The Chanel Ginza Tower",
    "target": "Galleria Store",
    "strength": 2
  },
  {
    "source": "USA 221",
    "target": "Dia Lights / Urban Canvas",
    "strength": 2
  },
  {
    "source": "USA 221",
    "target": "Screens in the Wild",
    "strength": 2
  },
  {
    "source": "USA 221",
    "target": "Luanda Sports Pavilion",
    "strength": 2
  },
  {
    "source": "USA 221",
    "target": "Xindie",
    "strength": 2
  },
  {
    "source": "USA 221",
    "target": "Urban Echoes",
    "strength": 2
  },
  {
    "source": "USA 221",
    "target": "Filament Mind",
    "strength": 2
  },
  {
    "source": "USA 221",
    "target": "Train station Falkenberg",
    "strength": 2
  },
  {
    "source": "USA 221",
    "target": "Shanghai World Financial Center (SWFC)",
    "strength": 2
  },
  {
    "source": "USA 221",
    "target": "Submergence",
    "strength": 2
  },
  {
    "source": "USA 221",
    "target": "YTN Center",
    "strength": 2
  },
  {
    "source": "USA 221",
    "target": "FLUIDIC",
    "strength": 2
  },
  {
    "source": "USA 221",
    "target": "Megaphone",
    "strength": 2
  },
  {
    "source": "USA 221",
    "target": "Control no control",
    "strength": 2
  },
  {
    "source": "USA 221",
    "target": "LAX - Tom Bradley International Terminal",
    "strength": 2
  },
  {
    "source": "Wilkie Edge - Aamp, Singapore 2009",
    "target": "UEC Iluma - Crystal Mesh",
    "strength": 2
  },
  {
    "source": "Wilkie Edge - Aamp, Singapore 2009",
    "target": "Portable/Deflatable LED Matrix",
    "strength": 2
  },
  {
    "source": "Wilkie Edge - Aamp, Singapore 2009",
    "target": "City of Dreams",
    "strength": 2
  },
  {
    "source": "GS Caltex Pavilion",
    "target": "Sanya Phoenix Island",
    "strength": 2
  },
  {
    "source": "GS Caltex Pavilion",
    "target": "Living Sculpture",
    "strength": 2
  },
  {
    "source": "GS Caltex Pavilion",
    "target": "Silo 468 Kruunuvuorenranta",
    "strength": 2
  },
  {
    "source": "GS Caltex Pavilion",
    "target": "Hypersurface Architecture [Redux]",
    "strength": 2
  },
  {
    "source": "GS Caltex Pavilion",
    "target": "NamyangJu Clean Center",
    "strength": 2
  },
  {
    "source": "GS Caltex Pavilion",
    "target": "Spine",
    "strength": 2
  },
  {
    "source": "GS Caltex Pavilion",
    "target": "City Bug Report",
    "strength": 2
  },
  {
    "source": "GS Caltex Pavilion",
    "target": "Photophore",
    "strength": 2
  },
  {
    "source": "GS Caltex Pavilion",
    "target": "Urban Alphabets",
    "strength": 2
  },
  {
    "source": "GS Caltex Pavilion",
    "target": "C4 Espacio de Creaci�n Art��stica Contempor�nea",
    "strength": 2
  },
  {
    "source": "GS Caltex Pavilion",
    "target": "Lotus Dome",
    "strength": 2
  },
  {
    "source": "GS Caltex Pavilion",
    "target": "The ARC River Culture Pavilion",
    "strength": 2
  },
  {
    "source": "GS Caltex Pavilion",
    "target": "Kinetic Fa��ade - Theme Pavilion",
    "strength": 2
  },
  {
    "source": "GS Caltex Pavilion",
    "target": "Water Light Graffiti",
    "strength": 2
  },
  {
    "source": "GS Caltex Pavilion",
    "target": "waterlight graffiti",
    "strength": 2
  },
  {
    "source": "Dia Lights / Urban Canvas",
    "target": "Screens in the Wild",
    "strength": 2
  },
  {
    "source": "Dia Lights / Urban Canvas",
    "target": "Luanda Sports Pavilion",
    "strength": 2
  },
  {
    "source": "Dia Lights / Urban Canvas",
    "target": "Xindie",
    "strength": 2
  },
  {
    "source": "Dia Lights / Urban Canvas",
    "target": "Urban Echoes",
    "strength": 2
  },
  {
    "source": "Dia Lights / Urban Canvas",
    "target": "Filament Mind",
    "strength": 2
  },
  {
    "source": "Dia Lights / Urban Canvas",
    "target": "Train station Falkenberg",
    "strength": 2
  },
  {
    "source": "Dia Lights / Urban Canvas",
    "target": "Shanghai World Financial Center (SWFC)",
    "strength": 2
  },
  {
    "source": "Dia Lights / Urban Canvas",
    "target": "Submergence",
    "strength": 2
  },
  {
    "source": "Dia Lights / Urban Canvas",
    "target": "YTN Center",
    "strength": 2
  },
  {
    "source": "Dia Lights / Urban Canvas",
    "target": "FLUIDIC",
    "strength": 2
  },
  {
    "source": "Dia Lights / Urban Canvas",
    "target": "Megaphone",
    "strength": 2
  },
  {
    "source": "Dia Lights / Urban Canvas",
    "target": "Control no control",
    "strength": 2
  },
  {
    "source": "Dia Lights / Urban Canvas",
    "target": "LAX - Tom Bradley International Terminal",
    "strength": 2
  },
  {
    "source": "Denmark Pavilion, Expo",
    "target": "State Grid Pavilion",
    "strength": 2
  },
  {
    "source": "Denmark Pavilion, Expo",
    "target": "Polymedia Pixel",
    "strength": 2
  },
  {
    "source": "Denmark Pavilion, Expo",
    "target": "Galleria Centercity",
    "strength": 2
  },
  {
    "source": "Denmark Pavilion, Expo",
    "target": "boxLEDs",
    "strength": 2
  },
  {
    "source": "Denmark Pavilion, Expo",
    "target": "Lummoblocks",
    "strength": 2
  },
  {
    "source": "Denmark Pavilion, Expo",
    "target": "Flyfire",
    "strength": 2
  },
  {
    "source": "Denmark Pavilion, Expo",
    "target": "eCLOUD | San Jose International Airport",
    "strength": 2
  },
  {
    "source": "Tha Paper Wave",
    "target": "BIRLOKI System",
    "strength": 2
  },
  {
    "source": "Tha Paper Wave",
    "target": "Walk of Stars",
    "strength": 2
  },
  {
    "source": "Tha Paper Wave",
    "target": "Our Meeting Places",
    "strength": 2
  },
  {
    "source": "Tha Paper Wave",
    "target": "Light Barrier",
    "strength": 2
  },
  {
    "source": "Tha Paper Wave",
    "target": "Inteference",
    "strength": 2
  },
  {
    "source": "Tha Paper Wave",
    "target": "Mondeal Square",
    "strength": 2
  },
  {
    "source": "Tha Paper Wave",
    "target": "In The Air, Tonight",
    "strength": 2
  },
  {
    "source": "Tha Paper Wave",
    "target": "Pipette",
    "strength": 2
  },
  {
    "source": "Tha Paper Wave",
    "target": "Mendelssohn Effektorium",
    "strength": 2
  },
  {
    "source": "Tha Paper Wave",
    "target": "Le Circuit de Bachelard",
    "strength": 2
  },
  {
    "source": "Tha Paper Wave",
    "target": "The Energy Tower fa��ade lighting",
    "strength": 2
  },
  {
    "source": "Tha Paper Wave",
    "target": "Orkhestra, Orchestrating the Depth of Light",
    "strength": 2
  },
  {
    "source": "Tha Paper Wave",
    "target": "Augmented Urban Reality",
    "strength": 2
  },
  {
    "source": "Tha Paper Wave",
    "target": "Affinity : Interactive Art Installation",
    "strength": 2
  },
  {
    "source": "Tha Paper Wave",
    "target": "Human BEEing",
    "strength": 2
  },
  {
    "source": "Tha Paper Wave",
    "target": "digitalMatatus",
    "strength": 2
  },
  {
    "source": "Tha Paper Wave",
    "target": "Ninety Six",
    "strength": 2
  },
  {
    "source": "Tha Paper Wave",
    "target": "MegaFaces",
    "strength": 2
  },
  {
    "source": "Tha Paper Wave",
    "target": "Discovery Wall",
    "strength": 2
  },
  {
    "source": "UEC Iluma - Crystal Mesh",
    "target": "Portable/Deflatable LED Matrix",
    "strength": 2
  },
  {
    "source": "UEC Iluma - Crystal Mesh",
    "target": "City of Dreams",
    "strength": 2
  },
  {
    "source": "State Grid Pavilion",
    "target": "Polymedia Pixel",
    "strength": 2
  },
  {
    "source": "State Grid Pavilion",
    "target": "Galleria Centercity",
    "strength": 2
  },
  {
    "source": "State Grid Pavilion",
    "target": "boxLEDs",
    "strength": 2
  },
  {
    "source": "State Grid Pavilion",
    "target": "Lummoblocks",
    "strength": 2
  },
  {
    "source": "State Grid Pavilion",
    "target": "Flyfire",
    "strength": 2
  },
  {
    "source": "State Grid Pavilion",
    "target": "eCLOUD | San Jose International Airport",
    "strength": 2
  },
  {
    "source": "Sanya Phoenix Island",
    "target": "Living Sculpture",
    "strength": 2
  },
  {
    "source": "Sanya Phoenix Island",
    "target": "Silo 468 Kruunuvuorenranta",
    "strength": 2
  },
  {
    "source": "Sanya Phoenix Island",
    "target": "Hypersurface Architecture [Redux]",
    "strength": 2
  },
  {
    "source": "Sanya Phoenix Island",
    "target": "NamyangJu Clean Center",
    "strength": 2
  },
  {
    "source": "Sanya Phoenix Island",
    "target": "Spine",
    "strength": 2
  },
  {
    "source": "Sanya Phoenix Island",
    "target": "City Bug Report",
    "strength": 2
  },
  {
    "source": "Sanya Phoenix Island",
    "target": "Photophore",
    "strength": 2
  },
  {
    "source": "Sanya Phoenix Island",
    "target": "Urban Alphabets",
    "strength": 2
  },
  {
    "source": "Sanya Phoenix Island",
    "target": "C4 Espacio de Creaci�n Art��stica Contempor�nea",
    "strength": 2
  },
  {
    "source": "Sanya Phoenix Island",
    "target": "Lotus Dome",
    "strength": 2
  },
  {
    "source": "Sanya Phoenix Island",
    "target": "The ARC River Culture Pavilion",
    "strength": 2
  },
  {
    "source": "Sanya Phoenix Island",
    "target": "Kinetic Fa��ade - Theme Pavilion",
    "strength": 2
  },
  {
    "source": "Sanya Phoenix Island",
    "target": "Water Light Graffiti",
    "strength": 2
  },
  {
    "source": "Sanya Phoenix Island",
    "target": "waterlight graffiti",
    "strength": 2
  },
  {
    "source": "BIRLOKI System",
    "target": "Walk of Stars",
    "strength": 2
  },
  {
    "source": "BIRLOKI System",
    "target": "Our Meeting Places",
    "strength": 2
  },
  {
    "source": "BIRLOKI System",
    "target": "Light Barrier",
    "strength": 2
  },
  {
    "source": "BIRLOKI System",
    "target": "Inteference",
    "strength": 2
  },
  {
    "source": "BIRLOKI System",
    "target": "Mondeal Square",
    "strength": 2
  },
  {
    "source": "BIRLOKI System",
    "target": "In The Air, Tonight",
    "strength": 2
  },
  {
    "source": "BIRLOKI System",
    "target": "Pipette",
    "strength": 2
  },
  {
    "source": "BIRLOKI System",
    "target": "Mendelssohn Effektorium",
    "strength": 2
  },
  {
    "source": "BIRLOKI System",
    "target": "Le Circuit de Bachelard",
    "strength": 2
  },
  {
    "source": "BIRLOKI System",
    "target": "The Energy Tower fa��ade lighting",
    "strength": 2
  },
  {
    "source": "BIRLOKI System",
    "target": "Orkhestra, Orchestrating the Depth of Light",
    "strength": 2
  },
  {
    "source": "BIRLOKI System",
    "target": "Augmented Urban Reality",
    "strength": 2
  },
  {
    "source": "BIRLOKI System",
    "target": "Affinity : Interactive Art Installation",
    "strength": 2
  },
  {
    "source": "BIRLOKI System",
    "target": "Human BEEing",
    "strength": 2
  },
  {
    "source": "BIRLOKI System",
    "target": "digitalMatatus",
    "strength": 2
  },
  {
    "source": "BIRLOKI System",
    "target": "Ninety Six",
    "strength": 2
  },
  {
    "source": "BIRLOKI System",
    "target": "MegaFaces",
    "strength": 2
  },
  {
    "source": "BIRLOKI System",
    "target": "Discovery Wall",
    "strength": 2
  },
  {
    "source": "Screens in the Wild",
    "target": "Luanda Sports Pavilion",
    "strength": 2
  },
  {
    "source": "Screens in the Wild",
    "target": "Xindie",
    "strength": 2
  },
  {
    "source": "Screens in the Wild",
    "target": "Urban Echoes",
    "strength": 2
  },
  {
    "source": "Screens in the Wild",
    "target": "Filament Mind",
    "strength": 2
  },
  {
    "source": "Screens in the Wild",
    "target": "Train station Falkenberg",
    "strength": 2
  },
  {
    "source": "Screens in the Wild",
    "target": "Shanghai World Financial Center (SWFC)",
    "strength": 2
  },
  {
    "source": "Screens in the Wild",
    "target": "Submergence",
    "strength": 2
  },
  {
    "source": "Screens in the Wild",
    "target": "YTN Center",
    "strength": 2
  },
  {
    "source": "Screens in the Wild",
    "target": "FLUIDIC",
    "strength": 2
  },
  {
    "source": "Screens in the Wild",
    "target": "Megaphone",
    "strength": 2
  },
  {
    "source": "Screens in the Wild",
    "target": "Control no control",
    "strength": 2
  },
  {
    "source": "Screens in the Wild",
    "target": "LAX - Tom Bradley International Terminal",
    "strength": 2
  },
  {
    "source": "Harpa",
    "target": "Taman Anggrek",
    "strength": 2
  },
  {
    "source": "Harpa",
    "target": "Digital Fountain",
    "strength": 2
  },
  {
    "source": "Harpa",
    "target": "Floating Island",
    "strength": 2
  },
  {
    "source": "Harpa",
    "target": "TWEETx",
    "strength": 2
  },
  {
    "source": "Harpa",
    "target": "Augmented Structures v1.1",
    "strength": 2
  },
  {
    "source": "Harpa",
    "target": "Qube",
    "strength": 2
  },
  {
    "source": "Harpa",
    "target": "Saxo Reactive Ceiling",
    "strength": 2
  },
  {
    "source": "Portable/Deflatable LED Matrix",
    "target": "City of Dreams",
    "strength": 2
  },
  {
    "source": "Luanda Sports Pavilion",
    "target": "Xindie",
    "strength": 2
  },
  {
    "source": "Luanda Sports Pavilion",
    "target": "Urban Echoes",
    "strength": 2
  },
  {
    "source": "Luanda Sports Pavilion",
    "target": "Filament Mind",
    "strength": 2
  },
  {
    "source": "Luanda Sports Pavilion",
    "target": "Train station Falkenberg",
    "strength": 2
  },
  {
    "source": "Luanda Sports Pavilion",
    "target": "Shanghai World Financial Center (SWFC)",
    "strength": 2
  },
  {
    "source": "Luanda Sports Pavilion",
    "target": "Submergence",
    "strength": 2
  },
  {
    "source": "Luanda Sports Pavilion",
    "target": "YTN Center",
    "strength": 2
  },
  {
    "source": "Luanda Sports Pavilion",
    "target": "FLUIDIC",
    "strength": 2
  },
  {
    "source": "Luanda Sports Pavilion",
    "target": "Megaphone",
    "strength": 2
  },
  {
    "source": "Luanda Sports Pavilion",
    "target": "Control no control",
    "strength": 2
  },
  {
    "source": "Luanda Sports Pavilion",
    "target": "LAX - Tom Bradley International Terminal",
    "strength": 2
  },
  {
    "source": "Walk of Stars",
    "target": "Our Meeting Places",
    "strength": 2
  },
  {
    "source": "Walk of Stars",
    "target": "Light Barrier",
    "strength": 2
  },
  {
    "source": "Walk of Stars",
    "target": "Inteference",
    "strength": 2
  },
  {
    "source": "Walk of Stars",
    "target": "Mondeal Square",
    "strength": 2
  },
  {
    "source": "Walk of Stars",
    "target": "In The Air, Tonight",
    "strength": 2
  },
  {
    "source": "Walk of Stars",
    "target": "Pipette",
    "strength": 2
  },
  {
    "source": "Walk of Stars",
    "target": "Mendelssohn Effektorium",
    "strength": 2
  },
  {
    "source": "Walk of Stars",
    "target": "Le Circuit de Bachelard",
    "strength": 2
  },
  {
    "source": "Walk of Stars",
    "target": "The Energy Tower fa��ade lighting",
    "strength": 2
  },
  {
    "source": "Walk of Stars",
    "target": "Orkhestra, Orchestrating the Depth of Light",
    "strength": 2
  },
  {
    "source": "Walk of Stars",
    "target": "Augmented Urban Reality",
    "strength": 2
  },
  {
    "source": "Walk of Stars",
    "target": "Affinity : Interactive Art Installation",
    "strength": 2
  },
  {
    "source": "Walk of Stars",
    "target": "Human BEEing",
    "strength": 2
  },
  {
    "source": "Walk of Stars",
    "target": "digitalMatatus",
    "strength": 2
  },
  {
    "source": "Walk of Stars",
    "target": "Ninety Six",
    "strength": 2
  },
  {
    "source": "Walk of Stars",
    "target": "MegaFaces",
    "strength": 2
  },
  {
    "source": "Walk of Stars",
    "target": "Discovery Wall",
    "strength": 2
  },
  {
    "source": "In The Air, Tonight",
    "target": "LED Frieze of the New Building of the Kunstmuseum Basel",
    "strength": 2
  },
  {
    "source": "In The Air, Tonight",
    "target": "False Positive",
    "strength": 2
  },
  {
    "source": "In The Air, Tonight",
    "target": "The Light House: 888 Collins St",
    "strength": 2
  },
  {
    "source": "Living Sculpture",
    "target": "Silo 468 Kruunuvuorenranta",
    "strength": 2
  },
  {
    "source": "Living Sculpture",
    "target": "Hypersurface Architecture [Redux]",
    "strength": 2
  },
  {
    "source": "Living Sculpture",
    "target": "NamyangJu Clean Center",
    "strength": 2
  },
  {
    "source": "Living Sculpture",
    "target": "Spine",
    "strength": 2
  },
  {
    "source": "Living Sculpture",
    "target": "City Bug Report",
    "strength": 2
  },
  {
    "source": "Living Sculpture",
    "target": "Photophore",
    "strength": 2
  },
  {
    "source": "Living Sculpture",
    "target": "Urban Alphabets",
    "strength": 2
  },
  {
    "source": "Living Sculpture",
    "target": "C4 Espacio de Creaci�n Art��stica Contempor�nea",
    "strength": 2
  },
  {
    "source": "Living Sculpture",
    "target": "Lotus Dome",
    "strength": 2
  },
  {
    "source": "Living Sculpture",
    "target": "The ARC River Culture Pavilion",
    "strength": 2
  },
  {
    "source": "Living Sculpture",
    "target": "Kinetic Fa��ade - Theme Pavilion",
    "strength": 2
  },
  {
    "source": "Living Sculpture",
    "target": "Water Light Graffiti",
    "strength": 2
  },
  {
    "source": "Living Sculpture",
    "target": "waterlight graffiti",
    "strength": 2
  },
  {
    "source": "Our Meeting Places",
    "target": "Light Barrier",
    "strength": 2
  },
  {
    "source": "Our Meeting Places",
    "target": "Inteference",
    "strength": 2
  },
  {
    "source": "Our Meeting Places",
    "target": "Mondeal Square",
    "strength": 2
  },
  {
    "source": "Our Meeting Places",
    "target": "In The Air, Tonight",
    "strength": 2
  },
  {
    "source": "Our Meeting Places",
    "target": "Pipette",
    "strength": 2
  },
  {
    "source": "Our Meeting Places",
    "target": "Mendelssohn Effektorium",
    "strength": 2
  },
  {
    "source": "Our Meeting Places",
    "target": "Le Circuit de Bachelard",
    "strength": 2
  },
  {
    "source": "Our Meeting Places",
    "target": "The Energy Tower fa��ade lighting",
    "strength": 2
  },
  {
    "source": "Our Meeting Places",
    "target": "Orkhestra, Orchestrating the Depth of Light",
    "strength": 2
  },
  {
    "source": "Our Meeting Places",
    "target": "Augmented Urban Reality",
    "strength": 2
  },
  {
    "source": "Our Meeting Places",
    "target": "Affinity : Interactive Art Installation",
    "strength": 2
  },
  {
    "source": "Our Meeting Places",
    "target": "Human BEEing",
    "strength": 2
  },
  {
    "source": "Our Meeting Places",
    "target": "digitalMatatus",
    "strength": 2
  },
  {
    "source": "Our Meeting Places",
    "target": "Ninety Six",
    "strength": 2
  },
  {
    "source": "Our Meeting Places",
    "target": "MegaFaces",
    "strength": 2
  },
  {
    "source": "Our Meeting Places",
    "target": "Discovery Wall",
    "strength": 2
  },
  {
    "source": "Morgan Stanley - Times Square Headquarters",
    "target": "STAR",
    "strength": 2
  },
  {
    "source": "Morgan Stanley - Times Square Headquarters",
    "target": "KLUBHAUS St. Pauli",
    "strength": 2
  },
  {
    "source": "Morgan Stanley - Times Square Headquarters",
    "target": "The Sentiment Cocoon",
    "strength": 2
  },
  {
    "source": "Morgan Stanley - Times Square Headquarters",
    "target": "City Lights Orchestra",
    "strength": 2
  },
  {
    "source": "Morgan Stanley - Times Square Headquarters",
    "target": "Field of Light",
    "strength": 2
  },
  {
    "source": "Morgan Stanley - Times Square Headquarters",
    "target": "Waterlicht",
    "strength": 2
  },
  {
    "source": "Morgan Stanley - Times Square Headquarters",
    "target": "Spaxels",
    "strength": 2
  },
  {
    "source": "Morgan Stanley - Times Square Headquarters",
    "target": "Klubhaus St.Pauli - Mediafa��ade Lift",
    "strength": 2
  },
  {
    "source": "Morgan Stanley - Times Square Headquarters",
    "target": "iLIGHT",
    "strength": 2
  },
  {
    "source": "Xindie",
    "target": "Urban Echoes",
    "strength": 2
  },
  {
    "source": "Xindie",
    "target": "Filament Mind",
    "strength": 2
  },
  {
    "source": "Xindie",
    "target": "Train station Falkenberg",
    "strength": 2
  },
  {
    "source": "Xindie",
    "target": "Shanghai World Financial Center (SWFC)",
    "strength": 2
  },
  {
    "source": "Xindie",
    "target": "Submergence",
    "strength": 2
  },
  {
    "source": "Xindie",
    "target": "YTN Center",
    "strength": 2
  },
  {
    "source": "Xindie",
    "target": "FLUIDIC",
    "strength": 2
  },
  {
    "source": "Xindie",
    "target": "Megaphone",
    "strength": 2
  },
  {
    "source": "Xindie",
    "target": "Control no control",
    "strength": 2
  },
  {
    "source": "Xindie",
    "target": "LAX - Tom Bradley International Terminal",
    "strength": 2
  },
  {
    "source": "LED Frieze of the New Building of the Kunstmuseum Basel",
    "target": "False Positive",
    "strength": 2
  },
  {
    "source": "LED Frieze of the New Building of the Kunstmuseum Basel",
    "target": "The Light House: 888 Collins St",
    "strength": 2
  },
  {
    "source": "Taman Anggrek",
    "target": "Digital Fountain",
    "strength": 2
  },
  {
    "source": "Taman Anggrek",
    "target": "Floating Island",
    "strength": 2
  },
  {
    "source": "Taman Anggrek",
    "target": "TWEETx",
    "strength": 2
  },
  {
    "source": "Taman Anggrek",
    "target": "Augmented Structures v1.1",
    "strength": 2
  },
  {
    "source": "Taman Anggrek",
    "target": "Qube",
    "strength": 2
  },
  {
    "source": "Taman Anggrek",
    "target": "Saxo Reactive Ceiling",
    "strength": 2
  },
  {
    "source": "STAR",
    "target": "KLUBHAUS St. Pauli",
    "strength": 2
  },
  {
    "source": "STAR",
    "target": "The Sentiment Cocoon",
    "strength": 2
  },
  {
    "source": "STAR",
    "target": "City Lights Orchestra",
    "strength": 2
  },
  {
    "source": "STAR",
    "target": "Field of Light",
    "strength": 2
  },
  {
    "source": "STAR",
    "target": "Waterlicht",
    "strength": 2
  },
  {
    "source": "STAR",
    "target": "Spaxels",
    "strength": 2
  },
  {
    "source": "STAR",
    "target": "Klubhaus St.Pauli - Mediafa��ade Lift",
    "strength": 2
  },
  {
    "source": "STAR",
    "target": "iLIGHT",
    "strength": 2
  },
  {
    "source": "Silo 468 Kruunuvuorenranta",
    "target": "Hypersurface Architecture [Redux]",
    "strength": 2
  },
  {
    "source": "Silo 468 Kruunuvuorenranta",
    "target": "NamyangJu Clean Center",
    "strength": 2
  },
  {
    "source": "Silo 468 Kruunuvuorenranta",
    "target": "Spine",
    "strength": 2
  },
  {
    "source": "Silo 468 Kruunuvuorenranta",
    "target": "City Bug Report",
    "strength": 2
  },
  {
    "source": "Silo 468 Kruunuvuorenranta",
    "target": "Photophore",
    "strength": 2
  },
  {
    "source": "Silo 468 Kruunuvuorenranta",
    "target": "Urban Alphabets",
    "strength": 2
  },
  {
    "source": "Silo 468 Kruunuvuorenranta",
    "target": "C4 Espacio de Creaci�n Art��stica Contempor�nea",
    "strength": 2
  },
  {
    "source": "Silo 468 Kruunuvuorenranta",
    "target": "Lotus Dome",
    "strength": 2
  },
  {
    "source": "Silo 468 Kruunuvuorenranta",
    "target": "The ARC River Culture Pavilion",
    "strength": 2
  },
  {
    "source": "Silo 468 Kruunuvuorenranta",
    "target": "Kinetic Fa��ade - Theme Pavilion",
    "strength": 2
  },
  {
    "source": "Silo 468 Kruunuvuorenranta",
    "target": "Water Light Graffiti",
    "strength": 2
  },
  {
    "source": "Silo 468 Kruunuvuorenranta",
    "target": "waterlight graffiti",
    "strength": 2
  },
  {
    "source": "Hypersurface Architecture [Redux]",
    "target": "NamyangJu Clean Center",
    "strength": 2
  },
  {
    "source": "Hypersurface Architecture [Redux]",
    "target": "Spine",
    "strength": 2
  },
  {
    "source": "Hypersurface Architecture [Redux]",
    "target": "City Bug Report",
    "strength": 2
  },
  {
    "source": "Hypersurface Architecture [Redux]",
    "target": "Photophore",
    "strength": 2
  },
  {
    "source": "Hypersurface Architecture [Redux]",
    "target": "Urban Alphabets",
    "strength": 2
  },
  {
    "source": "Hypersurface Architecture [Redux]",
    "target": "C4 Espacio de Creaci�n Art��stica Contempor�nea",
    "strength": 2
  },
  {
    "source": "Hypersurface Architecture [Redux]",
    "target": "Lotus Dome",
    "strength": 2
  },
  {
    "source": "Hypersurface Architecture [Redux]",
    "target": "The ARC River Culture Pavilion",
    "strength": 2
  },
  {
    "source": "Hypersurface Architecture [Redux]",
    "target": "Kinetic Fa��ade - Theme Pavilion",
    "strength": 2
  },
  {
    "source": "Hypersurface Architecture [Redux]",
    "target": "Water Light Graffiti",
    "strength": 2
  },
  {
    "source": "Hypersurface Architecture [Redux]",
    "target": "waterlight graffiti",
    "strength": 2
  },
  {
    "source": "Polymedia Pixel",
    "target": "Galleria Centercity",
    "strength": 2
  },
  {
    "source": "Polymedia Pixel",
    "target": "boxLEDs",
    "strength": 2
  },
  {
    "source": "Polymedia Pixel",
    "target": "Lummoblocks",
    "strength": 2
  },
  {
    "source": "Polymedia Pixel",
    "target": "Flyfire",
    "strength": 2
  },
  {
    "source": "Polymedia Pixel",
    "target": "eCLOUD | San Jose International Airport",
    "strength": 2
  },
  {
    "source": "Light Barrier",
    "target": "Inteference",
    "strength": 2
  },
  {
    "source": "Light Barrier",
    "target": "Mondeal Square",
    "strength": 2
  },
  {
    "source": "Light Barrier",
    "target": "In The Air, Tonight",
    "strength": 2
  },
  {
    "source": "Light Barrier",
    "target": "Pipette",
    "strength": 2
  },
  {
    "source": "Light Barrier",
    "target": "Mendelssohn Effektorium",
    "strength": 2
  },
  {
    "source": "Light Barrier",
    "target": "Le Circuit de Bachelard",
    "strength": 2
  },
  {
    "source": "Light Barrier",
    "target": "The Energy Tower fa��ade lighting",
    "strength": 2
  },
  {
    "source": "Light Barrier",
    "target": "Orkhestra, Orchestrating the Depth of Light",
    "strength": 2
  },
  {
    "source": "Light Barrier",
    "target": "Augmented Urban Reality",
    "strength": 2
  },
  {
    "source": "Light Barrier",
    "target": "Affinity : Interactive Art Installation",
    "strength": 2
  },
  {
    "source": "Light Barrier",
    "target": "Human BEEing",
    "strength": 2
  },
  {
    "source": "Light Barrier",
    "target": "digitalMatatus",
    "strength": 2
  },
  {
    "source": "Light Barrier",
    "target": "Ninety Six",
    "strength": 2
  },
  {
    "source": "Light Barrier",
    "target": "MegaFaces",
    "strength": 2
  },
  {
    "source": "Light Barrier",
    "target": "Discovery Wall",
    "strength": 2
  },
  {
    "source": "KLUBHAUS St. Pauli",
    "target": "The Sentiment Cocoon",
    "strength": 2
  },
  {
    "source": "KLUBHAUS St. Pauli",
    "target": "City Lights Orchestra",
    "strength": 2
  },
  {
    "source": "KLUBHAUS St. Pauli",
    "target": "Field of Light",
    "strength": 2
  },
  {
    "source": "KLUBHAUS St. Pauli",
    "target": "Waterlicht",
    "strength": 2
  },
  {
    "source": "KLUBHAUS St. Pauli",
    "target": "Spaxels",
    "strength": 2
  },
  {
    "source": "KLUBHAUS St. Pauli",
    "target": "Klubhaus St.Pauli - Mediafa��ade Lift",
    "strength": 2
  },
  {
    "source": "KLUBHAUS St. Pauli",
    "target": "iLIGHT",
    "strength": 2
  },
  {
    "source": "NamyangJu Clean Center",
    "target": "Spine",
    "strength": 2
  },
  {
    "source": "NamyangJu Clean Center",
    "target": "City Bug Report",
    "strength": 2
  },
  {
    "source": "NamyangJu Clean Center",
    "target": "Photophore",
    "strength": 2
  },
  {
    "source": "NamyangJu Clean Center",
    "target": "Urban Alphabets",
    "strength": 2
  },
  {
    "source": "NamyangJu Clean Center",
    "target": "C4 Espacio de Creaci�n Art��stica Contempor�nea",
    "strength": 2
  },
  {
    "source": "NamyangJu Clean Center",
    "target": "Lotus Dome",
    "strength": 2
  },
  {
    "source": "NamyangJu Clean Center",
    "target": "The ARC River Culture Pavilion",
    "strength": 2
  },
  {
    "source": "NamyangJu Clean Center",
    "target": "Kinetic Fa��ade - Theme Pavilion",
    "strength": 2
  },
  {
    "source": "NamyangJu Clean Center",
    "target": "Water Light Graffiti",
    "strength": 2
  },
  {
    "source": "NamyangJu Clean Center",
    "target": "waterlight graffiti",
    "strength": 2
  },
  {
    "source": "The Sentiment Cocoon",
    "target": "City Lights Orchestra",
    "strength": 2
  },
  {
    "source": "The Sentiment Cocoon",
    "target": "Field of Light",
    "strength": 2
  },
  {
    "source": "The Sentiment Cocoon",
    "target": "Waterlicht",
    "strength": 2
  },
  {
    "source": "The Sentiment Cocoon",
    "target": "Spaxels",
    "strength": 2
  },
  {
    "source": "The Sentiment Cocoon",
    "target": "Klubhaus St.Pauli - Mediafa��ade Lift",
    "strength": 2
  },
  {
    "source": "The Sentiment Cocoon",
    "target": "iLIGHT",
    "strength": 2
  },
  {
    "source": "Inteference",
    "target": "Mondeal Square",
    "strength": 2
  },
  {
    "source": "Inteference",
    "target": "In The Air, Tonight",
    "strength": 2
  },
  {
    "source": "Inteference",
    "target": "Pipette",
    "strength": 2
  },
  {
    "source": "Inteference",
    "target": "Mendelssohn Effektorium",
    "strength": 2
  },
  {
    "source": "Inteference",
    "target": "Le Circuit de Bachelard",
    "strength": 2
  },
  {
    "source": "Inteference",
    "target": "The Energy Tower fa��ade lighting",
    "strength": 2
  },
  {
    "source": "Inteference",
    "target": "Orkhestra, Orchestrating the Depth of Light",
    "strength": 2
  },
  {
    "source": "Inteference",
    "target": "Augmented Urban Reality",
    "strength": 2
  },
  {
    "source": "Inteference",
    "target": "Affinity : Interactive Art Installation",
    "strength": 2
  },
  {
    "source": "Inteference",
    "target": "Human BEEing",
    "strength": 2
  },
  {
    "source": "Inteference",
    "target": "digitalMatatus",
    "strength": 2
  },
  {
    "source": "Inteference",
    "target": "Ninety Six",
    "strength": 2
  },
  {
    "source": "Inteference",
    "target": "MegaFaces",
    "strength": 2
  },
  {
    "source": "Inteference",
    "target": "Discovery Wall",
    "strength": 2
  },
  {
    "source": "Urban Echoes",
    "target": "Filament Mind",
    "strength": 2
  },
  {
    "source": "Urban Echoes",
    "target": "Train station Falkenberg",
    "strength": 2
  },
  {
    "source": "Urban Echoes",
    "target": "Shanghai World Financial Center (SWFC)",
    "strength": 2
  },
  {
    "source": "Urban Echoes",
    "target": "Submergence",
    "strength": 2
  },
  {
    "source": "Urban Echoes",
    "target": "YTN Center",
    "strength": 2
  },
  {
    "source": "Urban Echoes",
    "target": "FLUIDIC",
    "strength": 2
  },
  {
    "source": "Urban Echoes",
    "target": "Megaphone",
    "strength": 2
  },
  {
    "source": "Urban Echoes",
    "target": "Control no control",
    "strength": 2
  },
  {
    "source": "Urban Echoes",
    "target": "LAX - Tom Bradley International Terminal",
    "strength": 2
  },
  {
    "source": "Star Place",
    "target": "AEC - Ars Electronica Center",
    "strength": 2
  },
  {
    "source": "Star Place",
    "target": "FLARE Fa��ade",
    "strength": 2
  },
  {
    "source": "Star Place",
    "target": "Thought Process",
    "strength": 2
  },
  {
    "source": "Galleria Centercity",
    "target": "boxLEDs",
    "strength": 2
  },
  {
    "source": "Galleria Centercity",
    "target": "Lummoblocks",
    "strength": 2
  },
  {
    "source": "Galleria Centercity",
    "target": "Flyfire",
    "strength": 2
  },
  {
    "source": "Galleria Centercity",
    "target": "eCLOUD | San Jose International Airport",
    "strength": 2
  },
  {
    "source": "Digital Fountain",
    "target": "Floating Island",
    "strength": 2
  },
  {
    "source": "Digital Fountain",
    "target": "TWEETx",
    "strength": 2
  },
  {
    "source": "Digital Fountain",
    "target": "Augmented Structures v1.1",
    "strength": 2
  },
  {
    "source": "Digital Fountain",
    "target": "Qube",
    "strength": 2
  },
  {
    "source": "Digital Fountain",
    "target": "Saxo Reactive Ceiling",
    "strength": 2
  },
  {
    "source": "Mondeal Square",
    "target": "In The Air, Tonight",
    "strength": 2
  },
  {
    "source": "Mondeal Square",
    "target": "Pipette",
    "strength": 2
  },
  {
    "source": "Mondeal Square",
    "target": "Mendelssohn Effektorium",
    "strength": 2
  },
  {
    "source": "Mondeal Square",
    "target": "Le Circuit de Bachelard",
    "strength": 2
  },
  {
    "source": "Mondeal Square",
    "target": "The Energy Tower fa��ade lighting",
    "strength": 2
  },
  {
    "source": "Mondeal Square",
    "target": "Orkhestra, Orchestrating the Depth of Light",
    "strength": 2
  },
  {
    "source": "Mondeal Square",
    "target": "Augmented Urban Reality",
    "strength": 2
  },
  {
    "source": "Mondeal Square",
    "target": "Affinity : Interactive Art Installation",
    "strength": 2
  },
  {
    "source": "Mondeal Square",
    "target": "Human BEEing",
    "strength": 2
  },
  {
    "source": "Mondeal Square",
    "target": "digitalMatatus",
    "strength": 2
  },
  {
    "source": "Mondeal Square",
    "target": "Ninety Six",
    "strength": 2
  },
  {
    "source": "Mondeal Square",
    "target": "MegaFaces",
    "strength": 2
  },
  {
    "source": "Mondeal Square",
    "target": "Discovery Wall",
    "strength": 2
  },
  {
    "source": "AEC - Ars Electronica Center",
    "target": "FLARE Fa��ade",
    "strength": 2
  },
  {
    "source": "AEC - Ars Electronica Center",
    "target": "Thought Process",
    "strength": 2
  },
  {
    "source": "Floating Island",
    "target": "TWEETx",
    "strength": 2
  },
  {
    "source": "Floating Island",
    "target": "Augmented Structures v1.1",
    "strength": 2
  },
  {
    "source": "Floating Island",
    "target": "Qube",
    "strength": 2
  },
  {
    "source": "Floating Island",
    "target": "Saxo Reactive Ceiling",
    "strength": 2
  },
  {
    "source": "Nova",
    "target": "National Library",
    "strength": 2
  },
  {
    "source": "Nova",
    "target": "The Luminous Pathway in the Quartier des Spectacles",
    "strength": 2
  },
  {
    "source": "Distributed Projection Structure 2004",
    "target": "Galleria Store",
    "strength": 2
  },
  {
    "source": "Filament Mind",
    "target": "Train station Falkenberg",
    "strength": 2
  },
  {
    "source": "Filament Mind",
    "target": "Shanghai World Financial Center (SWFC)",
    "strength": 2
  },
  {
    "source": "Filament Mind",
    "target": "Submergence",
    "strength": 2
  },
  {
    "source": "Filament Mind",
    "target": "YTN Center",
    "strength": 2
  },
  {
    "source": "Filament Mind",
    "target": "FLUIDIC",
    "strength": 2
  },
  {
    "source": "Filament Mind",
    "target": "Megaphone",
    "strength": 2
  },
  {
    "source": "Filament Mind",
    "target": "Control no control",
    "strength": 2
  },
  {
    "source": "Filament Mind",
    "target": "LAX - Tom Bradley International Terminal",
    "strength": 2
  },
  {
    "source": "In The Air, Tonight",
    "target": "Pipette",
    "strength": 2
  },
  {
    "source": "In The Air, Tonight",
    "target": "Mendelssohn Effektorium",
    "strength": 2
  },
  {
    "source": "In The Air, Tonight",
    "target": "Le Circuit de Bachelard",
    "strength": 2
  },
  {
    "source": "In The Air, Tonight",
    "target": "The Energy Tower fa��ade lighting",
    "strength": 2
  },
  {
    "source": "In The Air, Tonight",
    "target": "Orkhestra, Orchestrating the Depth of Light",
    "strength": 2
  },
  {
    "source": "In The Air, Tonight",
    "target": "Augmented Urban Reality",
    "strength": 2
  },
  {
    "source": "In The Air, Tonight",
    "target": "Affinity : Interactive Art Installation",
    "strength": 2
  },
  {
    "source": "In The Air, Tonight",
    "target": "Human BEEing",
    "strength": 2
  },
  {
    "source": "In The Air, Tonight",
    "target": "digitalMatatus",
    "strength": 2
  },
  {
    "source": "In The Air, Tonight",
    "target": "Ninety Six",
    "strength": 2
  },
  {
    "source": "In The Air, Tonight",
    "target": "MegaFaces",
    "strength": 2
  },
  {
    "source": "In The Air, Tonight",
    "target": "Discovery Wall",
    "strength": 2
  },
  {
    "source": "Pipette",
    "target": "Mendelssohn Effektorium",
    "strength": 2
  },
  {
    "source": "Pipette",
    "target": "Le Circuit de Bachelard",
    "strength": 2
  },
  {
    "source": "Pipette",
    "target": "The Energy Tower fa��ade lighting",
    "strength": 2
  },
  {
    "source": "Pipette",
    "target": "Orkhestra, Orchestrating the Depth of Light",
    "strength": 2
  },
  {
    "source": "Pipette",
    "target": "Augmented Urban Reality",
    "strength": 2
  },
  {
    "source": "Pipette",
    "target": "Affinity : Interactive Art Installation",
    "strength": 2
  },
  {
    "source": "Pipette",
    "target": "Human BEEing",
    "strength": 2
  },
  {
    "source": "Pipette",
    "target": "digitalMatatus",
    "strength": 2
  },
  {
    "source": "Pipette",
    "target": "Ninety Six",
    "strength": 2
  },
  {
    "source": "Pipette",
    "target": "MegaFaces",
    "strength": 2
  },
  {
    "source": "Pipette",
    "target": "Discovery Wall",
    "strength": 2
  },
  {
    "source": "City Lights Orchestra",
    "target": "Field of Light",
    "strength": 2
  },
  {
    "source": "City Lights Orchestra",
    "target": "Waterlicht",
    "strength": 2
  },
  {
    "source": "City Lights Orchestra",
    "target": "Spaxels",
    "strength": 2
  },
  {
    "source": "City Lights Orchestra",
    "target": "Klubhaus St.Pauli - Mediafa��ade Lift",
    "strength": 2
  },
  {
    "source": "City Lights Orchestra",
    "target": "iLIGHT",
    "strength": 2
  },
  {
    "source": "Spine",
    "target": "City Bug Report",
    "strength": 2
  },
  {
    "source": "Spine",
    "target": "Photophore",
    "strength": 2
  },
  {
    "source": "Spine",
    "target": "Urban Alphabets",
    "strength": 2
  },
  {
    "source": "Spine",
    "target": "C4 Espacio de Creaci�n Art��stica Contempor�nea",
    "strength": 2
  },
  {
    "source": "Spine",
    "target": "Lotus Dome",
    "strength": 2
  },
  {
    "source": "Spine",
    "target": "The ARC River Culture Pavilion",
    "strength": 2
  },
  {
    "source": "Spine",
    "target": "Kinetic Fa��ade - Theme Pavilion",
    "strength": 2
  },
  {
    "source": "Spine",
    "target": "Water Light Graffiti",
    "strength": 2
  },
  {
    "source": "Spine",
    "target": "waterlight graffiti",
    "strength": 2
  },
  {
    "source": "City Bug Report",
    "target": "Photophore",
    "strength": 2
  },
  {
    "source": "City Bug Report",
    "target": "Urban Alphabets",
    "strength": 2
  },
  {
    "source": "City Bug Report",
    "target": "C4 Espacio de Creaci�n Art��stica Contempor�nea",
    "strength": 2
  },
  {
    "source": "City Bug Report",
    "target": "Lotus Dome",
    "strength": 2
  },
  {
    "source": "City Bug Report",
    "target": "The ARC River Culture Pavilion",
    "strength": 2
  },
  {
    "source": "City Bug Report",
    "target": "Kinetic Fa��ade - Theme Pavilion",
    "strength": 2
  },
  {
    "source": "City Bug Report",
    "target": "Water Light Graffiti",
    "strength": 2
  },
  {
    "source": "City Bug Report",
    "target": "waterlight graffiti",
    "strength": 2
  },
  {
    "source": "Mendelssohn Effektorium",
    "target": "Le Circuit de Bachelard",
    "strength": 2
  },
  {
    "source": "Mendelssohn Effektorium",
    "target": "The Energy Tower fa��ade lighting",
    "strength": 2
  },
  {
    "source": "Mendelssohn Effektorium",
    "target": "Orkhestra, Orchestrating the Depth of Light",
    "strength": 2
  },
  {
    "source": "Mendelssohn Effektorium",
    "target": "Augmented Urban Reality",
    "strength": 2
  },
  {
    "source": "Mendelssohn Effektorium",
    "target": "Affinity : Interactive Art Installation",
    "strength": 2
  },
  {
    "source": "Mendelssohn Effektorium",
    "target": "Human BEEing",
    "strength": 2
  },
  {
    "source": "Mendelssohn Effektorium",
    "target": "digitalMatatus",
    "strength": 2
  },
  {
    "source": "Mendelssohn Effektorium",
    "target": "Ninety Six",
    "strength": 2
  },
  {
    "source": "Mendelssohn Effektorium",
    "target": "MegaFaces",
    "strength": 2
  },
  {
    "source": "Mendelssohn Effektorium",
    "target": "Discovery Wall",
    "strength": 2
  },
  {
    "source": "Le Circuit de Bachelard",
    "target": "The Energy Tower fa��ade lighting",
    "strength": 2
  },
  {
    "source": "Le Circuit de Bachelard",
    "target": "Orkhestra, Orchestrating the Depth of Light",
    "strength": 2
  },
  {
    "source": "Le Circuit de Bachelard",
    "target": "Augmented Urban Reality",
    "strength": 2
  },
  {
    "source": "Le Circuit de Bachelard",
    "target": "Affinity : Interactive Art Installation",
    "strength": 2
  },
  {
    "source": "Le Circuit de Bachelard",
    "target": "Human BEEing",
    "strength": 2
  },
  {
    "source": "Le Circuit de Bachelard",
    "target": "digitalMatatus",
    "strength": 2
  },
  {
    "source": "Le Circuit de Bachelard",
    "target": "Ninety Six",
    "strength": 2
  },
  {
    "source": "Le Circuit de Bachelard",
    "target": "MegaFaces",
    "strength": 2
  },
  {
    "source": "Le Circuit de Bachelard",
    "target": "Discovery Wall",
    "strength": 2
  },
  {
    "source": "Photophore",
    "target": "Urban Alphabets",
    "strength": 2
  },
  {
    "source": "Photophore",
    "target": "C4 Espacio de Creaci�n Art��stica Contempor�nea",
    "strength": 2
  },
  {
    "source": "Photophore",
    "target": "Lotus Dome",
    "strength": 2
  },
  {
    "source": "Photophore",
    "target": "The ARC River Culture Pavilion",
    "strength": 2
  },
  {
    "source": "Photophore",
    "target": "Kinetic Fa��ade - Theme Pavilion",
    "strength": 2
  },
  {
    "source": "Photophore",
    "target": "Water Light Graffiti",
    "strength": 2
  },
  {
    "source": "Photophore",
    "target": "waterlight graffiti",
    "strength": 2
  },
  {
    "source": "The Energy Tower fa��ade lighting",
    "target": "Orkhestra, Orchestrating the Depth of Light",
    "strength": 2
  },
  {
    "source": "The Energy Tower fa��ade lighting",
    "target": "Augmented Urban Reality",
    "strength": 2
  },
  {
    "source": "The Energy Tower fa��ade lighting",
    "target": "Affinity : Interactive Art Installation",
    "strength": 2
  },
  {
    "source": "The Energy Tower fa��ade lighting",
    "target": "Human BEEing",
    "strength": 2
  },
  {
    "source": "The Energy Tower fa��ade lighting",
    "target": "digitalMatatus",
    "strength": 2
  },
  {
    "source": "The Energy Tower fa��ade lighting",
    "target": "Ninety Six",
    "strength": 2
  },
  {
    "source": "The Energy Tower fa��ade lighting",
    "target": "MegaFaces",
    "strength": 2
  },
  {
    "source": "The Energy Tower fa��ade lighting",
    "target": "Discovery Wall",
    "strength": 2
  },
  {
    "source": "boxLEDs",
    "target": "Lummoblocks",
    "strength": 2
  },
  {
    "source": "boxLEDs",
    "target": "Flyfire",
    "strength": 2
  },
  {
    "source": "boxLEDs",
    "target": "eCLOUD | San Jose International Airport",
    "strength": 2
  },
  {
    "source": "Orkhestra, Orchestrating the Depth of Light",
    "target": "Augmented Urban Reality",
    "strength": 2
  },
  {
    "source": "Orkhestra, Orchestrating the Depth of Light",
    "target": "Affinity : Interactive Art Installation",
    "strength": 2
  },
  {
    "source": "Orkhestra, Orchestrating the Depth of Light",
    "target": "Human BEEing",
    "strength": 2
  },
  {
    "source": "Orkhestra, Orchestrating the Depth of Light",
    "target": "digitalMatatus",
    "strength": 2
  },
  {
    "source": "Orkhestra, Orchestrating the Depth of Light",
    "target": "Ninety Six",
    "strength": 2
  },
  {
    "source": "Orkhestra, Orchestrating the Depth of Light",
    "target": "MegaFaces",
    "strength": 2
  },
  {
    "source": "Orkhestra, Orchestrating the Depth of Light",
    "target": "Discovery Wall",
    "strength": 2
  },
  {
    "source": "Augmented Urban Reality",
    "target": "Affinity : Interactive Art Installation",
    "strength": 2
  },
  {
    "source": "Augmented Urban Reality",
    "target": "Human BEEing",
    "strength": 2
  },
  {
    "source": "Augmented Urban Reality",
    "target": "digitalMatatus",
    "strength": 2
  },
  {
    "source": "Augmented Urban Reality",
    "target": "Ninety Six",
    "strength": 2
  },
  {
    "source": "Augmented Urban Reality",
    "target": "MegaFaces",
    "strength": 2
  },
  {
    "source": "Augmented Urban Reality",
    "target": "Discovery Wall",
    "strength": 2
  },
  {
    "source": "Train station Falkenberg",
    "target": "Shanghai World Financial Center (SWFC)",
    "strength": 2
  },
  {
    "source": "Train station Falkenberg",
    "target": "Submergence",
    "strength": 2
  },
  {
    "source": "Train station Falkenberg",
    "target": "YTN Center",
    "strength": 2
  },
  {
    "source": "Train station Falkenberg",
    "target": "FLUIDIC",
    "strength": 2
  },
  {
    "source": "Train station Falkenberg",
    "target": "Megaphone",
    "strength": 2
  },
  {
    "source": "Train station Falkenberg",
    "target": "Control no control",
    "strength": 2
  },
  {
    "source": "Train station Falkenberg",
    "target": "LAX - Tom Bradley International Terminal",
    "strength": 2
  },
  {
    "source": "Shanghai World Financial Center (SWFC)",
    "target": "Submergence",
    "strength": 2
  },
  {
    "source": "Shanghai World Financial Center (SWFC)",
    "target": "YTN Center",
    "strength": 2
  },
  {
    "source": "Shanghai World Financial Center (SWFC)",
    "target": "FLUIDIC",
    "strength": 2
  },
  {
    "source": "Shanghai World Financial Center (SWFC)",
    "target": "Megaphone",
    "strength": 2
  },
  {
    "source": "Shanghai World Financial Center (SWFC)",
    "target": "Control no control",
    "strength": 2
  },
  {
    "source": "Shanghai World Financial Center (SWFC)",
    "target": "LAX - Tom Bradley International Terminal",
    "strength": 2
  },
  {
    "source": "Field of Light",
    "target": "Waterlicht",
    "strength": 2
  },
  {
    "source": "Field of Light",
    "target": "Spaxels",
    "strength": 2
  },
  {
    "source": "Field of Light",
    "target": "Klubhaus St.Pauli - Mediafa��ade Lift",
    "strength": 2
  },
  {
    "source": "Field of Light",
    "target": "iLIGHT",
    "strength": 2
  },
  {
    "source": "National Library",
    "target": "The Luminous Pathway in the Quartier des Spectacles",
    "strength": 2
  },
  {
    "source": "Affinity : Interactive Art Installation",
    "target": "Human BEEing",
    "strength": 2
  },
  {
    "source": "Affinity : Interactive Art Installation",
    "target": "digitalMatatus",
    "strength": 2
  },
  {
    "source": "Affinity : Interactive Art Installation",
    "target": "Ninety Six",
    "strength": 2
  },
  {
    "source": "Affinity : Interactive Art Installation",
    "target": "MegaFaces",
    "strength": 2
  },
  {
    "source": "Affinity : Interactive Art Installation",
    "target": "Discovery Wall",
    "strength": 2
  },
  {
    "source": "Urban Alphabets",
    "target": "C4 Espacio de Creaci�n Art��stica Contempor�nea",
    "strength": 2
  },
  {
    "source": "Urban Alphabets",
    "target": "Lotus Dome",
    "strength": 2
  },
  {
    "source": "Urban Alphabets",
    "target": "The ARC River Culture Pavilion",
    "strength": 2
  },
  {
    "source": "Urban Alphabets",
    "target": "Kinetic Fa��ade - Theme Pavilion",
    "strength": 2
  },
  {
    "source": "Urban Alphabets",
    "target": "Water Light Graffiti",
    "strength": 2
  },
  {
    "source": "Urban Alphabets",
    "target": "waterlight graffiti",
    "strength": 2
  },
  {
    "source": "C4 Espacio de Creaci�n Art��stica Contempor�nea",
    "target": "Lotus Dome",
    "strength": 2
  },
  {
    "source": "C4 Espacio de Creaci�n Art��stica Contempor�nea",
    "target": "The ARC River Culture Pavilion",
    "strength": 2
  },
  {
    "source": "C4 Espacio de Creaci�n Art��stica Contempor�nea",
    "target": "Kinetic Fa��ade - Theme Pavilion",
    "strength": 2
  },
  {
    "source": "C4 Espacio de Creaci�n Art��stica Contempor�nea",
    "target": "Water Light Graffiti",
    "strength": 2
  },
  {
    "source": "C4 Espacio de Creaci�n Art��stica Contempor�nea",
    "target": "waterlight graffiti",
    "strength": 2
  },
  {
    "source": "TWEETx",
    "target": "Augmented Structures v1.1",
    "strength": 2
  },
  {
    "source": "TWEETx",
    "target": "Qube",
    "strength": 2
  },
  {
    "source": "TWEETx",
    "target": "Saxo Reactive Ceiling",
    "strength": 2
  },
  {
    "source": "Submergence",
    "target": "YTN Center",
    "strength": 2
  },
  {
    "source": "Submergence",
    "target": "FLUIDIC",
    "strength": 2
  },
  {
    "source": "Submergence",
    "target": "Megaphone",
    "strength": 2
  },
  {
    "source": "Submergence",
    "target": "Control no control",
    "strength": 2
  },
  {
    "source": "Submergence",
    "target": "LAX - Tom Bradley International Terminal",
    "strength": 2
  },
  {
    "source": "Human BEEing",
    "target": "digitalMatatus",
    "strength": 2
  },
  {
    "source": "Human BEEing",
    "target": "Ninety Six",
    "strength": 2
  },
  {
    "source": "Human BEEing",
    "target": "MegaFaces",
    "strength": 2
  },
  {
    "source": "Human BEEing",
    "target": "Discovery Wall",
    "strength": 2
  },
  {
    "source": "FLARE Fa��ade",
    "target": "Thought Process",
    "strength": 2
  },
  {
    "source": "YTN Center",
    "target": "FLUIDIC",
    "strength": 2
  },
  {
    "source": "YTN Center",
    "target": "Megaphone",
    "strength": 2
  },
  {
    "source": "YTN Center",
    "target": "Control no control",
    "strength": 2
  },
  {
    "source": "YTN Center",
    "target": "LAX - Tom Bradley International Terminal",
    "strength": 2
  },
  {
    "source": "Augmented Structures v1.1",
    "target": "Qube",
    "strength": 2
  },
  {
    "source": "Augmented Structures v1.1",
    "target": "Saxo Reactive Ceiling",
    "strength": 2
  },
  {
    "source": "FLUIDIC",
    "target": "Megaphone",
    "strength": 2
  },
  {
    "source": "FLUIDIC",
    "target": "Control no control",
    "strength": 2
  },
  {
    "source": "FLUIDIC",
    "target": "LAX - Tom Bradley International Terminal",
    "strength": 2
  },
  {
    "source": "Lotus Dome",
    "target": "The ARC River Culture Pavilion",
    "strength": 2
  },
  {
    "source": "Lotus Dome",
    "target": "Kinetic Fa��ade - Theme Pavilion",
    "strength": 2
  },
  {
    "source": "Lotus Dome",
    "target": "Water Light Graffiti",
    "strength": 2
  },
  {
    "source": "Lotus Dome",
    "target": "waterlight graffiti",
    "strength": 2
  },
  {
    "source": "Waterlicht",
    "target": "Spaxels",
    "strength": 2
  },
  {
    "source": "Waterlicht",
    "target": "Klubhaus St.Pauli - Mediafa��ade Lift",
    "strength": 2
  },
  {
    "source": "Waterlicht",
    "target": "iLIGHT",
    "strength": 2
  },
  {
    "source": "The ARC River Culture Pavilion",
    "target": "Kinetic Fa��ade - Theme Pavilion",
    "strength": 2
  },
  {
    "source": "The ARC River Culture Pavilion",
    "target": "Water Light Graffiti",
    "strength": 2
  },
  {
    "source": "The ARC River Culture Pavilion",
    "target": "waterlight graffiti",
    "strength": 2
  },
  {
    "source": "Megaphone",
    "target": "Control no control",
    "strength": 2
  },
  {
    "source": "Megaphone",
    "target": "LAX - Tom Bradley International Terminal",
    "strength": 2
  },
  {
    "source": "Kinetic Fa��ade - Theme Pavilion",
    "target": "Water Light Graffiti",
    "strength": 2
  },
  {
    "source": "Kinetic Fa��ade - Theme Pavilion",
    "target": "waterlight graffiti",
    "strength": 2
  },
  {
    "source": "digitalMatatus",
    "target": "Ninety Six",
    "strength": 2
  },
  {
    "source": "digitalMatatus",
    "target": "MegaFaces",
    "strength": 2
  },
  {
    "source": "digitalMatatus",
    "target": "Discovery Wall",
    "strength": 2
  },
  {
    "source": "Control no control",
    "target": "LAX - Tom Bradley International Terminal",
    "strength": 2
  },
  {
    "source": "Water Light Graffiti",
    "target": "waterlight graffiti",
    "strength": 2
  },
  {
    "source": "Ninety Six",
    "target": "MegaFaces",
    "strength": 2
  },
  {
    "source": "Ninety Six",
    "target": "Discovery Wall",
    "strength": 2
  },
  {
    "source": "MegaFaces",
    "target": "Discovery Wall",
    "strength": 2
  },
  {
    "source": "Spaxels",
    "target": "Klubhaus St.Pauli - Mediafa��ade Lift",
    "strength": 2
  },
  {
    "source": "Spaxels",
    "target": "iLIGHT",
    "strength": 2
  },
  {
    "source": "Klubhaus St.Pauli - Mediafa��ade Lift",
    "target": "iLIGHT",
    "strength": 2
  },
  {
    "source": "Lummoblocks",
    "target": "Flyfire",
    "strength": 2
  },
  {
    "source": "Lummoblocks",
    "target": "eCLOUD | San Jose International Airport",
    "strength": 2
  },
  {
    "source": "Qube",
    "target": "Saxo Reactive Ceiling",
    "strength": 2
  },
  {
    "source": "Flyfire",
    "target": "eCLOUD | San Jose International Airport",
    "strength": 2
  },
  {
    "source": "Seestadt.bot",
    "target": "The Dash Wall",
    "strength": 2
  },
  {
    "source": "Seestadt.bot",
    "target": "Synergies",
    "strength": 2
  },
  {
    "source": "Seestadt.bot",
    "target": "AMANDOLIER FA��ADE",
    "strength": 2
  },
  {
    "source": "Seestadt.bot",
    "target": "The abode of the outside",
    "strength": 2
  },
  {
    "source": "Seestadt.bot",
    "target": "Media architecture cluster Real-scene simulation and design prototype",
    "strength": 2
  },
  {
    "source": "Seestadt.bot",
    "target": "VIRTUAL WALLS - TORRECARDENAS",
    "strength": 2
  },
  {
    "source": "Seestadt.bot",
    "target": "Northside Beacons",
    "strength": 2
  },
  {
    "source": "Seestadt.bot",
    "target": "LightLines",
    "strength": 2
  },
  {
    "source": "Seestadt.bot",
    "target": "Arena",
    "strength": 2
  },
  {
    "source": "Seestadt.bot",
    "target": "Monument Remix",
    "strength": 2
  },
  {
    "source": "Seestadt.bot",
    "target": "Federation Square Digital Canvas",
    "strength": 2
  },
  {
    "source": "Seestadt.bot",
    "target": "Yagan Square",
    "strength": 2
  },
  {
    "source": "Seestadt.bot",
    "target": "Smog Free Project",
    "strength": 2
  },
  {
    "source": "Seestadt.bot",
    "target": "BioLumen",
    "strength": 2
  },
  {
    "source": "Seestadt.bot",
    "target": "Yellow Dust",
    "strength": 2
  },
  {
    "source": "Seestadt.bot",
    "target": "Dragon Scale",
    "strength": 2
  },
  {
    "source": "Seestadt.bot",
    "target": "Gibigiana",
    "strength": 2
  },
  {
    "source": "ARCHIVE DREAMING",
    "target": "Sonic Runway",
    "strength": 2
  },
  {
    "source": "ARCHIVE DREAMING",
    "target": "urban lights contact",
    "strength": 2
  },
  {
    "source": "ARCHIVE DREAMING",
    "target": "DAZZLE | San Diego International Airport",
    "strength": 2
  },
  {
    "source": "ARCHIVE DREAMING",
    "target": "TIETO HQ",
    "strength": 2
  },
  {
    "source": "ARCHIVE DREAMING",
    "target": "INTERACTIVE CLOUD",
    "strength": 2
  },
  {
    "source": "ARCHIVE DREAMING",
    "target": "Plant a Light",
    "strength": 2
  },
  {
    "source": "ARCHIVE DREAMING",
    "target": "ARCHIVE DREAMING",
    "strength": 2
  },
  {
    "source": "ARCHIVE DREAMING",
    "target": "LightSpell",
    "strength": 2
  },
  {
    "source": "ARCHIVE DREAMING",
    "target": "Kipnes Lantern",
    "strength": 2
  },
  {
    "source": "ARCHIVE DREAMING",
    "target": "Salling Lights",
    "strength": 2
  },
  {
    "source": "ARCHIVE DREAMING",
    "target": "Digital Calligraffiti",
    "strength": 2
  },
  {
    "source": "ARCHIVE DREAMING",
    "target": "Digital neighbourhood",
    "strength": 2
  },
  {
    "source": "ARCHIVE DREAMING",
    "target": "Chave do Centro or \"The Key to Downtown",
    "strength": 2
  },
  {
    "source": "ARCHIVE DREAMING",
    "target": "The Playground",
    "strength": 2
  },
  {
    "source": "The Dash Wall",
    "target": "Synergies",
    "strength": 2
  },
  {
    "source": "The Dash Wall",
    "target": "AMANDOLIER FA��ADE",
    "strength": 2
  },
  {
    "source": "The Dash Wall",
    "target": "The abode of the outside",
    "strength": 2
  },
  {
    "source": "The Dash Wall",
    "target": "Media architecture cluster Real-scene simulation and design prototype",
    "strength": 2
  },
  {
    "source": "The Dash Wall",
    "target": "VIRTUAL WALLS - TORRECARDENAS",
    "strength": 2
  },
  {
    "source": "The Dash Wall",
    "target": "Northside Beacons",
    "strength": 2
  },
  {
    "source": "The Dash Wall",
    "target": "LightLines",
    "strength": 2
  },
  {
    "source": "The Dash Wall",
    "target": "Arena",
    "strength": 2
  },
  {
    "source": "The Dash Wall",
    "target": "Monument Remix",
    "strength": 2
  },
  {
    "source": "The Dash Wall",
    "target": "Federation Square Digital Canvas",
    "strength": 2
  },
  {
    "source": "The Dash Wall",
    "target": "Yagan Square",
    "strength": 2
  },
  {
    "source": "The Dash Wall",
    "target": "Smog Free Project",
    "strength": 2
  },
  {
    "source": "The Dash Wall",
    "target": "BioLumen",
    "strength": 2
  },
  {
    "source": "The Dash Wall",
    "target": "Yellow Dust",
    "strength": 2
  },
  {
    "source": "The Dash Wall",
    "target": "Dragon Scale",
    "strength": 2
  },
  {
    "source": "The Dash Wall",
    "target": "Gibigiana",
    "strength": 2
  },
  {
    "source": "World Collider",
    "target": "UNIFUN Tianfu Chengdu",
    "strength": 2
  },
  {
    "source": "World Collider",
    "target": "The labyrinth",
    "strength": 2
  },
  {
    "source": "World Collider",
    "target": "Rosa Center shopping mall",
    "strength": 2
  },
  {
    "source": "World Collider",
    "target": "XII Porcelanosa architecture and interior design awards",
    "strength": 2
  },
  {
    "source": "World Collider",
    "target": "Data Eye of Wangjing",
    "strength": 2
  },
  {
    "source": "World Collider",
    "target": "LAN - 4",
    "strength": 2
  },
  {
    "source": "World Collider",
    "target": "Maanaviat (spirituality)",
    "strength": 2
  },
  {
    "source": "World Collider",
    "target": "Son et Culinaire",
    "strength": 2
  },
  {
    "source": "World Collider",
    "target": "Shenzhen Planning Exhibition",
    "strength": 2
  },
  {
    "source": "World Collider",
    "target": "FUTURE VISION LAB",
    "strength": 2
  },
  {
    "source": "World Collider",
    "target": "Interactive Media Sculpture \"The Tree of Knowledge",
    "strength": 2
  },
  {
    "source": "World Collider",
    "target": "Interactive application Dolphins Creator",
    "strength": 2
  },
  {
    "source": "World Collider",
    "target": "Architectural and Decorative Lighting of Freedom Square in Mariupol",
    "strength": 2
  },
  {
    "source": "World Collider",
    "target": "Interactive Screen on the Boulevard of arts",
    "strength": 2
  },
  {
    "source": "World Collider",
    "target": "Lighting for Boulevard of Arts",
    "strength": 2
  },
  {
    "source": "World Collider",
    "target": "REQUIEM",
    "strength": 2
  },
  {
    "source": "World Collider",
    "target": "SP_Urban Arte Conecta",
    "strength": 2
  },
  {
    "source": "World Collider",
    "target": "MAX CENTER",
    "strength": 2
  },
  {
    "source": "World Collider",
    "target": "Between Waves",
    "strength": 2
  },
  {
    "source": "World Collider",
    "target": "Dnipro Light Flower",
    "strength": 2
  },
  {
    "source": "World Collider",
    "target": "Hamaja",
    "strength": 2
  },
  {
    "source": "World Collider",
    "target": "LEVENSLICHT",
    "strength": 2
  },
  {
    "source": "World Collider",
    "target": "Window into the Seas",
    "strength": 2
  },
  {
    "source": "World Collider",
    "target": "Touching Night Skies 50°06'44\"N 8°40'36\"E",
    "strength": 2
  },
  {
    "source": "World Collider",
    "target": "The Webster - Narrative Lighting Wall",
    "strength": 2
  },
  {
    "source": "World Collider",
    "target": "Still Light",
    "strength": 2
  },
  {
    "source": "World Collider",
    "target": "Para Social",
    "strength": 2
  },
  {
    "source": "World Collider",
    "target": "Digital Phyllotaxy",
    "strength": 2
  },
  {
    "source": "World Collider",
    "target": "ANTopolis",
    "strength": 2
  },
  {
    "source": "World Collider",
    "target": "Helsinki Outlet",
    "strength": 2
  },
  {
    "source": "World Collider",
    "target": "Chatty Bench Project: Radical Media Architecture in Precarious Times",
    "strength": 2
  },
  {
    "source": "World Collider",
    "target": "Sleepers of Haslev",
    "strength": 2
  },
  {
    "source": "World Collider",
    "target": "La Lune Est' / 'The Moon Is'",
    "strength": 2
  },
  {
    "source": "World Collider",
    "target": "PO�ME D'�CRAN' / 'SCREEN POEM'",
    "strength": 2
  },
  {
    "source": "World Collider",
    "target": "[ i miss your touch ] by PluginHUMAN.",
    "strength": 2
  },
  {
    "source": "World Collider",
    "target": "Inhibition",
    "strength": 2
  },
  {
    "source": "World Collider",
    "target": "Walk Walk Dance",
    "strength": 2
  },
  {
    "source": "UNIFUN Tianfu Chengdu",
    "target": "The labyrinth",
    "strength": 2
  },
  {
    "source": "UNIFUN Tianfu Chengdu",
    "target": "Rosa Center shopping mall",
    "strength": 2
  },
  {
    "source": "UNIFUN Tianfu Chengdu",
    "target": "XII Porcelanosa architecture and interior design awards",
    "strength": 2
  },
  {
    "source": "UNIFUN Tianfu Chengdu",
    "target": "Data Eye of Wangjing",
    "strength": 2
  },
  {
    "source": "UNIFUN Tianfu Chengdu",
    "target": "LAN - 4",
    "strength": 2
  },
  {
    "source": "UNIFUN Tianfu Chengdu",
    "target": "Maanaviat (spirituality)",
    "strength": 2
  },
  {
    "source": "UNIFUN Tianfu Chengdu",
    "target": "Son et Culinaire",
    "strength": 2
  },
  {
    "source": "UNIFUN Tianfu Chengdu",
    "target": "Shenzhen Planning Exhibition",
    "strength": 2
  },
  {
    "source": "UNIFUN Tianfu Chengdu",
    "target": "FUTURE VISION LAB",
    "strength": 2
  },
  {
    "source": "UNIFUN Tianfu Chengdu",
    "target": "Interactive Media Sculpture \"The Tree of Knowledge",
    "strength": 2
  },
  {
    "source": "UNIFUN Tianfu Chengdu",
    "target": "Interactive application Dolphins Creator",
    "strength": 2
  },
  {
    "source": "UNIFUN Tianfu Chengdu",
    "target": "Architectural and Decorative Lighting of Freedom Square in Mariupol",
    "strength": 2
  },
  {
    "source": "UNIFUN Tianfu Chengdu",
    "target": "Interactive Screen on the Boulevard of arts",
    "strength": 2
  },
  {
    "source": "UNIFUN Tianfu Chengdu",
    "target": "Lighting for Boulevard of Arts",
    "strength": 2
  },
  {
    "source": "UNIFUN Tianfu Chengdu",
    "target": "REQUIEM",
    "strength": 2
  },
  {
    "source": "UNIFUN Tianfu Chengdu",
    "target": "SP_Urban Arte Conecta",
    "strength": 2
  },
  {
    "source": "UNIFUN Tianfu Chengdu",
    "target": "MAX CENTER",
    "strength": 2
  },
  {
    "source": "UNIFUN Tianfu Chengdu",
    "target": "Between Waves",
    "strength": 2
  },
  {
    "source": "UNIFUN Tianfu Chengdu",
    "target": "Dnipro Light Flower",
    "strength": 2
  },
  {
    "source": "UNIFUN Tianfu Chengdu",
    "target": "Hamaja",
    "strength": 2
  },
  {
    "source": "UNIFUN Tianfu Chengdu",
    "target": "LEVENSLICHT",
    "strength": 2
  },
  {
    "source": "UNIFUN Tianfu Chengdu",
    "target": "Window into the Seas",
    "strength": 2
  },
  {
    "source": "UNIFUN Tianfu Chengdu",
    "target": "Touching Night Skies 50°06'44\"N 8°40'36\"E",
    "strength": 2
  },
  {
    "source": "UNIFUN Tianfu Chengdu",
    "target": "The Webster - Narrative Lighting Wall",
    "strength": 2
  },
  {
    "source": "UNIFUN Tianfu Chengdu",
    "target": "Still Light",
    "strength": 2
  },
  {
    "source": "UNIFUN Tianfu Chengdu",
    "target": "Para Social",
    "strength": 2
  },
  {
    "source": "UNIFUN Tianfu Chengdu",
    "target": "Digital Phyllotaxy",
    "strength": 2
  },
  {
    "source": "UNIFUN Tianfu Chengdu",
    "target": "ANTopolis",
    "strength": 2
  },
  {
    "source": "UNIFUN Tianfu Chengdu",
    "target": "Helsinki Outlet",
    "strength": 2
  },
  {
    "source": "UNIFUN Tianfu Chengdu",
    "target": "Chatty Bench Project: Radical Media Architecture in Precarious Times",
    "strength": 2
  },
  {
    "source": "UNIFUN Tianfu Chengdu",
    "target": "Sleepers of Haslev",
    "strength": 2
  },
  {
    "source": "UNIFUN Tianfu Chengdu",
    "target": "La Lune Est' / 'The Moon Is'",
    "strength": 2
  },
  {
    "source": "UNIFUN Tianfu Chengdu",
    "target": "PO�ME D'�CRAN' / 'SCREEN POEM'",
    "strength": 2
  },
  {
    "source": "UNIFUN Tianfu Chengdu",
    "target": "[ i miss your touch ] by PluginHUMAN.",
    "strength": 2
  },
  {
    "source": "UNIFUN Tianfu Chengdu",
    "target": "Inhibition",
    "strength": 2
  },
  {
    "source": "UNIFUN Tianfu Chengdu",
    "target": "Walk Walk Dance",
    "strength": 2
  },
  {
    "source": "Sonic Runway",
    "target": "urban lights contact",
    "strength": 2
  },
  {
    "source": "Sonic Runway",
    "target": "DAZZLE | San Diego International Airport",
    "strength": 2
  },
  {
    "source": "Sonic Runway",
    "target": "TIETO HQ",
    "strength": 2
  },
  {
    "source": "Sonic Runway",
    "target": "INTERACTIVE CLOUD",
    "strength": 2
  },
  {
    "source": "Sonic Runway",
    "target": "Plant a Light",
    "strength": 2
  },
  {
    "source": "Sonic Runway",
    "target": "ARCHIVE DREAMING",
    "strength": 2
  },
  {
    "source": "Sonic Runway",
    "target": "LightSpell",
    "strength": 2
  },
  {
    "source": "Sonic Runway",
    "target": "Kipnes Lantern",
    "strength": 2
  },
  {
    "source": "Sonic Runway",
    "target": "Salling Lights",
    "strength": 2
  },
  {
    "source": "Sonic Runway",
    "target": "Digital Calligraffiti",
    "strength": 2
  },
  {
    "source": "Sonic Runway",
    "target": "Digital neighbourhood",
    "strength": 2
  },
  {
    "source": "Sonic Runway",
    "target": "Chave do Centro or \"The Key to Downtown",
    "strength": 2
  },
  {
    "source": "Sonic Runway",
    "target": "The Playground",
    "strength": 2
  },
  {
    "source": "urban lights contact",
    "target": "DAZZLE | San Diego International Airport",
    "strength": 2
  },
  {
    "source": "urban lights contact",
    "target": "TIETO HQ",
    "strength": 2
  },
  {
    "source": "urban lights contact",
    "target": "INTERACTIVE CLOUD",
    "strength": 2
  },
  {
    "source": "urban lights contact",
    "target": "Plant a Light",
    "strength": 2
  },
  {
    "source": "urban lights contact",
    "target": "ARCHIVE DREAMING",
    "strength": 2
  },
  {
    "source": "urban lights contact",
    "target": "LightSpell",
    "strength": 2
  },
  {
    "source": "urban lights contact",
    "target": "Kipnes Lantern",
    "strength": 2
  },
  {
    "source": "urban lights contact",
    "target": "Salling Lights",
    "strength": 2
  },
  {
    "source": "urban lights contact",
    "target": "Digital Calligraffiti",
    "strength": 2
  },
  {
    "source": "urban lights contact",
    "target": "Digital neighbourhood",
    "strength": 2
  },
  {
    "source": "urban lights contact",
    "target": "Chave do Centro or \"The Key to Downtown",
    "strength": 2
  },
  {
    "source": "urban lights contact",
    "target": "The Playground",
    "strength": 2
  },
  {
    "source": "Synergies",
    "target": "AMANDOLIER FA��ADE",
    "strength": 2
  },
  {
    "source": "Synergies",
    "target": "The abode of the outside",
    "strength": 2
  },
  {
    "source": "Synergies",
    "target": "Media architecture cluster Real-scene simulation and design prototype",
    "strength": 2
  },
  {
    "source": "Synergies",
    "target": "VIRTUAL WALLS - TORRECARDENAS",
    "strength": 2
  },
  {
    "source": "Synergies",
    "target": "Northside Beacons",
    "strength": 2
  },
  {
    "source": "Synergies",
    "target": "LightLines",
    "strength": 2
  },
  {
    "source": "Synergies",
    "target": "Arena",
    "strength": 2
  },
  {
    "source": "Synergies",
    "target": "Monument Remix",
    "strength": 2
  },
  {
    "source": "Synergies",
    "target": "Federation Square Digital Canvas",
    "strength": 2
  },
  {
    "source": "Synergies",
    "target": "Yagan Square",
    "strength": 2
  },
  {
    "source": "Synergies",
    "target": "Smog Free Project",
    "strength": 2
  },
  {
    "source": "Synergies",
    "target": "BioLumen",
    "strength": 2
  },
  {
    "source": "Synergies",
    "target": "Yellow Dust",
    "strength": 2
  },
  {
    "source": "Synergies",
    "target": "Dragon Scale",
    "strength": 2
  },
  {
    "source": "Synergies",
    "target": "Gibigiana",
    "strength": 2
  },
  {
    "source": "Uptown Underground",
    "target": "building dawn",
    "strength": 2
  },
  {
    "source": "Uptown Underground",
    "target": "Radisson BLU Scandinavia",
    "strength": 2
  },
  {
    "source": "Uptown Underground",
    "target": "Preservation of Silence",
    "strength": 2
  },
  {
    "source": "Uptown Underground",
    "target": "Variegation Index",
    "strength": 2
  },
  {
    "source": "Uptown Underground",
    "target": "Shadow Wall",
    "strength": 2
  },
  {
    "source": "Uptown Underground",
    "target": "Woodie",
    "strength": 2
  },
  {
    "source": "Uptown Underground",
    "target": "Aukio",
    "strength": 2
  },
  {
    "source": "Uptown Underground",
    "target": "Light art installation Beacon",
    "strength": 2
  },
  {
    "source": "Uptown Underground",
    "target": "Star Hunters",
    "strength": 2
  },
  {
    "source": "Uptown Underground",
    "target": "Catholic Church of St. Nicholas",
    "strength": 2
  },
  {
    "source": "Uptown Underground",
    "target": "Interactive Media Sculpture The Cube",
    "strength": 2
  },
  {
    "source": "Uptown Underground",
    "target": "Lighting for the Tetris Hall Residential Complex",
    "strength": 2
  },
  {
    "source": "Uptown Underground",
    "target": "The 4th Street SW Underpass Enhancement Project",
    "strength": 2
  },
  {
    "source": "Uptown Underground",
    "target": "The Pearl Divers",
    "strength": 2
  },
  {
    "source": "Uptown Underground",
    "target": "Landscapes of Dreams",
    "strength": 2
  },
  {
    "source": "Uptown Underground",
    "target": "MAGIC MIRROR",
    "strength": 2
  },
  {
    "source": "Uptown Underground",
    "target": "The Pipes",
    "strength": 2
  },
  {
    "source": "Uptown Underground",
    "target": "Wervel [Turmoil]",
    "strength": 2
  },
  {
    "source": "Uptown Underground",
    "target": "All Colors Are In The Lights",
    "strength": 2
  },
  {
    "source": "Uptown Underground",
    "target": "La Sprite",
    "strength": 2
  },
  {
    "source": "Uptown Underground",
    "target": "PASSAGES",
    "strength": 2
  },
  {
    "source": "Uptown Underground",
    "target": "Wuhan Optics Valley Square Complex Theme Ground Sculpture",
    "strength": 2
  },
  {
    "source": "Uptown Underground",
    "target": "Stadt der Temperamente",
    "strength": 2
  },
  {
    "source": "Uptown Underground",
    "target": "Citizen Dialog Kit",
    "strength": 2
  },
  {
    "source": "The labyrinth",
    "target": "Rosa Center shopping mall",
    "strength": 2
  },
  {
    "source": "The labyrinth",
    "target": "XII Porcelanosa architecture and interior design awards",
    "strength": 2
  },
  {
    "source": "The labyrinth",
    "target": "Data Eye of Wangjing",
    "strength": 2
  },
  {
    "source": "The labyrinth",
    "target": "LAN - 4",
    "strength": 2
  },
  {
    "source": "The labyrinth",
    "target": "Maanaviat (spirituality)",
    "strength": 2
  },
  {
    "source": "The labyrinth",
    "target": "Son et Culinaire",
    "strength": 2
  },
  {
    "source": "The labyrinth",
    "target": "Shenzhen Planning Exhibition",
    "strength": 2
  },
  {
    "source": "The labyrinth",
    "target": "FUTURE VISION LAB",
    "strength": 2
  },
  {
    "source": "The labyrinth",
    "target": "Interactive Media Sculpture \"The Tree of Knowledge",
    "strength": 2
  },
  {
    "source": "The labyrinth",
    "target": "Interactive application Dolphins Creator",
    "strength": 2
  },
  {
    "source": "The labyrinth",
    "target": "Architectural and Decorative Lighting of Freedom Square in Mariupol",
    "strength": 2
  },
  {
    "source": "The labyrinth",
    "target": "Interactive Screen on the Boulevard of arts",
    "strength": 2
  },
  {
    "source": "The labyrinth",
    "target": "Lighting for Boulevard of Arts",
    "strength": 2
  },
  {
    "source": "The labyrinth",
    "target": "REQUIEM",
    "strength": 2
  },
  {
    "source": "The labyrinth",
    "target": "SP_Urban Arte Conecta",
    "strength": 2
  },
  {
    "source": "The labyrinth",
    "target": "MAX CENTER",
    "strength": 2
  },
  {
    "source": "The labyrinth",
    "target": "Between Waves",
    "strength": 2
  },
  {
    "source": "The labyrinth",
    "target": "Dnipro Light Flower",
    "strength": 2
  },
  {
    "source": "The labyrinth",
    "target": "Hamaja",
    "strength": 2
  },
  {
    "source": "The labyrinth",
    "target": "LEVENSLICHT",
    "strength": 2
  },
  {
    "source": "The labyrinth",
    "target": "Window into the Seas",
    "strength": 2
  },
  {
    "source": "The labyrinth",
    "target": "Touching Night Skies 50°06'44\"N 8°40'36\"E",
    "strength": 2
  },
  {
    "source": "The labyrinth",
    "target": "The Webster - Narrative Lighting Wall",
    "strength": 2
  },
  {
    "source": "The labyrinth",
    "target": "Still Light",
    "strength": 2
  },
  {
    "source": "The labyrinth",
    "target": "Para Social",
    "strength": 2
  },
  {
    "source": "The labyrinth",
    "target": "Digital Phyllotaxy",
    "strength": 2
  },
  {
    "source": "The labyrinth",
    "target": "ANTopolis",
    "strength": 2
  },
  {
    "source": "The labyrinth",
    "target": "Helsinki Outlet",
    "strength": 2
  },
  {
    "source": "The labyrinth",
    "target": "Chatty Bench Project: Radical Media Architecture in Precarious Times",
    "strength": 2
  },
  {
    "source": "The labyrinth",
    "target": "Sleepers of Haslev",
    "strength": 2
  },
  {
    "source": "The labyrinth",
    "target": "La Lune Est' / 'The Moon Is'",
    "strength": 2
  },
  {
    "source": "The labyrinth",
    "target": "PO�ME D'�CRAN' / 'SCREEN POEM'",
    "strength": 2
  },
  {
    "source": "The labyrinth",
    "target": "[ i miss your touch ] by PluginHUMAN.",
    "strength": 2
  },
  {
    "source": "The labyrinth",
    "target": "Inhibition",
    "strength": 2
  },
  {
    "source": "The labyrinth",
    "target": "Walk Walk Dance",
    "strength": 2
  },
  {
    "source": "Rosa Center shopping mall",
    "target": "XII Porcelanosa architecture and interior design awards",
    "strength": 2
  },
  {
    "source": "Rosa Center shopping mall",
    "target": "Data Eye of Wangjing",
    "strength": 2
  },
  {
    "source": "Rosa Center shopping mall",
    "target": "LAN - 4",
    "strength": 2
  },
  {
    "source": "Rosa Center shopping mall",
    "target": "Maanaviat (spirituality)",
    "strength": 2
  },
  {
    "source": "Rosa Center shopping mall",
    "target": "Son et Culinaire",
    "strength": 2
  },
  {
    "source": "Rosa Center shopping mall",
    "target": "Shenzhen Planning Exhibition",
    "strength": 2
  },
  {
    "source": "Rosa Center shopping mall",
    "target": "FUTURE VISION LAB",
    "strength": 2
  },
  {
    "source": "Rosa Center shopping mall",
    "target": "Interactive Media Sculpture \"The Tree of Knowledge",
    "strength": 2
  },
  {
    "source": "Rosa Center shopping mall",
    "target": "Interactive application Dolphins Creator",
    "strength": 2
  },
  {
    "source": "Rosa Center shopping mall",
    "target": "Architectural and Decorative Lighting of Freedom Square in Mariupol",
    "strength": 2
  },
  {
    "source": "Rosa Center shopping mall",
    "target": "Interactive Screen on the Boulevard of arts",
    "strength": 2
  },
  {
    "source": "Rosa Center shopping mall",
    "target": "Lighting for Boulevard of Arts",
    "strength": 2
  },
  {
    "source": "Rosa Center shopping mall",
    "target": "REQUIEM",
    "strength": 2
  },
  {
    "source": "Rosa Center shopping mall",
    "target": "SP_Urban Arte Conecta",
    "strength": 2
  },
  {
    "source": "Rosa Center shopping mall",
    "target": "MAX CENTER",
    "strength": 2
  },
  {
    "source": "Rosa Center shopping mall",
    "target": "Between Waves",
    "strength": 2
  },
  {
    "source": "Rosa Center shopping mall",
    "target": "Dnipro Light Flower",
    "strength": 2
  },
  {
    "source": "Rosa Center shopping mall",
    "target": "Hamaja",
    "strength": 2
  },
  {
    "source": "Rosa Center shopping mall",
    "target": "LEVENSLICHT",
    "strength": 2
  },
  {
    "source": "Rosa Center shopping mall",
    "target": "Window into the Seas",
    "strength": 2
  },
  {
    "source": "Rosa Center shopping mall",
    "target": "Touching Night Skies 50°06'44\"N 8°40'36\"E",
    "strength": 2
  },
  {
    "source": "Rosa Center shopping mall",
    "target": "The Webster - Narrative Lighting Wall",
    "strength": 2
  },
  {
    "source": "Rosa Center shopping mall",
    "target": "Still Light",
    "strength": 2
  },
  {
    "source": "Rosa Center shopping mall",
    "target": "Para Social",
    "strength": 2
  },
  {
    "source": "Rosa Center shopping mall",
    "target": "Digital Phyllotaxy",
    "strength": 2
  },
  {
    "source": "Rosa Center shopping mall",
    "target": "ANTopolis",
    "strength": 2
  },
  {
    "source": "Rosa Center shopping mall",
    "target": "Helsinki Outlet",
    "strength": 2
  },
  {
    "source": "Rosa Center shopping mall",
    "target": "Chatty Bench Project: Radical Media Architecture in Precarious Times",
    "strength": 2
  },
  {
    "source": "Rosa Center shopping mall",
    "target": "Sleepers of Haslev",
    "strength": 2
  },
  {
    "source": "Rosa Center shopping mall",
    "target": "La Lune Est' / 'The Moon Is'",
    "strength": 2
  },
  {
    "source": "Rosa Center shopping mall",
    "target": "PO�ME D'�CRAN' / 'SCREEN POEM'",
    "strength": 2
  },
  {
    "source": "Rosa Center shopping mall",
    "target": "[ i miss your touch ] by PluginHUMAN.",
    "strength": 2
  },
  {
    "source": "Rosa Center shopping mall",
    "target": "Inhibition",
    "strength": 2
  },
  {
    "source": "Rosa Center shopping mall",
    "target": "Walk Walk Dance",
    "strength": 2
  },
  {
    "source": "XII Porcelanosa architecture and interior design awards",
    "target": "Data Eye of Wangjing",
    "strength": 2
  },
  {
    "source": "XII Porcelanosa architecture and interior design awards",
    "target": "LAN - 4",
    "strength": 2
  },
  {
    "source": "XII Porcelanosa architecture and interior design awards",
    "target": "Maanaviat (spirituality)",
    "strength": 2
  },
  {
    "source": "XII Porcelanosa architecture and interior design awards",
    "target": "Son et Culinaire",
    "strength": 2
  },
  {
    "source": "XII Porcelanosa architecture and interior design awards",
    "target": "Shenzhen Planning Exhibition",
    "strength": 2
  },
  {
    "source": "XII Porcelanosa architecture and interior design awards",
    "target": "FUTURE VISION LAB",
    "strength": 2
  },
  {
    "source": "XII Porcelanosa architecture and interior design awards",
    "target": "Interactive Media Sculpture \"The Tree of Knowledge",
    "strength": 2
  },
  {
    "source": "XII Porcelanosa architecture and interior design awards",
    "target": "Interactive application Dolphins Creator",
    "strength": 2
  },
  {
    "source": "XII Porcelanosa architecture and interior design awards",
    "target": "Architectural and Decorative Lighting of Freedom Square in Mariupol",
    "strength": 2
  },
  {
    "source": "XII Porcelanosa architecture and interior design awards",
    "target": "Interactive Screen on the Boulevard of arts",
    "strength": 2
  },
  {
    "source": "XII Porcelanosa architecture and interior design awards",
    "target": "Lighting for Boulevard of Arts",
    "strength": 2
  },
  {
    "source": "XII Porcelanosa architecture and interior design awards",
    "target": "REQUIEM",
    "strength": 2
  },
  {
    "source": "XII Porcelanosa architecture and interior design awards",
    "target": "SP_Urban Arte Conecta",
    "strength": 2
  },
  {
    "source": "XII Porcelanosa architecture and interior design awards",
    "target": "MAX CENTER",
    "strength": 2
  },
  {
    "source": "XII Porcelanosa architecture and interior design awards",
    "target": "Between Waves",
    "strength": 2
  },
  {
    "source": "XII Porcelanosa architecture and interior design awards",
    "target": "Dnipro Light Flower",
    "strength": 2
  },
  {
    "source": "XII Porcelanosa architecture and interior design awards",
    "target": "Hamaja",
    "strength": 2
  },
  {
    "source": "XII Porcelanosa architecture and interior design awards",
    "target": "LEVENSLICHT",
    "strength": 2
  },
  {
    "source": "XII Porcelanosa architecture and interior design awards",
    "target": "Window into the Seas",
    "strength": 2
  },
  {
    "source": "XII Porcelanosa architecture and interior design awards",
    "target": "Touching Night Skies 50°06'44\"N 8°40'36\"E",
    "strength": 2
  },
  {
    "source": "XII Porcelanosa architecture and interior design awards",
    "target": "The Webster - Narrative Lighting Wall",
    "strength": 2
  },
  {
    "source": "XII Porcelanosa architecture and interior design awards",
    "target": "Still Light",
    "strength": 2
  },
  {
    "source": "XII Porcelanosa architecture and interior design awards",
    "target": "Para Social",
    "strength": 2
  },
  {
    "source": "XII Porcelanosa architecture and interior design awards",
    "target": "Digital Phyllotaxy",
    "strength": 2
  },
  {
    "source": "XII Porcelanosa architecture and interior design awards",
    "target": "ANTopolis",
    "strength": 2
  },
  {
    "source": "XII Porcelanosa architecture and interior design awards",
    "target": "Helsinki Outlet",
    "strength": 2
  },
  {
    "source": "XII Porcelanosa architecture and interior design awards",
    "target": "Chatty Bench Project: Radical Media Architecture in Precarious Times",
    "strength": 2
  },
  {
    "source": "XII Porcelanosa architecture and interior design awards",
    "target": "Sleepers of Haslev",
    "strength": 2
  },
  {
    "source": "XII Porcelanosa architecture and interior design awards",
    "target": "La Lune Est' / 'The Moon Is'",
    "strength": 2
  },
  {
    "source": "XII Porcelanosa architecture and interior design awards",
    "target": "PO�ME D'�CRAN' / 'SCREEN POEM'",
    "strength": 2
  },
  {
    "source": "XII Porcelanosa architecture and interior design awards",
    "target": "[ i miss your touch ] by PluginHUMAN.",
    "strength": 2
  },
  {
    "source": "XII Porcelanosa architecture and interior design awards",
    "target": "Inhibition",
    "strength": 2
  },
  {
    "source": "XII Porcelanosa architecture and interior design awards",
    "target": "Walk Walk Dance",
    "strength": 2
  },
  {
    "source": "Data Eye of Wangjing",
    "target": "LAN - 4",
    "strength": 2
  },
  {
    "source": "Data Eye of Wangjing",
    "target": "Maanaviat (spirituality)",
    "strength": 2
  },
  {
    "source": "Data Eye of Wangjing",
    "target": "Son et Culinaire",
    "strength": 2
  },
  {
    "source": "Data Eye of Wangjing",
    "target": "Shenzhen Planning Exhibition",
    "strength": 2
  },
  {
    "source": "Data Eye of Wangjing",
    "target": "FUTURE VISION LAB",
    "strength": 2
  },
  {
    "source": "Data Eye of Wangjing",
    "target": "Interactive Media Sculpture \"The Tree of Knowledge",
    "strength": 2
  },
  {
    "source": "Data Eye of Wangjing",
    "target": "Interactive application Dolphins Creator",
    "strength": 2
  },
  {
    "source": "Data Eye of Wangjing",
    "target": "Architectural and Decorative Lighting of Freedom Square in Mariupol",
    "strength": 2
  },
  {
    "source": "Data Eye of Wangjing",
    "target": "Interactive Screen on the Boulevard of arts",
    "strength": 2
  },
  {
    "source": "Data Eye of Wangjing",
    "target": "Lighting for Boulevard of Arts",
    "strength": 2
  },
  {
    "source": "Data Eye of Wangjing",
    "target": "REQUIEM",
    "strength": 2
  },
  {
    "source": "Data Eye of Wangjing",
    "target": "SP_Urban Arte Conecta",
    "strength": 2
  },
  {
    "source": "Data Eye of Wangjing",
    "target": "MAX CENTER",
    "strength": 2
  },
  {
    "source": "Data Eye of Wangjing",
    "target": "Between Waves",
    "strength": 2
  },
  {
    "source": "Data Eye of Wangjing",
    "target": "Dnipro Light Flower",
    "strength": 2
  },
  {
    "source": "Data Eye of Wangjing",
    "target": "Hamaja",
    "strength": 2
  },
  {
    "source": "Data Eye of Wangjing",
    "target": "LEVENSLICHT",
    "strength": 2
  },
  {
    "source": "Data Eye of Wangjing",
    "target": "Window into the Seas",
    "strength": 2
  },
  {
    "source": "Data Eye of Wangjing",
    "target": "Touching Night Skies 50°06'44\"N 8°40'36\"E",
    "strength": 2
  },
  {
    "source": "Data Eye of Wangjing",
    "target": "The Webster - Narrative Lighting Wall",
    "strength": 2
  },
  {
    "source": "Data Eye of Wangjing",
    "target": "Still Light",
    "strength": 2
  },
  {
    "source": "Data Eye of Wangjing",
    "target": "Para Social",
    "strength": 2
  },
  {
    "source": "Data Eye of Wangjing",
    "target": "Digital Phyllotaxy",
    "strength": 2
  },
  {
    "source": "Data Eye of Wangjing",
    "target": "ANTopolis",
    "strength": 2
  },
  {
    "source": "Data Eye of Wangjing",
    "target": "Helsinki Outlet",
    "strength": 2
  },
  {
    "source": "Data Eye of Wangjing",
    "target": "Chatty Bench Project: Radical Media Architecture in Precarious Times",
    "strength": 2
  },
  {
    "source": "Data Eye of Wangjing",
    "target": "Sleepers of Haslev",
    "strength": 2
  },
  {
    "source": "Data Eye of Wangjing",
    "target": "La Lune Est' / 'The Moon Is'",
    "strength": 2
  },
  {
    "source": "Data Eye of Wangjing",
    "target": "PO�ME D'�CRAN' / 'SCREEN POEM'",
    "strength": 2
  },
  {
    "source": "Data Eye of Wangjing",
    "target": "[ i miss your touch ] by PluginHUMAN.",
    "strength": 2
  },
  {
    "source": "Data Eye of Wangjing",
    "target": "Inhibition",
    "strength": 2
  },
  {
    "source": "Data Eye of Wangjing",
    "target": "Walk Walk Dance",
    "strength": 2
  },
  {
    "source": "Simple Sensors",
    "target": "Community Engagement through Augmented Reality - Curiocity Brisbane",
    "strength": 2
  },
  {
    "source": "Simple Sensors",
    "target": "Sunscriber",
    "strength": 2
  },
  {
    "source": "Simple Sensors",
    "target": "Hearing From You",
    "strength": 2
  },
  {
    "source": "Simple Sensors",
    "target": "Spatial Animacy",
    "strength": 2
  },
  {
    "source": "Simple Sensors",
    "target": "Loom Light",
    "strength": 2
  },
  {
    "source": "Simple Sensors",
    "target": "atmospheric spaces",
    "strength": 2
  },
  {
    "source": "Simple Sensors",
    "target": "Optical Footprint",
    "strength": 2
  },
  {
    "source": "Simple Sensors",
    "target": "Spectator and Spectacle",
    "strength": 2
  },
  {
    "source": "Simple Sensors",
    "target": "Urban Sun",
    "strength": 2
  },
  {
    "source": "Simple Sensors",
    "target": "Bahrain International Circuit",
    "strength": 2
  },
  {
    "source": "Simple Sensors",
    "target": "Guerrilha projections against Bolsonaro",
    "strength": 2
  },
  {
    "source": "Simple Sensors",
    "target": "M+ Facade",
    "strength": 2
  },
  {
    "source": "Simple Sensors",
    "target": "Peter Jones & Partners",
    "strength": 2
  },
  {
    "source": "Simple Sensors",
    "target": "Chatty Bench Festival Community Media Visual Projections",
    "strength": 2
  },
  {
    "source": "Simple Sensors",
    "target": "Greetings from Everywhere",
    "strength": 2
  },
  {
    "source": "Simple Sensors",
    "target": "Wandering Corners",
    "strength": 2
  },
  {
    "source": "Simple Sensors",
    "target": "High Speed Relations",
    "strength": 2
  },
  {
    "source": "Simple Sensors",
    "target": "Sunscriber",
    "strength": 2
  },
  {
    "source": "Simple Sensors",
    "target": "The Digital Bricks",
    "strength": 2
  },
  {
    "source": "Simple Sensors",
    "target": "Shuttercam",
    "strength": 2
  },
  {
    "source": "LAN - 4",
    "target": "Maanaviat (spirituality)",
    "strength": 2
  },
  {
    "source": "LAN - 4",
    "target": "Son et Culinaire",
    "strength": 2
  },
  {
    "source": "LAN - 4",
    "target": "Shenzhen Planning Exhibition",
    "strength": 2
  },
  {
    "source": "LAN - 4",
    "target": "FUTURE VISION LAB",
    "strength": 2
  },
  {
    "source": "LAN - 4",
    "target": "Interactive Media Sculpture \"The Tree of Knowledge",
    "strength": 2
  },
  {
    "source": "LAN - 4",
    "target": "Interactive application Dolphins Creator",
    "strength": 2
  },
  {
    "source": "LAN - 4",
    "target": "Architectural and Decorative Lighting of Freedom Square in Mariupol",
    "strength": 2
  },
  {
    "source": "LAN - 4",
    "target": "Interactive Screen on the Boulevard of arts",
    "strength": 2
  },
  {
    "source": "LAN - 4",
    "target": "Lighting for Boulevard of Arts",
    "strength": 2
  },
  {
    "source": "LAN - 4",
    "target": "REQUIEM",
    "strength": 2
  },
  {
    "source": "LAN - 4",
    "target": "SP_Urban Arte Conecta",
    "strength": 2
  },
  {
    "source": "LAN - 4",
    "target": "MAX CENTER",
    "strength": 2
  },
  {
    "source": "LAN - 4",
    "target": "Between Waves",
    "strength": 2
  },
  {
    "source": "LAN - 4",
    "target": "Dnipro Light Flower",
    "strength": 2
  },
  {
    "source": "LAN - 4",
    "target": "Hamaja",
    "strength": 2
  },
  {
    "source": "LAN - 4",
    "target": "LEVENSLICHT",
    "strength": 2
  },
  {
    "source": "LAN - 4",
    "target": "Window into the Seas",
    "strength": 2
  },
  {
    "source": "LAN - 4",
    "target": "Touching Night Skies 50°06'44\"N 8°40'36\"E",
    "strength": 2
  },
  {
    "source": "LAN - 4",
    "target": "The Webster - Narrative Lighting Wall",
    "strength": 2
  },
  {
    "source": "LAN - 4",
    "target": "Still Light",
    "strength": 2
  },
  {
    "source": "LAN - 4",
    "target": "Para Social",
    "strength": 2
  },
  {
    "source": "LAN - 4",
    "target": "Digital Phyllotaxy",
    "strength": 2
  },
  {
    "source": "LAN - 4",
    "target": "ANTopolis",
    "strength": 2
  },
  {
    "source": "LAN - 4",
    "target": "Helsinki Outlet",
    "strength": 2
  },
  {
    "source": "LAN - 4",
    "target": "Chatty Bench Project: Radical Media Architecture in Precarious Times",
    "strength": 2
  },
  {
    "source": "LAN - 4",
    "target": "Sleepers of Haslev",
    "strength": 2
  },
  {
    "source": "LAN - 4",
    "target": "La Lune Est' / 'The Moon Is'",
    "strength": 2
  },
  {
    "source": "LAN - 4",
    "target": "PO�ME D'�CRAN' / 'SCREEN POEM'",
    "strength": 2
  },
  {
    "source": "LAN - 4",
    "target": "[ i miss your touch ] by PluginHUMAN.",
    "strength": 2
  },
  {
    "source": "LAN - 4",
    "target": "Inhibition",
    "strength": 2
  },
  {
    "source": "LAN - 4",
    "target": "Walk Walk Dance",
    "strength": 2
  },
  {
    "source": "DAZZLE | San Diego International Airport",
    "target": "TIETO HQ",
    "strength": 2
  },
  {
    "source": "DAZZLE | San Diego International Airport",
    "target": "INTERACTIVE CLOUD",
    "strength": 2
  },
  {
    "source": "DAZZLE | San Diego International Airport",
    "target": "Plant a Light",
    "strength": 2
  },
  {
    "source": "DAZZLE | San Diego International Airport",
    "target": "ARCHIVE DREAMING",
    "strength": 2
  },
  {
    "source": "DAZZLE | San Diego International Airport",
    "target": "LightSpell",
    "strength": 2
  },
  {
    "source": "DAZZLE | San Diego International Airport",
    "target": "Kipnes Lantern",
    "strength": 2
  },
  {
    "source": "DAZZLE | San Diego International Airport",
    "target": "Salling Lights",
    "strength": 2
  },
  {
    "source": "DAZZLE | San Diego International Airport",
    "target": "Digital Calligraffiti",
    "strength": 2
  },
  {
    "source": "DAZZLE | San Diego International Airport",
    "target": "Digital neighbourhood",
    "strength": 2
  },
  {
    "source": "DAZZLE | San Diego International Airport",
    "target": "Chave do Centro or \"The Key to Downtown",
    "strength": 2
  },
  {
    "source": "DAZZLE | San Diego International Airport",
    "target": "The Playground",
    "strength": 2
  },
  {
    "source": "Maanaviat (spirituality)",
    "target": "Son et Culinaire",
    "strength": 2
  },
  {
    "source": "Maanaviat (spirituality)",
    "target": "Shenzhen Planning Exhibition",
    "strength": 2
  },
  {
    "source": "Maanaviat (spirituality)",
    "target": "FUTURE VISION LAB",
    "strength": 2
  },
  {
    "source": "Maanaviat (spirituality)",
    "target": "Interactive Media Sculpture \"The Tree of Knowledge",
    "strength": 2
  },
  {
    "source": "Maanaviat (spirituality)",
    "target": "Interactive application Dolphins Creator",
    "strength": 2
  },
  {
    "source": "Maanaviat (spirituality)",
    "target": "Architectural and Decorative Lighting of Freedom Square in Mariupol",
    "strength": 2
  },
  {
    "source": "Maanaviat (spirituality)",
    "target": "Interactive Screen on the Boulevard of arts",
    "strength": 2
  },
  {
    "source": "Maanaviat (spirituality)",
    "target": "Lighting for Boulevard of Arts",
    "strength": 2
  },
  {
    "source": "Maanaviat (spirituality)",
    "target": "REQUIEM",
    "strength": 2
  },
  {
    "source": "Maanaviat (spirituality)",
    "target": "SP_Urban Arte Conecta",
    "strength": 2
  },
  {
    "source": "Maanaviat (spirituality)",
    "target": "MAX CENTER",
    "strength": 2
  },
  {
    "source": "Maanaviat (spirituality)",
    "target": "Between Waves",
    "strength": 2
  },
  {
    "source": "Maanaviat (spirituality)",
    "target": "Dnipro Light Flower",
    "strength": 2
  },
  {
    "source": "Maanaviat (spirituality)",
    "target": "Hamaja",
    "strength": 2
  },
  {
    "source": "Maanaviat (spirituality)",
    "target": "LEVENSLICHT",
    "strength": 2
  },
  {
    "source": "Maanaviat (spirituality)",
    "target": "Window into the Seas",
    "strength": 2
  },
  {
    "source": "Maanaviat (spirituality)",
    "target": "Touching Night Skies 50°06'44\"N 8°40'36\"E",
    "strength": 2
  },
  {
    "source": "Maanaviat (spirituality)",
    "target": "The Webster - Narrative Lighting Wall",
    "strength": 2
  },
  {
    "source": "Maanaviat (spirituality)",
    "target": "Still Light",
    "strength": 2
  },
  {
    "source": "Maanaviat (spirituality)",
    "target": "Para Social",
    "strength": 2
  },
  {
    "source": "Maanaviat (spirituality)",
    "target": "Digital Phyllotaxy",
    "strength": 2
  },
  {
    "source": "Maanaviat (spirituality)",
    "target": "ANTopolis",
    "strength": 2
  },
  {
    "source": "Maanaviat (spirituality)",
    "target": "Helsinki Outlet",
    "strength": 2
  },
  {
    "source": "Maanaviat (spirituality)",
    "target": "Chatty Bench Project: Radical Media Architecture in Precarious Times",
    "strength": 2
  },
  {
    "source": "Maanaviat (spirituality)",
    "target": "Sleepers of Haslev",
    "strength": 2
  },
  {
    "source": "Maanaviat (spirituality)",
    "target": "La Lune Est' / 'The Moon Is'",
    "strength": 2
  },
  {
    "source": "Maanaviat (spirituality)",
    "target": "PO�ME D'�CRAN' / 'SCREEN POEM'",
    "strength": 2
  },
  {
    "source": "Maanaviat (spirituality)",
    "target": "[ i miss your touch ] by PluginHUMAN.",
    "strength": 2
  },
  {
    "source": "Maanaviat (spirituality)",
    "target": "Inhibition",
    "strength": 2
  },
  {
    "source": "Maanaviat (spirituality)",
    "target": "Walk Walk Dance",
    "strength": 2
  },
  {
    "source": "building dawn",
    "target": "Radisson BLU Scandinavia",
    "strength": 2
  },
  {
    "source": "building dawn",
    "target": "Preservation of Silence",
    "strength": 2
  },
  {
    "source": "building dawn",
    "target": "Variegation Index",
    "strength": 2
  },
  {
    "source": "building dawn",
    "target": "Shadow Wall",
    "strength": 2
  },
  {
    "source": "building dawn",
    "target": "Woodie",
    "strength": 2
  },
  {
    "source": "building dawn",
    "target": "Aukio",
    "strength": 2
  },
  {
    "source": "building dawn",
    "target": "Light art installation Beacon",
    "strength": 2
  },
  {
    "source": "building dawn",
    "target": "Star Hunters",
    "strength": 2
  },
  {
    "source": "building dawn",
    "target": "Catholic Church of St. Nicholas",
    "strength": 2
  },
  {
    "source": "building dawn",
    "target": "Interactive Media Sculpture The Cube",
    "strength": 2
  },
  {
    "source": "building dawn",
    "target": "Lighting for the Tetris Hall Residential Complex",
    "strength": 2
  },
  {
    "source": "building dawn",
    "target": "The 4th Street SW Underpass Enhancement Project",
    "strength": 2
  },
  {
    "source": "building dawn",
    "target": "The Pearl Divers",
    "strength": 2
  },
  {
    "source": "building dawn",
    "target": "Landscapes of Dreams",
    "strength": 2
  },
  {
    "source": "building dawn",
    "target": "MAGIC MIRROR",
    "strength": 2
  },
  {
    "source": "building dawn",
    "target": "The Pipes",
    "strength": 2
  },
  {
    "source": "building dawn",
    "target": "Wervel [Turmoil]",
    "strength": 2
  },
  {
    "source": "building dawn",
    "target": "All Colors Are In The Lights",
    "strength": 2
  },
  {
    "source": "building dawn",
    "target": "La Sprite",
    "strength": 2
  },
  {
    "source": "building dawn",
    "target": "PASSAGES",
    "strength": 2
  },
  {
    "source": "building dawn",
    "target": "Wuhan Optics Valley Square Complex Theme Ground Sculpture",
    "strength": 2
  },
  {
    "source": "building dawn",
    "target": "Stadt der Temperamente",
    "strength": 2
  },
  {
    "source": "building dawn",
    "target": "Citizen Dialog Kit",
    "strength": 2
  },
  {
    "source": "Community Engagement through Augmented Reality - Curiocity Brisbane",
    "target": "Sunscriber",
    "strength": 2
  },
  {
    "source": "Community Engagement through Augmented Reality - Curiocity Brisbane",
    "target": "Hearing From You",
    "strength": 2
  },
  {
    "source": "Community Engagement through Augmented Reality - Curiocity Brisbane",
    "target": "Spatial Animacy",
    "strength": 2
  },
  {
    "source": "Community Engagement through Augmented Reality - Curiocity Brisbane",
    "target": "Loom Light",
    "strength": 2
  },
  {
    "source": "Community Engagement through Augmented Reality - Curiocity Brisbane",
    "target": "atmospheric spaces",
    "strength": 2
  },
  {
    "source": "Community Engagement through Augmented Reality - Curiocity Brisbane",
    "target": "Optical Footprint",
    "strength": 2
  },
  {
    "source": "Community Engagement through Augmented Reality - Curiocity Brisbane",
    "target": "Spectator and Spectacle",
    "strength": 2
  },
  {
    "source": "Community Engagement through Augmented Reality - Curiocity Brisbane",
    "target": "Urban Sun",
    "strength": 2
  },
  {
    "source": "Community Engagement through Augmented Reality - Curiocity Brisbane",
    "target": "Bahrain International Circuit",
    "strength": 2
  },
  {
    "source": "Community Engagement through Augmented Reality - Curiocity Brisbane",
    "target": "Guerrilha projections against Bolsonaro",
    "strength": 2
  },
  {
    "source": "Community Engagement through Augmented Reality - Curiocity Brisbane",
    "target": "M+ Facade",
    "strength": 2
  },
  {
    "source": "Community Engagement through Augmented Reality - Curiocity Brisbane",
    "target": "Peter Jones & Partners",
    "strength": 2
  },
  {
    "source": "Community Engagement through Augmented Reality - Curiocity Brisbane",
    "target": "Chatty Bench Festival Community Media Visual Projections",
    "strength": 2
  },
  {
    "source": "Community Engagement through Augmented Reality - Curiocity Brisbane",
    "target": "Greetings from Everywhere",
    "strength": 2
  },
  {
    "source": "Community Engagement through Augmented Reality - Curiocity Brisbane",
    "target": "Wandering Corners",
    "strength": 2
  },
  {
    "source": "Community Engagement through Augmented Reality - Curiocity Brisbane",
    "target": "High Speed Relations",
    "strength": 2
  },
  {
    "source": "Community Engagement through Augmented Reality - Curiocity Brisbane",
    "target": "Sunscriber",
    "strength": 2
  },
  {
    "source": "Community Engagement through Augmented Reality - Curiocity Brisbane",
    "target": "The Digital Bricks",
    "strength": 2
  },
  {
    "source": "Community Engagement through Augmented Reality - Curiocity Brisbane",
    "target": "Shuttercam",
    "strength": 2
  },
  {
    "source": "Son et Culinaire",
    "target": "Shenzhen Planning Exhibition",
    "strength": 2
  },
  {
    "source": "Son et Culinaire",
    "target": "FUTURE VISION LAB",
    "strength": 2
  },
  {
    "source": "Son et Culinaire",
    "target": "Interactive Media Sculpture \"The Tree of Knowledge",
    "strength": 2
  },
  {
    "source": "Son et Culinaire",
    "target": "Interactive application Dolphins Creator",
    "strength": 2
  },
  {
    "source": "Son et Culinaire",
    "target": "Architectural and Decorative Lighting of Freedom Square in Mariupol",
    "strength": 2
  },
  {
    "source": "Son et Culinaire",
    "target": "Interactive Screen on the Boulevard of arts",
    "strength": 2
  },
  {
    "source": "Son et Culinaire",
    "target": "Lighting for Boulevard of Arts",
    "strength": 2
  },
  {
    "source": "Son et Culinaire",
    "target": "REQUIEM",
    "strength": 2
  },
  {
    "source": "Son et Culinaire",
    "target": "SP_Urban Arte Conecta",
    "strength": 2
  },
  {
    "source": "Son et Culinaire",
    "target": "MAX CENTER",
    "strength": 2
  },
  {
    "source": "Son et Culinaire",
    "target": "Between Waves",
    "strength": 2
  },
  {
    "source": "Son et Culinaire",
    "target": "Dnipro Light Flower",
    "strength": 2
  },
  {
    "source": "Son et Culinaire",
    "target": "Hamaja",
    "strength": 2
  },
  {
    "source": "Son et Culinaire",
    "target": "LEVENSLICHT",
    "strength": 2
  },
  {
    "source": "Son et Culinaire",
    "target": "Window into the Seas",
    "strength": 2
  },
  {
    "source": "Son et Culinaire",
    "target": "Touching Night Skies 50°06'44\"N 8°40'36\"E",
    "strength": 2
  },
  {
    "source": "Son et Culinaire",
    "target": "The Webster - Narrative Lighting Wall",
    "strength": 2
  },
  {
    "source": "Son et Culinaire",
    "target": "Still Light",
    "strength": 2
  },
  {
    "source": "Son et Culinaire",
    "target": "Para Social",
    "strength": 2
  },
  {
    "source": "Son et Culinaire",
    "target": "Digital Phyllotaxy",
    "strength": 2
  },
  {
    "source": "Son et Culinaire",
    "target": "ANTopolis",
    "strength": 2
  },
  {
    "source": "Son et Culinaire",
    "target": "Helsinki Outlet",
    "strength": 2
  },
  {
    "source": "Son et Culinaire",
    "target": "Chatty Bench Project: Radical Media Architecture in Precarious Times",
    "strength": 2
  },
  {
    "source": "Son et Culinaire",
    "target": "Sleepers of Haslev",
    "strength": 2
  },
  {
    "source": "Son et Culinaire",
    "target": "La Lune Est' / 'The Moon Is'",
    "strength": 2
  },
  {
    "source": "Son et Culinaire",
    "target": "PO�ME D'�CRAN' / 'SCREEN POEM'",
    "strength": 2
  },
  {
    "source": "Son et Culinaire",
    "target": "[ i miss your touch ] by PluginHUMAN.",
    "strength": 2
  },
  {
    "source": "Son et Culinaire",
    "target": "Inhibition",
    "strength": 2
  },
  {
    "source": "Son et Culinaire",
    "target": "Walk Walk Dance",
    "strength": 2
  },
  {
    "source": "Radisson BLU Scandinavia",
    "target": "Preservation of Silence",
    "strength": 2
  },
  {
    "source": "Radisson BLU Scandinavia",
    "target": "Variegation Index",
    "strength": 2
  },
  {
    "source": "Radisson BLU Scandinavia",
    "target": "Shadow Wall",
    "strength": 2
  },
  {
    "source": "Radisson BLU Scandinavia",
    "target": "Woodie",
    "strength": 2
  },
  {
    "source": "Radisson BLU Scandinavia",
    "target": "Aukio",
    "strength": 2
  },
  {
    "source": "Radisson BLU Scandinavia",
    "target": "Light art installation Beacon",
    "strength": 2
  },
  {
    "source": "Radisson BLU Scandinavia",
    "target": "Star Hunters",
    "strength": 2
  },
  {
    "source": "Radisson BLU Scandinavia",
    "target": "Catholic Church of St. Nicholas",
    "strength": 2
  },
  {
    "source": "Radisson BLU Scandinavia",
    "target": "Interactive Media Sculpture The Cube",
    "strength": 2
  },
  {
    "source": "Radisson BLU Scandinavia",
    "target": "Lighting for the Tetris Hall Residential Complex",
    "strength": 2
  },
  {
    "source": "Radisson BLU Scandinavia",
    "target": "The 4th Street SW Underpass Enhancement Project",
    "strength": 2
  },
  {
    "source": "Radisson BLU Scandinavia",
    "target": "The Pearl Divers",
    "strength": 2
  },
  {
    "source": "Radisson BLU Scandinavia",
    "target": "Landscapes of Dreams",
    "strength": 2
  },
  {
    "source": "Radisson BLU Scandinavia",
    "target": "MAGIC MIRROR",
    "strength": 2
  },
  {
    "source": "Radisson BLU Scandinavia",
    "target": "The Pipes",
    "strength": 2
  },
  {
    "source": "Radisson BLU Scandinavia",
    "target": "Wervel [Turmoil]",
    "strength": 2
  },
  {
    "source": "Radisson BLU Scandinavia",
    "target": "All Colors Are In The Lights",
    "strength": 2
  },
  {
    "source": "Radisson BLU Scandinavia",
    "target": "La Sprite",
    "strength": 2
  },
  {
    "source": "Radisson BLU Scandinavia",
    "target": "PASSAGES",
    "strength": 2
  },
  {
    "source": "Radisson BLU Scandinavia",
    "target": "Wuhan Optics Valley Square Complex Theme Ground Sculpture",
    "strength": 2
  },
  {
    "source": "Radisson BLU Scandinavia",
    "target": "Stadt der Temperamente",
    "strength": 2
  },
  {
    "source": "Radisson BLU Scandinavia",
    "target": "Citizen Dialog Kit",
    "strength": 2
  },
  {
    "source": "Shenzhen Planning Exhibition",
    "target": "FUTURE VISION LAB",
    "strength": 2
  },
  {
    "source": "Shenzhen Planning Exhibition",
    "target": "Interactive Media Sculpture \"The Tree of Knowledge",
    "strength": 2
  },
  {
    "source": "Shenzhen Planning Exhibition",
    "target": "Interactive application Dolphins Creator",
    "strength": 2
  },
  {
    "source": "Shenzhen Planning Exhibition",
    "target": "Architectural and Decorative Lighting of Freedom Square in Mariupol",
    "strength": 2
  },
  {
    "source": "Shenzhen Planning Exhibition",
    "target": "Interactive Screen on the Boulevard of arts",
    "strength": 2
  },
  {
    "source": "Shenzhen Planning Exhibition",
    "target": "Lighting for Boulevard of Arts",
    "strength": 2
  },
  {
    "source": "Shenzhen Planning Exhibition",
    "target": "REQUIEM",
    "strength": 2
  },
  {
    "source": "Shenzhen Planning Exhibition",
    "target": "SP_Urban Arte Conecta",
    "strength": 2
  },
  {
    "source": "Shenzhen Planning Exhibition",
    "target": "MAX CENTER",
    "strength": 2
  },
  {
    "source": "Shenzhen Planning Exhibition",
    "target": "Between Waves",
    "strength": 2
  },
  {
    "source": "Shenzhen Planning Exhibition",
    "target": "Dnipro Light Flower",
    "strength": 2
  },
  {
    "source": "Shenzhen Planning Exhibition",
    "target": "Hamaja",
    "strength": 2
  },
  {
    "source": "Shenzhen Planning Exhibition",
    "target": "LEVENSLICHT",
    "strength": 2
  },
  {
    "source": "Shenzhen Planning Exhibition",
    "target": "Window into the Seas",
    "strength": 2
  },
  {
    "source": "Shenzhen Planning Exhibition",
    "target": "Touching Night Skies 50°06'44\"N 8°40'36\"E",
    "strength": 2
  },
  {
    "source": "Shenzhen Planning Exhibition",
    "target": "The Webster - Narrative Lighting Wall",
    "strength": 2
  },
  {
    "source": "Shenzhen Planning Exhibition",
    "target": "Still Light",
    "strength": 2
  },
  {
    "source": "Shenzhen Planning Exhibition",
    "target": "Para Social",
    "strength": 2
  },
  {
    "source": "Shenzhen Planning Exhibition",
    "target": "Digital Phyllotaxy",
    "strength": 2
  },
  {
    "source": "Shenzhen Planning Exhibition",
    "target": "ANTopolis",
    "strength": 2
  },
  {
    "source": "Shenzhen Planning Exhibition",
    "target": "Helsinki Outlet",
    "strength": 2
  },
  {
    "source": "Shenzhen Planning Exhibition",
    "target": "Chatty Bench Project: Radical Media Architecture in Precarious Times",
    "strength": 2
  },
  {
    "source": "Shenzhen Planning Exhibition",
    "target": "Sleepers of Haslev",
    "strength": 2
  },
  {
    "source": "Shenzhen Planning Exhibition",
    "target": "La Lune Est' / 'The Moon Is'",
    "strength": 2
  },
  {
    "source": "Shenzhen Planning Exhibition",
    "target": "PO�ME D'�CRAN' / 'SCREEN POEM'",
    "strength": 2
  },
  {
    "source": "Shenzhen Planning Exhibition",
    "target": "[ i miss your touch ] by PluginHUMAN.",
    "strength": 2
  },
  {
    "source": "Shenzhen Planning Exhibition",
    "target": "Inhibition",
    "strength": 2
  },
  {
    "source": "Shenzhen Planning Exhibition",
    "target": "Walk Walk Dance",
    "strength": 2
  },
  {
    "source": "AMANDOLIER FA��ADE",
    "target": "The abode of the outside",
    "strength": 2
  },
  {
    "source": "AMANDOLIER FA��ADE",
    "target": "Media architecture cluster Real-scene simulation and design prototype",
    "strength": 2
  },
  {
    "source": "AMANDOLIER FA��ADE",
    "target": "VIRTUAL WALLS - TORRECARDENAS",
    "strength": 2
  },
  {
    "source": "AMANDOLIER FA��ADE",
    "target": "Northside Beacons",
    "strength": 2
  },
  {
    "source": "AMANDOLIER FA��ADE",
    "target": "LightLines",
    "strength": 2
  },
  {
    "source": "AMANDOLIER FA��ADE",
    "target": "Arena",
    "strength": 2
  },
  {
    "source": "AMANDOLIER FA��ADE",
    "target": "Monument Remix",
    "strength": 2
  },
  {
    "source": "AMANDOLIER FA��ADE",
    "target": "Federation Square Digital Canvas",
    "strength": 2
  },
  {
    "source": "AMANDOLIER FA��ADE",
    "target": "Yagan Square",
    "strength": 2
  },
  {
    "source": "AMANDOLIER FA��ADE",
    "target": "Smog Free Project",
    "strength": 2
  },
  {
    "source": "AMANDOLIER FA��ADE",
    "target": "BioLumen",
    "strength": 2
  },
  {
    "source": "AMANDOLIER FA��ADE",
    "target": "Yellow Dust",
    "strength": 2
  },
  {
    "source": "AMANDOLIER FA��ADE",
    "target": "Dragon Scale",
    "strength": 2
  },
  {
    "source": "AMANDOLIER FA��ADE",
    "target": "Gibigiana",
    "strength": 2
  },
  {
    "source": "TIETO HQ",
    "target": "INTERACTIVE CLOUD",
    "strength": 2
  },
  {
    "source": "TIETO HQ",
    "target": "Plant a Light",
    "strength": 2
  },
  {
    "source": "TIETO HQ",
    "target": "ARCHIVE DREAMING",
    "strength": 2
  },
  {
    "source": "TIETO HQ",
    "target": "LightSpell",
    "strength": 2
  },
  {
    "source": "TIETO HQ",
    "target": "Kipnes Lantern",
    "strength": 2
  },
  {
    "source": "TIETO HQ",
    "target": "Salling Lights",
    "strength": 2
  },
  {
    "source": "TIETO HQ",
    "target": "Digital Calligraffiti",
    "strength": 2
  },
  {
    "source": "TIETO HQ",
    "target": "Digital neighbourhood",
    "strength": 2
  },
  {
    "source": "TIETO HQ",
    "target": "Chave do Centro or \"The Key to Downtown",
    "strength": 2
  },
  {
    "source": "TIETO HQ",
    "target": "The Playground",
    "strength": 2
  },
  {
    "source": "Sunscriber",
    "target": "Hearing From You",
    "strength": 2
  },
  {
    "source": "Sunscriber",
    "target": "Spatial Animacy",
    "strength": 2
  },
  {
    "source": "Sunscriber",
    "target": "Loom Light",
    "strength": 2
  },
  {
    "source": "Sunscriber",
    "target": "atmospheric spaces",
    "strength": 2
  },
  {
    "source": "Sunscriber",
    "target": "Optical Footprint",
    "strength": 2
  },
  {
    "source": "Sunscriber",
    "target": "Spectator and Spectacle",
    "strength": 2
  },
  {
    "source": "Sunscriber",
    "target": "Urban Sun",
    "strength": 2
  },
  {
    "source": "Sunscriber",
    "target": "Bahrain International Circuit",
    "strength": 2
  },
  {
    "source": "Sunscriber",
    "target": "Guerrilha projections against Bolsonaro",
    "strength": 2
  },
  {
    "source": "Sunscriber",
    "target": "M+ Facade",
    "strength": 2
  },
  {
    "source": "Sunscriber",
    "target": "Peter Jones & Partners",
    "strength": 2
  },
  {
    "source": "Sunscriber",
    "target": "Chatty Bench Festival Community Media Visual Projections",
    "strength": 2
  },
  {
    "source": "Sunscriber",
    "target": "Greetings from Everywhere",
    "strength": 2
  },
  {
    "source": "Sunscriber",
    "target": "Wandering Corners",
    "strength": 2
  },
  {
    "source": "Sunscriber",
    "target": "High Speed Relations",
    "strength": 2
  },
  {
    "source": "Sunscriber",
    "target": "Sunscriber",
    "strength": 2
  },
  {
    "source": "Sunscriber",
    "target": "The Digital Bricks",
    "strength": 2
  },
  {
    "source": "Sunscriber",
    "target": "Shuttercam",
    "strength": 2
  },
  {
    "source": "Preservation of Silence",
    "target": "Variegation Index",
    "strength": 2
  },
  {
    "source": "Preservation of Silence",
    "target": "Shadow Wall",
    "strength": 2
  },
  {
    "source": "Preservation of Silence",
    "target": "Woodie",
    "strength": 2
  },
  {
    "source": "Preservation of Silence",
    "target": "Aukio",
    "strength": 2
  },
  {
    "source": "Preservation of Silence",
    "target": "Light art installation Beacon",
    "strength": 2
  },
  {
    "source": "Preservation of Silence",
    "target": "Star Hunters",
    "strength": 2
  },
  {
    "source": "Preservation of Silence",
    "target": "Catholic Church of St. Nicholas",
    "strength": 2
  },
  {
    "source": "Preservation of Silence",
    "target": "Interactive Media Sculpture The Cube",
    "strength": 2
  },
  {
    "source": "Preservation of Silence",
    "target": "Lighting for the Tetris Hall Residential Complex",
    "strength": 2
  },
  {
    "source": "Preservation of Silence",
    "target": "The 4th Street SW Underpass Enhancement Project",
    "strength": 2
  },
  {
    "source": "Preservation of Silence",
    "target": "The Pearl Divers",
    "strength": 2
  },
  {
    "source": "Preservation of Silence",
    "target": "Landscapes of Dreams",
    "strength": 2
  },
  {
    "source": "Preservation of Silence",
    "target": "MAGIC MIRROR",
    "strength": 2
  },
  {
    "source": "Preservation of Silence",
    "target": "The Pipes",
    "strength": 2
  },
  {
    "source": "Preservation of Silence",
    "target": "Wervel [Turmoil]",
    "strength": 2
  },
  {
    "source": "Preservation of Silence",
    "target": "All Colors Are In The Lights",
    "strength": 2
  },
  {
    "source": "Preservation of Silence",
    "target": "La Sprite",
    "strength": 2
  },
  {
    "source": "Preservation of Silence",
    "target": "PASSAGES",
    "strength": 2
  },
  {
    "source": "Preservation of Silence",
    "target": "Wuhan Optics Valley Square Complex Theme Ground Sculpture",
    "strength": 2
  },
  {
    "source": "Preservation of Silence",
    "target": "Stadt der Temperamente",
    "strength": 2
  },
  {
    "source": "Preservation of Silence",
    "target": "Citizen Dialog Kit",
    "strength": 2
  },
  {
    "source": "The abode of the outside",
    "target": "Media architecture cluster Real-scene simulation and design prototype",
    "strength": 2
  },
  {
    "source": "The abode of the outside",
    "target": "VIRTUAL WALLS - TORRECARDENAS",
    "strength": 2
  },
  {
    "source": "The abode of the outside",
    "target": "Northside Beacons",
    "strength": 2
  },
  {
    "source": "The abode of the outside",
    "target": "LightLines",
    "strength": 2
  },
  {
    "source": "The abode of the outside",
    "target": "Arena",
    "strength": 2
  },
  {
    "source": "The abode of the outside",
    "target": "Monument Remix",
    "strength": 2
  },
  {
    "source": "The abode of the outside",
    "target": "Federation Square Digital Canvas",
    "strength": 2
  },
  {
    "source": "The abode of the outside",
    "target": "Yagan Square",
    "strength": 2
  },
  {
    "source": "The abode of the outside",
    "target": "Smog Free Project",
    "strength": 2
  },
  {
    "source": "The abode of the outside",
    "target": "BioLumen",
    "strength": 2
  },
  {
    "source": "The abode of the outside",
    "target": "Yellow Dust",
    "strength": 2
  },
  {
    "source": "The abode of the outside",
    "target": "Dragon Scale",
    "strength": 2
  },
  {
    "source": "The abode of the outside",
    "target": "Gibigiana",
    "strength": 2
  },
  {
    "source": "Hearing From You",
    "target": "Spatial Animacy",
    "strength": 2
  },
  {
    "source": "Hearing From You",
    "target": "Loom Light",
    "strength": 2
  },
  {
    "source": "Hearing From You",
    "target": "atmospheric spaces",
    "strength": 2
  },
  {
    "source": "Hearing From You",
    "target": "Optical Footprint",
    "strength": 2
  },
  {
    "source": "Hearing From You",
    "target": "Spectator and Spectacle",
    "strength": 2
  },
  {
    "source": "Hearing From You",
    "target": "Urban Sun",
    "strength": 2
  },
  {
    "source": "Hearing From You",
    "target": "Bahrain International Circuit",
    "strength": 2
  },
  {
    "source": "Hearing From You",
    "target": "Guerrilha projections against Bolsonaro",
    "strength": 2
  },
  {
    "source": "Hearing From You",
    "target": "M+ Facade",
    "strength": 2
  },
  {
    "source": "Hearing From You",
    "target": "Peter Jones & Partners",
    "strength": 2
  },
  {
    "source": "Hearing From You",
    "target": "Chatty Bench Festival Community Media Visual Projections",
    "strength": 2
  },
  {
    "source": "Hearing From You",
    "target": "Greetings from Everywhere",
    "strength": 2
  },
  {
    "source": "Hearing From You",
    "target": "Wandering Corners",
    "strength": 2
  },
  {
    "source": "Hearing From You",
    "target": "High Speed Relations",
    "strength": 2
  },
  {
    "source": "Hearing From You",
    "target": "Sunscriber",
    "strength": 2
  },
  {
    "source": "Hearing From You",
    "target": "The Digital Bricks",
    "strength": 2
  },
  {
    "source": "Hearing From You",
    "target": "Shuttercam",
    "strength": 2
  },
  {
    "source": "Variegation Index",
    "target": "Shadow Wall",
    "strength": 2
  },
  {
    "source": "Variegation Index",
    "target": "Woodie",
    "strength": 2
  },
  {
    "source": "Variegation Index",
    "target": "Aukio",
    "strength": 2
  },
  {
    "source": "Variegation Index",
    "target": "Light art installation Beacon",
    "strength": 2
  },
  {
    "source": "Variegation Index",
    "target": "Star Hunters",
    "strength": 2
  },
  {
    "source": "Variegation Index",
    "target": "Catholic Church of St. Nicholas",
    "strength": 2
  },
  {
    "source": "Variegation Index",
    "target": "Interactive Media Sculpture The Cube",
    "strength": 2
  },
  {
    "source": "Variegation Index",
    "target": "Lighting for the Tetris Hall Residential Complex",
    "strength": 2
  },
  {
    "source": "Variegation Index",
    "target": "The 4th Street SW Underpass Enhancement Project",
    "strength": 2
  },
  {
    "source": "Variegation Index",
    "target": "The Pearl Divers",
    "strength": 2
  },
  {
    "source": "Variegation Index",
    "target": "Landscapes of Dreams",
    "strength": 2
  },
  {
    "source": "Variegation Index",
    "target": "MAGIC MIRROR",
    "strength": 2
  },
  {
    "source": "Variegation Index",
    "target": "The Pipes",
    "strength": 2
  },
  {
    "source": "Variegation Index",
    "target": "Wervel [Turmoil]",
    "strength": 2
  },
  {
    "source": "Variegation Index",
    "target": "All Colors Are In The Lights",
    "strength": 2
  },
  {
    "source": "Variegation Index",
    "target": "La Sprite",
    "strength": 2
  },
  {
    "source": "Variegation Index",
    "target": "PASSAGES",
    "strength": 2
  },
  {
    "source": "Variegation Index",
    "target": "Wuhan Optics Valley Square Complex Theme Ground Sculpture",
    "strength": 2
  },
  {
    "source": "Variegation Index",
    "target": "Stadt der Temperamente",
    "strength": 2
  },
  {
    "source": "Variegation Index",
    "target": "Citizen Dialog Kit",
    "strength": 2
  },
  {
    "source": "Shadow Wall",
    "target": "Woodie",
    "strength": 2
  },
  {
    "source": "Shadow Wall",
    "target": "Aukio",
    "strength": 2
  },
  {
    "source": "Shadow Wall",
    "target": "Light art installation Beacon",
    "strength": 2
  },
  {
    "source": "Shadow Wall",
    "target": "Star Hunters",
    "strength": 2
  },
  {
    "source": "Shadow Wall",
    "target": "Catholic Church of St. Nicholas",
    "strength": 2
  },
  {
    "source": "Shadow Wall",
    "target": "Interactive Media Sculpture The Cube",
    "strength": 2
  },
  {
    "source": "Shadow Wall",
    "target": "Lighting for the Tetris Hall Residential Complex",
    "strength": 2
  },
  {
    "source": "Shadow Wall",
    "target": "The 4th Street SW Underpass Enhancement Project",
    "strength": 2
  },
  {
    "source": "Shadow Wall",
    "target": "The Pearl Divers",
    "strength": 2
  },
  {
    "source": "Shadow Wall",
    "target": "Landscapes of Dreams",
    "strength": 2
  },
  {
    "source": "Shadow Wall",
    "target": "MAGIC MIRROR",
    "strength": 2
  },
  {
    "source": "Shadow Wall",
    "target": "The Pipes",
    "strength": 2
  },
  {
    "source": "Shadow Wall",
    "target": "Wervel [Turmoil]",
    "strength": 2
  },
  {
    "source": "Shadow Wall",
    "target": "All Colors Are In The Lights",
    "strength": 2
  },
  {
    "source": "Shadow Wall",
    "target": "La Sprite",
    "strength": 2
  },
  {
    "source": "Shadow Wall",
    "target": "PASSAGES",
    "strength": 2
  },
  {
    "source": "Shadow Wall",
    "target": "Wuhan Optics Valley Square Complex Theme Ground Sculpture",
    "strength": 2
  },
  {
    "source": "Shadow Wall",
    "target": "Stadt der Temperamente",
    "strength": 2
  },
  {
    "source": "Shadow Wall",
    "target": "Citizen Dialog Kit",
    "strength": 2
  },
  {
    "source": "Woodie",
    "target": "Aukio",
    "strength": 2
  },
  {
    "source": "Woodie",
    "target": "Light art installation Beacon",
    "strength": 2
  },
  {
    "source": "Woodie",
    "target": "Star Hunters",
    "strength": 2
  },
  {
    "source": "Woodie",
    "target": "Catholic Church of St. Nicholas",
    "strength": 2
  },
  {
    "source": "Woodie",
    "target": "Interactive Media Sculpture The Cube",
    "strength": 2
  },
  {
    "source": "Woodie",
    "target": "Lighting for the Tetris Hall Residential Complex",
    "strength": 2
  },
  {
    "source": "Woodie",
    "target": "The 4th Street SW Underpass Enhancement Project",
    "strength": 2
  },
  {
    "source": "Woodie",
    "target": "The Pearl Divers",
    "strength": 2
  },
  {
    "source": "Woodie",
    "target": "Landscapes of Dreams",
    "strength": 2
  },
  {
    "source": "Woodie",
    "target": "MAGIC MIRROR",
    "strength": 2
  },
  {
    "source": "Woodie",
    "target": "The Pipes",
    "strength": 2
  },
  {
    "source": "Woodie",
    "target": "Wervel [Turmoil]",
    "strength": 2
  },
  {
    "source": "Woodie",
    "target": "All Colors Are In The Lights",
    "strength": 2
  },
  {
    "source": "Woodie",
    "target": "La Sprite",
    "strength": 2
  },
  {
    "source": "Woodie",
    "target": "PASSAGES",
    "strength": 2
  },
  {
    "source": "Woodie",
    "target": "Wuhan Optics Valley Square Complex Theme Ground Sculpture",
    "strength": 2
  },
  {
    "source": "Woodie",
    "target": "Stadt der Temperamente",
    "strength": 2
  },
  {
    "source": "Woodie",
    "target": "Citizen Dialog Kit",
    "strength": 2
  },
  {
    "source": "FUTURE VISION LAB",
    "target": "Interactive Media Sculpture \"The Tree of Knowledge",
    "strength": 2
  },
  {
    "source": "FUTURE VISION LAB",
    "target": "Interactive application Dolphins Creator",
    "strength": 2
  },
  {
    "source": "FUTURE VISION LAB",
    "target": "Architectural and Decorative Lighting of Freedom Square in Mariupol",
    "strength": 2
  },
  {
    "source": "FUTURE VISION LAB",
    "target": "Interactive Screen on the Boulevard of arts",
    "strength": 2
  },
  {
    "source": "FUTURE VISION LAB",
    "target": "Lighting for Boulevard of Arts",
    "strength": 2
  },
  {
    "source": "FUTURE VISION LAB",
    "target": "REQUIEM",
    "strength": 2
  },
  {
    "source": "FUTURE VISION LAB",
    "target": "SP_Urban Arte Conecta",
    "strength": 2
  },
  {
    "source": "FUTURE VISION LAB",
    "target": "MAX CENTER",
    "strength": 2
  },
  {
    "source": "FUTURE VISION LAB",
    "target": "Between Waves",
    "strength": 2
  },
  {
    "source": "FUTURE VISION LAB",
    "target": "Dnipro Light Flower",
    "strength": 2
  },
  {
    "source": "FUTURE VISION LAB",
    "target": "Hamaja",
    "strength": 2
  },
  {
    "source": "FUTURE VISION LAB",
    "target": "LEVENSLICHT",
    "strength": 2
  },
  {
    "source": "FUTURE VISION LAB",
    "target": "Window into the Seas",
    "strength": 2
  },
  {
    "source": "FUTURE VISION LAB",
    "target": "Touching Night Skies 50°06'44\"N 8°40'36\"E",
    "strength": 2
  },
  {
    "source": "FUTURE VISION LAB",
    "target": "The Webster - Narrative Lighting Wall",
    "strength": 2
  },
  {
    "source": "FUTURE VISION LAB",
    "target": "Still Light",
    "strength": 2
  },
  {
    "source": "FUTURE VISION LAB",
    "target": "Para Social",
    "strength": 2
  },
  {
    "source": "FUTURE VISION LAB",
    "target": "Digital Phyllotaxy",
    "strength": 2
  },
  {
    "source": "FUTURE VISION LAB",
    "target": "ANTopolis",
    "strength": 2
  },
  {
    "source": "FUTURE VISION LAB",
    "target": "Helsinki Outlet",
    "strength": 2
  },
  {
    "source": "FUTURE VISION LAB",
    "target": "Chatty Bench Project: Radical Media Architecture in Precarious Times",
    "strength": 2
  },
  {
    "source": "FUTURE VISION LAB",
    "target": "Sleepers of Haslev",
    "strength": 2
  },
  {
    "source": "FUTURE VISION LAB",
    "target": "La Lune Est' / 'The Moon Is'",
    "strength": 2
  },
  {
    "source": "FUTURE VISION LAB",
    "target": "PO�ME D'�CRAN' / 'SCREEN POEM'",
    "strength": 2
  },
  {
    "source": "FUTURE VISION LAB",
    "target": "[ i miss your touch ] by PluginHUMAN.",
    "strength": 2
  },
  {
    "source": "FUTURE VISION LAB",
    "target": "Inhibition",
    "strength": 2
  },
  {
    "source": "FUTURE VISION LAB",
    "target": "Walk Walk Dance",
    "strength": 2
  },
  {
    "source": "Aukio",
    "target": "Light art installation Beacon",
    "strength": 2
  },
  {
    "source": "Aukio",
    "target": "Star Hunters",
    "strength": 2
  },
  {
    "source": "Aukio",
    "target": "Catholic Church of St. Nicholas",
    "strength": 2
  },
  {
    "source": "Aukio",
    "target": "Interactive Media Sculpture The Cube",
    "strength": 2
  },
  {
    "source": "Aukio",
    "target": "Lighting for the Tetris Hall Residential Complex",
    "strength": 2
  },
  {
    "source": "Aukio",
    "target": "The 4th Street SW Underpass Enhancement Project",
    "strength": 2
  },
  {
    "source": "Aukio",
    "target": "The Pearl Divers",
    "strength": 2
  },
  {
    "source": "Aukio",
    "target": "Landscapes of Dreams",
    "strength": 2
  },
  {
    "source": "Aukio",
    "target": "MAGIC MIRROR",
    "strength": 2
  },
  {
    "source": "Aukio",
    "target": "The Pipes",
    "strength": 2
  },
  {
    "source": "Aukio",
    "target": "Wervel [Turmoil]",
    "strength": 2
  },
  {
    "source": "Aukio",
    "target": "All Colors Are In The Lights",
    "strength": 2
  },
  {
    "source": "Aukio",
    "target": "La Sprite",
    "strength": 2
  },
  {
    "source": "Aukio",
    "target": "PASSAGES",
    "strength": 2
  },
  {
    "source": "Aukio",
    "target": "Wuhan Optics Valley Square Complex Theme Ground Sculpture",
    "strength": 2
  },
  {
    "source": "Aukio",
    "target": "Stadt der Temperamente",
    "strength": 2
  },
  {
    "source": "Aukio",
    "target": "Citizen Dialog Kit",
    "strength": 2
  },
  {
    "source": "Media architecture cluster Real-scene simulation and design prototype",
    "target": "VIRTUAL WALLS - TORRECARDENAS",
    "strength": 2
  },
  {
    "source": "Media architecture cluster Real-scene simulation and design prototype",
    "target": "Northside Beacons",
    "strength": 2
  },
  {
    "source": "Media architecture cluster Real-scene simulation and design prototype",
    "target": "LightLines",
    "strength": 2
  },
  {
    "source": "Media architecture cluster Real-scene simulation and design prototype",
    "target": "Arena",
    "strength": 2
  },
  {
    "source": "Media architecture cluster Real-scene simulation and design prototype",
    "target": "Monument Remix",
    "strength": 2
  },
  {
    "source": "Media architecture cluster Real-scene simulation and design prototype",
    "target": "Federation Square Digital Canvas",
    "strength": 2
  },
  {
    "source": "Media architecture cluster Real-scene simulation and design prototype",
    "target": "Yagan Square",
    "strength": 2
  },
  {
    "source": "Media architecture cluster Real-scene simulation and design prototype",
    "target": "Smog Free Project",
    "strength": 2
  },
  {
    "source": "Media architecture cluster Real-scene simulation and design prototype",
    "target": "BioLumen",
    "strength": 2
  },
  {
    "source": "Media architecture cluster Real-scene simulation and design prototype",
    "target": "Yellow Dust",
    "strength": 2
  },
  {
    "source": "Media architecture cluster Real-scene simulation and design prototype",
    "target": "Dragon Scale",
    "strength": 2
  },
  {
    "source": "Media architecture cluster Real-scene simulation and design prototype",
    "target": "Gibigiana",
    "strength": 2
  },
  {
    "source": "VIRTUAL WALLS - TORRECARDENAS",
    "target": "Northside Beacons",
    "strength": 2
  },
  {
    "source": "VIRTUAL WALLS - TORRECARDENAS",
    "target": "LightLines",
    "strength": 2
  },
  {
    "source": "VIRTUAL WALLS - TORRECARDENAS",
    "target": "Arena",
    "strength": 2
  },
  {
    "source": "VIRTUAL WALLS - TORRECARDENAS",
    "target": "Monument Remix",
    "strength": 2
  },
  {
    "source": "VIRTUAL WALLS - TORRECARDENAS",
    "target": "Federation Square Digital Canvas",
    "strength": 2
  },
  {
    "source": "VIRTUAL WALLS - TORRECARDENAS",
    "target": "Yagan Square",
    "strength": 2
  },
  {
    "source": "VIRTUAL WALLS - TORRECARDENAS",
    "target": "Smog Free Project",
    "strength": 2
  },
  {
    "source": "VIRTUAL WALLS - TORRECARDENAS",
    "target": "BioLumen",
    "strength": 2
  },
  {
    "source": "VIRTUAL WALLS - TORRECARDENAS",
    "target": "Yellow Dust",
    "strength": 2
  },
  {
    "source": "VIRTUAL WALLS - TORRECARDENAS",
    "target": "Dragon Scale",
    "strength": 2
  },
  {
    "source": "VIRTUAL WALLS - TORRECARDENAS",
    "target": "Gibigiana",
    "strength": 2
  },
  {
    "source": "Spatial Animacy",
    "target": "Loom Light",
    "strength": 2
  },
  {
    "source": "Spatial Animacy",
    "target": "atmospheric spaces",
    "strength": 2
  },
  {
    "source": "Spatial Animacy",
    "target": "Optical Footprint",
    "strength": 2
  },
  {
    "source": "Spatial Animacy",
    "target": "Spectator and Spectacle",
    "strength": 2
  },
  {
    "source": "Spatial Animacy",
    "target": "Urban Sun",
    "strength": 2
  },
  {
    "source": "Spatial Animacy",
    "target": "Bahrain International Circuit",
    "strength": 2
  },
  {
    "source": "Spatial Animacy",
    "target": "Guerrilha projections against Bolsonaro",
    "strength": 2
  },
  {
    "source": "Spatial Animacy",
    "target": "M+ Facade",
    "strength": 2
  },
  {
    "source": "Spatial Animacy",
    "target": "Peter Jones & Partners",
    "strength": 2
  },
  {
    "source": "Spatial Animacy",
    "target": "Chatty Bench Festival Community Media Visual Projections",
    "strength": 2
  },
  {
    "source": "Spatial Animacy",
    "target": "Greetings from Everywhere",
    "strength": 2
  },
  {
    "source": "Spatial Animacy",
    "target": "Wandering Corners",
    "strength": 2
  },
  {
    "source": "Spatial Animacy",
    "target": "High Speed Relations",
    "strength": 2
  },
  {
    "source": "Spatial Animacy",
    "target": "Sunscriber",
    "strength": 2
  },
  {
    "source": "Spatial Animacy",
    "target": "The Digital Bricks",
    "strength": 2
  },
  {
    "source": "Spatial Animacy",
    "target": "Shuttercam",
    "strength": 2
  },
  {
    "source": "Interactive Media Sculpture \"The Tree of Knowledge",
    "target": "Interactive application Dolphins Creator",
    "strength": 2
  },
  {
    "source": "Interactive Media Sculpture \"The Tree of Knowledge",
    "target": "Architectural and Decorative Lighting of Freedom Square in Mariupol",
    "strength": 2
  },
  {
    "source": "Interactive Media Sculpture \"The Tree of Knowledge",
    "target": "Interactive Screen on the Boulevard of arts",
    "strength": 2
  },
  {
    "source": "Interactive Media Sculpture \"The Tree of Knowledge",
    "target": "Lighting for Boulevard of Arts",
    "strength": 2
  },
  {
    "source": "Interactive Media Sculpture \"The Tree of Knowledge",
    "target": "REQUIEM",
    "strength": 2
  },
  {
    "source": "Interactive Media Sculpture \"The Tree of Knowledge",
    "target": "SP_Urban Arte Conecta",
    "strength": 2
  },
  {
    "source": "Interactive Media Sculpture \"The Tree of Knowledge",
    "target": "MAX CENTER",
    "strength": 2
  },
  {
    "source": "Interactive Media Sculpture \"The Tree of Knowledge",
    "target": "Between Waves",
    "strength": 2
  },
  {
    "source": "Interactive Media Sculpture \"The Tree of Knowledge",
    "target": "Dnipro Light Flower",
    "strength": 2
  },
  {
    "source": "Interactive Media Sculpture \"The Tree of Knowledge",
    "target": "Hamaja",
    "strength": 2
  },
  {
    "source": "Interactive Media Sculpture \"The Tree of Knowledge",
    "target": "LEVENSLICHT",
    "strength": 2
  },
  {
    "source": "Interactive Media Sculpture \"The Tree of Knowledge",
    "target": "Window into the Seas",
    "strength": 2
  },
  {
    "source": "Interactive Media Sculpture \"The Tree of Knowledge",
    "target": "Touching Night Skies 50°06'44\"N 8°40'36\"E",
    "strength": 2
  },
  {
    "source": "Interactive Media Sculpture \"The Tree of Knowledge",
    "target": "The Webster - Narrative Lighting Wall",
    "strength": 2
  },
  {
    "source": "Interactive Media Sculpture \"The Tree of Knowledge",
    "target": "Still Light",
    "strength": 2
  },
  {
    "source": "Interactive Media Sculpture \"The Tree of Knowledge",
    "target": "Para Social",
    "strength": 2
  },
  {
    "source": "Interactive Media Sculpture \"The Tree of Knowledge",
    "target": "Digital Phyllotaxy",
    "strength": 2
  },
  {
    "source": "Interactive Media Sculpture \"The Tree of Knowledge",
    "target": "ANTopolis",
    "strength": 2
  },
  {
    "source": "Interactive Media Sculpture \"The Tree of Knowledge",
    "target": "Helsinki Outlet",
    "strength": 2
  },
  {
    "source": "Interactive Media Sculpture \"The Tree of Knowledge",
    "target": "Chatty Bench Project: Radical Media Architecture in Precarious Times",
    "strength": 2
  },
  {
    "source": "Interactive Media Sculpture \"The Tree of Knowledge",
    "target": "Sleepers of Haslev",
    "strength": 2
  },
  {
    "source": "Interactive Media Sculpture \"The Tree of Knowledge",
    "target": "La Lune Est' / 'The Moon Is'",
    "strength": 2
  },
  {
    "source": "Interactive Media Sculpture \"The Tree of Knowledge",
    "target": "PO�ME D'�CRAN' / 'SCREEN POEM'",
    "strength": 2
  },
  {
    "source": "Interactive Media Sculpture \"The Tree of Knowledge",
    "target": "[ i miss your touch ] by PluginHUMAN.",
    "strength": 2
  },
  {
    "source": "Interactive Media Sculpture \"The Tree of Knowledge",
    "target": "Inhibition",
    "strength": 2
  },
  {
    "source": "Interactive Media Sculpture \"The Tree of Knowledge",
    "target": "Walk Walk Dance",
    "strength": 2
  },
  {
    "source": "Loom Light",
    "target": "atmospheric spaces",
    "strength": 2
  },
  {
    "source": "Loom Light",
    "target": "Optical Footprint",
    "strength": 2
  },
  {
    "source": "Loom Light",
    "target": "Spectator and Spectacle",
    "strength": 2
  },
  {
    "source": "Loom Light",
    "target": "Urban Sun",
    "strength": 2
  },
  {
    "source": "Loom Light",
    "target": "Bahrain International Circuit",
    "strength": 2
  },
  {
    "source": "Loom Light",
    "target": "Guerrilha projections against Bolsonaro",
    "strength": 2
  },
  {
    "source": "Loom Light",
    "target": "M+ Facade",
    "strength": 2
  },
  {
    "source": "Loom Light",
    "target": "Peter Jones & Partners",
    "strength": 2
  },
  {
    "source": "Loom Light",
    "target": "Chatty Bench Festival Community Media Visual Projections",
    "strength": 2
  },
  {
    "source": "Loom Light",
    "target": "Greetings from Everywhere",
    "strength": 2
  },
  {
    "source": "Loom Light",
    "target": "Wandering Corners",
    "strength": 2
  },
  {
    "source": "Loom Light",
    "target": "High Speed Relations",
    "strength": 2
  },
  {
    "source": "Loom Light",
    "target": "Sunscriber",
    "strength": 2
  },
  {
    "source": "Loom Light",
    "target": "The Digital Bricks",
    "strength": 2
  },
  {
    "source": "Loom Light",
    "target": "Shuttercam",
    "strength": 2
  },
  {
    "source": "Interactive application Dolphins Creator",
    "target": "Architectural and Decorative Lighting of Freedom Square in Mariupol",
    "strength": 2
  },
  {
    "source": "Interactive application Dolphins Creator",
    "target": "Interactive Screen on the Boulevard of arts",
    "strength": 2
  },
  {
    "source": "Interactive application Dolphins Creator",
    "target": "Lighting for Boulevard of Arts",
    "strength": 2
  },
  {
    "source": "Interactive application Dolphins Creator",
    "target": "REQUIEM",
    "strength": 2
  },
  {
    "source": "Interactive application Dolphins Creator",
    "target": "SP_Urban Arte Conecta",
    "strength": 2
  },
  {
    "source": "Interactive application Dolphins Creator",
    "target": "MAX CENTER",
    "strength": 2
  },
  {
    "source": "Interactive application Dolphins Creator",
    "target": "Between Waves",
    "strength": 2
  },
  {
    "source": "Interactive application Dolphins Creator",
    "target": "Dnipro Light Flower",
    "strength": 2
  },
  {
    "source": "Interactive application Dolphins Creator",
    "target": "Hamaja",
    "strength": 2
  },
  {
    "source": "Interactive application Dolphins Creator",
    "target": "LEVENSLICHT",
    "strength": 2
  },
  {
    "source": "Interactive application Dolphins Creator",
    "target": "Window into the Seas",
    "strength": 2
  },
  {
    "source": "Interactive application Dolphins Creator",
    "target": "Touching Night Skies 50°06'44\"N 8°40'36\"E",
    "strength": 2
  },
  {
    "source": "Interactive application Dolphins Creator",
    "target": "The Webster - Narrative Lighting Wall",
    "strength": 2
  },
  {
    "source": "Interactive application Dolphins Creator",
    "target": "Still Light",
    "strength": 2
  },
  {
    "source": "Interactive application Dolphins Creator",
    "target": "Para Social",
    "strength": 2
  },
  {
    "source": "Interactive application Dolphins Creator",
    "target": "Digital Phyllotaxy",
    "strength": 2
  },
  {
    "source": "Interactive application Dolphins Creator",
    "target": "ANTopolis",
    "strength": 2
  },
  {
    "source": "Interactive application Dolphins Creator",
    "target": "Helsinki Outlet",
    "strength": 2
  },
  {
    "source": "Interactive application Dolphins Creator",
    "target": "Chatty Bench Project: Radical Media Architecture in Precarious Times",
    "strength": 2
  },
  {
    "source": "Interactive application Dolphins Creator",
    "target": "Sleepers of Haslev",
    "strength": 2
  },
  {
    "source": "Interactive application Dolphins Creator",
    "target": "La Lune Est' / 'The Moon Is'",
    "strength": 2
  },
  {
    "source": "Interactive application Dolphins Creator",
    "target": "PO�ME D'�CRAN' / 'SCREEN POEM'",
    "strength": 2
  },
  {
    "source": "Interactive application Dolphins Creator",
    "target": "[ i miss your touch ] by PluginHUMAN.",
    "strength": 2
  },
  {
    "source": "Interactive application Dolphins Creator",
    "target": "Inhibition",
    "strength": 2
  },
  {
    "source": "Interactive application Dolphins Creator",
    "target": "Walk Walk Dance",
    "strength": 2
  },
  {
    "source": "Architectural and Decorative Lighting of Freedom Square in Mariupol",
    "target": "Interactive Screen on the Boulevard of arts",
    "strength": 2
  },
  {
    "source": "Architectural and Decorative Lighting of Freedom Square in Mariupol",
    "target": "Lighting for Boulevard of Arts",
    "strength": 2
  },
  {
    "source": "Architectural and Decorative Lighting of Freedom Square in Mariupol",
    "target": "REQUIEM",
    "strength": 2
  },
  {
    "source": "Architectural and Decorative Lighting of Freedom Square in Mariupol",
    "target": "SP_Urban Arte Conecta",
    "strength": 2
  },
  {
    "source": "Architectural and Decorative Lighting of Freedom Square in Mariupol",
    "target": "MAX CENTER",
    "strength": 2
  },
  {
    "source": "Architectural and Decorative Lighting of Freedom Square in Mariupol",
    "target": "Between Waves",
    "strength": 2
  },
  {
    "source": "Architectural and Decorative Lighting of Freedom Square in Mariupol",
    "target": "Dnipro Light Flower",
    "strength": 2
  },
  {
    "source": "Architectural and Decorative Lighting of Freedom Square in Mariupol",
    "target": "Hamaja",
    "strength": 2
  },
  {
    "source": "Architectural and Decorative Lighting of Freedom Square in Mariupol",
    "target": "LEVENSLICHT",
    "strength": 2
  },
  {
    "source": "Architectural and Decorative Lighting of Freedom Square in Mariupol",
    "target": "Window into the Seas",
    "strength": 2
  },
  {
    "source": "Architectural and Decorative Lighting of Freedom Square in Mariupol",
    "target": "Touching Night Skies 50°06'44\"N 8°40'36\"E",
    "strength": 2
  },
  {
    "source": "Architectural and Decorative Lighting of Freedom Square in Mariupol",
    "target": "The Webster - Narrative Lighting Wall",
    "strength": 2
  },
  {
    "source": "Architectural and Decorative Lighting of Freedom Square in Mariupol",
    "target": "Still Light",
    "strength": 2
  },
  {
    "source": "Architectural and Decorative Lighting of Freedom Square in Mariupol",
    "target": "Para Social",
    "strength": 2
  },
  {
    "source": "Architectural and Decorative Lighting of Freedom Square in Mariupol",
    "target": "Digital Phyllotaxy",
    "strength": 2
  },
  {
    "source": "Architectural and Decorative Lighting of Freedom Square in Mariupol",
    "target": "ANTopolis",
    "strength": 2
  },
  {
    "source": "Architectural and Decorative Lighting of Freedom Square in Mariupol",
    "target": "Helsinki Outlet",
    "strength": 2
  },
  {
    "source": "Architectural and Decorative Lighting of Freedom Square in Mariupol",
    "target": "Chatty Bench Project: Radical Media Architecture in Precarious Times",
    "strength": 2
  },
  {
    "source": "Architectural and Decorative Lighting of Freedom Square in Mariupol",
    "target": "Sleepers of Haslev",
    "strength": 2
  },
  {
    "source": "Architectural and Decorative Lighting of Freedom Square in Mariupol",
    "target": "La Lune Est' / 'The Moon Is'",
    "strength": 2
  },
  {
    "source": "Architectural and Decorative Lighting of Freedom Square in Mariupol",
    "target": "PO�ME D'�CRAN' / 'SCREEN POEM'",
    "strength": 2
  },
  {
    "source": "Architectural and Decorative Lighting of Freedom Square in Mariupol",
    "target": "[ i miss your touch ] by PluginHUMAN.",
    "strength": 2
  },
  {
    "source": "Architectural and Decorative Lighting of Freedom Square in Mariupol",
    "target": "Inhibition",
    "strength": 2
  },
  {
    "source": "Architectural and Decorative Lighting of Freedom Square in Mariupol",
    "target": "Walk Walk Dance",
    "strength": 2
  },
  {
    "source": "Interactive Screen on the Boulevard of arts",
    "target": "Lighting for Boulevard of Arts",
    "strength": 2
  },
  {
    "source": "Interactive Screen on the Boulevard of arts",
    "target": "REQUIEM",
    "strength": 2
  },
  {
    "source": "Interactive Screen on the Boulevard of arts",
    "target": "SP_Urban Arte Conecta",
    "strength": 2
  },
  {
    "source": "Interactive Screen on the Boulevard of arts",
    "target": "MAX CENTER",
    "strength": 2
  },
  {
    "source": "Interactive Screen on the Boulevard of arts",
    "target": "Between Waves",
    "strength": 2
  },
  {
    "source": "Interactive Screen on the Boulevard of arts",
    "target": "Dnipro Light Flower",
    "strength": 2
  },
  {
    "source": "Interactive Screen on the Boulevard of arts",
    "target": "Hamaja",
    "strength": 2
  },
  {
    "source": "Interactive Screen on the Boulevard of arts",
    "target": "LEVENSLICHT",
    "strength": 2
  },
  {
    "source": "Interactive Screen on the Boulevard of arts",
    "target": "Window into the Seas",
    "strength": 2
  },
  {
    "source": "Interactive Screen on the Boulevard of arts",
    "target": "Touching Night Skies 50°06'44\"N 8°40'36\"E",
    "strength": 2
  },
  {
    "source": "Interactive Screen on the Boulevard of arts",
    "target": "The Webster - Narrative Lighting Wall",
    "strength": 2
  },
  {
    "source": "Interactive Screen on the Boulevard of arts",
    "target": "Still Light",
    "strength": 2
  },
  {
    "source": "Interactive Screen on the Boulevard of arts",
    "target": "Para Social",
    "strength": 2
  },
  {
    "source": "Interactive Screen on the Boulevard of arts",
    "target": "Digital Phyllotaxy",
    "strength": 2
  },
  {
    "source": "Interactive Screen on the Boulevard of arts",
    "target": "ANTopolis",
    "strength": 2
  },
  {
    "source": "Interactive Screen on the Boulevard of arts",
    "target": "Helsinki Outlet",
    "strength": 2
  },
  {
    "source": "Interactive Screen on the Boulevard of arts",
    "target": "Chatty Bench Project: Radical Media Architecture in Precarious Times",
    "strength": 2
  },
  {
    "source": "Interactive Screen on the Boulevard of arts",
    "target": "Sleepers of Haslev",
    "strength": 2
  },
  {
    "source": "Interactive Screen on the Boulevard of arts",
    "target": "La Lune Est' / 'The Moon Is'",
    "strength": 2
  },
  {
    "source": "Interactive Screen on the Boulevard of arts",
    "target": "PO�ME D'�CRAN' / 'SCREEN POEM'",
    "strength": 2
  },
  {
    "source": "Interactive Screen on the Boulevard of arts",
    "target": "[ i miss your touch ] by PluginHUMAN.",
    "strength": 2
  },
  {
    "source": "Interactive Screen on the Boulevard of arts",
    "target": "Inhibition",
    "strength": 2
  },
  {
    "source": "Interactive Screen on the Boulevard of arts",
    "target": "Walk Walk Dance",
    "strength": 2
  },
  {
    "source": "Lighting for Boulevard of Arts",
    "target": "REQUIEM",
    "strength": 2
  },
  {
    "source": "Lighting for Boulevard of Arts",
    "target": "SP_Urban Arte Conecta",
    "strength": 2
  },
  {
    "source": "Lighting for Boulevard of Arts",
    "target": "MAX CENTER",
    "strength": 2
  },
  {
    "source": "Lighting for Boulevard of Arts",
    "target": "Between Waves",
    "strength": 2
  },
  {
    "source": "Lighting for Boulevard of Arts",
    "target": "Dnipro Light Flower",
    "strength": 2
  },
  {
    "source": "Lighting for Boulevard of Arts",
    "target": "Hamaja",
    "strength": 2
  },
  {
    "source": "Lighting for Boulevard of Arts",
    "target": "LEVENSLICHT",
    "strength": 2
  },
  {
    "source": "Lighting for Boulevard of Arts",
    "target": "Window into the Seas",
    "strength": 2
  },
  {
    "source": "Lighting for Boulevard of Arts",
    "target": "Touching Night Skies 50°06'44\"N 8°40'36\"E",
    "strength": 2
  },
  {
    "source": "Lighting for Boulevard of Arts",
    "target": "The Webster - Narrative Lighting Wall",
    "strength": 2
  },
  {
    "source": "Lighting for Boulevard of Arts",
    "target": "Still Light",
    "strength": 2
  },
  {
    "source": "Lighting for Boulevard of Arts",
    "target": "Para Social",
    "strength": 2
  },
  {
    "source": "Lighting for Boulevard of Arts",
    "target": "Digital Phyllotaxy",
    "strength": 2
  },
  {
    "source": "Lighting for Boulevard of Arts",
    "target": "ANTopolis",
    "strength": 2
  },
  {
    "source": "Lighting for Boulevard of Arts",
    "target": "Helsinki Outlet",
    "strength": 2
  },
  {
    "source": "Lighting for Boulevard of Arts",
    "target": "Chatty Bench Project: Radical Media Architecture in Precarious Times",
    "strength": 2
  },
  {
    "source": "Lighting for Boulevard of Arts",
    "target": "Sleepers of Haslev",
    "strength": 2
  },
  {
    "source": "Lighting for Boulevard of Arts",
    "target": "La Lune Est' / 'The Moon Is'",
    "strength": 2
  },
  {
    "source": "Lighting for Boulevard of Arts",
    "target": "PO�ME D'�CRAN' / 'SCREEN POEM'",
    "strength": 2
  },
  {
    "source": "Lighting for Boulevard of Arts",
    "target": "[ i miss your touch ] by PluginHUMAN.",
    "strength": 2
  },
  {
    "source": "Lighting for Boulevard of Arts",
    "target": "Inhibition",
    "strength": 2
  },
  {
    "source": "Lighting for Boulevard of Arts",
    "target": "Walk Walk Dance",
    "strength": 2
  },
  {
    "source": "REQUIEM",
    "target": "SP_Urban Arte Conecta",
    "strength": 2
  },
  {
    "source": "REQUIEM",
    "target": "MAX CENTER",
    "strength": 2
  },
  {
    "source": "REQUIEM",
    "target": "Between Waves",
    "strength": 2
  },
  {
    "source": "REQUIEM",
    "target": "Dnipro Light Flower",
    "strength": 2
  },
  {
    "source": "REQUIEM",
    "target": "Hamaja",
    "strength": 2
  },
  {
    "source": "REQUIEM",
    "target": "LEVENSLICHT",
    "strength": 2
  },
  {
    "source": "REQUIEM",
    "target": "Window into the Seas",
    "strength": 2
  },
  {
    "source": "REQUIEM",
    "target": "Touching Night Skies 50°06'44\"N 8°40'36\"E",
    "strength": 2
  },
  {
    "source": "REQUIEM",
    "target": "The Webster - Narrative Lighting Wall",
    "strength": 2
  },
  {
    "source": "REQUIEM",
    "target": "Still Light",
    "strength": 2
  },
  {
    "source": "REQUIEM",
    "target": "Para Social",
    "strength": 2
  },
  {
    "source": "REQUIEM",
    "target": "Digital Phyllotaxy",
    "strength": 2
  },
  {
    "source": "REQUIEM",
    "target": "ANTopolis",
    "strength": 2
  },
  {
    "source": "REQUIEM",
    "target": "Helsinki Outlet",
    "strength": 2
  },
  {
    "source": "REQUIEM",
    "target": "Chatty Bench Project: Radical Media Architecture in Precarious Times",
    "strength": 2
  },
  {
    "source": "REQUIEM",
    "target": "Sleepers of Haslev",
    "strength": 2
  },
  {
    "source": "REQUIEM",
    "target": "La Lune Est' / 'The Moon Is'",
    "strength": 2
  },
  {
    "source": "REQUIEM",
    "target": "PO�ME D'�CRAN' / 'SCREEN POEM'",
    "strength": 2
  },
  {
    "source": "REQUIEM",
    "target": "[ i miss your touch ] by PluginHUMAN.",
    "strength": 2
  },
  {
    "source": "REQUIEM",
    "target": "Inhibition",
    "strength": 2
  },
  {
    "source": "REQUIEM",
    "target": "Walk Walk Dance",
    "strength": 2
  },
  {
    "source": "SP_Urban Arte Conecta",
    "target": "MAX CENTER",
    "strength": 2
  },
  {
    "source": "SP_Urban Arte Conecta",
    "target": "Between Waves",
    "strength": 2
  },
  {
    "source": "SP_Urban Arte Conecta",
    "target": "Dnipro Light Flower",
    "strength": 2
  },
  {
    "source": "SP_Urban Arte Conecta",
    "target": "Hamaja",
    "strength": 2
  },
  {
    "source": "SP_Urban Arte Conecta",
    "target": "LEVENSLICHT",
    "strength": 2
  },
  {
    "source": "SP_Urban Arte Conecta",
    "target": "Window into the Seas",
    "strength": 2
  },
  {
    "source": "SP_Urban Arte Conecta",
    "target": "Touching Night Skies 50°06'44\"N 8°40'36\"E",
    "strength": 2
  },
  {
    "source": "SP_Urban Arte Conecta",
    "target": "The Webster - Narrative Lighting Wall",
    "strength": 2
  },
  {
    "source": "SP_Urban Arte Conecta",
    "target": "Still Light",
    "strength": 2
  },
  {
    "source": "SP_Urban Arte Conecta",
    "target": "Para Social",
    "strength": 2
  },
  {
    "source": "SP_Urban Arte Conecta",
    "target": "Digital Phyllotaxy",
    "strength": 2
  },
  {
    "source": "SP_Urban Arte Conecta",
    "target": "ANTopolis",
    "strength": 2
  },
  {
    "source": "SP_Urban Arte Conecta",
    "target": "Helsinki Outlet",
    "strength": 2
  },
  {
    "source": "SP_Urban Arte Conecta",
    "target": "Chatty Bench Project: Radical Media Architecture in Precarious Times",
    "strength": 2
  },
  {
    "source": "SP_Urban Arte Conecta",
    "target": "Sleepers of Haslev",
    "strength": 2
  },
  {
    "source": "SP_Urban Arte Conecta",
    "target": "La Lune Est' / 'The Moon Is'",
    "strength": 2
  },
  {
    "source": "SP_Urban Arte Conecta",
    "target": "PO�ME D'�CRAN' / 'SCREEN POEM'",
    "strength": 2
  },
  {
    "source": "SP_Urban Arte Conecta",
    "target": "[ i miss your touch ] by PluginHUMAN.",
    "strength": 2
  },
  {
    "source": "SP_Urban Arte Conecta",
    "target": "Inhibition",
    "strength": 2
  },
  {
    "source": "SP_Urban Arte Conecta",
    "target": "Walk Walk Dance",
    "strength": 2
  },
  {
    "source": "MAX CENTER",
    "target": "Between Waves",
    "strength": 2
  },
  {
    "source": "MAX CENTER",
    "target": "Dnipro Light Flower",
    "strength": 2
  },
  {
    "source": "MAX CENTER",
    "target": "Hamaja",
    "strength": 2
  },
  {
    "source": "MAX CENTER",
    "target": "LEVENSLICHT",
    "strength": 2
  },
  {
    "source": "MAX CENTER",
    "target": "Window into the Seas",
    "strength": 2
  },
  {
    "source": "MAX CENTER",
    "target": "Touching Night Skies 50°06'44\"N 8°40'36\"E",
    "strength": 2
  },
  {
    "source": "MAX CENTER",
    "target": "The Webster - Narrative Lighting Wall",
    "strength": 2
  },
  {
    "source": "MAX CENTER",
    "target": "Still Light",
    "strength": 2
  },
  {
    "source": "MAX CENTER",
    "target": "Para Social",
    "strength": 2
  },
  {
    "source": "MAX CENTER",
    "target": "Digital Phyllotaxy",
    "strength": 2
  },
  {
    "source": "MAX CENTER",
    "target": "ANTopolis",
    "strength": 2
  },
  {
    "source": "MAX CENTER",
    "target": "Helsinki Outlet",
    "strength": 2
  },
  {
    "source": "MAX CENTER",
    "target": "Chatty Bench Project: Radical Media Architecture in Precarious Times",
    "strength": 2
  },
  {
    "source": "MAX CENTER",
    "target": "Sleepers of Haslev",
    "strength": 2
  },
  {
    "source": "MAX CENTER",
    "target": "La Lune Est' / 'The Moon Is'",
    "strength": 2
  },
  {
    "source": "MAX CENTER",
    "target": "PO�ME D'�CRAN' / 'SCREEN POEM'",
    "strength": 2
  },
  {
    "source": "MAX CENTER",
    "target": "[ i miss your touch ] by PluginHUMAN.",
    "strength": 2
  },
  {
    "source": "MAX CENTER",
    "target": "Inhibition",
    "strength": 2
  },
  {
    "source": "MAX CENTER",
    "target": "Walk Walk Dance",
    "strength": 2
  },
  {
    "source": "Novartis Pavillon",
    "target": "Macula",
    "strength": 2
  },
  {
    "source": "Novartis Pavillon",
    "target": "ZIEN",
    "strength": 2
  },
  {
    "source": "Novartis Pavillon",
    "target": "ZOE",
    "strength": 2
  },
  {
    "source": "Novartis Pavillon",
    "target": "Ecran de Veille / Screen Savour",
    "strength": 2
  },
  {
    "source": "Novartis Pavillon",
    "target": "The Cellular Fidelity",
    "strength": 2
  },
  {
    "source": "Novartis Pavillon",
    "target": "Orlando International Airport Terminal C",
    "strength": 2
  },
  {
    "source": "Novartis Pavillon",
    "target": "The Eye of Mexico",
    "strength": 2
  },
  {
    "source": "Novartis Pavillon",
    "target": "�Room of Negotiation�",
    "strength": 2
  },
  {
    "source": "Novartis Pavillon",
    "target": "Light Falls",
    "strength": 2
  },
  {
    "source": "Novartis Pavillon",
    "target": "Commons Sense, Manifesta 14",
    "strength": 2
  },
  {
    "source": "Light art installation Beacon",
    "target": "Star Hunters",
    "strength": 2
  },
  {
    "source": "Light art installation Beacon",
    "target": "Catholic Church of St. Nicholas",
    "strength": 2
  },
  {
    "source": "Light art installation Beacon",
    "target": "Interactive Media Sculpture The Cube",
    "strength": 2
  },
  {
    "source": "Light art installation Beacon",
    "target": "Lighting for the Tetris Hall Residential Complex",
    "strength": 2
  },
  {
    "source": "Light art installation Beacon",
    "target": "The 4th Street SW Underpass Enhancement Project",
    "strength": 2
  },
  {
    "source": "Light art installation Beacon",
    "target": "The Pearl Divers",
    "strength": 2
  },
  {
    "source": "Light art installation Beacon",
    "target": "Landscapes of Dreams",
    "strength": 2
  },
  {
    "source": "Light art installation Beacon",
    "target": "MAGIC MIRROR",
    "strength": 2
  },
  {
    "source": "Light art installation Beacon",
    "target": "The Pipes",
    "strength": 2
  },
  {
    "source": "Light art installation Beacon",
    "target": "Wervel [Turmoil]",
    "strength": 2
  },
  {
    "source": "Light art installation Beacon",
    "target": "All Colors Are In The Lights",
    "strength": 2
  },
  {
    "source": "Light art installation Beacon",
    "target": "La Sprite",
    "strength": 2
  },
  {
    "source": "Light art installation Beacon",
    "target": "PASSAGES",
    "strength": 2
  },
  {
    "source": "Light art installation Beacon",
    "target": "Wuhan Optics Valley Square Complex Theme Ground Sculpture",
    "strength": 2
  },
  {
    "source": "Light art installation Beacon",
    "target": "Stadt der Temperamente",
    "strength": 2
  },
  {
    "source": "Light art installation Beacon",
    "target": "Citizen Dialog Kit",
    "strength": 2
  },
  {
    "source": "atmospheric spaces",
    "target": "Optical Footprint",
    "strength": 2
  },
  {
    "source": "atmospheric spaces",
    "target": "Spectator and Spectacle",
    "strength": 2
  },
  {
    "source": "atmospheric spaces",
    "target": "Urban Sun",
    "strength": 2
  },
  {
    "source": "atmospheric spaces",
    "target": "Bahrain International Circuit",
    "strength": 2
  },
  {
    "source": "atmospheric spaces",
    "target": "Guerrilha projections against Bolsonaro",
    "strength": 2
  },
  {
    "source": "atmospheric spaces",
    "target": "M+ Facade",
    "strength": 2
  },
  {
    "source": "atmospheric spaces",
    "target": "Peter Jones & Partners",
    "strength": 2
  },
  {
    "source": "atmospheric spaces",
    "target": "Chatty Bench Festival Community Media Visual Projections",
    "strength": 2
  },
  {
    "source": "atmospheric spaces",
    "target": "Greetings from Everywhere",
    "strength": 2
  },
  {
    "source": "atmospheric spaces",
    "target": "Wandering Corners",
    "strength": 2
  },
  {
    "source": "atmospheric spaces",
    "target": "High Speed Relations",
    "strength": 2
  },
  {
    "source": "atmospheric spaces",
    "target": "Sunscriber",
    "strength": 2
  },
  {
    "source": "atmospheric spaces",
    "target": "The Digital Bricks",
    "strength": 2
  },
  {
    "source": "atmospheric spaces",
    "target": "Shuttercam",
    "strength": 2
  },
  {
    "source": "Star Hunters",
    "target": "Catholic Church of St. Nicholas",
    "strength": 2
  },
  {
    "source": "Star Hunters",
    "target": "Interactive Media Sculpture The Cube",
    "strength": 2
  },
  {
    "source": "Star Hunters",
    "target": "Lighting for the Tetris Hall Residential Complex",
    "strength": 2
  },
  {
    "source": "Star Hunters",
    "target": "The 4th Street SW Underpass Enhancement Project",
    "strength": 2
  },
  {
    "source": "Star Hunters",
    "target": "The Pearl Divers",
    "strength": 2
  },
  {
    "source": "Star Hunters",
    "target": "Landscapes of Dreams",
    "strength": 2
  },
  {
    "source": "Star Hunters",
    "target": "MAGIC MIRROR",
    "strength": 2
  },
  {
    "source": "Star Hunters",
    "target": "The Pipes",
    "strength": 2
  },
  {
    "source": "Star Hunters",
    "target": "Wervel [Turmoil]",
    "strength": 2
  },
  {
    "source": "Star Hunters",
    "target": "All Colors Are In The Lights",
    "strength": 2
  },
  {
    "source": "Star Hunters",
    "target": "La Sprite",
    "strength": 2
  },
  {
    "source": "Star Hunters",
    "target": "PASSAGES",
    "strength": 2
  },
  {
    "source": "Star Hunters",
    "target": "Wuhan Optics Valley Square Complex Theme Ground Sculpture",
    "strength": 2
  },
  {
    "source": "Star Hunters",
    "target": "Stadt der Temperamente",
    "strength": 2
  },
  {
    "source": "Star Hunters",
    "target": "Citizen Dialog Kit",
    "strength": 2
  },
  {
    "source": "Catholic Church of St. Nicholas",
    "target": "Interactive Media Sculpture The Cube",
    "strength": 2
  },
  {
    "source": "Catholic Church of St. Nicholas",
    "target": "Lighting for the Tetris Hall Residential Complex",
    "strength": 2
  },
  {
    "source": "Catholic Church of St. Nicholas",
    "target": "The 4th Street SW Underpass Enhancement Project",
    "strength": 2
  },
  {
    "source": "Catholic Church of St. Nicholas",
    "target": "The Pearl Divers",
    "strength": 2
  },
  {
    "source": "Catholic Church of St. Nicholas",
    "target": "Landscapes of Dreams",
    "strength": 2
  },
  {
    "source": "Catholic Church of St. Nicholas",
    "target": "MAGIC MIRROR",
    "strength": 2
  },
  {
    "source": "Catholic Church of St. Nicholas",
    "target": "The Pipes",
    "strength": 2
  },
  {
    "source": "Catholic Church of St. Nicholas",
    "target": "Wervel [Turmoil]",
    "strength": 2
  },
  {
    "source": "Catholic Church of St. Nicholas",
    "target": "All Colors Are In The Lights",
    "strength": 2
  },
  {
    "source": "Catholic Church of St. Nicholas",
    "target": "La Sprite",
    "strength": 2
  },
  {
    "source": "Catholic Church of St. Nicholas",
    "target": "PASSAGES",
    "strength": 2
  },
  {
    "source": "Catholic Church of St. Nicholas",
    "target": "Wuhan Optics Valley Square Complex Theme Ground Sculpture",
    "strength": 2
  },
  {
    "source": "Catholic Church of St. Nicholas",
    "target": "Stadt der Temperamente",
    "strength": 2
  },
  {
    "source": "Catholic Church of St. Nicholas",
    "target": "Citizen Dialog Kit",
    "strength": 2
  },
  {
    "source": "Optical Footprint",
    "target": "Spectator and Spectacle",
    "strength": 2
  },
  {
    "source": "Optical Footprint",
    "target": "Urban Sun",
    "strength": 2
  },
  {
    "source": "Optical Footprint",
    "target": "Bahrain International Circuit",
    "strength": 2
  },
  {
    "source": "Optical Footprint",
    "target": "Guerrilha projections against Bolsonaro",
    "strength": 2
  },
  {
    "source": "Optical Footprint",
    "target": "M+ Facade",
    "strength": 2
  },
  {
    "source": "Optical Footprint",
    "target": "Peter Jones & Partners",
    "strength": 2
  },
  {
    "source": "Optical Footprint",
    "target": "Chatty Bench Festival Community Media Visual Projections",
    "strength": 2
  },
  {
    "source": "Optical Footprint",
    "target": "Greetings from Everywhere",
    "strength": 2
  },
  {
    "source": "Optical Footprint",
    "target": "Wandering Corners",
    "strength": 2
  },
  {
    "source": "Optical Footprint",
    "target": "High Speed Relations",
    "strength": 2
  },
  {
    "source": "Optical Footprint",
    "target": "Sunscriber",
    "strength": 2
  },
  {
    "source": "Optical Footprint",
    "target": "The Digital Bricks",
    "strength": 2
  },
  {
    "source": "Optical Footprint",
    "target": "Shuttercam",
    "strength": 2
  },
  {
    "source": "Spectator and Spectacle",
    "target": "Urban Sun",
    "strength": 2
  },
  {
    "source": "Spectator and Spectacle",
    "target": "Bahrain International Circuit",
    "strength": 2
  },
  {
    "source": "Spectator and Spectacle",
    "target": "Guerrilha projections against Bolsonaro",
    "strength": 2
  },
  {
    "source": "Spectator and Spectacle",
    "target": "M+ Facade",
    "strength": 2
  },
  {
    "source": "Spectator and Spectacle",
    "target": "Peter Jones & Partners",
    "strength": 2
  },
  {
    "source": "Spectator and Spectacle",
    "target": "Chatty Bench Festival Community Media Visual Projections",
    "strength": 2
  },
  {
    "source": "Spectator and Spectacle",
    "target": "Greetings from Everywhere",
    "strength": 2
  },
  {
    "source": "Spectator and Spectacle",
    "target": "Wandering Corners",
    "strength": 2
  },
  {
    "source": "Spectator and Spectacle",
    "target": "High Speed Relations",
    "strength": 2
  },
  {
    "source": "Spectator and Spectacle",
    "target": "Sunscriber",
    "strength": 2
  },
  {
    "source": "Spectator and Spectacle",
    "target": "The Digital Bricks",
    "strength": 2
  },
  {
    "source": "Spectator and Spectacle",
    "target": "Shuttercam",
    "strength": 2
  },
  {
    "source": "Interactive Media Sculpture The Cube",
    "target": "Lighting for the Tetris Hall Residential Complex",
    "strength": 2
  },
  {
    "source": "Interactive Media Sculpture The Cube",
    "target": "The 4th Street SW Underpass Enhancement Project",
    "strength": 2
  },
  {
    "source": "Interactive Media Sculpture The Cube",
    "target": "The Pearl Divers",
    "strength": 2
  },
  {
    "source": "Interactive Media Sculpture The Cube",
    "target": "Landscapes of Dreams",
    "strength": 2
  },
  {
    "source": "Interactive Media Sculpture The Cube",
    "target": "MAGIC MIRROR",
    "strength": 2
  },
  {
    "source": "Interactive Media Sculpture The Cube",
    "target": "The Pipes",
    "strength": 2
  },
  {
    "source": "Interactive Media Sculpture The Cube",
    "target": "Wervel [Turmoil]",
    "strength": 2
  },
  {
    "source": "Interactive Media Sculpture The Cube",
    "target": "All Colors Are In The Lights",
    "strength": 2
  },
  {
    "source": "Interactive Media Sculpture The Cube",
    "target": "La Sprite",
    "strength": 2
  },
  {
    "source": "Interactive Media Sculpture The Cube",
    "target": "PASSAGES",
    "strength": 2
  },
  {
    "source": "Interactive Media Sculpture The Cube",
    "target": "Wuhan Optics Valley Square Complex Theme Ground Sculpture",
    "strength": 2
  },
  {
    "source": "Interactive Media Sculpture The Cube",
    "target": "Stadt der Temperamente",
    "strength": 2
  },
  {
    "source": "Interactive Media Sculpture The Cube",
    "target": "Citizen Dialog Kit",
    "strength": 2
  },
  {
    "source": "Lighting for the Tetris Hall Residential Complex",
    "target": "The 4th Street SW Underpass Enhancement Project",
    "strength": 2
  },
  {
    "source": "Lighting for the Tetris Hall Residential Complex",
    "target": "The Pearl Divers",
    "strength": 2
  },
  {
    "source": "Lighting for the Tetris Hall Residential Complex",
    "target": "Landscapes of Dreams",
    "strength": 2
  },
  {
    "source": "Lighting for the Tetris Hall Residential Complex",
    "target": "MAGIC MIRROR",
    "strength": 2
  },
  {
    "source": "Lighting for the Tetris Hall Residential Complex",
    "target": "The Pipes",
    "strength": 2
  },
  {
    "source": "Lighting for the Tetris Hall Residential Complex",
    "target": "Wervel [Turmoil]",
    "strength": 2
  },
  {
    "source": "Lighting for the Tetris Hall Residential Complex",
    "target": "All Colors Are In The Lights",
    "strength": 2
  },
  {
    "source": "Lighting for the Tetris Hall Residential Complex",
    "target": "La Sprite",
    "strength": 2
  },
  {
    "source": "Lighting for the Tetris Hall Residential Complex",
    "target": "PASSAGES",
    "strength": 2
  },
  {
    "source": "Lighting for the Tetris Hall Residential Complex",
    "target": "Wuhan Optics Valley Square Complex Theme Ground Sculpture",
    "strength": 2
  },
  {
    "source": "Lighting for the Tetris Hall Residential Complex",
    "target": "Stadt der Temperamente",
    "strength": 2
  },
  {
    "source": "Lighting for the Tetris Hall Residential Complex",
    "target": "Citizen Dialog Kit",
    "strength": 2
  },
  {
    "source": "Between Waves",
    "target": "Dnipro Light Flower",
    "strength": 2
  },
  {
    "source": "Between Waves",
    "target": "Hamaja",
    "strength": 2
  },
  {
    "source": "Between Waves",
    "target": "LEVENSLICHT",
    "strength": 2
  },
  {
    "source": "Between Waves",
    "target": "Window into the Seas",
    "strength": 2
  },
  {
    "source": "Between Waves",
    "target": "Touching Night Skies 50°06'44\"N 8°40'36\"E",
    "strength": 2
  },
  {
    "source": "Between Waves",
    "target": "The Webster - Narrative Lighting Wall",
    "strength": 2
  },
  {
    "source": "Between Waves",
    "target": "Still Light",
    "strength": 2
  },
  {
    "source": "Between Waves",
    "target": "Para Social",
    "strength": 2
  },
  {
    "source": "Between Waves",
    "target": "Digital Phyllotaxy",
    "strength": 2
  },
  {
    "source": "Between Waves",
    "target": "ANTopolis",
    "strength": 2
  },
  {
    "source": "Between Waves",
    "target": "Helsinki Outlet",
    "strength": 2
  },
  {
    "source": "Between Waves",
    "target": "Chatty Bench Project: Radical Media Architecture in Precarious Times",
    "strength": 2
  },
  {
    "source": "Between Waves",
    "target": "Sleepers of Haslev",
    "strength": 2
  },
  {
    "source": "Between Waves",
    "target": "La Lune Est' / 'The Moon Is'",
    "strength": 2
  },
  {
    "source": "Between Waves",
    "target": "PO�ME D'�CRAN' / 'SCREEN POEM'",
    "strength": 2
  },
  {
    "source": "Between Waves",
    "target": "[ i miss your touch ] by PluginHUMAN.",
    "strength": 2
  },
  {
    "source": "Between Waves",
    "target": "Inhibition",
    "strength": 2
  },
  {
    "source": "Between Waves",
    "target": "Walk Walk Dance",
    "strength": 2
  },
  {
    "source": "The 4th Street SW Underpass Enhancement Project",
    "target": "The Pearl Divers",
    "strength": 2
  },
  {
    "source": "The 4th Street SW Underpass Enhancement Project",
    "target": "Landscapes of Dreams",
    "strength": 2
  },
  {
    "source": "The 4th Street SW Underpass Enhancement Project",
    "target": "MAGIC MIRROR",
    "strength": 2
  },
  {
    "source": "The 4th Street SW Underpass Enhancement Project",
    "target": "The Pipes",
    "strength": 2
  },
  {
    "source": "The 4th Street SW Underpass Enhancement Project",
    "target": "Wervel [Turmoil]",
    "strength": 2
  },
  {
    "source": "The 4th Street SW Underpass Enhancement Project",
    "target": "All Colors Are In The Lights",
    "strength": 2
  },
  {
    "source": "The 4th Street SW Underpass Enhancement Project",
    "target": "La Sprite",
    "strength": 2
  },
  {
    "source": "The 4th Street SW Underpass Enhancement Project",
    "target": "PASSAGES",
    "strength": 2
  },
  {
    "source": "The 4th Street SW Underpass Enhancement Project",
    "target": "Wuhan Optics Valley Square Complex Theme Ground Sculpture",
    "strength": 2
  },
  {
    "source": "The 4th Street SW Underpass Enhancement Project",
    "target": "Stadt der Temperamente",
    "strength": 2
  },
  {
    "source": "The 4th Street SW Underpass Enhancement Project",
    "target": "Citizen Dialog Kit",
    "strength": 2
  },
  {
    "source": "Dnipro Light Flower",
    "target": "Hamaja",
    "strength": 2
  },
  {
    "source": "Dnipro Light Flower",
    "target": "LEVENSLICHT",
    "strength": 2
  },
  {
    "source": "Dnipro Light Flower",
    "target": "Window into the Seas",
    "strength": 2
  },
  {
    "source": "Dnipro Light Flower",
    "target": "Touching Night Skies 50°06'44\"N 8°40'36\"E",
    "strength": 2
  },
  {
    "source": "Dnipro Light Flower",
    "target": "The Webster - Narrative Lighting Wall",
    "strength": 2
  },
  {
    "source": "Dnipro Light Flower",
    "target": "Still Light",
    "strength": 2
  },
  {
    "source": "Dnipro Light Flower",
    "target": "Para Social",
    "strength": 2
  },
  {
    "source": "Dnipro Light Flower",
    "target": "Digital Phyllotaxy",
    "strength": 2
  },
  {
    "source": "Dnipro Light Flower",
    "target": "ANTopolis",
    "strength": 2
  },
  {
    "source": "Dnipro Light Flower",
    "target": "Helsinki Outlet",
    "strength": 2
  },
  {
    "source": "Dnipro Light Flower",
    "target": "Chatty Bench Project: Radical Media Architecture in Precarious Times",
    "strength": 2
  },
  {
    "source": "Dnipro Light Flower",
    "target": "Sleepers of Haslev",
    "strength": 2
  },
  {
    "source": "Dnipro Light Flower",
    "target": "La Lune Est' / 'The Moon Is'",
    "strength": 2
  },
  {
    "source": "Dnipro Light Flower",
    "target": "PO�ME D'�CRAN' / 'SCREEN POEM'",
    "strength": 2
  },
  {
    "source": "Dnipro Light Flower",
    "target": "[ i miss your touch ] by PluginHUMAN.",
    "strength": 2
  },
  {
    "source": "Dnipro Light Flower",
    "target": "Inhibition",
    "strength": 2
  },
  {
    "source": "Dnipro Light Flower",
    "target": "Walk Walk Dance",
    "strength": 2
  },
  {
    "source": "Hamaja",
    "target": "LEVENSLICHT",
    "strength": 2
  },
  {
    "source": "Hamaja",
    "target": "Window into the Seas",
    "strength": 2
  },
  {
    "source": "Hamaja",
    "target": "Touching Night Skies 50°06'44\"N 8°40'36\"E",
    "strength": 2
  },
  {
    "source": "Hamaja",
    "target": "The Webster - Narrative Lighting Wall",
    "strength": 2
  },
  {
    "source": "Hamaja",
    "target": "Still Light",
    "strength": 2
  },
  {
    "source": "Hamaja",
    "target": "Para Social",
    "strength": 2
  },
  {
    "source": "Hamaja",
    "target": "Digital Phyllotaxy",
    "strength": 2
  },
  {
    "source": "Hamaja",
    "target": "ANTopolis",
    "strength": 2
  },
  {
    "source": "Hamaja",
    "target": "Helsinki Outlet",
    "strength": 2
  },
  {
    "source": "Hamaja",
    "target": "Chatty Bench Project: Radical Media Architecture in Precarious Times",
    "strength": 2
  },
  {
    "source": "Hamaja",
    "target": "Sleepers of Haslev",
    "strength": 2
  },
  {
    "source": "Hamaja",
    "target": "La Lune Est' / 'The Moon Is'",
    "strength": 2
  },
  {
    "source": "Hamaja",
    "target": "PO�ME D'�CRAN' / 'SCREEN POEM'",
    "strength": 2
  },
  {
    "source": "Hamaja",
    "target": "[ i miss your touch ] by PluginHUMAN.",
    "strength": 2
  },
  {
    "source": "Hamaja",
    "target": "Inhibition",
    "strength": 2
  },
  {
    "source": "Hamaja",
    "target": "Walk Walk Dance",
    "strength": 2
  },
  {
    "source": "The Pearl Divers",
    "target": "Landscapes of Dreams",
    "strength": 2
  },
  {
    "source": "The Pearl Divers",
    "target": "MAGIC MIRROR",
    "strength": 2
  },
  {
    "source": "The Pearl Divers",
    "target": "The Pipes",
    "strength": 2
  },
  {
    "source": "The Pearl Divers",
    "target": "Wervel [Turmoil]",
    "strength": 2
  },
  {
    "source": "The Pearl Divers",
    "target": "All Colors Are In The Lights",
    "strength": 2
  },
  {
    "source": "The Pearl Divers",
    "target": "La Sprite",
    "strength": 2
  },
  {
    "source": "The Pearl Divers",
    "target": "PASSAGES",
    "strength": 2
  },
  {
    "source": "The Pearl Divers",
    "target": "Wuhan Optics Valley Square Complex Theme Ground Sculpture",
    "strength": 2
  },
  {
    "source": "The Pearl Divers",
    "target": "Stadt der Temperamente",
    "strength": 2
  },
  {
    "source": "The Pearl Divers",
    "target": "Citizen Dialog Kit",
    "strength": 2
  },
  {
    "source": "Urban Sun",
    "target": "Bahrain International Circuit",
    "strength": 2
  },
  {
    "source": "Urban Sun",
    "target": "Guerrilha projections against Bolsonaro",
    "strength": 2
  },
  {
    "source": "Urban Sun",
    "target": "M+ Facade",
    "strength": 2
  },
  {
    "source": "Urban Sun",
    "target": "Peter Jones & Partners",
    "strength": 2
  },
  {
    "source": "Urban Sun",
    "target": "Chatty Bench Festival Community Media Visual Projections",
    "strength": 2
  },
  {
    "source": "Urban Sun",
    "target": "Greetings from Everywhere",
    "strength": 2
  },
  {
    "source": "Urban Sun",
    "target": "Wandering Corners",
    "strength": 2
  },
  {
    "source": "Urban Sun",
    "target": "High Speed Relations",
    "strength": 2
  },
  {
    "source": "Urban Sun",
    "target": "Sunscriber",
    "strength": 2
  },
  {
    "source": "Urban Sun",
    "target": "The Digital Bricks",
    "strength": 2
  },
  {
    "source": "Urban Sun",
    "target": "Shuttercam",
    "strength": 2
  },
  {
    "source": "LEVENSLICHT",
    "target": "Window into the Seas",
    "strength": 2
  },
  {
    "source": "LEVENSLICHT",
    "target": "Touching Night Skies 50°06'44\"N 8°40'36\"E",
    "strength": 2
  },
  {
    "source": "LEVENSLICHT",
    "target": "The Webster - Narrative Lighting Wall",
    "strength": 2
  },
  {
    "source": "LEVENSLICHT",
    "target": "Still Light",
    "strength": 2
  },
  {
    "source": "LEVENSLICHT",
    "target": "Para Social",
    "strength": 2
  },
  {
    "source": "LEVENSLICHT",
    "target": "Digital Phyllotaxy",
    "strength": 2
  },
  {
    "source": "LEVENSLICHT",
    "target": "ANTopolis",
    "strength": 2
  },
  {
    "source": "LEVENSLICHT",
    "target": "Helsinki Outlet",
    "strength": 2
  },
  {
    "source": "LEVENSLICHT",
    "target": "Chatty Bench Project: Radical Media Architecture in Precarious Times",
    "strength": 2
  },
  {
    "source": "LEVENSLICHT",
    "target": "Sleepers of Haslev",
    "strength": 2
  },
  {
    "source": "LEVENSLICHT",
    "target": "La Lune Est' / 'The Moon Is'",
    "strength": 2
  },
  {
    "source": "LEVENSLICHT",
    "target": "PO�ME D'�CRAN' / 'SCREEN POEM'",
    "strength": 2
  },
  {
    "source": "LEVENSLICHT",
    "target": "[ i miss your touch ] by PluginHUMAN.",
    "strength": 2
  },
  {
    "source": "LEVENSLICHT",
    "target": "Inhibition",
    "strength": 2
  },
  {
    "source": "LEVENSLICHT",
    "target": "Walk Walk Dance",
    "strength": 2
  },
  {
    "source": "Window into the Seas",
    "target": "Touching Night Skies 50°06'44\"N 8°40'36\"E",
    "strength": 2
  },
  {
    "source": "Window into the Seas",
    "target": "The Webster - Narrative Lighting Wall",
    "strength": 2
  },
  {
    "source": "Window into the Seas",
    "target": "Still Light",
    "strength": 2
  },
  {
    "source": "Window into the Seas",
    "target": "Para Social",
    "strength": 2
  },
  {
    "source": "Window into the Seas",
    "target": "Digital Phyllotaxy",
    "strength": 2
  },
  {
    "source": "Window into the Seas",
    "target": "ANTopolis",
    "strength": 2
  },
  {
    "source": "Window into the Seas",
    "target": "Helsinki Outlet",
    "strength": 2
  },
  {
    "source": "Window into the Seas",
    "target": "Chatty Bench Project: Radical Media Architecture in Precarious Times",
    "strength": 2
  },
  {
    "source": "Window into the Seas",
    "target": "Sleepers of Haslev",
    "strength": 2
  },
  {
    "source": "Window into the Seas",
    "target": "La Lune Est' / 'The Moon Is'",
    "strength": 2
  },
  {
    "source": "Window into the Seas",
    "target": "PO�ME D'�CRAN' / 'SCREEN POEM'",
    "strength": 2
  },
  {
    "source": "Window into the Seas",
    "target": "[ i miss your touch ] by PluginHUMAN.",
    "strength": 2
  },
  {
    "source": "Window into the Seas",
    "target": "Inhibition",
    "strength": 2
  },
  {
    "source": "Window into the Seas",
    "target": "Walk Walk Dance",
    "strength": 2
  },
  {
    "source": "Touching Night Skies 50°06'44\"N 8°40'36\"E",
    "target": "The Webster - Narrative Lighting Wall",
    "strength": 2
  },
  {
    "source": "Touching Night Skies 50°06'44\"N 8°40'36\"E",
    "target": "Still Light",
    "strength": 2
  },
  {
    "source": "Touching Night Skies 50°06'44\"N 8°40'36\"E",
    "target": "Para Social",
    "strength": 2
  },
  {
    "source": "Touching Night Skies 50°06'44\"N 8°40'36\"E",
    "target": "Digital Phyllotaxy",
    "strength": 2
  },
  {
    "source": "Touching Night Skies 50°06'44\"N 8°40'36\"E",
    "target": "ANTopolis",
    "strength": 2
  },
  {
    "source": "Touching Night Skies 50°06'44\"N 8°40'36\"E",
    "target": "Helsinki Outlet",
    "strength": 2
  },
  {
    "source": "Touching Night Skies 50°06'44\"N 8°40'36\"E",
    "target": "Chatty Bench Project: Radical Media Architecture in Precarious Times",
    "strength": 2
  },
  {
    "source": "Touching Night Skies 50°06'44\"N 8°40'36\"E",
    "target": "Sleepers of Haslev",
    "strength": 2
  },
  {
    "source": "Touching Night Skies 50°06'44\"N 8°40'36\"E",
    "target": "La Lune Est' / 'The Moon Is'",
    "strength": 2
  },
  {
    "source": "Touching Night Skies 50°06'44\"N 8°40'36\"E",
    "target": "PO�ME D'�CRAN' / 'SCREEN POEM'",
    "strength": 2
  },
  {
    "source": "Touching Night Skies 50°06'44\"N 8°40'36\"E",
    "target": "[ i miss your touch ] by PluginHUMAN.",
    "strength": 2
  },
  {
    "source": "Touching Night Skies 50°06'44\"N 8°40'36\"E",
    "target": "Inhibition",
    "strength": 2
  },
  {
    "source": "Touching Night Skies 50°06'44\"N 8°40'36\"E",
    "target": "Walk Walk Dance",
    "strength": 2
  },
  {
    "source": "The Webster - Narrative Lighting Wall",
    "target": "Still Light",
    "strength": 2
  },
  {
    "source": "The Webster - Narrative Lighting Wall",
    "target": "Para Social",
    "strength": 2
  },
  {
    "source": "The Webster - Narrative Lighting Wall",
    "target": "Digital Phyllotaxy",
    "strength": 2
  },
  {
    "source": "The Webster - Narrative Lighting Wall",
    "target": "ANTopolis",
    "strength": 2
  },
  {
    "source": "The Webster - Narrative Lighting Wall",
    "target": "Helsinki Outlet",
    "strength": 2
  },
  {
    "source": "The Webster - Narrative Lighting Wall",
    "target": "Chatty Bench Project: Radical Media Architecture in Precarious Times",
    "strength": 2
  },
  {
    "source": "The Webster - Narrative Lighting Wall",
    "target": "Sleepers of Haslev",
    "strength": 2
  },
  {
    "source": "The Webster - Narrative Lighting Wall",
    "target": "La Lune Est' / 'The Moon Is'",
    "strength": 2
  },
  {
    "source": "The Webster - Narrative Lighting Wall",
    "target": "PO�ME D'�CRAN' / 'SCREEN POEM'",
    "strength": 2
  },
  {
    "source": "The Webster - Narrative Lighting Wall",
    "target": "[ i miss your touch ] by PluginHUMAN.",
    "strength": 2
  },
  {
    "source": "The Webster - Narrative Lighting Wall",
    "target": "Inhibition",
    "strength": 2
  },
  {
    "source": "The Webster - Narrative Lighting Wall",
    "target": "Walk Walk Dance",
    "strength": 2
  },
  {
    "source": "Bahrain International Circuit",
    "target": "Guerrilha projections against Bolsonaro",
    "strength": 2
  },
  {
    "source": "Bahrain International Circuit",
    "target": "M+ Facade",
    "strength": 2
  },
  {
    "source": "Bahrain International Circuit",
    "target": "Peter Jones & Partners",
    "strength": 2
  },
  {
    "source": "Bahrain International Circuit",
    "target": "Chatty Bench Festival Community Media Visual Projections",
    "strength": 2
  },
  {
    "source": "Bahrain International Circuit",
    "target": "Greetings from Everywhere",
    "strength": 2
  },
  {
    "source": "Bahrain International Circuit",
    "target": "Wandering Corners",
    "strength": 2
  },
  {
    "source": "Bahrain International Circuit",
    "target": "High Speed Relations",
    "strength": 2
  },
  {
    "source": "Bahrain International Circuit",
    "target": "Sunscriber",
    "strength": 2
  },
  {
    "source": "Bahrain International Circuit",
    "target": "The Digital Bricks",
    "strength": 2
  },
  {
    "source": "Bahrain International Circuit",
    "target": "Shuttercam",
    "strength": 2
  },
  {
    "source": "Landscapes of Dreams",
    "target": "MAGIC MIRROR",
    "strength": 2
  },
  {
    "source": "Landscapes of Dreams",
    "target": "The Pipes",
    "strength": 2
  },
  {
    "source": "Landscapes of Dreams",
    "target": "Wervel [Turmoil]",
    "strength": 2
  },
  {
    "source": "Landscapes of Dreams",
    "target": "All Colors Are In The Lights",
    "strength": 2
  },
  {
    "source": "Landscapes of Dreams",
    "target": "La Sprite",
    "strength": 2
  },
  {
    "source": "Landscapes of Dreams",
    "target": "PASSAGES",
    "strength": 2
  },
  {
    "source": "Landscapes of Dreams",
    "target": "Wuhan Optics Valley Square Complex Theme Ground Sculpture",
    "strength": 2
  },
  {
    "source": "Landscapes of Dreams",
    "target": "Stadt der Temperamente",
    "strength": 2
  },
  {
    "source": "Landscapes of Dreams",
    "target": "Citizen Dialog Kit",
    "strength": 2
  },
  {
    "source": "INTERACTIVE CLOUD",
    "target": "Plant a Light",
    "strength": 2
  },
  {
    "source": "INTERACTIVE CLOUD",
    "target": "ARCHIVE DREAMING",
    "strength": 2
  },
  {
    "source": "INTERACTIVE CLOUD",
    "target": "LightSpell",
    "strength": 2
  },
  {
    "source": "INTERACTIVE CLOUD",
    "target": "Kipnes Lantern",
    "strength": 2
  },
  {
    "source": "INTERACTIVE CLOUD",
    "target": "Salling Lights",
    "strength": 2
  },
  {
    "source": "INTERACTIVE CLOUD",
    "target": "Digital Calligraffiti",
    "strength": 2
  },
  {
    "source": "INTERACTIVE CLOUD",
    "target": "Digital neighbourhood",
    "strength": 2
  },
  {
    "source": "INTERACTIVE CLOUD",
    "target": "Chave do Centro or \"The Key to Downtown",
    "strength": 2
  },
  {
    "source": "INTERACTIVE CLOUD",
    "target": "The Playground",
    "strength": 2
  },
  {
    "source": "MAGIC MIRROR",
    "target": "The Pipes",
    "strength": 2
  },
  {
    "source": "MAGIC MIRROR",
    "target": "Wervel [Turmoil]",
    "strength": 2
  },
  {
    "source": "MAGIC MIRROR",
    "target": "All Colors Are In The Lights",
    "strength": 2
  },
  {
    "source": "MAGIC MIRROR",
    "target": "La Sprite",
    "strength": 2
  },
  {
    "source": "MAGIC MIRROR",
    "target": "PASSAGES",
    "strength": 2
  },
  {
    "source": "MAGIC MIRROR",
    "target": "Wuhan Optics Valley Square Complex Theme Ground Sculpture",
    "strength": 2
  },
  {
    "source": "MAGIC MIRROR",
    "target": "Stadt der Temperamente",
    "strength": 2
  },
  {
    "source": "MAGIC MIRROR",
    "target": "Citizen Dialog Kit",
    "strength": 2
  },
  {
    "source": "The Pipes",
    "target": "Wervel [Turmoil]",
    "strength": 2
  },
  {
    "source": "The Pipes",
    "target": "All Colors Are In The Lights",
    "strength": 2
  },
  {
    "source": "The Pipes",
    "target": "La Sprite",
    "strength": 2
  },
  {
    "source": "The Pipes",
    "target": "PASSAGES",
    "strength": 2
  },
  {
    "source": "The Pipes",
    "target": "Wuhan Optics Valley Square Complex Theme Ground Sculpture",
    "strength": 2
  },
  {
    "source": "The Pipes",
    "target": "Stadt der Temperamente",
    "strength": 2
  },
  {
    "source": "The Pipes",
    "target": "Citizen Dialog Kit",
    "strength": 2
  },
  {
    "source": "Still Light",
    "target": "Para Social",
    "strength": 2
  },
  {
    "source": "Still Light",
    "target": "Digital Phyllotaxy",
    "strength": 2
  },
  {
    "source": "Still Light",
    "target": "ANTopolis",
    "strength": 2
  },
  {
    "source": "Still Light",
    "target": "Helsinki Outlet",
    "strength": 2
  },
  {
    "source": "Still Light",
    "target": "Chatty Bench Project: Radical Media Architecture in Precarious Times",
    "strength": 2
  },
  {
    "source": "Still Light",
    "target": "Sleepers of Haslev",
    "strength": 2
  },
  {
    "source": "Still Light",
    "target": "La Lune Est' / 'The Moon Is'",
    "strength": 2
  },
  {
    "source": "Still Light",
    "target": "PO�ME D'�CRAN' / 'SCREEN POEM'",
    "strength": 2
  },
  {
    "source": "Still Light",
    "target": "[ i miss your touch ] by PluginHUMAN.",
    "strength": 2
  },
  {
    "source": "Still Light",
    "target": "Inhibition",
    "strength": 2
  },
  {
    "source": "Still Light",
    "target": "Walk Walk Dance",
    "strength": 2
  },
  {
    "source": "Para Social",
    "target": "Digital Phyllotaxy",
    "strength": 2
  },
  {
    "source": "Para Social",
    "target": "ANTopolis",
    "strength": 2
  },
  {
    "source": "Para Social",
    "target": "Helsinki Outlet",
    "strength": 2
  },
  {
    "source": "Para Social",
    "target": "Chatty Bench Project: Radical Media Architecture in Precarious Times",
    "strength": 2
  },
  {
    "source": "Para Social",
    "target": "Sleepers of Haslev",
    "strength": 2
  },
  {
    "source": "Para Social",
    "target": "La Lune Est' / 'The Moon Is'",
    "strength": 2
  },
  {
    "source": "Para Social",
    "target": "PO�ME D'�CRAN' / 'SCREEN POEM'",
    "strength": 2
  },
  {
    "source": "Para Social",
    "target": "[ i miss your touch ] by PluginHUMAN.",
    "strength": 2
  },
  {
    "source": "Para Social",
    "target": "Inhibition",
    "strength": 2
  },
  {
    "source": "Para Social",
    "target": "Walk Walk Dance",
    "strength": 2
  },
  {
    "source": "Wervel [Turmoil]",
    "target": "All Colors Are In The Lights",
    "strength": 2
  },
  {
    "source": "Wervel [Turmoil]",
    "target": "La Sprite",
    "strength": 2
  },
  {
    "source": "Wervel [Turmoil]",
    "target": "PASSAGES",
    "strength": 2
  },
  {
    "source": "Wervel [Turmoil]",
    "target": "Wuhan Optics Valley Square Complex Theme Ground Sculpture",
    "strength": 2
  },
  {
    "source": "Wervel [Turmoil]",
    "target": "Stadt der Temperamente",
    "strength": 2
  },
  {
    "source": "Wervel [Turmoil]",
    "target": "Citizen Dialog Kit",
    "strength": 2
  },
  {
    "source": "Guerrilha projections against Bolsonaro",
    "target": "M+ Facade",
    "strength": 2
  },
  {
    "source": "Guerrilha projections against Bolsonaro",
    "target": "Peter Jones & Partners",
    "strength": 2
  },
  {
    "source": "Guerrilha projections against Bolsonaro",
    "target": "Chatty Bench Festival Community Media Visual Projections",
    "strength": 2
  },
  {
    "source": "Guerrilha projections against Bolsonaro",
    "target": "Greetings from Everywhere",
    "strength": 2
  },
  {
    "source": "Guerrilha projections against Bolsonaro",
    "target": "Wandering Corners",
    "strength": 2
  },
  {
    "source": "Guerrilha projections against Bolsonaro",
    "target": "High Speed Relations",
    "strength": 2
  },
  {
    "source": "Guerrilha projections against Bolsonaro",
    "target": "Sunscriber",
    "strength": 2
  },
  {
    "source": "Guerrilha projections against Bolsonaro",
    "target": "The Digital Bricks",
    "strength": 2
  },
  {
    "source": "Guerrilha projections against Bolsonaro",
    "target": "Shuttercam",
    "strength": 2
  },
  {
    "source": "M+ Facade",
    "target": "Peter Jones & Partners",
    "strength": 2
  },
  {
    "source": "M+ Facade",
    "target": "Chatty Bench Festival Community Media Visual Projections",
    "strength": 2
  },
  {
    "source": "M+ Facade",
    "target": "Greetings from Everywhere",
    "strength": 2
  },
  {
    "source": "M+ Facade",
    "target": "Wandering Corners",
    "strength": 2
  },
  {
    "source": "M+ Facade",
    "target": "High Speed Relations",
    "strength": 2
  },
  {
    "source": "M+ Facade",
    "target": "Sunscriber",
    "strength": 2
  },
  {
    "source": "M+ Facade",
    "target": "The Digital Bricks",
    "strength": 2
  },
  {
    "source": "M+ Facade",
    "target": "Shuttercam",
    "strength": 2
  },
  {
    "source": "Peter Jones & Partners",
    "target": "Chatty Bench Festival Community Media Visual Projections",
    "strength": 2
  },
  {
    "source": "Peter Jones & Partners",
    "target": "Greetings from Everywhere",
    "strength": 2
  },
  {
    "source": "Peter Jones & Partners",
    "target": "Wandering Corners",
    "strength": 2
  },
  {
    "source": "Peter Jones & Partners",
    "target": "High Speed Relations",
    "strength": 2
  },
  {
    "source": "Peter Jones & Partners",
    "target": "Sunscriber",
    "strength": 2
  },
  {
    "source": "Peter Jones & Partners",
    "target": "The Digital Bricks",
    "strength": 2
  },
  {
    "source": "Peter Jones & Partners",
    "target": "Shuttercam",
    "strength": 2
  },
  {
    "source": "Digital Phyllotaxy",
    "target": "ANTopolis",
    "strength": 2
  },
  {
    "source": "Digital Phyllotaxy",
    "target": "Helsinki Outlet",
    "strength": 2
  },
  {
    "source": "Digital Phyllotaxy",
    "target": "Chatty Bench Project: Radical Media Architecture in Precarious Times",
    "strength": 2
  },
  {
    "source": "Digital Phyllotaxy",
    "target": "Sleepers of Haslev",
    "strength": 2
  },
  {
    "source": "Digital Phyllotaxy",
    "target": "La Lune Est' / 'The Moon Is'",
    "strength": 2
  },
  {
    "source": "Digital Phyllotaxy",
    "target": "PO�ME D'�CRAN' / 'SCREEN POEM'",
    "strength": 2
  },
  {
    "source": "Digital Phyllotaxy",
    "target": "[ i miss your touch ] by PluginHUMAN.",
    "strength": 2
  },
  {
    "source": "Digital Phyllotaxy",
    "target": "Inhibition",
    "strength": 2
  },
  {
    "source": "Digital Phyllotaxy",
    "target": "Walk Walk Dance",
    "strength": 2
  },
  {
    "source": "Macula",
    "target": "ZIEN",
    "strength": 2
  },
  {
    "source": "Macula",
    "target": "ZOE",
    "strength": 2
  },
  {
    "source": "Macula",
    "target": "Ecran de Veille / Screen Savour",
    "strength": 2
  },
  {
    "source": "Macula",
    "target": "The Cellular Fidelity",
    "strength": 2
  },
  {
    "source": "Macula",
    "target": "Orlando International Airport Terminal C",
    "strength": 2
  },
  {
    "source": "Macula",
    "target": "The Eye of Mexico",
    "strength": 2
  },
  {
    "source": "Macula",
    "target": "�Room of Negotiation�",
    "strength": 2
  },
  {
    "source": "Macula",
    "target": "Light Falls",
    "strength": 2
  },
  {
    "source": "Macula",
    "target": "Commons Sense, Manifesta 14",
    "strength": 2
  },
  {
    "source": "ZIEN",
    "target": "ZOE",
    "strength": 2
  },
  {
    "source": "ZIEN",
    "target": "Ecran de Veille / Screen Savour",
    "strength": 2
  },
  {
    "source": "ZIEN",
    "target": "The Cellular Fidelity",
    "strength": 2
  },
  {
    "source": "ZIEN",
    "target": "Orlando International Airport Terminal C",
    "strength": 2
  },
  {
    "source": "ZIEN",
    "target": "The Eye of Mexico",
    "strength": 2
  },
  {
    "source": "ZIEN",
    "target": "�Room of Negotiation�",
    "strength": 2
  },
  {
    "source": "ZIEN",
    "target": "Light Falls",
    "strength": 2
  },
  {
    "source": "ZIEN",
    "target": "Commons Sense, Manifesta 14",
    "strength": 2
  },
  {
    "source": "ZOE",
    "target": "Ecran de Veille / Screen Savour",
    "strength": 2
  },
  {
    "source": "ZOE",
    "target": "The Cellular Fidelity",
    "strength": 2
  },
  {
    "source": "ZOE",
    "target": "Orlando International Airport Terminal C",
    "strength": 2
  },
  {
    "source": "ZOE",
    "target": "The Eye of Mexico",
    "strength": 2
  },
  {
    "source": "ZOE",
    "target": "�Room of Negotiation�",
    "strength": 2
  },
  {
    "source": "ZOE",
    "target": "Light Falls",
    "strength": 2
  },
  {
    "source": "ZOE",
    "target": "Commons Sense, Manifesta 14",
    "strength": 2
  },
  {
    "source": "Ecran de Veille / Screen Savour",
    "target": "The Cellular Fidelity",
    "strength": 2
  },
  {
    "source": "Ecran de Veille / Screen Savour",
    "target": "Orlando International Airport Terminal C",
    "strength": 2
  },
  {
    "source": "Ecran de Veille / Screen Savour",
    "target": "The Eye of Mexico",
    "strength": 2
  },
  {
    "source": "Ecran de Veille / Screen Savour",
    "target": "�Room of Negotiation�",
    "strength": 2
  },
  {
    "source": "Ecran de Veille / Screen Savour",
    "target": "Light Falls",
    "strength": 2
  },
  {
    "source": "Ecran de Veille / Screen Savour",
    "target": "Commons Sense, Manifesta 14",
    "strength": 2
  },
  {
    "source": "Chatty Bench Festival Community Media Visual Projections",
    "target": "Greetings from Everywhere",
    "strength": 2
  },
  {
    "source": "Chatty Bench Festival Community Media Visual Projections",
    "target": "Wandering Corners",
    "strength": 2
  },
  {
    "source": "Chatty Bench Festival Community Media Visual Projections",
    "target": "High Speed Relations",
    "strength": 2
  },
  {
    "source": "Chatty Bench Festival Community Media Visual Projections",
    "target": "Sunscriber",
    "strength": 2
  },
  {
    "source": "Chatty Bench Festival Community Media Visual Projections",
    "target": "The Digital Bricks",
    "strength": 2
  },
  {
    "source": "Chatty Bench Festival Community Media Visual Projections",
    "target": "Shuttercam",
    "strength": 2
  },
  {
    "source": "The Cellular Fidelity",
    "target": "Orlando International Airport Terminal C",
    "strength": 2
  },
  {
    "source": "The Cellular Fidelity",
    "target": "The Eye of Mexico",
    "strength": 2
  },
  {
    "source": "The Cellular Fidelity",
    "target": "�Room of Negotiation�",
    "strength": 2
  },
  {
    "source": "The Cellular Fidelity",
    "target": "Light Falls",
    "strength": 2
  },
  {
    "source": "The Cellular Fidelity",
    "target": "Commons Sense, Manifesta 14",
    "strength": 2
  },
  {
    "source": "Orlando International Airport Terminal C",
    "target": "The Eye of Mexico",
    "strength": 2
  },
  {
    "source": "Orlando International Airport Terminal C",
    "target": "�Room of Negotiation�",
    "strength": 2
  },
  {
    "source": "Orlando International Airport Terminal C",
    "target": "Light Falls",
    "strength": 2
  },
  {
    "source": "Orlando International Airport Terminal C",
    "target": "Commons Sense, Manifesta 14",
    "strength": 2
  },
  {
    "source": "The Eye of Mexico",
    "target": "�Room of Negotiation�",
    "strength": 2
  },
  {
    "source": "The Eye of Mexico",
    "target": "Light Falls",
    "strength": 2
  },
  {
    "source": "The Eye of Mexico",
    "target": "Commons Sense, Manifesta 14",
    "strength": 2
  },
  {
    "source": "�Room of Negotiation�",
    "target": "Light Falls",
    "strength": 2
  },
  {
    "source": "�Room of Negotiation�",
    "target": "Commons Sense, Manifesta 14",
    "strength": 2
  },
  {
    "source": "Light Falls",
    "target": "Commons Sense, Manifesta 14",
    "strength": 2
  },
  {
    "source": "ANTopolis",
    "target": "Helsinki Outlet",
    "strength": 2
  },
  {
    "source": "ANTopolis",
    "target": "Chatty Bench Project: Radical Media Architecture in Precarious Times",
    "strength": 2
  },
  {
    "source": "ANTopolis",
    "target": "Sleepers of Haslev",
    "strength": 2
  },
  {
    "source": "ANTopolis",
    "target": "La Lune Est' / 'The Moon Is'",
    "strength": 2
  },
  {
    "source": "ANTopolis",
    "target": "PO�ME D'�CRAN' / 'SCREEN POEM'",
    "strength": 2
  },
  {
    "source": "ANTopolis",
    "target": "[ i miss your touch ] by PluginHUMAN.",
    "strength": 2
  },
  {
    "source": "ANTopolis",
    "target": "Inhibition",
    "strength": 2
  },
  {
    "source": "ANTopolis",
    "target": "Walk Walk Dance",
    "strength": 2
  },
  {
    "source": "Helsinki Outlet",
    "target": "Chatty Bench Project: Radical Media Architecture in Precarious Times",
    "strength": 2
  },
  {
    "source": "Helsinki Outlet",
    "target": "Sleepers of Haslev",
    "strength": 2
  },
  {
    "source": "Helsinki Outlet",
    "target": "La Lune Est' / 'The Moon Is'",
    "strength": 2
  },
  {
    "source": "Helsinki Outlet",
    "target": "PO�ME D'�CRAN' / 'SCREEN POEM'",
    "strength": 2
  },
  {
    "source": "Helsinki Outlet",
    "target": "[ i miss your touch ] by PluginHUMAN.",
    "strength": 2
  },
  {
    "source": "Helsinki Outlet",
    "target": "Inhibition",
    "strength": 2
  },
  {
    "source": "Helsinki Outlet",
    "target": "Walk Walk Dance",
    "strength": 2
  },
  {
    "source": "All Colors Are In The Lights",
    "target": "La Sprite",
    "strength": 2
  },
  {
    "source": "All Colors Are In The Lights",
    "target": "PASSAGES",
    "strength": 2
  },
  {
    "source": "All Colors Are In The Lights",
    "target": "Wuhan Optics Valley Square Complex Theme Ground Sculpture",
    "strength": 2
  },
  {
    "source": "All Colors Are In The Lights",
    "target": "Stadt der Temperamente",
    "strength": 2
  },
  {
    "source": "All Colors Are In The Lights",
    "target": "Citizen Dialog Kit",
    "strength": 2
  },
  {
    "source": "Greetings from Everywhere",
    "target": "Wandering Corners",
    "strength": 2
  },
  {
    "source": "Greetings from Everywhere",
    "target": "High Speed Relations",
    "strength": 2
  },
  {
    "source": "Greetings from Everywhere",
    "target": "Sunscriber",
    "strength": 2
  },
  {
    "source": "Greetings from Everywhere",
    "target": "The Digital Bricks",
    "strength": 2
  },
  {
    "source": "Greetings from Everywhere",
    "target": "Shuttercam",
    "strength": 2
  },
  {
    "source": "Wandering Corners",
    "target": "High Speed Relations",
    "strength": 2
  },
  {
    "source": "Wandering Corners",
    "target": "Sunscriber",
    "strength": 2
  },
  {
    "source": "Wandering Corners",
    "target": "The Digital Bricks",
    "strength": 2
  },
  {
    "source": "Wandering Corners",
    "target": "Shuttercam",
    "strength": 2
  },
  {
    "source": "High Speed Relations",
    "target": "Sunscriber",
    "strength": 2
  },
  {
    "source": "High Speed Relations",
    "target": "The Digital Bricks",
    "strength": 2
  },
  {
    "source": "High Speed Relations",
    "target": "Shuttercam",
    "strength": 2
  },
  {
    "source": "Sunscriber",
    "target": "The Digital Bricks",
    "strength": 2
  },
  {
    "source": "Sunscriber",
    "target": "Shuttercam",
    "strength": 2
  },
  {
    "source": "False Positive",
    "target": "The Light House: 888 Collins St",
    "strength": 2
  },
  {
    "source": "Plant a Light",
    "target": "ARCHIVE DREAMING",
    "strength": 2
  },
  {
    "source": "Plant a Light",
    "target": "LightSpell",
    "strength": 2
  },
  {
    "source": "Plant a Light",
    "target": "Kipnes Lantern",
    "strength": 2
  },
  {
    "source": "Plant a Light",
    "target": "Salling Lights",
    "strength": 2
  },
  {
    "source": "Plant a Light",
    "target": "Digital Calligraffiti",
    "strength": 2
  },
  {
    "source": "Plant a Light",
    "target": "Digital neighbourhood",
    "strength": 2
  },
  {
    "source": "Plant a Light",
    "target": "Chave do Centro or \"The Key to Downtown",
    "strength": 2
  },
  {
    "source": "Plant a Light",
    "target": "The Playground",
    "strength": 2
  },
  {
    "source": "The Digital Bricks",
    "target": "Shuttercam",
    "strength": 2
  },
  {
    "source": "La Sprite",
    "target": "PASSAGES",
    "strength": 2
  },
  {
    "source": "La Sprite",
    "target": "Wuhan Optics Valley Square Complex Theme Ground Sculpture",
    "strength": 2
  },
  {
    "source": "La Sprite",
    "target": "Stadt der Temperamente",
    "strength": 2
  },
  {
    "source": "La Sprite",
    "target": "Citizen Dialog Kit",
    "strength": 2
  },
  {
    "source": "PASSAGES",
    "target": "Wuhan Optics Valley Square Complex Theme Ground Sculpture",
    "strength": 2
  },
  {
    "source": "PASSAGES",
    "target": "Stadt der Temperamente",
    "strength": 2
  },
  {
    "source": "PASSAGES",
    "target": "Citizen Dialog Kit",
    "strength": 2
  },
  {
    "source": "ARCHIVE DREAMING",
    "target": "LightSpell",
    "strength": 2
  },
  {
    "source": "ARCHIVE DREAMING",
    "target": "Kipnes Lantern",
    "strength": 2
  },
  {
    "source": "ARCHIVE DREAMING",
    "target": "Salling Lights",
    "strength": 2
  },
  {
    "source": "ARCHIVE DREAMING",
    "target": "Digital Calligraffiti",
    "strength": 2
  },
  {
    "source": "ARCHIVE DREAMING",
    "target": "Digital neighbourhood",
    "strength": 2
  },
  {
    "source": "ARCHIVE DREAMING",
    "target": "Chave do Centro or \"The Key to Downtown",
    "strength": 2
  },
  {
    "source": "ARCHIVE DREAMING",
    "target": "The Playground",
    "strength": 2
  },
  {
    "source": "Northside Beacons",
    "target": "LightLines",
    "strength": 2
  },
  {
    "source": "Northside Beacons",
    "target": "Arena",
    "strength": 2
  },
  {
    "source": "Northside Beacons",
    "target": "Monument Remix",
    "strength": 2
  },
  {
    "source": "Northside Beacons",
    "target": "Federation Square Digital Canvas",
    "strength": 2
  },
  {
    "source": "Northside Beacons",
    "target": "Yagan Square",
    "strength": 2
  },
  {
    "source": "Northside Beacons",
    "target": "Smog Free Project",
    "strength": 2
  },
  {
    "source": "Northside Beacons",
    "target": "BioLumen",
    "strength": 2
  },
  {
    "source": "Northside Beacons",
    "target": "Yellow Dust",
    "strength": 2
  },
  {
    "source": "Northside Beacons",
    "target": "Dragon Scale",
    "strength": 2
  },
  {
    "source": "Northside Beacons",
    "target": "Gibigiana",
    "strength": 2
  },
  {
    "source": "LightSpell",
    "target": "Kipnes Lantern",
    "strength": 2
  },
  {
    "source": "LightSpell",
    "target": "Salling Lights",
    "strength": 2
  },
  {
    "source": "LightSpell",
    "target": "Digital Calligraffiti",
    "strength": 2
  },
  {
    "source": "LightSpell",
    "target": "Digital neighbourhood",
    "strength": 2
  },
  {
    "source": "LightSpell",
    "target": "Chave do Centro or \"The Key to Downtown",
    "strength": 2
  },
  {
    "source": "LightSpell",
    "target": "The Playground",
    "strength": 2
  },
  {
    "source": "LightLines",
    "target": "Arena",
    "strength": 2
  },
  {
    "source": "LightLines",
    "target": "Monument Remix",
    "strength": 2
  },
  {
    "source": "LightLines",
    "target": "Federation Square Digital Canvas",
    "strength": 2
  },
  {
    "source": "LightLines",
    "target": "Yagan Square",
    "strength": 2
  },
  {
    "source": "LightLines",
    "target": "Smog Free Project",
    "strength": 2
  },
  {
    "source": "LightLines",
    "target": "BioLumen",
    "strength": 2
  },
  {
    "source": "LightLines",
    "target": "Yellow Dust",
    "strength": 2
  },
  {
    "source": "LightLines",
    "target": "Dragon Scale",
    "strength": 2
  },
  {
    "source": "LightLines",
    "target": "Gibigiana",
    "strength": 2
  },
  {
    "source": "Kipnes Lantern",
    "target": "Salling Lights",
    "strength": 2
  },
  {
    "source": "Kipnes Lantern",
    "target": "Digital Calligraffiti",
    "strength": 2
  },
  {
    "source": "Kipnes Lantern",
    "target": "Digital neighbourhood",
    "strength": 2
  },
  {
    "source": "Kipnes Lantern",
    "target": "Chave do Centro or \"The Key to Downtown",
    "strength": 2
  },
  {
    "source": "Kipnes Lantern",
    "target": "The Playground",
    "strength": 2
  },
  {
    "source": "Arena",
    "target": "Monument Remix",
    "strength": 2
  },
  {
    "source": "Arena",
    "target": "Federation Square Digital Canvas",
    "strength": 2
  },
  {
    "source": "Arena",
    "target": "Yagan Square",
    "strength": 2
  },
  {
    "source": "Arena",
    "target": "Smog Free Project",
    "strength": 2
  },
  {
    "source": "Arena",
    "target": "BioLumen",
    "strength": 2
  },
  {
    "source": "Arena",
    "target": "Yellow Dust",
    "strength": 2
  },
  {
    "source": "Arena",
    "target": "Dragon Scale",
    "strength": 2
  },
  {
    "source": "Arena",
    "target": "Gibigiana",
    "strength": 2
  },
  {
    "source": "Salling Lights",
    "target": "Digital Calligraffiti",
    "strength": 2
  },
  {
    "source": "Salling Lights",
    "target": "Digital neighbourhood",
    "strength": 2
  },
  {
    "source": "Salling Lights",
    "target": "Chave do Centro or \"The Key to Downtown",
    "strength": 2
  },
  {
    "source": "Salling Lights",
    "target": "The Playground",
    "strength": 2
  },
  {
    "source": "Digital Calligraffiti",
    "target": "Digital neighbourhood",
    "strength": 2
  },
  {
    "source": "Digital Calligraffiti",
    "target": "Chave do Centro or \"The Key to Downtown",
    "strength": 2
  },
  {
    "source": "Digital Calligraffiti",
    "target": "The Playground",
    "strength": 2
  },
  {
    "source": "Monument Remix",
    "target": "Federation Square Digital Canvas",
    "strength": 2
  },
  {
    "source": "Monument Remix",
    "target": "Yagan Square",
    "strength": 2
  },
  {
    "source": "Monument Remix",
    "target": "Smog Free Project",
    "strength": 2
  },
  {
    "source": "Monument Remix",
    "target": "BioLumen",
    "strength": 2
  },
  {
    "source": "Monument Remix",
    "target": "Yellow Dust",
    "strength": 2
  },
  {
    "source": "Monument Remix",
    "target": "Dragon Scale",
    "strength": 2
  },
  {
    "source": "Monument Remix",
    "target": "Gibigiana",
    "strength": 2
  },
  {
    "source": "Federation Square Digital Canvas",
    "target": "Yagan Square",
    "strength": 2
  },
  {
    "source": "Federation Square Digital Canvas",
    "target": "Smog Free Project",
    "strength": 2
  },
  {
    "source": "Federation Square Digital Canvas",
    "target": "BioLumen",
    "strength": 2
  },
  {
    "source": "Federation Square Digital Canvas",
    "target": "Yellow Dust",
    "strength": 2
  },
  {
    "source": "Federation Square Digital Canvas",
    "target": "Dragon Scale",
    "strength": 2
  },
  {
    "source": "Federation Square Digital Canvas",
    "target": "Gibigiana",
    "strength": 2
  },
  {
    "source": "Yagan Square",
    "target": "Smog Free Project",
    "strength": 2
  },
  {
    "source": "Yagan Square",
    "target": "BioLumen",
    "strength": 2
  },
  {
    "source": "Yagan Square",
    "target": "Yellow Dust",
    "strength": 2
  },
  {
    "source": "Yagan Square",
    "target": "Dragon Scale",
    "strength": 2
  },
  {
    "source": "Yagan Square",
    "target": "Gibigiana",
    "strength": 2
  },
  {
    "source": "Smog Free Project",
    "target": "BioLumen",
    "strength": 2
  },
  {
    "source": "Smog Free Project",
    "target": "Yellow Dust",
    "strength": 2
  },
  {
    "source": "Smog Free Project",
    "target": "Dragon Scale",
    "strength": 2
  },
  {
    "source": "Smog Free Project",
    "target": "Gibigiana",
    "strength": 2
  },
  {
    "source": "Digital neighbourhood",
    "target": "Chave do Centro or \"The Key to Downtown",
    "strength": 2
  },
  {
    "source": "Digital neighbourhood",
    "target": "The Playground",
    "strength": 2
  },
  {
    "source": "Chave do Centro or \"The Key to Downtown",
    "target": "The Playground",
    "strength": 2
  },
  {
    "source": "BioLumen",
    "target": "Yellow Dust",
    "strength": 2
  },
  {
    "source": "BioLumen",
    "target": "Dragon Scale",
    "strength": 2
  },
  {
    "source": "BioLumen",
    "target": "Gibigiana",
    "strength": 2
  },
  {
    "source": "Yellow Dust",
    "target": "Dragon Scale",
    "strength": 2
  },
  {
    "source": "Yellow Dust",
    "target": "Gibigiana",
    "strength": 2
  },
  {
    "source": "Dragon Scale",
    "target": "Gibigiana",
    "strength": 2
  },
  {
    "source": "Chatty Bench Project: Radical Media Architecture in Precarious Times",
    "target": "Sleepers of Haslev",
    "strength": 2
  },
  {
    "source": "Chatty Bench Project: Radical Media Architecture in Precarious Times",
    "target": "La Lune Est' / 'The Moon Is'",
    "strength": 2
  },
  {
    "source": "Chatty Bench Project: Radical Media Architecture in Precarious Times",
    "target": "PO�ME D'�CRAN' / 'SCREEN POEM'",
    "strength": 2
  },
  {
    "source": "Chatty Bench Project: Radical Media Architecture in Precarious Times",
    "target": "[ i miss your touch ] by PluginHUMAN.",
    "strength": 2
  },
  {
    "source": "Chatty Bench Project: Radical Media Architecture in Precarious Times",
    "target": "Inhibition",
    "strength": 2
  },
  {
    "source": "Chatty Bench Project: Radical Media Architecture in Precarious Times",
    "target": "Walk Walk Dance",
    "strength": 2
  },
  {
    "source": "Sleepers of Haslev",
    "target": "La Lune Est' / 'The Moon Is'",
    "strength": 2
  },
  {
    "source": "Sleepers of Haslev",
    "target": "PO�ME D'�CRAN' / 'SCREEN POEM'",
    "strength": 2
  },
  {
    "source": "Sleepers of Haslev",
    "target": "[ i miss your touch ] by PluginHUMAN.",
    "strength": 2
  },
  {
    "source": "Sleepers of Haslev",
    "target": "Inhibition",
    "strength": 2
  },
  {
    "source": "Sleepers of Haslev",
    "target": "Walk Walk Dance",
    "strength": 2
  },
  {
    "source": "Wuhan Optics Valley Square Complex Theme Ground Sculpture",
    "target": "Stadt der Temperamente",
    "strength": 2
  },
  {
    "source": "Wuhan Optics Valley Square Complex Theme Ground Sculpture",
    "target": "Citizen Dialog Kit",
    "strength": 2
  },
  {
    "source": "La Lune Est' / 'The Moon Is'",
    "target": "PO�ME D'�CRAN' / 'SCREEN POEM'",
    "strength": 2
  },
  {
    "source": "La Lune Est' / 'The Moon Is'",
    "target": "[ i miss your touch ] by PluginHUMAN.",
    "strength": 2
  },
  {
    "source": "La Lune Est' / 'The Moon Is'",
    "target": "Inhibition",
    "strength": 2
  },
  {
    "source": "La Lune Est' / 'The Moon Is'",
    "target": "Walk Walk Dance",
    "strength": 2
  },
  {
    "source": "PO�ME D'�CRAN' / 'SCREEN POEM'",
    "target": "[ i miss your touch ] by PluginHUMAN.",
    "strength": 2
  },
  {
    "source": "PO�ME D'�CRAN' / 'SCREEN POEM'",
    "target": "Inhibition",
    "strength": 2
  },
  {
    "source": "PO�ME D'�CRAN' / 'SCREEN POEM'",
    "target": "Walk Walk Dance",
    "strength": 2
  },
  {
    "source": "[ i miss your touch ] by PluginHUMAN.",
    "target": "Inhibition",
    "strength": 2
  },
  {
    "source": "[ i miss your touch ] by PluginHUMAN.",
    "target": "Walk Walk Dance",
    "strength": 2
  },
  {
    "source": "Inhibition",
    "target": "Walk Walk Dance",
    "strength": 2
  },
  {
    "source": "Stadt der Temperamente",
    "target": "Citizen Dialog Kit",
    "strength": 2
  }
]
]

// Utility functions for data processing
export const graphUtils = {
  
  // Validate graph data structure
  validateGraphData: (nodes, links) => {
    const nodeIds = new Set(nodes.map(node => node.id));
    const invalidLinks = links.filter(link => 
      !nodeIds.has(link.source) || !nodeIds.has(link.target)
    );
    
    if (invalidLinks.length > 0) {
      console.warn('Invalid links found:', invalidLinks);
      return false;
    }
    return true;
  },

  // Generate random graph data
  generateRandomGraph: (nodeCount = 10, linkDensity = 0.3) => {
    const nodes = [];
    const links = [];
    
    // Generate nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        id: `Node-${i}`,
        group: Math.floor(Math.random() * 4) + 1,
        size: Math.random() * 15 + 8,
        description: `Random Node ${i}`
      });
    }
    
    // Generate links
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (Math.random() < linkDensity) {
          links.push({
            source: `Node-${i}`,
            target: `Node-${j}`,
            strength: Math.random() * 1.5 + 0.5
          });
        }
      }
    }
    
    return { nodes, links };
  },

  // Calculate graph statistics
  getGraphStats: (nodes, links) => {
    const nodeCount = nodes.length;
    const linkCount = links.length;
    const density = (2 * linkCount) / (nodeCount * (nodeCount - 1));
    
    // Calculate degree for each node
    const degrees = {};
    nodes.forEach(node => degrees[node.id] = 0);
    
    links.forEach(link => {
      degrees[link.source] = (degrees[link.source] || 0) + 1;
      degrees[link.target] = (degrees[link.target] || 0) + 1;
    });
    
    const avgDegree = Object.values(degrees).reduce((a, b) => a + b, 0) / nodeCount;
    const maxDegree = Math.max(...Object.values(degrees));
    const minDegree = Math.min(...Object.values(degrees));
    
    return {
      nodeCount,
      linkCount,
      density: density.toFixed(3),
      avgDegree: avgDegree.toFixed(2),
      maxDegree,
      minDegree
    };
  },

  // Filter nodes by group
  filterByGroup: (nodes, links, groupIds) => {
    const filteredNodes = nodes.filter(node => groupIds.includes(node.group));
    const nodeIds = new Set(filteredNodes.map(node => node.id));
    const filteredLinks = links.filter(link => 
      nodeIds.has(link.source) && nodeIds.has(link.target)
    );
    
    return { nodes: filteredNodes, links: filteredLinks };
  },

  // Add new node to existing graph
  addNode: (nodes, newNode) => {
    if (nodes.find(node => node.id === newNode.id)) {
      console.warn(`Node with id ${newNode.id} already exists`);
      return nodes;
    }
    return [...nodes, newNode];
  },

  // Add new link to existing graph
  addLink: (links, newLink, nodes) => {
    const nodeIds = new Set(nodes.map(node => node.id));
    if (!nodeIds.has(newLink.source) || !nodeIds.has(newLink.target)) {
      console.warn('Invalid link: source or target node does not exist');
      return links;
    }
    
    // Check if link already exists
    const linkExists = links.find(link => 
      (link.source === newLink.source && link.target === newLink.target) ||
      (link.source === newLink.target && link.target === newLink.source)
    );
    
    if (linkExists) {
      console.warn('Link already exists');
      return links;
    }
    
    return [...links, newLink];
  },

  // Remove node and associated links
  removeNode: (nodes, links, nodeId) => {
    const filteredNodes = nodes.filter(node => node.id !== nodeId);
    const filteredLinks = links.filter(link => 
      link.source !== nodeId && link.target !== nodeId
    );
    
    return { nodes: filteredNodes, links: filteredLinks };
  },

  // Convert adjacency list to nodes/links format
  fromAdjacencyList: (adjList) => {
    const nodes = Object.keys(adjList).map(id => ({
      id,
      group: 1,
      size: 15,
      description: `Node ${id}`
    }));
    
    const links = [];
    Object.entries(adjList).forEach(([source, targets]) => {
      targets.forEach(target => {
        // Avoid duplicate links (undirected graph)
        if (source < target) {
          links.push({
            source,
            target,
            strength: 1
          });
        }
      });
    });
    
    return { nodes, links };
  },

  // Convert to adjacency list format
  toAdjacencyList: (nodes, links) => {
    const adjList = {};
    
    // Initialize with all nodes
    nodes.forEach(node => {
      adjList[node.id] = [];
    });
    
    // Add links
    links.forEach(link => {
      adjList[link.source].push(link.target);
      adjList[link.target].push(link.source);
    });
    
    return adjList;
  },

  // Find shortest path between two nodes (BFS)
  findShortestPath: (nodes, links, startId, endId) => {
    const adjList = graphUtils.toAdjacencyList(nodes, links);
    const queue = [startId];
    const visited = new Set([startId]);
    const parent = { [startId]: null };
    
    while (queue.length > 0) {
      const current = queue.shift();
      
      if (current === endId) {
        // Reconstruct path
        const path = [];
        let node = endId;
        while (node !== null) {
          path.unshift(node);
          node = parent[node];
        }
        return path;
      }
      
      adjList[current].forEach(neighbor => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          parent[neighbor] = current;
          queue.push(neighbor);
        }
      });
    }
    
    return null; // No path found
  },

  // Find all connected components
  findConnectedComponents: (nodes, links) => {
    const adjList = graphUtils.toAdjacencyList(nodes, links);
    const visited = new Set();
    const components = [];
    
    const dfs = (nodeId, component) => {
      visited.add(nodeId);
      component.push(nodeId);
      
      adjList[nodeId].forEach(neighbor => {
        if (!visited.has(neighbor)) {
          dfs(neighbor, component);
        }
      });
    };
    
    nodes.forEach(node => {
      if (!visited.has(node.id)) {
        const component = [];
        dfs(node.id, component);
        components.push(component);
      }
    });
    
    return components;
  }
};

// Color schemes for different themes
export const colorSchemes = {
  default: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FECA57", "#FF9FF3"],
  corporate: ["#2E86AB", "#A23B72", "#F18F01", "#C73E1D", "#592941", "#F2F1F0"],
  nature: ["#4E6E58", "#7FB069", "#A7D129", "#D4E157", "#8BC34A", "#CDDC39"],
  ocean: ["#003f5c", "#2f4b7c", "#665191", "#a05195", "#d45087", "#f95d6a"],
  sunset: ["#FF6B35", "#F7931E", "#FFD23F", "#06FFA5", "#118AB2", "#073B4C"]
};

// Graph layout presets
export const layoutPresets = {
  default: {
    chargeStrength: 100,
    linkStrength: 1,
    centerStrength: 0.3,
    collisionRadius: 5
  },
  tight: {
    chargeStrength: 50,
    linkStrength: 1.5,
    centerStrength: 0.5,
    collisionRadius: 3
  },
  loose: {
    chargeStrength: 200,
    linkStrength: 0.5,
    centerStrength: 0.1,
    collisionRadius: 10
  },
  star: {
    chargeStrength: 150,
    linkStrength: 2,
    centerStrength: 0.8,
    collisionRadius: 5
  }
};