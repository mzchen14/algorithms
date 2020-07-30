//Leetcode

var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0)
    dummy.next = head
    let first = dummy
    let second = dummy
    
    while(n--) {
        first = first.next
    } 
    while(first.next !== null) {
        first = first.next
        second = second.next
    }
    second.next = second.next.next
    return dummy.next
};

//AlgoExpert:
function removeKthNodeFromEnd(head, k) {
    // Write your code here.
      let first = head
      let second = head
      
      while(k--) {
          second = second.next
      }
      if(second === null) {
          first.value = first.next.value
          first.next = first.next.next
          return
      }
      
      while(second.next !== null) {
          first = first.next
          second = second.next
      }
      first.next = first.next.next
  }

  
  //Time = O(n), Space = O(1)

