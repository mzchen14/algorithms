/* Given a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2] */

/* In order means that each node will be explored left, node, right*/

/* Recursive */

var inorderTraversal = function (root) {
  if (!root) return []; //if the root is null, return an empty array.
  let nodes = []; //otherwise initialize an empty array to hold all our nodes

  const helper = (node) => {
    //create a helper function to help with traversals
    if (node.left) {
      //if there is a left node, run the helper function on the left node
      helper(node.left);
    }
    nodes.push(node.val); //once you are done with the left side, push the current node's val into the nodes array.
    if (node.right) {
      //if there is a right side, run the helper function on the right side.
      helper(node.right);
    }
  };

  helper(root); //start the function by running the helper function on the root.
  return nodes; //return the nodes array
};

//Iterative

var inorderTraversal = function (root) {
  let stack = [];
  let nodes = [];

  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    let curr = stack.pop();
    nodes.push(curr.val);
    root = curr.right;
  }
  return nodes;
};
