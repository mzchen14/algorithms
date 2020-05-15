/* Write a function to see if a binary tree ↴ is "superbalanced" (a new tree property we just made up).

A tree is "superbalanced" if the difference between the depths of any two leaf nodes ↴ is no greater than one.
*/
/* Iterative Solution */
function isBalanced(treeRoot) {

  // Determine if the tree is superbalanced
  if(!treeRoot) return true //if there are no nodes, then it is balanced
  
  let depths = [] //initialize a depths container
  let nodes = [] //initialize a stack
  
  nodes.push([treeRoot, 0]) //push in the first node we are going to check
  
  while(nodes.length) {
    let nodePair = nodes.pop()
    let currentNode = nodePair[0]
    let depth = nodePair[1]
    
    if(!currentNode.left && !currentNode.right) { //if the currentNode is a leaf
      if(depths.indexOf(depth) < 0) //if the current depth is not already in depths
      depths.push(depth)
      //after we push the depth into our depths array, we want to check the length of the array
      //if the length of the array is greater than 2, we already know there's a bigger diff than 1 so we can return false
      //if the length of the array is equal to 2, we calculate the diff between the two dephts, if the diff is greater than 1, we can also return false
      if(depths.length > 2 || depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1) return false
    }
    //otherwise, if our currentNode is NOT a leaf, we can keep going:
    //push the left and right of the currentNode into the nodes array/stack if they exist.
    if(currentNode.left) {
      nodes.push([currentNode.left, depth+1])
    }
    if(currentNode.right) {
      nodes.push([currentNode.right, depth+1]) //for some reason this has to be depth+1 instead of depth++ or ++depth
    }
  }
  //in the case that we never break out of the while loop, and our ndoes stack empties out, we return true
  return true
}