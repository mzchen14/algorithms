// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function removeKFromList(l, k) {
    // remove leading k values by changing l to the next val
    while (l && l.value === k) {
        l = l.next;
    }

    // loop to the end
   let current = l;
    while (current && current.next) { //while current & current.next are not null
        if (current.next.value == k) { //if current.next is equal to k
            current.next = current.next.next; //current.next is equal to the next.next instead
        } else {
            current = current.next; //otherwise, current = current.next and we move along
        }
    }
    return l; //return the new l
}

//Time = O(n), Space = O(1)