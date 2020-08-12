// Design a data structure that supports all following operations in average O(1) time.

// insert(val): Inserts an item val to the set if not already present.
// remove(val): Removes an item val from the set if present.
// getRandom: Returns a random element from current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.

/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
  this.array = [];
  this.map = new Map();
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (!this.map.has(val)) {
    //if map does not already have this array...
    this.array.push(val); //push into array
    this.map.set(val, this.array.length - 1); //set it in the map
    return true;
  } else {
    return false;
  }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  //swap function to help with swapping the element we are removing w/ last element so we can simply pop.
  let swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  if (this.map.has(val)) {
    let index = this.map.get(val); //grab the index of the element

    this.map.delete(val); //delete from map

    if (index !== this.array.length - 1) {
      //if it is not the last element

      swap(this.array, index, this.array.length - 1); //swap the places of the last element and the

      this.map.set(this.array[index], index); //update the position of the value we swapped away from the end of the array. it is now at the index location.
    }
    this.array.pop(); //pop the value we wanted to remove
    return true;
  } else {
    return false;
  }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  let random = Math.floor(this.array.length * Math.random()); //generate random index
  return this.array[random];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
