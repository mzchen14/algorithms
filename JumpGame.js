/* 
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 */

 //Approach: Greedy solution: Traverse from back to front keep track of the LastGoodIdx
var canJump = function(nums) {
    let lastGoodIdx = nums.length-1
    for(let i = nums.length-2; i >= 0; i--) {
        if(nums[i] + i >= lastGoodIdx) { //if the number at said index, plus it's index is greater than or equal to the lastGoodIdx, update lastGoodIdx
            lastGoodIdx = i
        }
    } 
    return lastGoodIdx === 0
};

//Time = O(n), Space = O(1)