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