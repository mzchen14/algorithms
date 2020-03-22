//Adjacency List

//Basic Class: (for an undirected graph)
class Graph {
  constructor() {
    this.adjacencyList = {}
  }
//Adding a Vertex:
//Write a method called addVertex, which accepts a name of a vertex.
//It should add a key to the adjavency list with the name of the vertex and set its value to be an empty array.
  addVertex(vertex) {
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }
//Adding an Edge:
//This function should accept two vertices
//The function should find in the adjacency list, the key of v1 & push v2 into the array
//The function should also find the key of v2 and push v1 into the array.
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
  }
//Removing an Edge:
//This function should accept two vertices, vertex1, vertex2
//This function should reassign the key of vertex1 to be an arr, that does not contain vertex2.
//This function should reassign the key of vertex2 to be an arr that does not contain vertex1.
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex => vertex !== vertex2)
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => vertex !== vertex1)
  }
//Removing a Vertex:
//The function should accept a vertex to remove
//The function should loop as long as there are any other vertices in the list for that vertex.
//Inside the loop, we call our remove Edge function with the vertex we are removing, and any value in the adjancency list for that vertex
//Delete the key in the list fot that vertex.
  removeVertex(vertex) {
    while(this.adjacencyList[vertex].length) {
      this.removeEdge(vertex,this.adjacencyList[vertex].pop())
    }
    delete this.adjacencyList[vertex]
  }
}



