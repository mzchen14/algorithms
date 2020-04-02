/* You're working on a secret team solving coded transmissions.

Your team is scrambling to decipher a recent message, worried it's a plot to break into a major European National Cake Vault. The message has been mostly deciphered, but all the words are backward! Your colleagues have handed off the last step to you.

Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place. ↴*/

function reverseWords(message) {
    // Decode the message by reversing the words

    swap(0, message.length-1, message) //reverse the entire array O(n) in place
    // message.reverse() this does the same thing but is slower than swap according to stack overflow
    
    let start = 0 // intialize the beginning of our first word, which would always start at index 0 
    for(let i = 0; i < message.length; i++) { //loop through the array again
      if(message[i+1] === ' ' || i+1 === message.length) { // if the index is right before a space or is the last character
        swap(start, i, message) //swap the characters within that word
        start = i+2 //the new start will be i + 2 (not i+1 because that would be the space)
      }
    }
    return message //return the array after all the reversals have been done. 
  }
  //swap function modified with while loop
  function swap(i, j, arr) {
    while(i < j) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
    }
  
  }

  //Time = O(2n) => O(n) Space = (1)

  //Key Takeaways: Swapping the entire array first removed the requirement of having 
  //to worry about swapping words that are not the same length and having to shift indices.
  //Time complexity was tricky because I thought that the inner while loop would take up extra time.
  