/* 
Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

Return the linked list sorted as well.

Example 1:

Input: 1->2->3->3->4->4->5
Output: 1->2->5
Example 2:

Input: 1->1->1->2->3
Output: 2->3
*/
/* Recursive Solution */
var deleteDuplicates = function(head) {
    if(head === null || head.next === null) { //if head is null or there is only 1 item in the list, then just return head.
        return head
    }
    if(head.val !== head.next.val) { //otherewise, if the val of head is not equal to the next val, then:
        head.next = deleteDuplicates(head.next) //set the next item to the return ouf deleteDupe when ran on the next item
        return head
    }
    let tracker = head
    while(tracker !== null && tracker.val === head.val) {
        tracker = tracker.next //we move down the list until we react a distinct item
    }
    return deleteDuplicates(tracker) //return the distinct node.
};

/* Time: O(n) Space= O(n) << Call stack
*/
