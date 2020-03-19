/* Write a function called same, which accepts two arrays. The function should return true if every value in teh array has it's corresponding value, squared in the same array. The frequency of the values must be the same. */
function same(arr1, arr2) {
  let hash = {}
  if(arr1.length !== arr2.length) {
    return false //if the length of the two arrays are different, return false
  }
  for (let i = 0; i<arr1.length; i++) {
    if(hash[arr1[i]]) { //if the key exist in the hash already
      hash[arr1[i]]++; //increment
    } else {
      hash[arr1[i]] = 1; //else add it and set val to 1
    }
  }

  let hash2 = {}
  for (let i = 0; i<arr2.length; i++) {
    if(hash2[arr2[i]]) {
      hash2[arr2[i]]++;
    } else {
      hash2[arr2[i]] = 1;
    }
  }

  for(let key in hash) { //for each key in the first hash
    let square = key*key //let the square = key * key
    if(hash[key] !== hash2[square]){ //if hash[key] does not have the same val as hash2[square]
      return false //return false
    }
  }
  return true //otherwise, outside of the loop, return true;
}

same([1,2,3,4,5,5,5], [1,4,21,9,16,25,25]);

//Time: O(n), Space O(n)
