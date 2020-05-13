/* 
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/
//Note: leftCount & rightCount stand for parentheses counts!
var generateParenthesis = function(n) {
    const solution = [] //solutions array
    
    const generateCombo = (leftCount, rightCount, str) => { //helper function to generate each combo
        if(leftCount > rightCount) return //base cases, if leftCount is greater than right Count at any time, we know it will not work because we will not be able to close all the left parentheses.
        if(!leftCount && !rightCount) solution.push(str) //if leftCount === 0 && rightCount === 0, that means we're done! Push the string into the solutions array
        
        if(leftCount > 0) { //if leftCount is greater than 0, create a recursive branch where we are adding the left parenthese and decrementing the leftCount
            generateCombo(leftCount - 1, rightCount, str + '(') 
        }
        if(rightCount > 0) { //if rightCount is greater than 0, create a recrusive branch where we care adding a right parenthese and decrementing the rightCount
            generateCombo(leftCount, rightCount - 1, str + ')')
        }
    }
    
    generateCombo(n, n, '') //start the recursive calls by passing in, n as both left and right counts and an empty string 
    return solution //return solution
};

/* 
Time = */