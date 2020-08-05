/*
You are given a doubly linked list which in addition to the next and previous pointers, it could have a child pointer, which may or may not point to a separate doubly linked list. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure, as shown in the example below.
Flatten the list so that all the nodes appear in a single-level, doubly linked list. You are given the head of the first level of the list.
Example 1:
Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
Output: [1,2,3,7,8,11,12,9,10,4,5,6]
Explanation:
The multilevel linked list in the input is as follows:
*/

var flatten = function (head) {
  let temp = head; //temp reference to head that we are going to return at the end
  stack = []; //create a stack to store all the next nodes that we need to hold references to
  while (head) {
    //while the head is not null
    if (head.child) {
      //if the head has a child
      if (head.next) {
        //and the head also has a next
        stack.push(head.next); //push the reference to the next into the stack
      }
      head.next = head.child; //then set the next to the child
      head.next.prev = head; // set the new next's prev to the current head bc this is a doubly linked list
      head.child = null; //set the child to null
    } else if (!head.next && stack.length) {
      //otherwise, if no next but there is still items in the stack
      head.next = stack.pop(); //pop them from the stack and set them as the next value
      head.next.prev = head; //set the prev as well
    }
    head = head.next; //otherwise, just iterate
  }
  return temp; //return the temp
};

//Recursive:
var flatten = function (head) {
  let current = head;

  while (current) {
    let next = current.next; //store the next val
    if (current.child) {
      //if there is a child node
      let childNode = flatten(current.child); //create a reference to the flattened childNode
      current.next = childNode; //the new next would be equal to flatten child
      childNode.prev = current; //the childNode's prev is going to be current
      current.child = null; //set the child reference to null
      while (current.next) {
        //iterate through all the nodes in the childNode list
        current = current.next;
      }
      if (next) next.prev = current; //if there is a reference to a next node, set the prev of next to current and add it after we finish iterating to the end of the entire list
      current.next = next;
    }
    current = current.next; //otherwise if there is no childNode, current = current.next
  }
  return head;
};

//Time = O(n), Space = O(n) (stack)
