
  /* Given information about active users on the network, find the shortest route for a message from one user (the sender) to another (the recipient). Return an array of users that make up this route.
  */
  // A simple, somewhat inefficient queue implementation
class Queue {
    constructor() {
      this.queue = [];
      this.size = 0;
    }
  
    enqueue(item) {
      this.queue.unshift(item);
      this.size += 1;
    }
  
    dequeue() {
      this.size -= 1;
      return this.queue.pop();
    }
  }
  
  //function to reconstruct the path from start to end
  const reconstructPath = (parentNodes, endNode) => {
    let result = []
    let currentNode = endNode
    while(currentNode !== null) {
      result.push(currentNode)
      currentNode = parentNodes[currentNode]
    }
    return result.reverse() //must be reversed because we are using push so our path will be reversed, (e, c, a instead of a, c, e)
  }
  
  //main traversal function
  function getPath(graph, startNode, endNode) {
    
    if(!graph.hasOwnProperty(startNode)) throw new Error('Start node is not in graph!')
    if(!graph.hasOwnProperty(endNode)) throw new Error('End node is not in graph!')
    
    const nodesQueue = new Queue() //use queue structure that is defined, otherwise, can also use an array
    nodesQueue.enqueue(startNode)
    
    //we use this obj to hold not only the visited nodes but also to map currentNode keys to the parent nodes that we got the keys from
    const parentNodes = {}
    parentNodes[startNode] = null //set startnode's parent to 0 while at the same time, storing the startNode so we don't revisit
    
    while(nodesQueue.size > 0) { //while there are still nodes in queue
      const currentNode = nodesQueue.dequeue() //dequeue 
      
      if(currentNode === endNode) { //if the currentNode is the endNode, run the reconstruction function
        return reconstructPath(parentNodes, endNode)
      }
      //otheriwise, if the currentNode is not the endNode
      graph[currentNode].forEach(neighbor => { //for each neighbor the currentNode has
        if(!parentNodes.hasOwnProperty(neighbor)) { //must use .hasOwnProperty instead of [] ** we check if it is already in our visited/parentNode obj
          nodesQueue.enqueue(neighbor) //if it is not, we enqueue it
          parentNodes[neighbor] = currentNode //we add it to our parentNodes tracker, linking all of the neighbors back to our currentNode
        }
      })
    }
  
    return null //return null if no paths were found in the end
  }
  
  