function bellmanFord(graph, start){
    const distance = {};
    const predecessors = {};//predecessors, which is an object containing the predecessor vertex for each vertex on the shortest path from the starting vertex. 

    //initialise all distances to infinity except the starting vertex

    for(let vertex in graph){
        distance[vertex] = Infinity;
    }
    distance[start] = 0;

    //relax edges repeatedly;

    for(let i = 0; i < Object.keys(graph).length - 1; i++){
        for(let u in graph ){
            for(let v in graph[u]){
                const weight = graph[u][v];
                if(distance[u] + weight < distance[v]){
                    distance[v] = distance[u] + weight;
                    predecessors[v] = u;
                }
            }
        }
    }
    //check for negetive weight cycles 
    for(let u in graph ){
        for(let v in graph[u]){
            const weight = graph[u][v];
            if(distance[u] + weight < distance[v] && distance[u] != Infinity){
                throw new Error("Graph containn a negetive weight cycle")
            }
        }
    }

    return {
        distance,
        predecessors
    }
}

const graph = {
    A: { B: -1, C: 4 },
    B: { C: 3, D: 2, E: 2 },
    C: {},
    D: { B: 1, C: 5 },
    E: { D: -3 }
}

const result = bellmanFord(graph, 'A');
console.log(result.distance); // { A: 0, B: -1, C: 2, D: -2, E: 1 }
console.log(result.predecessors); // { B: "A", C: "B", D: "E", E: "B" }
