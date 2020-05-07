function hasPalindromePermutation(theString) {

// Check if any permutation of the input is a palindrome
  //   let hashMap = {}
  //   for(let i = 0 ; i < theString.length; i++) {
  //     let char = theString[i]
  //     if(hashMap[char]) {
  //       hashMap[char] ++
  //     } else {
  //       hashMap[char] = 1
  //     }
  //   }
  //   let oddCount = 0
  //   for(key in hashMap) {
  //     if(hashMap[key] % 2 !== 0) {
  //       oddCount++
  //     }
  //   }
  //   return oddCount < 2
  // }
  //Top solution is at risk for overflow if there are too many occurances of a certain letter.
  //Therefore, we use the bottom solution which only counts characters with an odd occurance (since you are adding/deleting for evens)
  //If a character has a even occurence, that means it has a matching pair. If a character has an odd occurence, there can only be 1 char with an odd occurence,
    //Otherwise it cannot be the only "middle" character
    let set = new Set()
    for(let i = 0 ; i < theString.length; i++) {
      let char = theString[i]
      if(set.has(char)) {
        set.delete(char)
      } else {
        set.add(char)
      }
    }
    return set.size < 2 
  }

  //Time = O(n), Space = O(n) or O(1) since there are only 128 unique characters that could be stored in our set. But depends on perspective.