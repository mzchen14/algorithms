/*
Implement a queue ↴ with 2 stacks. ↴ Your queue should have an enqueue and a dequeue method and it should be "first in first out" (FIFO).

Optimize for the time cost of mm calls on your queue. These can be any mix of enqueue and dequeue calls.

Assume you already have a stack implementation and it gives O(1)O(1) time push and pop. 
*/
class QueueTwoStacks {
    constructor() {
      this.inStack = []
      this.outStack = []
    }
  
    enqueue(item) {
      this.inStack.push(item)
    }
  
    dequeue() {
      if(!this.outStack.length) {
          while(this.inStack.length) {
          this.outStack.push(this.inStack.pop())
        }
      }
      if(!this.outStack.length) throw new Error('Queue is empty!')
      return this.outStack.pop()
    }
  }

  //Time = O(m), Space = O(1)
  //Approach: Use an instack in order to store all enqueues
  //When dequeueing, if there are already items in the outstack, just pop them
  //Otherwise, if outStack is empty, move inStack items into outstack and then pop the last one.