/* 
Given the root of a binary search tree with distinct values, modify it so that every node has a new value equal to the sum of the values of the original tree that are greater than or equal to node.val.

As a reminder, a binary search tree is a tree that satisfies these constraints:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
*/

var bstToGst = function (root) {
  let sum = 0; //initialize a sum
  if (!root) return null; //if the root is null, just return null
  dfs(root); //otherwise run dfs helper on the root node
  return root; //return the root

  function dfs(node) {
    //dfs helper function
    if (node.right) {
      //if the right node exists
      dfs(node.right); //run the helper on the right node (this is going to keep iterating down the right path until there is no right node)
    }
    sum += node.val; //once we hit the end, sum += node.val
    node.val = sum; //update the node.val to equal the current sum
    if (node.left) {
      //if there is a left node, traverse down the left side
      dfs(node.left);
    }
  }
};
