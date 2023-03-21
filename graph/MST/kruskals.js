function kruskal(graph) {
    const nodes = Object.keys(graph);
    const edges = [];
  
    // Generate list of edges
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (graph[nodes[i]][nodes[j]]) {
          edges.push([nodes[i], nodes[j], graph[nodes[i]][nodes[j]]]);
        }
      }
    }
  
    // Sort edges by weight
    edges.sort((a, b) => a[2] - b[2]);
  
    const parent = {};
    nodes.forEach((node) => (parent[node] = node));
  
    const result = [];
  
    for (let i = 0; i < edges.length; i++) {
      const [u, v, weight] = edges[i];
      const rootU = find(u, parent);
      const rootV = find(v, parent);
  
      if (rootU !== rootV) {
        result.push([u, v]);
        parent[rootU] = rootV;
      }
    }
  
    return result;
  }
  
  function find(node, parent) {
    while (parent[node] !== node) {
      node = parent[node];
    }
    return node;
  }

  const graph = {
    A: { B: 2, C: 3 },
    B: { A: 2, C: 1, D: 1 },
    C: { A: 3, B: 1, D: 1, E: 5 },
    D: { B: 1, C: 1, E: 4 },
    E: { C: 5, D: 4 }
  };

  console.log(kruskal(graph))