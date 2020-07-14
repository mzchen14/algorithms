/* Write a function that takes a Binary Tree and returns a list of its branch sums ordered from leftmost branch to rightmost branch sum. 
A branch sum is a sum of all the values in a Binary Tree branch. A Binary Tree branch is a path of nodes in a tree that starts at the root node and ends at any leaf node.
Each BinaryTree node has an integer value, a left child node and a right child node. Children nodes can either be Binary Tree nodes themselves or None/nul.
*/

class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSums(root) {
    // Write your code here.
      let resultArr = []
      sumHelper(root, 0, resultArr)
      return resultArr
  }
  
      const sumHelper = (currentNode, currentSum, resultArr) => {
          currentSum += currentNode.value //the currentSum is equal to the running sum + the value of the current node
          if (!currentNode.left && !currentNode.right) { //if .left and .right are equal to null, that means we have reached a leaf
              resultArr.push(currentSum) //push the current sum into the array
              return //and return
          }
          if(currentNode.left) { //otherwise, if there is a valid left child, run the helperFunc on the left
              sumHelper(currentNode.left, currentSum, resultArr)
          } if(currentNode.right) { //if there is a valid right child, run the helperFunc on the right
              return sumHelper(currentNode.right, currentSum, resultArr)
          }
      }

//Time Complexity: O(n), Space Complexity O(n/2) => O(n) , there are roughtly half the number of leaves in a tree as there are nodes in the entire tree.

/* 7/13 
Revisited question, was difficult to think of the solution despite previously doing it.
Must review recursion scenarios.
*/