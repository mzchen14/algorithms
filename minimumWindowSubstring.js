//Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

var minWindow = function (s, t) {
  if (s.length === 0 || t.length === 0) return "";
  if (t.length > s.length) return "";

  let hash = {};
  for (let i = 0; i < t.length; i++) {
    hash[t[i]] = hash[t[i]] + 1 || 1;
  }
  let required = Object.keys(hash).length; //count unique characters that we need to match
  let left = 0;
  let right = 0;
  let formed = 0; //keeps track of if our t requirements ahve been fufilled.

  let windowCounts = {}; //keep count of all unique characters in current window

  let ans = [-1, 0, 0]; //represents [windowLength, leftidx, rightidx]

  while (right < s.length) {
    let char = s[right];
    windowCounts[char] = windowCounts[char] + 1 || 1; //increment characters in the window

    //the frequency of winCounts and the acutal count are the same, increment formed

    if (hash[char] && windowCounts[char] === hash[char]) formed++; //if the currentChar is in the hash and the same number of freq, increment formed

    while (left <= right && formed === required) {
      //while left is less than right and formed is equal to required...we want to try to shrink window
      let leftChar = s[left];
      if (ans[0] == -1 || right - left + 1 < ans[0]) {
        //save the current window before we remove leftChar
        ans[0] = right - left + 1; //current length
        ans[1] = left; //left index
        ans[2] = right; //right index
      }
      windowCounts[leftChar]--; //decrease count in windowCounts for leftChar
      if (hash[leftChar] && windowCounts[leftChar] < hash[leftChar]) formed--; //if formed is no longer equal to required, decreased formed.
      left++; //increment left
    }
    right++; //increment right
  }
  return ans[0] == -1 ? "" : s.slice(ans[1], ans[2] + 1); //if the length is still default, return an empty string, else slice the string
};

//Time = O(S + T), Space = O(S + T)
