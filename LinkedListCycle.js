/* Write a function containsCycle() that takes the first node in a singly-linked list 
and returns a boolean indicating whether the list contains a cycle.
*/

function containsCycle(firstNode) {

    // Check if the linked list contains a cycle
    if(firstNode === null) return false //if list is empty, return false
    
    let fast = firstNode 
    let slow = firstNode
    
    while(fast && fast.next) { //while fast and fast.next are not null
      fast = fast.next.next //fast is going at twice the speed as slow
      slow = slow.next //slow also increments
      
      if(fast === slow) return true //if they end up being the same node, return true, there is a cycle because fast is relapping
    }
    
    return false; //otherwise there is no cycle, return
  }

  //Time = O(n), Space = O(1)