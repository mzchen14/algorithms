// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

var groupAnagrams = function(strs) {
    let hashMap = {}
    
    let sorted = strs.map(word => {
        return word.split('').sort().join('')
    })

    for(let i = 0; i < strs.length; i++) {
        if(hashMap[sorted[i]]) {
            hashMap[sorted[i]].push(strs[i])
        } else {
            hashMap[sorted[i]] = [strs[i]]
        }
    }
    return Object.values(hashMap)
};

//Did again for algo expert:
function groupAnagrams(words) {
    // Write your code here.
      let hash = {}
      for(let i = 0; i < words.length; i++) {
          if(sort(words[i]) in hash) {
              hash[sort(words[i])].push(words[i])
          } else {
              hash[sort(words[i])] = [words[i]]
          }
      }
      return Object.values(hash)
  }
  
  const sort = (word) => {
      return word.split('').sort().join('')
  }


  //Time = O(w * n * log n) , Space = O(wn) w is the number of words, n is length of the longest word