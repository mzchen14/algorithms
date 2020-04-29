var lengthOfLongestSubstring = function(s) {
  let max = 0; //define max size of substring
  let i = 0; //set beginning of window
  let j = 0; //set end of window
  let set = new Set() //create a new Set (only stores unique elements)
  while(i < s.length && j < s.length) { //while the two pointers are not at the end of the string length
      if(!set.has(s[j])) { //if the set does NOT contain the letter at index j
          set.add(s[j]); //add it to the set
          j++; //increment j
          max = Math.max(max, set.size); //max length would be the max between the current max, and the current set size
      } else { //otherwise, if the set already contains the letter at index j
          set.delete(s[i]); //delete the letter of the set that matches s[i] which would be the earliest addition to the set, NOTE: j does not increment if we hit this case so we revisit the j element and push it back into the set
          i++; //increment the beginning of the window, making the window smaller from the left.
      }
  }
  return max; //return max length
};


//Key takeaways:
// 1. Sliding window technique
// 2. Using sets to store unique elements


//Variation in which you have to return the longest substring:
function longestSubstringWithoutDuplication(string) {
    // Write your code here.
      let longest = [0, 1]
      let set = new Set()
      let i = 0;
      let j = 0;
      while(i < string.length && j < string.length) {
          if(!set.has(string[j])) {
              set.add(string[j])
              j++
              if(longest[1]-longest[0] < j - i) {
                  longest = [i, j]
              }
          } else {
              set.delete(string[i])
              i++
          }
      }
      return string.slice(longest[0], longest[1])
  }

  //Time = O(n), Space = O(min(n, a))