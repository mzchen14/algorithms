/* Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
*/


//Approach: Two stacks => O(1) Time, O(n) Space
var MinStack = function() {
    this.stack = []
    this.min = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x)
    if(!this.min.length) {
        this.min.push(x)
    } else {
        this.min.push(Math.min(x,this.min[this.min.length-1]))
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
    this.min.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
   return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length-1]
};

//Using 1 Stack & obj implementation:  O(1) Time, O(n) Space

var MinStack = function() {
    this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push({
        value: x,
        min: !this.stack.length ? x : Math.min(x, this.getMin())
    })
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
   return this.stack[this.stack.length-1].value
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length-1].min
};