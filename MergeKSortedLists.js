/*
Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

Example:

Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6
*/
//Main function: 
var mergeKLists = function(lists) { 
    if(!lists.length) return null //if list is empty, return null
     while(lists.length > 1) { //else, while the list still has at least 2 linked lists inside
         a = lists.shift() //shift
         b = lists.shift() //shift
         c = mergeLists(a,b) //run mergeList function on a,b to merge them into a single list: c
         lists.push(c) //push c back into the list
     } 
     return lists[0] //after lists.length only has 1 list left, return because that would be our sorted list
 };
 
 const mergeLists = (a,b) => {
     const result = new ListNode(0) //create a new node, initialized at 0
     let temp = result //create a temp variable to update, that way we can update, but still have it point to result.next (our created list)
     while(a !== null && b !== null) { //while a AND b are not null
         if(a.val < b.val) { //if a's value is less than b's
             temp.next = a //let the next node = a
             a = a.next //increment a
         } else { 
             temp.next = b //otherwise, let the next value = b
             b = b.next //increment b
         }
         temp = temp.next //increment temp so we do not replace the values we already assigned
     }
     
     if(a !== null) { //if a is not null yet, 
         temp.next = a //add the remainder of the list
     } else if (b !== null) {
         temp.next = b //else add the remainder of b
     }
     return result.next //return the result.next (which skips our default 0 node)
 }

 //Time = O(N log k) => k is the number of linked lists within the lists array, N is the number of nodes ALL TOGETHER
 /* 
 The comparison cost will be reduced to O(log k) for every pop and insertion to priority queue. 
 But finding the node with the smallest value just costs O(1) time.
There are NN nodes in the final linked list.*/

 //Space = O(n) => creating a new linked list