//Brute Force Time = o(n^2) bc of bubble sort, Space = o(n)

function mergeRanges(meetings) {

    // Merge meetings ranges
    /* Approach: Sort the meetings first
      If statement into while loop:
      While the end time is greater than or equal to the next starting time, merge in place, increment j pointer only
      otherwise, just include the original time slot into the array, let i = j, let j++*/
    
      //Sort the array using bubble sort...(could not figure out .sort at the time)
    for(let i = 0; i<meetings.length-1; i++) {
      if(meetings[i].startTime > meetings[i+1].startTime){
        swap(i, i+1, meetings)
      }
    }
    //intitialized result arr and pointers to compare elements
    let merged = []
    let i = 0
    let j = i+1
    while(i < meetings.length && j < meetings.length) {
      if(meetings[i].endTime >= meetings[j].startTime){ //if the end time of meeting1 is greater than or = the starttime of meeting2...
        // if(meetings[i].endTime < meetings[j].endTime){
        //   meetings[i].endTime = meetings[j].endTime
        // }  //Use math max when choosing between 2!
        meetings[i].endTime = Math.max(meetings[i].endTime, meetings[j].endTime)
        j++ //increment J ONLY because meeting[i] is merging the other slots
        if(j > meetings.length-1){ //if we've reached the end of the array, nothing left to merge 
          merged.push(meetings[i]) //push the previously merged meeting[i] into the final array before the loop breaks!
        }
      } else {//otherwise, if the endTime of meeting 1 is less than the startTime of meeting 2, we cannot merge
        merged.push(meetings[i]) //push the current time slot into the final arr
        i = j //move i up j (to cover the case that we had merged a few times and j is way ahead)
        j++ //increment j
        if(j > meetings.length-1) { //again if j is greater than the indexes in the arr, we've reached the end
          merged.push(meetings[i]) //push meeting i into the final array before the while loop breaks!
        }
      }
    }
    return merged; //return final array
  }
  //swap function for bubble sort
  function swap(i, j, array) {
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  
  //Instead of doing bubble sort, we could have done:
  // const sortedMeetings = meetings.sort((a, b) => {
  //   return a.startTime - b.startTime
  // }
  //See below: 
  
  //Optimized (From Interview Cake) Time = O(n log n) , Space = O(n)
  function mergeRanges(meetings) {

    // Create a deep copy of the meetings array
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Deep_Clone
    const meetingsCopy = JSON.parse(JSON.stringify(meetings));
  
    // Sort by start time
    const sortedMeetings = meetingsCopy.sort((a, b) => {
      return a.startTime - b.startTime;
    });
  
    // Initialize mergedMeetings with the earliest meeting
    const mergedMeetings = [sortedMeetings[0]];
  
    for (let i = 1; i < sortedMeetings.length; i++) {
      const currentMeeting    = sortedMeetings[i];
      const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];
  
      // If the current meeting overlaps with the last merged meeting, use the
      // later end time of the two
      if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
        lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
      } else {
  
        // Add the current meeting since it doesn't overlap
        mergedMeetings.push(currentMeeting);
      }
    }
  
    return mergedMeetings;
  }