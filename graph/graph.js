class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []

    }
    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !==vertex2

        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v=>v !==vertex1
        );
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex,this.adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }
    dfsRecursive(start){
        let result = [];
        let visited= {}; 
        const adjacencyList = this.adjacencyList;
        (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor)
                }
            }) 
        })(start)
        return result;
    }

    bfs(start){
        const queue = [start];
        const result = [];
        const visited = {};
        let cuerrentVertex;
        visited[start] = true;
        while(queue.length){
            cuerrentVertex = queue.shift();
            result.push(cuerrentVertex)
            this.adjacencyList[cuerrentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor)
                }
            })
        } 
        return result;
    }
}



let g = new Graph()  
g.addVertex("A"); 
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("D","F")
g.addEdge("D","E")
g.addEdge("F","E")
g.addEdge("E","C")

console.log(g.adjacencyList['A'])
