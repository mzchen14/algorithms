/*
A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.

The Linked List is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) where random pointer points to, or null if it does not point to any node.
 

Example 1:


Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
Example 2:


Input: head = [[1,1],[2,1]]
Output: [[1,1],[2,1]] 
*/ 
var copyRandomList = function(head) {
    if (!head) return null //if the head is null, just return null, there is no list. 
    let map = new Map() //otherwise, initialize a map
    let temp = head //set a temp variable to the head so we don't need to iterate the head itself.
    while(temp) { //while the temp is not null
        map.set(temp, new Node(temp.val)) //add the key, value to the map with the old Node being the key and a new node being the value, with JUST the oldNode's value for now.
        temp = temp.next //iterate temp
    }
    temp = head //reset the temp variable since we used it in the previous loop
    while(temp) { //while temp is not null
        let currNode = map.get(temp) //let the currentNode equal the 'new node' we get when we pass the old node into the map
        currNode.next = temp.next == null ? null : map.get(temp.next) //if the oldNode.next === null, set our currentNode's next to null, otherwise set it to whatever we get back from passing in temp.next
        currNode.random = temp.random == null? null : map.get(temp.random) //if the oldNode.random === null, set our currentNode's random to null, otherwise set it to whatever we get back from passing in temp.random
        temp = temp.next //iterate temp
    }
    return map.get(head) //return the value we get when we pass in head (we should get the head of the new list back!)
};

//Time = O(2n) => O(n) //we are traversing the length of the list twice
//Space = O(n) //we are storing the copy which is the same length as the old list