
/* 
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
*/
var search = function(nums, target) {
    if(nums.length === 0) return -1 //if array is empty, return -1
    
    let left = 0 
    let right = nums.length-1
    //in this search, we are looking for the smallest point that the sorted array should have started at
    while (left < right) {
        let mid = left + Math.floor((right-left) / 2)
        if(nums[mid] > nums[right]) {  //if the mid is greater than the numbers on the right, we know that we can close in on the numbers on the right because in a sorted array,
                                        //the nums on right are always greater than the nums on left
            left = mid+1                //close in from numbers on right
        } else {
            right = mid //otherwise, the numbers after the midpoint are larger so the smallest number must be before the midpoint
        }
    }
    //the loop will break once we left === right & we have found the smallest number

    let start = left //set start to the index of the smallest number
    left = 0 //left is back at 0
    right = nums.length-1 //right is back at nums.length-1
    
    if(//target >= nums[start] && 
        target <= nums[right]) { //if the target number is between the index of the the smallest number & target is <= the number on the right, 
                                                        //then we can just traverse from left to right from the smallest num index to the end of arr
        left = start
    } else {    
        right = start //otherwise, the target is greater than the numbers to the right (note: target cannot be smaller than the smallest number at this pt, first check may not be needed)
    }                //so they must have wrapped around in front of the smallest num index, we check the left and close the right
    //regular binary search to locate target
    //note the formula is to avoid overflow, Math.floor is very important in JS solution
    while(left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        if(nums[mid] === target) {
            return mid
        } else if(nums[mid] < target) {
            left = mid+1
        } else {
            right = mid-1
        }
    }
    //return -1 if target is not fine and we have traversed the entire array
     return -1
};

//Time = O(log n), Space = O(1)