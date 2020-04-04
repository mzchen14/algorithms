// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

var moveZeroes = function(nums) {
    let p1 = 0 //start one pointer at 0, this pointer will focus on zero elements.
    let p2 = p1+1 //start one pointer right after the first, this pointer will focus on nonzero elements
    while(p2 < nums.length) { //while p2, is less than the length of arr
        if(nums[p1] !== 0) { //if p1 is not 0, increment both pointers because we do not care about the non-zeroes before any zeros, they will stay in place. 
            p1++ 
            p2++
        } else if(nums[p1] === 0 && nums[p2] !== 0) { //if p1 is a zero and p2 is not, swap the two!
            swap(p1, p2, nums) 
        } else {
            p2++ //otherwise, if p1 IS 0, but p2 is ALSO 0, increment p2 to the next nonzero number.
        }
    }
    return nums //return nums (even though this problem did not as for a return so it may not be needed. )
};

//swap helper function
const swap = (i, j, arr) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

//Time = O(n) <= Length of the array, Space = O(1)