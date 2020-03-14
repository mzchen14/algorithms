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
          set.delete(s[i]); //delete the letter of the set that matches s[i] which would be the earliest addition to the set.
          i++; //increment the beginning of the window, making the window smaller from the left.
      }
  }
  return max; //return max length
};


//Key takeaways:
// 1. Sliding window technique
// 2. Using sets to store unique elements
