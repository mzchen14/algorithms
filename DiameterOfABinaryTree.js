/*
Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

Example:
Given a binary tree
          1
         / \
        2   3
       / \     
      4   5    
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

Note: The length of path between two nodes is represented by the number of edges between them.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    if(root === null) return 0; //if root is null, then return 0
    let lHeight = height(root.left) //find the height of left subtree
    let rHeight = height(root.right) //find the height of left subtree
    let lDiameter = diameterOfBinaryTree(root.left) //find the diameter of left
    let rDiameter = diameterOfBinaryTree(root.right) //diameter of right
    
    finalDiameter = Math.max(lHeight+rHeight, Math.max(lDiameter, rDiameter)) //find the max overall
    return finalDiameter //return final diameter

    //NOTE TO SELF: diameter can also include root node, and if so, then the formula would be:
    //lHeight+rHeight+1
};
//height helper function
const height = (node) => {
    if(node === null) return 0; // if node is null, return 0
    let left = height(node.left) //find height of left
    let right = height(node.right) //find height of right
    let h; //initialize height
    if(left > right) { //if left is greater than right
        h = left + 1 //height is left + 1
    } else { //otherwise
        h = right + 1 //height is right + 1
    }
    return h //return height
}


//Time = O(n^2), Space = O(1)