/* 
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/
var addTwoNumbers = function(l1, l2) {
    let carry = 0 //carry 
    let l3 = new ListNode(0) //initialize a new list
    let start = l3 //starter for new List because we are going to move through l3
    
    while(l1 || l2) { //in the case where at least 1 list is not empty
        let first = l1 ? l1.val : 0 //first num will equal to l1.val or 0 (IF l1 exist)
        let second = l2 ? l2.val : 0 //second num will euqual to l2.val or 0 (IF l2 exist)
        //Note for these two cases, you must check l1 and l2 instead of .val because .val will not be checkable, without l1 or l2 the nodes.
        let currentSum = first + second + carry //calculate current sum
        
        carry = Math.floor(currentSum / 10) //carry will be MATH.FLOOR(important!!) of currentSum / 10
        currentSum = currentSum % 10 //current sum is the mod of 10, note: if the num is smaller than 10, it just returns the num
 
        l3.next = new ListNode(currentSum) //let l3.next = new node, REMEMBER!! each node in a linked list is a node, we can't just set the value, we want a whole node.
        
        l3 = l3.next //iterate
        if(l1) l1 = l1.next //check again for existence and then iterate
        if(l2) l2 = l2.next //check again for existence and then iterate
        //Note; we must check for existence because in the case that one list is empty, it will not iterate
    }
    if(carry > 0) { //after the loop, if there is one more carry number
        l3.next = new ListNode(carry) //create another node for it
    }
    return start.next // return our start.next because the first node l3 is going to be 0 by default
}; 

//Time = O(max(n,m)) We will iterate at most the longer of the two lists
// Space = O(max(n, m)) + 1 <- constant so we can disregard the +1 //at most the new linked list will have an extra carry