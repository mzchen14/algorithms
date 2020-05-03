/*Given a non-empty string of lowercase letters and a non-negative integer representing a key, write a function that returns a new string obtained by shifting every letter in the input string
by k positions in the alphabet, where k is the key
Note thaat letters should "wrap" around the alphabet; in otherwords, the letter z shifted by one returns a*/

function caesarCipherEncryptor(string, key) {
    // Write your code here.
      let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
      let newStr = []
      let newKey = key % 26
      for(let i = 0 ; i < string.length ; i++) {
          let char = string[i]
          let index = alphabet.indexOf(char) + newKey
          if(index > 25) {
              index = (index % 25) - 1
          }
          newStr.push(alphabet[index])
      }
      return newStr.join('')
  }
  
  /* Time = O(n), Space = O(n) */