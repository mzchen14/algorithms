function reverse(headOfList) {

    // Reverse the linked list in place
    let currentNode = headOfList
    let prevNode = null
    let nextNode = null
    
    while(currentNode) {
      nextNode = currentNode.next
      currentNode.next = prevNode
      prevNode = currentNode
      currentNode = nextNode
      
    }
    return prevNode
  }
  

  //Time = O(n) Space = O(1)