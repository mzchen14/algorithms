/* 
Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:

Input:nums = [1,1,1], k = 2
Output: 2
Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:

Input:nums = [1,1,1], k = 2
Output: 2
 
 
*/

//Note: Since the array can contain negatives, we CANNOT use sliding window method.

var subarraySum = function(nums, k) {
    let count = 0 //start count at 0
    let hash = {0:1} //current sum is 0 so we can initialize, this is to catch when a single num is equal to k
    let currentSum = 0 //initialize current sum
    for(let i = 0; i < nums.length; i++) { //iterate through the array
        currentSum += nums[i] //keep currentSum cumulative and add nums[i] each iteration
        if(hash[currentSum-k]) { //if hash contains currentSum - k, that means that a subarray that equals k existed between the currentSum-k index as well as the current index. 
            count+= hash[currentSum-k] //we add the COUNT of currentSum-k instead of just incrementing in the case that that [currentSum-K] occured multiple times 
            //(ex: [0, 0, 0, 0], by index 2, our hash would be: {0: 2}, and we need to add +2 to our count because the subarrays would be [0, 0, 0] as well as [0, 0])
        }
        if(hash[currentSum]) { //if the hash of the currentSum exist, increment
            hash[currentSum]++
        } else {
            hash[currentSum] = 1 //otherwise add and set to 1
        }

    }
    return count //return count
};

//Time = O(n), Space = O(n)
/* 
This approach is similar to Two Sums
Remember that currentSum iS continous itself so the subtraction will always equate to a sum that was also a subarray
*/