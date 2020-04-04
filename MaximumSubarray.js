// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

/* Brute Force */
var maxSubArray = function(nums) {
    let max = nums[0]
    for(let i = 0; i < nums.length; i++) {
        let current = 0
        for(let j = i; j < nums.length; j++) {
            current = current += nums[j]
            max = Math.max(current, max)
        }
    }
    return max
}

//Time = O(n^2), Space = O(1)
/* Optimized Solution Ver.1 (Save space) */

var maxSubArray = function(nums) {
    let max = -Infinity
    for(let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i-1])
        max = Math.max(nums[i], max)
    }
   return max
}

//Time = O(n), Space O(1)

var maxSubArray = function(nums) {
    for(let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i-1])
    }
    return Math.max(...nums)
}

//Time = O(n), Space = O(n)? <= spread operator uses more space