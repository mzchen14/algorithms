function indexEqualsValueSearch(arr) {
    let left = 0
    let right = arr.length-1
    let result = arr[arr.length-1]+1
    while(left <= right){
     let mid = Math.floor((right+left)/2);
     if(arr[mid] === mid) {
       if(mid <= result) result = mid
     }
     if(arr[mid] >= mid){
        right = mid - 1
     } else {
        left = mid +1
     }
    }
    if(result !== arr[arr.length-1]+1) return result
    return -1
  }
  
  //Time = O( log n ), Space = O(1)
  //Key Takeaways: Binary search is always helpful to traverse a sorted array
  //Pointers take up less space than recursion
  //right+left/2 floored will give you the midpoint when there are left right windows being moved!
  //Move right to mid -1 since we already know that mid is too large
  //Move left window to mid + 1 since we already know mid is too small
  