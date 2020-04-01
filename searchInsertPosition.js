// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

//Approach: Binary Search with Pointers T = O(log n), S = O(1)
var searchInsert = function(nums, target) {
    let left = 0 //start at beginning of arr
    let right = nums.length - 1 //end at end of arr
    while(left <= right) { //while left is less than or equal to right
        let mid = Math.floor((right+left)/2) //find the mid point of left right window
        if(nums[mid] === target) return mid //if the mid is the target, return index
        if(nums[mid] > target) { //if the mid point value is greater than the target
            right = mid - 1 // we know that the value is in the lower half, move ending to mid-1
        } else {
            left = mid + 1 //otherwise if mid point val is less than target, we know the val
                            //is in the upper half, move the start to mid+1
        }
    }
    return left //if nothing is round and left is now greater than right, return left because
                //If left has not moved, that means left = 0, and every value above has been greater than target
                //OR it means that left is now passed the length of the arr and that every value has been less than the target
    //Note* right + 1 could also be used here instead of left because right has either go past the 0th index and needs to return to 0 or, needs to be 1 more than the last index if right has not moved.
}