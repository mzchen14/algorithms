/* Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2
*/

/* 
Approach:
Store the count of each element using a hash table
Then, loop through the keys in the hash and return the key with the value greater than majority. (Max also works0
*/
var majorityElement = function(nums) {
    let hash = {}
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if(hash[num]) {
            hash[num]++
        } else {
            hash[num] = 1
        }
    }
    
    let majority = nums.length/2
    
    for(let key in hash) {
        if(hash[key] > majority) return key
    }
    return -1
};

//Time = O(n) << Looping through nums
//Space = O(n) << Storing all nums