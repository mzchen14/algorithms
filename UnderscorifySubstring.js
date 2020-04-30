/*Prompt: Write a function that takes 2 strings, a main string and a substring. The function should return a version of the main string with every instance of the substring
wrapped between underscores. If there are two or more instances of the substring that overlap or sit side by side, the underscores should only appear aorund the entire jointed substring.
If there is no substring in the main string, then the function should just return the main string.


**Approach** 
1. GetLocations Function - This function parses through the string creating a 2D array of all the indices of the string where the substring occurs
2. Collapse Function - This function should traverse the array created by the GetLocations function and merge/collapse any intersecting or side by side occurances of the substring
3. Underscorify Function - This function should take in the string and the updated locations array from collapse and insert the underscores into the proper places
                            **This function is challenging because it must take into consideration the nested structure of the indices of locations as well as
                            whether or not we are inbetween pairs of underscores.

//Time = O(n * m) , Space = O(n)
*/


function underscorifySubstring(string, substring) {
    // Write your code here.
      if(string.indexOf(substring) === -1) {
              return string
      }
      let locations = collapse(getLocations(string, substring))
      return underscorify(string, locations)
  }
  const getLocations = (string, substring) => {
      let locations = []
      let startIdx = 0
      while(startIdx < string.length) {
          let nextIdx = string.indexOf(substring, startIdx)
          if(nextIdx !== -1) {
              locations.push([nextIdx, nextIdx+substring.length])
              startIdx = nextIdx + 1
          } else {
              break
          }
       }
      return locations
  }
  
  
  const collapse  = (locations) => {
      // if(!locations.length) return locations
      let newLocations = [locations[0]]
      for(let i = 1; i < locations.length; i++) {
          let prev = newLocations[newLocations.length-1]
          let curr = locations[i]
          if(prev[1] >= curr[0]) {
              prev[1] = curr[1]
          } else {
              newLocations.push(curr)
          }
      }
      return newLocations
  }
  
  const underscorify = (string, locations) => {
      let locationIdx = 0
      let stringIdx = 0
      let i = 0
      let inBetweenUnderscores = false
      let finalChar = []
      while(stringIdx < string.length && locationIdx < locations.length) {
          if(stringIdx === locations[locationIdx][i]) {
              finalChar.push('_')
              inBetweenUnderscores = !inBetweenUnderscores
              if(!inBetweenUnderscores) {
                  locationIdx++
              }
              i = i === 1 ? 0 : 1
          }
          finalChar.push(string[stringIdx])
          stringIdx++
      }
      if(locationIdx < locations.length) {
          finalChar.push('_')
      } else if(stringIdx < string.length) {
          finalChar.push(string.slice(stringIdx))
      }
      return finalChar.join('')
  }