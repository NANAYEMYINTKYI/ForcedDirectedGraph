export default function FilterData (
    nodes,
    countryNodes,
    links,
    filterTag,
    filterCountry
) {
    // Normalize tags for people/project nodes
        const normalizedNodes = nodes.map(node => {
            let tagsArr = [];
            if (Array.isArray(node.tags)) {
                tagsArr = node.tags.map(tag => tag.toLowerCase());
            } else if (typeof node.tag === 'string') {
                tagsArr = node.tag
                    .split(/[#,']/)
                    .map(item => item.trim().toLowerCase())
                    .filter(Boolean);
            }
            return { ...node, tags: tagsArr };
        });

        // Combine nodes and deduplicate by id
        const combinedNodesMap = new Map();
        [...normalizedNodes, ...countryNodes].forEach(node => {
            if (node.id) combinedNodesMap.set(node.id, node);
        });
        const combinedNodes = Array.from(combinedNodesMap.values());

        // If no filter, show everything
        if (!filterTag && !filterCountry) {
            return{nodes: combinedNodes, links}
        }

       // Step 1: Identify primary nodes
        const primaryNodeIds = new Set();

        // --- Tag filter: add nodes with the tag ---
        if (filterTag) {
            const cleanTag = filterTag.toLowerCase().trim();
            normalizedNodes.forEach(node => {
                if (node.tags && node.tags.some(tag => tag.toLowerCase() === cleanTag)) {
                    primaryNodeIds.add(node.id);
                }
            });
        }

        // --- Country filter: add the country node + all connected project nodes ---
       if (filterCountry) {
            const cleanCountry = filterCountry.toLowerCase().trim();
            normalizedNodes.forEach(node => {
                // Assuming node has a property like node.country or a tag with country
                if ((node.country && node.country.toLowerCase() === cleanCountry) ||
                    (node.tags && node.tags.includes(cleanCountry))) {
                    primaryNodeIds.add(node.id);
                }
            });
        }

        // Step 2: Expand: Include nodes connected to primary nodes (so links show up)
        const connectedNodeIds = new Set(primaryNodeIds);
        links.forEach(link => {
            if (primaryNodeIds.has(link.source)) connectedNodeIds.add(link.target);
            if (primaryNodeIds.has(link.target)) connectedNodeIds.add(link.source);
        });

        // Step 3: Filter nodes & links
        const visibleNodes = combinedNodes.filter(node => connectedNodeIds.has(node.id));
        const visibleLinks = links.filter(
            link => connectedNodeIds.has(link.source) && connectedNodeIds.has(link.target)
        );

    return {nodes: visibleNodes, links: visibleLinks};
};