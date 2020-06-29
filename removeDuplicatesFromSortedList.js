/* 
Given a sorted linked list, delete all duplicates such that each element appear only once.

Example 1:

Input: 1->1->2
Output: 1->2
Example 2:

Input: 1->1->2->3->3
Output: 1->2->3
*/

var deleteDuplicates = function(head) {
    if(!head) return head //if head does not exist, return it (null)
    let current = head //let current = head
    while(current.next) { //while current.next exists
        if(current.val === current.next.val) { //compare the current value to the next value, if they are the same
            current.next = current.next.next //set the next value to the next.next value. (we are leaving current the same so we can compare it to the new next
            //next iteration in case of multiple dupes!)
        } else {
            current = current.next //otherwise, increment through the list as normal
        }
    }
    return head //return the head node
};

/* Time: O(n), Space = O(1)
*/