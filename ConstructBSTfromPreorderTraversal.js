/* Return the root node of a binary search tree that matches the given preorder traversal.

(Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and any descendant of node.right has a value > node.val.  Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)

It's guaranteed that for the given test cases there is always possible to find a binary search tree with the given requirements.

Example 1:

Input: [8,5,1,7,10,12]
Output: [8,5,10,1,7,null,12]
*/
 //Definition for a binary tree node.
    function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
* @param {number[]} preorder
* @return {TreeNode}
*/
var bstFromPreorder = function(preorder) {
   let i = 0 //iterator
   
   //helper function to process
   const process = (bound) => {
       if (i === preorder.length || preorder[i] > bound) {
           return null 
       }
       
       const num = preorder[i]
       const node = new TreeNode(num)
       i++
       
       node.left = process(node.val)
       node.right = process(bound)
       
       return node
   }
   const root = process(Number.MAX_SAFE_INTEGER)
   return root
};

/* 
1. root node calls process function first, which creates a node using the variable num.
    Left node is bounded by node.val
    Right node is bounded by MAX_SAFE_INTEGER

    After node construction, left node creation is run until it is out of bounds, it returns null for that specific left node and returns outwards
    before running the node.right we paused at.

    Time = O(n), Space = O(n)
*/