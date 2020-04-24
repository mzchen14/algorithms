
/* 
Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.
Example 1:

Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false
*/
function wordBreak(s, wordDict) {
    const dict = new Set(wordDict); //create a set containing the words in the wordDict
    const visited = new Set(); //create set to store visited Words
    const q = [0]; //push the starting index into queue
  
    while (q.length) { //while there is something in queue
      const start = q.shift(); //shift it out
  
      if (!visited.has(start)) { //if visited does not include start(which is an index)
        for (let end = start + 1; end <= s.length; end++) { //let end = start+1 because slice is exclusive from end index, same with substring
            //each each iteration as end increments
            
          if (dict.has(s.slice(start, end))) { //if the substring at starting idx and ending idx exists in the dictionary
            if (end === s.length) return true; //if the end idx is equal to the length of the array (meaning we completed the word) return true
            q.push(end); //otherwise, push the end point of that iteration into the queue to check next 
              //Ex: during the loop after cat, it will push 3, and check for "sand"
              //During the loop after cats, it will push 4 and check for "and"
          }
        }
        visited.add(start); //add the start idx into the visited array so that we do not visit again
      }
    }
    return false; //if nothing is found and the queue empties, return false
  }

  //TIme = O(n^2) //for each starting qix, we need to iterate until end of string
  //Space = O(n) //Queue size is at WORST n size in case every letter is in the dictionary
  