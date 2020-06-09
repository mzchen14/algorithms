
/* 
Given an integer, write a function to determine if it is a power of two.

Example 1:

Input: 1
Output: true 
Explanation: 20 = 1
Example 2:

Input: 16
Output: true
Explanation: 24 = 16
Example 3:

Input: 218
Output: false
*/
var isPowerOfTwo = function(n) {
    let i = 1 //start at 1 which is the lowest power of 2
    while (i < n) { //while i is smaller than n
        i *= 2 //multiple it by 2 which will increment the number to the next power of two
    }
   return i === n //i will either be n and return true or it will be greater than n and return false
};

// Time = O(log n) Space = O(1)