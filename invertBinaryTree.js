/* 
Invert a binary tree.

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1
*/

var invertTree = function(root) {
    if (!root) return null //if the root is null, the inverse is also null
    let result = new TreeNode(root.val) //create a result Node that is equal to the currentNode.val
    result.left = invertTree(root.right) //that result node's left child is going to be the inverse of the right child of the previous tree
    result.right = invertTree(root.left) //that result node's right child is going to be the inverse of the left child of the previous tree
    
    return result //return the result
};


/* 
Time = O(n)
Space = O(n)
*/