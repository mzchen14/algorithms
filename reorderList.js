var reorderList = function (head) {
  if (!head || !head.next) return;
  //head of first half
  let l1 = head;

  //head of second half
  let slow = head;

  //tail of second half
  let fast = head;

  //tail of first half
  let prev = null;

  //finding midpoint
  while (fast !== null && fast.next !== null) {
    prev = slow; //tail of first list
    slow = slow.next; //head of second list
    fast = fast.next.next; //since fast is going twice as fast as slow, when it
    //reaches the end, slow would have reached the midpoint.
  }

  prev.next = null;
  let l2 = reverse(slow);
  merge(l1, l2);
};
//reverse helper
const reverse = (head) => {
  let prev = null;
  let current = head;
  while (current) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  return prev;
};
//merge helper
const merge = (l1, l2) => {
  while (l1) {
    let nextNode1 = l1.next;
    let nextNode2 = l2.next;

    l1.next = l2;

    if (l1.next == null) {
      break;
    }
    if (nextNode1 == null && nextNode2) {
      l2.next = nextNode2;
      break;
    } //this code takes into consideration uneven lists.

    l2.next = nextNode1;
    l1 = nextNode1;
    l2 = nextNode2;
  }
};

//Time = O(n), Space = O(1)
