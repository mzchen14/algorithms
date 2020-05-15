function findSecondLargest(treeRoot) {

    // Find the second largest item in the binary search tree
    if(!treeRoot || !treeRoot.left && !treeRoot.right) throw new Error ('Invalid Input') //error handling
    
    if(!treeRoot.right && treeRoot.left) {
      return treeRoot.left.value //if the rightnode is invalid but the leftnode is valid, then return the first left value, that would be the second largest
    }
    //we need the findLargest function in the case that the largestNode has a left subtree, which in that case, the second largest would be the rightmost node of that subtree.
    const findLargest = (node) => { 
      if(node.right) { 
        return findLargest(node.right)
      } else {
        return node.value
      }
    }

    //find secondLargest helper function
    const helper = (node, parent) => { //node being the currentValue and parent being the previous val
      if(!node.right) {
        if(!node.left) {
          return parent.value //if node.right is null && node.left is also null, return the parent value because that means our current node is a leaf (and rightMost one)
        } else {
          return findLargest(node.left) //otherwise run findLargest on the left node because the rightMost node the the left child(of the largestNode) would be the secondLargest node
        }
      } else {
        return helper(node.right, node) //if node.right is NOT null, run the helper function on our currentNode's right child
      }
    }
    
    if(treeRoot.right) { //initiate recursive calls by passing in root's night child into the helperFunction
      return helper(treeRoot.right, treeRoot) //this will retur our answer
    }
  
  }