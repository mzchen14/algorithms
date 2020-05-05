class BinaryTreeNode {
    constructor(value) {
      this.value = value;
      this.left  = null;
      this.right = null;
    }
  
    insertLeft(value) {
      this.left = new BinaryTreeNode(value);
      return this.left;
    }
  
    insertRight(value) {
      this.right = new BinaryTreeNode(value);
      return this.right;
    }
  }
  
  function isBinarySearchTree(treeRoot) {
    
    //helper function that runs recursively.
    //Takes in the node, the upper bound and the lowerbound.
    //If the values were ever invalid, return false, otherwise, if we reach null, that means we've done traversing, return true.
    const helper = (node, upper, lower) => {
      if(node == null) return true
      if(node.value >= upper || node.value <= lower) {
        return false
      }
      
      let left = helper(node.left, node.value, lower) //the upper bound is now the previous node's value as we traverse left
      let right = helper(node.right, upper, node.value) //the lower bound is now the previous node's value as we traverse right

      //both left and right must be valid
      return left && right
    }
    //start the call by passing in the tree root and Infinity as upper bound, and -Infinity as lowerbound
    return helper(treeRoot, Infinity, -Infinity)
    }
  
  
  //Time = O(n), Space = O(n)
  
  
  
  