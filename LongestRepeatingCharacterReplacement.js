// Given a string s that consists of only uppercase English letters, you can perform at most k operations on that string.

// In one operation, you can choose any character of the string and change it to any other uppercase English character.

// Find the length of the longest sub-string containing all repeating letters you can get after performing the above operations.

var characterReplacement = function (s, k) {
  let start = 0,
    end = 0,
    mostFreq = 0,
    maxLen = 0;
  let freqMap = {}; //frequency tracker for each character
  for (end = 0; end < s.length; end++) {
    freqMap[s[end]] = freqMap[s[end]] + 1 || 1; //the character freq will either be 1 or increment

    mostFreq = Math.max(freqMap[s[end]], mostFreq); //we want to track the most frequent.

    while (end - start + 1 - mostFreq > k) {
      // if the currentString - mostFreq is greater than k, we cannot replace
      //all the remaining characters (excluding the most freq) therefore, we must move the window inwards until we can replace the most freq.
      freqMap[s[start]] -= 1;
      start++;
    }
    maxLen = Math.max(end - start + 1, maxLen); //compare the new length to the previous length
  }
  return maxLen;
};

//Time = O(n) second loop might be dependent on k? or num of unique characters
//Space = O(n)
