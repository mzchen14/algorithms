//Brute Force Time = O(n), Space = O(1)

var middleNode = function(head) {
    let count = 0;
    let counterNode = head
    while(counterNode) {
        count++
        counterNode = counterNode.next
    }
    let mid = Math.floor(count/2)
    
    for(let i = 0; i<mid; i++) {
        head = head.next;
    }
    return head
};

//Optimized Time = O(n), Space = O(1)
//Traverse the list, with one pointer moving twice as fast as the second pointer.
//If the fast pointer reaches the end, then the slow pointer must be at the midpoint!
var middleNode = function(head) {
    slow = fast = head; 
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};