// Add new data here
// graphData.js - Data and utility functions for the force-directed graph
// Utility functions for data processing
export const nodes = import("../data/NodeData.json");
export const links = import('../data/LinkData.json');
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