//Given two strings, write a function to determine if the second string is an anagram for the first. An anagram is a word, phrase or name formed by rearranging the letters of another, such as cinema, formed from iceman.

const anagram = (str1, str2) => {
  if(str1.length !== str2.length) {
    return false
  }
  let hashOne = {}
  let hashTwo = {}
  for (let i = 0; i<str1.length; i++) {
    let char = str1[i]
    if(hashOne[char]) {
      hashOne[char]++
    } else {
      hashOne[char] = 1
    }
  }
  for (let i = 0; i<str2.length; i++) {
    let char = str2[i]
    if(hashTwo[char]) {
      hashTwo[char]++
    } else {
      hashTwo[char] = 1
    }
  }
  for(let i = 0; i<str1.length; i++) {
    let char = str1[i]
    if(hashOne[char] !== hashTwo[char]) {
      return false
    }
  }

  return true
}

anagram("dog", "god") //true
anagram("anagram", "nagaram") //true
anagram("rat", "car") //false
anagram("qwerty", "qeywrt") //true
anagram("cinema", "iceman") //true

//Alternative solution with one less loop:
const anagramVer2 = (str1, str2) => {
  if(str1.length !== str2.length) {
    console.log("false")
    return false
  }
  let hashOne = {}
  for (let i = 0; i<str1.length; i++) {
    let char = str1[i]
    if(hashOne[char]) {
      hashOne[char]++
    } else {
      hashOne[char] = 1
    }
  }
  for (let i = 0; i<str2.length; i++) {
    let char = str2[i]
    if(!hashOne[char]) {
        return false
    } else {
      hashOne[char] -= 1
    }
  }
  return true
}

//Time: O(n), Space O(n)
