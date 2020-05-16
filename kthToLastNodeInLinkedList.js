/*Write a function kthToLastNode() that takes an integer kk and the headNode of a singly-linked list, and returns the kkth to last node in the list. */


class LinkedListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  //Solution 1, Using the length
  function kthToLastNode(k, head) {
  
    // Return the kth to last node in the linked list
    if(k === 0) throw new Error('k cannot be 0')
    let temp = head
    let target = head
    let length = 1
    while(temp.next) {
      ++length
      temp = temp.next
    }
    
    if(k > length) throw new Error('k is too large.')
    for(i = 0; i < length-k; i++) {
      target = target.next
    }
    return target
  }

  //'Stick' solution
  function kthToLastNode(k, head) {
    if(k === 0) throw new Error('It is impossible to find the first to last node.')
  
    // Return the kth to last node in the linked list
    let left = head
    let right = head
    
    for(let i = 0; i < k-1; i++) {
      if(!right.next) throw new Error('k is larger than the length of the list!')
      right = right.next
    }
    
    while(right.next) {
      left = left.next
      right = right.next
    }
    return left
  }

  //Time = O(n), Space = O(1)

  //Even though the second solution only does "one pass", the steps are the same, the left node still has to traverse the linked list
  //n-k times, therefore the two solutions take the same steps, simply in a different order.
  