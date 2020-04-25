
//Given an array, return an array of all permutations of the array.

function getPermutations(array) {

      // if(!array.length) return [] //this is covered in currentPerm.length on line 12
      const perms = [] //result perm holder
      permHelper(array, [], perms) //helper func
      return perms //return call
  }
  
  const permHelper = (arr, currentPerm, perms) => { //takes in array, currentPerm we are working on, and result perm array
      if(!arr.length && currentPerm.length) { //if the array does not have any more length and the currentPerm has length (to cover empty edge case)
          perms.push(currentPerm) //push the currentPerm into the result Perm
      } else {
          arr.forEach((num, i) => { //otherwise, for each number left in the array, we need to do a recursive call
              let newArr = arr.slice(0, i).concat(arr.slice(i+1)) //remove the num from the array 
              let newPerm = currentPerm.concat(arr[i]) //create a new perm that adds that number onto each existing perm
              permHelper(newArr, newPerm, perms) //call the function again with the updated new Arr, newPerm, and result perm arr
          })
      }
  }

  //Time = O(n * n!), Space = O(n * n!)