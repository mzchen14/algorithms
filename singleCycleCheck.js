function hasSingleCycle(array) {
      let current = 0
      let next = 0
      let jumps = 0
  
      while(jumps < array.length){
          if(jumps > 1 && current === 0) return false
          next = current + array[current] % array.length
          if(next > array.length-1){
              next = next % array.length
          } else if(next < 0) {
              next = next + array.length
          }
          jumps++
          current = next;
      }
      return current === 0
  }
  