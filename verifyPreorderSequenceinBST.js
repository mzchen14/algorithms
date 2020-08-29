/* 
Given an array of numbers, verify whether it is the correct preorder traversal sequence of a binary search tree.

You may assume each number in the sequence is unique.

Consider the following binary search tree:
[5,2,6,1,3] - false
[5,2,1,3,6] - true
*/

// node, left, right
//the first element greater than the root node indicates the right branches, everything after the first greater node
//has to be greater than the root node, everything before the first greater element has to be less than the root node.
function verifyPreorder(arr) {
    if(!arr.length) return true
    if(arr.length === 1) return true
    let root = arr[0];
    
    //loop through the entire array, and find the first greater node
    //every node after the greater node has to be greater than the root node
    //second subtree would be root + 1 , greater node - 1


}


[5, 4, 1, 2, 6, 7, 8]

[] 
lower = 5
[5, 2, 6, 1, 3]