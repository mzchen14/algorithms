function findClosestValueInBst(tree, target) {
      let current = tree //set current to root node of tree
      let closest = Infinity; //set closest to infinity
      while(current !== null) { //while current/tree node still exists
          if(Math.abs(target-current.value) < Math.abs(target-closest)) { // if the asbolute val of the target - current is less than the previous closest
               closest = current.value; //set the closest num to the current value
               }
          if(current.value < target) { //if the current value is less than the target
              current = current.right; //move to the right of the tree (larger numbers)
          } else {
              current = current.left; //otherwise, move to the left of the tree.
          }
      }
      return closest; //return the closest number
  }
  
  //Time = O(n log n) Average if tree is balanced, Space = O(1)
  //Worst case: O(n) if tree is extremely unbalanced.
