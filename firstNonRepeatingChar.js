/*Given a string s consisting of small English letters, 
find and return the first instance of a non-repeating character in it. 
If there is no such character, return '_'. */

function firstNotRepeatingCharacter(s) {
    let hash = {}; //create a hashmap
    for(let i = 0; i<s.length; i++){ //iterate through str
        let char = s[i] //set char
        if(hash[char] === undefined){ //if char is not in hash
            hash[char] = 0; //add it to hash with val of 0
        } else {
            hash[char]++ //if it is already in hash, increment
        }
    }

    for(let i = 0; i<s.length; i++) { //loop again
        if(hash[s[i]] === 0) { //if hash[char] === 0
            return s[i]; //return that char
        }
    }
    return "_" //if nothing is found, return _
}


//Time: O(2n) => O(n) 2 for loops
//Space: O(n) => store all elements in hashmap