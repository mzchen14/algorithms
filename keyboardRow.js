// Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.
var findWords = function (words) {
  let result = [];
  let hash = {
    1: "qwertyuiop",
    2: "asdfghjkl",
    3: "zxcvbnm",
  };
  let rows = new Set();
  for (let i = 0; i < words.length; i++) {
    let word = words[i].toLowerCase();
    for (let char in word) {
      if (hash[1].includes(word[char])) rows.add(1);
      if (hash[2].includes(word[char])) rows.add(2);
      if (hash[3].includes(word[char])) rows.add(3);
    }
    if (rows.size == 1) result.push(words[i]);
    rows.clear();
  }
  return result;
};

/*
first loop : O(n) < --- number of words
second loop: O(m) < -- number of char in each word

Time: O(nm)

Space: 

hash: O(1) <--- 3 rows, always 26 characters
set: O(1) <--- max size of 3  / O(n) if we are thinking that there will be a new set for each word in the array
*/
