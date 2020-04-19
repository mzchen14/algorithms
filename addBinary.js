
//manual method, using carry (Time = O(n), Space = O(1))

var addBinary = function(A, B) {
    let sum = '' //let sum = empty string
    let carry = 0 //carry is current 0
    let i = A.length - 1 //start from the end of the strings because that is how we do addition
    let j = B.length - 1
    while(i >= 0 || j >= 0) { // while i or j still have integers
        let a = A[i] ? A[i] : '0' //a is equal to A[i] OR 0 (in the case that one string is longer than the other and we hit undefined for the shorter)
        let b = B[j] ? B[j] : '0' //same for b
        sum = String(a ^ b ^ carry) + sum // sum is equal to STRING of XOR a, b, carry + sum because the carry gets added in front of the sum
        if(a === b && a !== String(carry)) { //if a & b are equal & not equal to carry, then flip the carry
            carry = Number(!carry) //if carry was 1 make it 0, else if it's 0, make it 1
        }
        i--
        j-- //decrementing...
    }
    if (carry) { //if the carry is truthy it means it is 1 and not 0
        sum = String(carry) + sum //sum is equal to the string of carry + sum (carry gets added to front of string in binary)
    }
    return sum //return the sum
};

//BIG INT SOLUTION: // Also linear and constant space
var addBinary = function(a, b) {
    const num1 = BigInt('0b' + a); 
    const num2 = BigInt('0b' + b);
    return (num1 + num2).toString(2);
};