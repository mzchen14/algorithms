/* 
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.
*/
var wordPattern = function (pattern, str) {
  str = str.split(" "); //split the str into an array
  if (pattern.length !== str.length) return false; //if the str array and the pattern do not have the same length, they cannot have the same pattern
  let patHash = {}; //create a hash for the pattern
  let strHash = {}; //create a hash for the str
  for (let i = 0; i < pattern.length; i++) {
    let curr = pattern[i]; //let curr = the letter at pattern[i]
    if (
      (patHash[curr] && patHash[curr] !== str[i]) || //if curr exists in the patHash and the value at that key is not str[i] return false
      (strHash[str[i]] && strHash[str[i]] !== curr) //or if str[i] already exists in the hash and the value at that key is not the current letter return false
    )
      return false;

    patHash[curr] = str[i]; //otherwise set curr in patternHash to str[i]
    strHash[str[i]] = curr; //set str[i] in strHash to curr
  }
  return true;
};
