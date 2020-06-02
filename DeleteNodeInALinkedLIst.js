/* 
Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

Example 1:

Input: head = [4,5,1,9], node = 5
Output: [4,1,9]
Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.
Example 2:

Input: head = [4,5,1,9], node = 1
Output: [4,5,9]
Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.
 

NOTE: You are only given the node as the parameter
Approach: Change the node to the next node, and remove the next node from the linked list by skipping it in the second line of the solution.
2 -> 0 -> 1 -> 3
0 -> 1 -> 3
    0
*Remove the link to the second 0.

*/

var deleteNode = function(node) {
    node.val = node.next.val
    node.next = node.next.next
};

/*
Time: O(1)
Space: O(1)
*/