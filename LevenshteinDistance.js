//Levenshtein Distance or Edit Distance on leetcode
// Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

// You have the following 3 operations permitted on a word:

// Insert a character
// Delete a character
// Replace a character

/* 
Example 1:

Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')
Example 2:

Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation: 
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')
*/

var minDistance = function(word1, word2) {

    //Create a two dimensional array to store the edit distances by cross referencing each subarray of the two strings
    let arr = []
      for(let i = 0; i < word1.length+1; i++) {
          let row = []
          for(let j = 0; j < word2.length+1; j++) {
              if(j === 0) {
                  row.push(i) //on the y axis, pass in 0, 1, 2, 3, 4... because we want 0, 0 to be an empty string on both x & y
              } else if (i === 0) {
                  row.push(j) //on x axis do the same as above
              } else {
                  row.push(Infinity) //on all other cells, push in default infinity
              }
          }
          arr.push(row) //push the row into the array holder
      }
      
      for(let i = 1; i < word1.length+1; i++) { 
          for(let j = 1; j < word2.length+1; j++) {
              //Loop through the two dimensional array starting at 1, 1 
              min = Math.min(arr[i-1][j-1], arr[i][j-1], arr[i-1][j]) //we want to take the minimum of replace, insert, and delete from the previous coordinates
              if(word1[i-1] === word2[j-1]) { //if the character in the first str is equal to the character in the 2nd str
                  arr[i][j] = arr[i-1][j-1] //then the min is equal to the diagonal (replace)
              } else {
                  arr[i][j] = min+1 //otherwise, it is equal to min + 1
              }
          }
      }
      return arr[word1.length][word2.length] //return the last cell which should be the min distance of the full 2 words
};

//Time = O(AB) , Space = O(AB) multi dimensional array