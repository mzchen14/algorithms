/* Create a doublylinkedlist class that has a head and a tail.
The class should support:
     * Setting a head and a tail of the linked list
     * Inserting node sbefore and after other nodes as well as at given positions.
     * Removing given nodes and removing nodes of given values.
     * Searching for nodes of given values.
*/

// This is an input class. Do not edit.
class Node {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  // Feel free to add new properties and methods to the class.
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    setHead(node) {
      // Write your code here.
          if(this.head === null) {
              this.head = node
              this.tail = node
          } else {
              this.insertBefore(this.head, node)
          }
      }
      
    setTail(node) {
      // Write your code here.
          if(this.tail === null) {
              this.setHead(node)
          } else {
              this.insertAfter(this.tail, node)
          }
    }
  
    insertBefore(node, nodeToInsert) {
      // Write your code here.
          if(nodeToInsert === this.head && nodeToInsert === this.tail) return
          this.remove(nodeToInsert)
          nodeToInsert.prev = node.prev
          nodeToInsert.next = node
          if(node.prev === null) {
              this.head = nodeToInsert
          } else {
              node.prev.next = nodeToInsert
          }
          node.prev = nodeToInsert
    }
  
    insertAfter(node, nodeToInsert) {
      // Write your code here.
          if(nodeToInsert === this.head && nodeToInsert === this.tail) return
          this.remove(nodeToInsert)
          nodeToInsert.prev = node
          nodeToInsert.next = node.next
          if(node.next === null) {
              this.tail = nodeToInsert
          } else {
              node.next.prev = nodeToInsert
          }
          node.next = nodeToInsert
    }
  
    insertAtPosition(position, nodeToInsert) {
      // Write your code here.
          if(position === 1) {
              this.setHead(nodeToInsert)
              return
          }
          let node = this.head
          let currentPosition = 1
          while (node !== null && currentPosition++ !== position) node = node.next
          if(node !== null) { 
              this.insertBefore(node, nodeToInsert)
          } else {
              this.setTail(nodeToInsert)
          }
    }
  
    removeNodesWithValue(value) {
      // Write your code here.
          let node = this.head
          while(node !== null) {
              let nodeToRemove = node
              node = node.next
              if(nodeToRemove.value === value) {
                  this.remove(nodeToRemove)
              }
          }
    }
  
    remove(node) {
      // Write your code here.
          if(node === this.head) {
              this.head = this.head.next
          }
          if(node === this.tail) {
              this.tail = this.tail.prev
          }
          this.removeNodeBindings(node)
    }
  
    containsNodeWithValue(value) {
      // Write your code here.
          let node = this.head
          while(node !== null) {
              if(node.value === value) return true
              node = node.next
          }
          return false
      }
      removeNodeBindings(node) {
          if(node.prev !== null) node.prev.next = node.next
          if(node.next !== null) node.next.prev = node.prev
          node.prev = null
          node.next = null
      }
  
  }