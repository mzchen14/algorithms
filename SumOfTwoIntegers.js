/* 
Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example 1:

Input: a = 1, b = 2
Output: 3
Example 2:

Input: a = -2, b = 3
Output: 1
*/
var getSum = function(a, b) {
    let carry;
    while(a & b !== 0) { //as long as there's a carry
        carry = (a & b) << 1 //carry is going to be bitwise AND with left shift
        a = a ^ b //a is now the sum
        b = carry //b is going to be the carry to be added next iteration.
    }
    return a ^ b //once there are no carries left, just return the final sum
}

/* Time: O(1) Space: O(1)*/