class WeightedGraph {
    constructor(){
        this.adjecencyList = {}
    }
    addVertex(vertex){
        if(!this.adjecencyList[vertex]) this.adjecencyList[vertex] = []
    }
    addEdges(vertex1,vertex2,weight){
        this.adjecencyList[vertex1].push({ node:vertex2,weight})
        this.adjecencyList[vertex2].push({node:vertex1 , weight})
    }
}


