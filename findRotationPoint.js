function findRotationPoint(words) {
    // Find the rotation point in the vector

    let left = 0 
    let right = words.length-1
    let start = words.length-1
    while(left < right) {
      let mid = left + Math.floor(right - left)/2
      if(words[mid] < words[start]) {
        start = mid
      }
      if(words[mid] < words[right]) {
        left = mid+1
      } else {
        right = mid-1
      }
    }
    return start
  }

  //Time = O(log n) Binary Search, Space = O(1)