    //go through both slots and calculate the duration of availabilities for all slots
    //creating array.map
    //if the duration is > dur keep the time slot
    //compare the first indices of slot1 of A & B
    //whichever value is greater is going to be your lower window
    //compare the second indices of slot2 of A & B
    //whichever value is smaller, is going to be your upper window.
    //subtract lower window from upper window, if the duration is <= dur output = lower, upper
function meetingPlanner(slotsA, slotsB, dur) {

    let timeA = slotsA
    let timeB = slotsB
  
    let lower = 0
    let upper = 0
    
    let pointerA = 0
    let pointerB = 0
    
    while(pointerA < timeA.length && pointerB < timeB.length){
      let slot1 = timeA[pointerA]
      let slot2 = timeB[pointerB]
      if(slot1[0] >= slot2[0]) {
        lower = slot1[0]
      } else {
        lower = slot2[0]
      }
      
      if(slot1[1] >= slot2[1]) {
        upper = slot2[1]
      } else {
        upper = slot1[1]
      }
      
      if(upper - lower >= dur){
        if(lower + dur < upper){
          return [lower, lower+dur]
        } else {
          return [lower, upper]
        }
      }
     
      else {
        if(slot1[1] >= slot2[1]){
          pointerB++
        } else {
          pointerA++
        }
      }
    }
    return []
  }