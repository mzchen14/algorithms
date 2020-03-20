//Implement a function called countUniqueValues, which accepts a sorted array, and counts the unqiue values in the Array. There can be negative numbers in the array, but it will always be sorted.
//Solution using set (Time: O(n), Space: O(n))

const countUniqueValues = (arr) => {
  let set = new Set()
  for(let i = 0; i<arr.length; i++) {
    if(!set.has(arr[i])){
      set.add(arr[i])
    }
  }
  console.log(set.size)
  return set.size
}

//Alternative solution with pointers (Time: O(n), Space: O(1))
const countUniqueValues2 = (arr) => {
  let i = 0;
  let j = 1;
  if(arr.length === 0) return 0
  while(i !== arr.length && j !== arr.length){
    if(arr[i] === arr[j]) {
      j++;
    } else if(arr[i] !== arr[j]){
      i++;
      arr[i] = arr[j]
      j++;
    }
  }
  return i+1
}
countUniqueValues([1,1,1,1,1,1,2]) //2
countUniqueValues([1,2,3,4,5,6,7,8]) //8
countUniqueValues([]) //0

countUniqueValues2([1,1,1,1,1,1,2]) //2
countUniqueValues2([1,2,3,4,5,6,7,8]) //8
countUniqueValues2([]) //0
