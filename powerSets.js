//Iterative Solution:
function powerset(array) {
    // Write your code here.
      let subSets = [[]]
      array.forEach(num => {
          subSets.forEach(ele => {
              if(ele.indexOf(num) === -1) {
                  subSets.push([...ele, num])
              }
          })
      })
      console.log(subSets)
      return subSets
  }
  

//Recursive Solution:

function powerset(array) {
    // Write your code here.
      let subSets = [[]]
      const helper = (array, idx) => {
          if(idx > array.length-1) {
              return subSets
          }
          let current = array[idx]
          subSets.forEach(set => {
              if(set.indexOf(current) === -1) {
                  subSets.push([...set, current])
              }
          })
          return helper(array, idx+1)
      }
      
      return helper(array, 0)
  }

  