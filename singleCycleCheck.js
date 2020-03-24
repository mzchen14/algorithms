function hasSingleCycle(array) {
      let current = 0 //define current
      let next = 0 //define next
      let jumps = 0 //jump counter; jumps should total to the num of elements in the array-1, bc you started at 1.

      while(jumps < array.length){ //while the number of jumps made is less than the array length
          if(jumps > 1 && current === 0) return false //if jumps is greater than 1 but current is back at 0, return false.
          next = current + array[current] % array.length //let next = currentindex + num at current modulo the array.length
          if(next > array.length-1){ //if the nextidx is greater than array.length-1,
              next = next % array.length //nextidx is equal to the nextidx modulo array.length
          } else if(next < 0) { //otherwise, if next is less than 0
              next = next + array.length //next is equal to next + the array.length
          }
          jumps++ //increment jumps
          current = next; // let new current = the next idx
      }
      return current === 0 //after all jumpps are made, return if the current is back at 0
  }
