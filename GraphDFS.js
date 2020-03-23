//Pseudocode:
/*
DFS(vertex):
if vertex is empty,
  return (this is the base case)
add vertex to results list (an array of all the vertices)
mark vertex as visited
for each neighbor in vertex's neighbors:
  if neighbor is not visited:
    recurisively call DFS on neighbor.
    OR
Write a function that accepts a starting node.
Create a list to store the ending result to be returned at the end
Create an object to store visited vertices
Create a helper function which accepts a vertex
  Helper func should return early if vertex is empty
  Helper func should place the vertex it accepts into the visited obj, and push the vertext into result arr
  Loop through all vals in adjacencyList for that vertex
  If any of those values have not been visited, recurisively invoke the helper func with taht vertex.
*/
//See it in action in GraceCreationAdjacencyList

DFSRecursive(vertex) {
  let arr = []
  let visited = {}
  const adjacencyList = this.adjacencyList //bind adjacencyList
  const DFS = (vertex) => {
    if(!vertex) return
    visited[vertex] = true
    arr.push(vertex)
    let neighbors = adjacencyList[vertex]
    neighbors.forEach(neighbor => {
      if(!visited[neighbor]) {
        return DFS(neighbor)
      }
    })
  }
  DFS(vertex)
  console.log(arr)
  return arr;
}

DFSIterative(start) {
  let s = []
  let result = []
  let visited = {}
  let adjacencyList = this.adjacencyList //to bind adjacencyList
  let currentVertex
  s.push(start)
  while(start.length) {
    currentVertex = s.pop()
    if(!visited[currentVertex]){
      result.push(cuurentVertex)
      discovered[cuurentVertex] = true
      adjacencyList[currentVertex].forEach(neighbor => {
        s.push(neighbor)
      })
    }
  }
  return result
}
