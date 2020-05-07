
/* Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

****Note: Please solve it without division and in O(n).****
*/

//Brute Force Time = O(n^2)
var productExceptSelf = function(nums) {
    let output = []
    let product = 1
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            if(j === i) {
                continue
            } else {
                product *= nums[j]
            }
        }
        output.push(product)
        product = 1

    }
    return output
};

//Using Space, Optimized Time
var productExceptSelf = function(nums) {
    let output = []
    let left = new Array(nums.length).fill(1)
    let right = new Array(nums.length).fill(1)
    for(let i = 1; i < nums.length; i++) {
            left[i] = (left[i-1]*nums[i-1])
        }
    for(let i = nums.length-2; i >= 0; i--) {
            right[i] = (right[i+1]*nums[i+1])
    }
    
    for(let i = 0; i < nums.length; i++) {
        output.push(left[i]*right[i])
    }
    return output
};

//Alternative solution with only 1 array
var productExceptSelf = function(nums) {
    if(nums.length < 2) throw new Error('Need at least 2 numbers!')
    let productsArray = []
    let currentProduct = 1
    
    for(let i = 0; i < nums.length; i++) {
        productsArray[i] = currentProduct
        currentProduct *= nums[i]
    }
    currentProduct = 1
    
    for(let i = nums.length-1; i >= 0; i--) {
        productsArray[i] *= currentProduct
        currentProduct *= nums[i]
    }
    
    return productsArray
};