/* 
In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.

 

Example 1:

Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
Example 2:

Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
Example 3:

Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).*/

//Solution using hashmap Time = O(n), Space = O(n)

let map = new Map()
var isAlienSorted = function(words, order) {

    order.split('').forEach((char, i) => {
        map.set(char, i)
    })  //create a hashmap for instant loop up, mapping letter to index number 
    
    for(let i = 1; i < words.length; i++) { //loop through the words array starting at 1
        let word1 = words[i-1] //compare the previous word 
        let word2 = words[i] //to the current word (we can also do current and next, but this depends on the index we start the loop at)
        if(compare(word1, word2) > 0) { //compare the value of the two words, if the value is negative, 
                                        //that means word1's value is less than word2 value it is earlier in the dictionary!
            return false    //if the value is greater than 0, that means word1's value was greater, which means the order is incorrect
        }
    }
    
    return true //if false does not return throughout the entire loop, return true
}
//compare helper function
const compare = (word1, word2) => {
    let i = 0 
    let j = 0 //set pointers
    let value = 0 //set initial value to 0
    while(i < word1.length && j < word2.length && value === 0) { //while i is less than word1 & j is less than word 2 & value is still 0 (the chars are the same)
        value = map.get(word1[i]) - map.get(word2[i]) //let the value equal the index of the character in word1 vs the character in word2
        i++ //increment
        j++ //increment
    }
    if(value === 0) { //if we break out of the while loop and value is STILL 0, that means the words may be identical OR similar to the point that one ran out of letters
        return word1.length - word2.length // in the case that one ran out of letters, we need to compare the string lengths, this again, should return negative since
                                            //word1 should be our smaller value
    } else { 
        return value  //otherwise, we return the value after we break out of the while loop. 
    }
}