/* We have an array of integers, where:

The integers are in the range 1..n1..n
The array has a length of n+1n+1
It follows that our array has at least one integer which appears at least twice. But it may have several duplicates, and each duplicate may appear more than twice.

Write a function which finds an integer that appears more than once in our array. (If there are multiple duplicates, you only need to find one of them.)

We're going to run this function on our new, super-hip MacBook Pro With Retina Display™. Thing is, the damn thing came with the RAM soldered right to the motherboard, so we can't upgrade our RAM. So we need to optimize for space!
*/
function findRepeat(numbers) {

    // Find a number that appears more than once
    //calulating the ranges not the size of the array
    let floor = 1
    let ceiling = numbers.length-1
    
    while(floor < ceiling) {
      //Divide the range 1-n into upper and lower ranges
      let mid = Math.floor(floor + ((ceiling - floor) /2))
      const lowerFloor = floor
      const lowerCeiling = mid
      const upperFloor = mid+1
      const upperCeiling = ceiling
      
      const distinctPossibleIntegersInLowerRange = lowerCeiling - lowerFloor + 1
      
      let itemsInLowerRange = 0 //count the number of items in the lower range
      numbers.forEach(item => {
        if(item >= lowerFloor && item <= lowerCeiling) {
          itemsInLowerRange += 1
        }
      })
      //if the number of items in the lowerRange is greater than the distinct possibility, we know the dupe is in the lower range.
      if(itemsInLowerRange > distinctPossibleIntegersInLowerRange) {
        floor = lowerFloor
        ceiling = lowerCeiling
      } else {
        //if not, we know the dupe is in the upper range
        floor = upperFloor
        ceiling = upperCeiling
      }
    }
  
    return floor
  }

  /* Time = O(n lg n) //we are still iterating through the entire array, just decreasing the range
    Space = O(1) 
  */