/* 
Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
*/

//Hashmap solution
var intersect = function(nums1, nums2) {
    const result = [] //result array
    const count = {} //initialize hashmap
    for(let i = 0; i < nums1.length; i++) { //iterate through one array and create a hash of the occurences of the elements
        const current = nums1[i]
        if(!count[current]) {
            count[current] = 1
        } else {
            count[current]++
        }
    }
    for(let i = 0; i < nums2.length; i++) { //look through array 2,
        if(count[nums2[i]]) { //if the element is inside our count hashmap
            result.push(nums2[i]) //push that element into the result
            count[nums2[i]]-- //decrement our count
        }
    }
    
    return result //return result array
    
}

/* 

Time: O(m + n) m = length of num1 & n = length of num2 since we are iterating through both.
Space = O(n) for the hashmap
*/