/* Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

Example 1:
Input: [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.

Example 2:
Input: [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
Note: The length of the given binary array will not exceed 50,000.*/

var findMaxLength = function(nums) {
    let map = new Map() //create a hashmap
    let max = 0 //initialize max length as 0
    let count = 0 //intialize a counter at 0
    map.set(0, -1) //put 0 into the map to begin with because otherwise, it would not count [0, 1] since the count would be [-1, 0] (but the previous 0 was before the array started)
    for(let i = 0; i < nums.length; i++) { 
        if(nums[i] === 0) { //if the number is 0, decrement count
            count-- 
        } else { //otherwise increment count
            count++
        }
        if(map.has(count)) { //if the map already has the count
            max = Math.max(max, i-map.get(count)) //the max can either be the prev max or the current index minus the last index with the same count

        } else { //if the map does not already have the count, add it
            map.set(count, i)
        }

     }
    return max //return map
};

// Time = O(n), Space O(n)
//Takeaways:
//Think about the problem, it is binary so you can track it
//When two indices have the same count, that means that there are even number of 0s and 1s in between, since they had to
//fall and rise to get to the same number. 