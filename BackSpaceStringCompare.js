/* Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
*/

//Stack Approach => Time = O(N), Space = O(N)
var backspaceCompare = function(S, T) {
    let steps = (str) => {
        let stack = []
        for(let i = 0; i < str.length; i++) {
            if(str[i] === '#') {
                stack.pop()
            } else {
                stack.push(str[i])
            }
        }
        return stack.join('')
    }
    return steps(S) === steps(T)
}
