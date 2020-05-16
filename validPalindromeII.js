/* 
Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

Example 1:
Input: "aba"
Output: True
Example 2:
Input: "abca"
Output: True
Explanation: You could delete the character 'c'.
*/
var validPalindrome = function(s, correctionsPossible = 1) {
    let left = 0
    let right = s.length-1

    while(left < right) {
        if(s[left] === s[right]) {
            left++
            right--
            continue
        }
        if(correctionsPossible === 0) return false

        return validPalindrome(s.slice(left, right), 0) || validPalindrome(s.slice(left+1, right+1), 0)
    }
    return true
};


var validPalindrome = function(s) {
    let left = 0,
        right = s.length - 1;
    
    let errors = 1;
    
    while(left < right) {
        
        if(s[left] === s[right]) {
            left++;
            right--;
        } else if(s[left+1] === s[right] && s[left+2] === s[right-1] && errors){
            left++
            errors--
       } else if(s[right-1] === s[left] && errors){
           right--
           errors--;
        } else {
            return false
        }
    }
    
    return true;
};