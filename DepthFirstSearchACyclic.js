/* 
Given a Node class that has a name and an array of optional children nodes. Whne put together, nodes form an acyclic tree-like structure.
Implement the depthFirstSearch method on the Node class which takes in an empty array, traverses the tree using DFS approach (navigating from left to right),
stores all the nodes' names in the input array, and returns it.
*/

class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    depthFirstSearch(array) {
          const traverseHelper = (currentNode, array) => {
              array.push(currentNode.name)
              currentNode.children.forEach(child => {
                  traverseHelper(child, array)
              })
          }
          traverseHelper(this, array)	
          return array
        }
  }
  