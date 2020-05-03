/* Write a function that takes in a special array and returns its product sum. A "special array is a non-empty array that contains etiher integers or other "special" arrays.
The product sum of a "special" array is the sum of its elements, where "special" arrays inside are summed themsleves and multipled by their level of depth.
Ex: the product of [x, y] is x + y, the product of ([x, [y, z]] = x + 2y + 2z or x + 2(y + z)) 
*/
function productSum(array) {
    // Write your code here.
      let depth = 1
      const sumHelper = (array, depth) =>{
          let sum = 0
          array.forEach(el => {
              if(Array.isArray(el)) {
                  sum += sumHelper(el, depth+1) * depth
              } else {
                  sum += el * depth
              }
          })
          return sum 
      }
      return sumHelper(array, depth)
  
  }

  /* 
  Time = O(n), Space = O(d) => d is depth for the maximum calls we would have in our call stack at one time.
  Approach:
  Initialize sum to 0 and depth to 1.
  Iterate through the elements of the array, 
  if: 
  1. element is a number, multiply by the depth and add it to the sum.
  2. element is another array, recursively call the function again passing in the array, and incremented depth.
    *** Make sure to add the result of the call, multiplied by the current depth to the sum of the array as well ***
    return the overall sum.
  */