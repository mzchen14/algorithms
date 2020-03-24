//Word Ladder or Shortest Word Edit Path(from pramp)
function shortestWordEditPath(source, target, words) {

  let wordList = new Set(words); //create a set of the words from the arr.
  if(!wordList.has(target)) return -1; //if the wordlist does not include target, return -1
  let queue = [source] //start queue with source word
  let level = 0; //start level at 0;
  let current; //define current
  let visited = new Set() //create visited set
  while(queue.length){ //while the queue is not empty
    let size = queue.length //let size = queue length AT THAT MOMENT (we will be adding to queue in the following loop so this while loop only runs once)
    for(let i = 0; i<size; i++){  //loop through the current "size" which is one level
      current = queue.shift() //shift each element into current
      if(current === target){ //if the current = target
        return level; //return the current level
      }
      wordList.forEach(nextWord => { //otherwise... for each word in the wordList set
        if(nextWord.length === current.length){  //if the word is the same length as the currentWord
          let diff = 0; //set diff to 0
          for(let j = 0; j < current.length; j++){
            if(current[j] !== nextWord[j]){ //at each char, if the char is ever diff between the words
              diff++ //increment diff
            }
          }
          if(diff === 1 && !visited.has(nextWord)){ //if diff is strictly 0 & the word has not been visited yet
            queue.push(nextWord); //push it onto our queue
            visited.add(nextWord) //add the word to visited set
          }
        }
      })
    } //this is the end of the loop through the size, we are done with that level.
    level++ //increment level
  }
  return -1; //if nothing is found, return -1
}
