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
        if (!filterTag && !filterCountry) {
            return{nodes: combinedNodes, links}
        }

       // Identify primary nodes
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

        // --- Country filter: add the id node + all connected project nodes ---
       if (filterCountry) {
            const cleanCountry = filterCountry.toLowerCase().trim();
            normalizedNodes.forEach(node => {
                if ((node.id && node.id.toLowerCase() === cleanCountry) ||
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