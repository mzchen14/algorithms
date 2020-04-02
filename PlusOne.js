//While Loop version
var plusOne = function(digits) {
    
    let i = digits.length - 1 //start at the back of the array
    while (i >= 0) { //while we have not reached the first element
        if(digits[i] !== 9){ //if digits[i] is not 9
            digits[i]++ //increment the digit
            return digits //return after incrementation
        } else {
            digits[i] = 0 //if value of digit at i IS 9, change it to 0, decrement i
            i--
        }
    }
    digits.unshift(1)
    return digits
};

//Time = O(n), Space = O(1)
//For Loop version
var plusOne = function(digits) {

    for(let i = digits.length -1; i >= 0; i++) {
        if(digits[i] < 9) {
            digits[i]++
            return digits
        } else {
            digits[i] = 0
        }
    }
    digits.unshift(1)
    return digits
};