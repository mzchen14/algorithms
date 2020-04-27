//Given a string, return the longest palindromic substring

//Brute Force solution => Time: O(n^3), Space = O(1)
function longestPalindromicSubstring(string) {
    // Write your code here.
      let longest = ''
      for(let i = 0; i < string.length; i++) {
          for(let j = i; j < string.length; j++) {
              const substring = string.slice(i, j+1)
              if(substring.length > longest.length && isPalindrome(substring)) {
                  longest = substring
              }
          }
      }
      return longest
  }
  
  const isPalindrome = (string) => {
      let left = 0
      let right = string.length -1
      while(left < right) {
          if(string[left] !== string[right]) return false
          left++
          right--
      }
      return true
  }
//Optimized => Time: O(n^2) Space = O(1)
  function longestPalindromicSubstring(string) {
    // Write your code here.
      let longest = ''
      for(let i = 0; i < string.length; i++) { //loop for the string
          for(let j = 0; j < 2; j++) { //loop to check self and then neighbor, DO NOT need to check one over because, L & R are the same to start so it will spread outwards at least once.
              let left = i
              let right = i + j //0 + 0, 0 + 1, 1 + 0, 1 + 1(2)
              while(left >= 0 && string[left] === string[right]) {
                  left--
                  right++
              }
              if((right-left-1) > longest.length) { //NOTE that the left and right have expanded on extra, the -1 is to cancel out the additional expansion  (think of 'aba' example, left would be -1, right would be 3, 3--1 = 4 - 1 = 3)
                  longest = string.substring(left+1, right) //we expanded in the while loop before it breaks so our last expansion should not be counted, therefore we add back into left
              }
          }
      }
      return longest
  }