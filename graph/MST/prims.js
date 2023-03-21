//prims algorithms to find the mst of a weighted undirected graph

function prim(graph){
    //retrive all the nodes from the graph 
    const nodes = Object.keys(graph);
    //method and initializes a Set visited with the first node in the list const visited
    const visited = new Set([nodes[0]]);
    //to store the final mst
    const result = [];

    while(visited.size < nodes.length){
        //minEdge keeps track of the found minimum-weight edge
        let minEdge = null;
        //minWeight maintains the weight of that particular edge
        let minWeight = Infinity;
        //Nested forEach loops are used to iterate over each visited node
        // and its unvisited neighbors and finding the edge with minimum weight.
        visited.forEach((node)=>{
            Object.keys(graph[node]).forEach((neighbor)=>{
                const weight = graph[node][neighbor];
                if(!visited.has(neighbor) && weight < minWeight){
                    minEdge = [node , neighbor];
                    minWeight = weight;
                }
            })
        })

        result.push(minEdge);
        visited.add(minEdge[1]);
    }

    return result;
}

const graph = {
    A: { B: 2, C: 3 },
    B: { A: 2, C: 1, D: 1 },
    C: { A: 3, B: 1, D: 1, E: 5 },
    D: { B: 1, C: 1, E: 4 },
    E: { C: 5, D: 4 }
  };

  console.log(prim(graph))