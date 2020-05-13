/* 
Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a positive capacity.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache( 2 //capacity);

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
*/
//HashMap Solution
var LRUCache = function(capacity) {
    this.cache = new Map() //use the Javascript map
    this.capacity = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.cache.has(key)) return -1 //if the key is not in the cache, return -1
    const value = this.cache.get(key) //otherwise, let the value equal to the value we get from the key
    this.cache.delete(key) //we delete the key
    this.cache.set(key, value) //and reset the key with the value we saved
    return this.cache.get(key) //we return the value again
    //Note this step is required because we need to pull the key to the front of the stack so that it is more recent/frequented.
    //Since we will be removing based on LRU
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.cache.has(key)) { //if the cache already has the key
        this.cache.delete(key) //delete it so that we can reset
    }
    this.cache.set(key, value) //set the key regardless of whether or not we are replacing or this is a new key
    if(this.cache.size > this.capacity) { //if the size of the map is greater than the capacity, we need to delete the LRU object
        this.cache.delete(this.cache.keys().next().value) //we do so by running this command.
        //this.cache.keys().next().value returns the key of the first item
    } 
};

//Time = O(1), Space = O(n), n being capacity