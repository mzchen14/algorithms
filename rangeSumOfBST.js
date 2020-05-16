/* 
Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

The binary search tree is guaranteed to have unique values.

 

Example 1:

Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
Output: 32
Example 2:

Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
Output: 23
*/

var rangeSumBST = function(root, L, R) {

    let sum = 0 
    const helper = (node) => {
        if(node) {
            if(node.val >= L && node.val <= R) { //if the node is between the bounds, add the value to the sum
                sum += node.val
            }
            if(L < node.val) { // L bound is still smaller than the current value, then we can traverse down the left branch
                helper(node.left)
            }
            if(R > node.val) { //if R bound is still greater than the current value, we can traverse down the right branch
                helper(node.right)
            }
        }
    }
    helper(root) //run helper on the root
    return sum //return the sum
};


/* Time = O(n), Space = O(h)
*/