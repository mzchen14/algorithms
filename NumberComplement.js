/* 
Given a positive integer num, output its complement number. The complement strategy is to flip the bits of its binary representation.

 

Example 1:

Input: num = 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
Example 2:

Input: num = 1
Output: 0
Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.
 
*/

var findComplement = function(num) {
    let important = 0;
    let temp = num;
    while(temp !== 0) {
        temp >>= 1
        important++
    }
    let mask = (1 << important) - 1
    return ~num & mask
};
//Concepts: bit operators ~, &, >>, << 
//Time = O(1) Technically a 32-bit integers are constrained. 
//Space = O(1) 