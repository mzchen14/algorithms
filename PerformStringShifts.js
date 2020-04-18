
/* 
You are given a string s containing lowercase English letters, and a matrix shift, where shift[i] = [direction, amount]:

direction can be 0 (for left shift) or 1 (for right shift). 
amount is the amount by which string s is to be shifted.
A left shift by 1 means remove the first character of s and append it to the end.
Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.
Return the final string after all operations.

 

Example 1:

Input: s = "abc", shift = [[0,1],[1,2]]
Output: "cab"
Explanation: 
[0,1] means shift to left by 1. "abc" -> "bca"
[1,2] means shift to right by 2. "bca" -> "cab"*/

//Brute Force Time 
var stringShift = function(s, shift) {
    let strArr = s.split('')
    shift.forEach(instructions => {
        if(instructions[0] === 0) {
            for(let i = 0; i < instructions[1]; i++) {
                left(strArr)
            }
        } else {
            for(let i = 0; i < instructions[1]; i++) {
                right(strArr)
            }
        }
    })
    
    return strArr.join('')
};

const left = (arr) => {
    arr.push(arr.shift())
}

const right = (arr) => {
    arr.unshift(arr.pop())
}
//With a counter to reduce unneccesary looping
var stringShift = function(s, shift) {
    let strArr = s.split('')
    let counter = 0;
    shift.forEach(instructions => {
        if(instructions[0] === 0) {
            counter-= instructions[1]
        } else {
            counter+= instructions[1]
        }
        if(counter > 0) {
            while(counter > 0) {
                right(strArr)
                counter--
            }
        } else {
            while(counter < 0) {
                left(strArr)
                counter++
            }
        }
    })
    
    return strArr.join('')
};

const left = (arr) => {
    arr.push(arr.shift())
}

const right = (arr) => {
    arr.unshift(arr.pop())
}