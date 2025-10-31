// This file is use to filter node and links with the tags we selected

export default function FilterData (
    nodes,
    countryNodes,
    links,
    tag
) {
    // Normalize tags for people/project nodes
    const normalizedNodes = nodes.map(node => {
        let tagsArr = [];
        if (node.tag) {
            tagsArr = node.tag
                .split(/[#,']/)
                .map(item => item.trim().toLowerCase())
                .filter(Boolean);
        }
        return { ...node, tags: tagsArr };
    });

    // Combine nodes and deduplicate by id
    const combinedNodesMap = new Map();
    // Combining the countryNodes and the PeopleNodes together
    [...normalizedNodes, ...countryNodes].forEach(node => {
        if (node.id) {
            // If the ID hasn't been seen before, it will be added to the set
            combinedNodesMap.set(node.id, node);
        }
    });
    // Turning combine node into Array
    const combinedNodes = Array.from(combinedNodesMap.values());

    // If no filter, show everything
    if (!tag) {
        return{nodes, links}
    }

    // Identify primary nodes
    const primaryNodeIds = new Set();

    // --- Filter: add nodes with the tag ---
    if (tag) {
        const cleanTag = tag.toLowerCase().trim();
        normalizedNodes.forEach(node => {
            if (node.tags && node.tags.some(tag => tag.toLowerCase() === cleanTag)) {
                primaryNodeIds.add(node.id);
            }
        });
    }

    // Expand: Include nodes connected to primary nodes
    const connectedNodeIds = new Set(primaryNodeIds);
    links.forEach(link => {
        if (primaryNodeIds.has(link.source)) connectedNodeIds.add(link.target);
        if (primaryNodeIds.has(link.target)) connectedNodeIds.add(link.source);
    });

    // Filter links
    const visibleNodes = combinedNodes.filter(node => connectedNodeIds.has(node.id));
    const visibleLinks = links.filter(
        link => connectedNodeIds.has(link.source) && connectedNodeIds.has(link.target)
    );

    return {nodes: visibleNodes, links: visibleLinks};
};