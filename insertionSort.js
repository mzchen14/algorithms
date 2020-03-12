//Approach
//1. Start by picking second element of arr
//2 Compare to previous elements, swap if neccessary
//3. Continue to next element, if it is in the wrong order,
//iterate through the sorted portion and place.
//4.Repeat until sorted.

function insertionSort(array) {
      for(let i = 1; i< array.length; i++) {
          let current = i;
          let sorted = i - 1;
          while(sorted >= 0 && array[current] < array[sorted]) {
                  swap(current, sorted, array);
                  current--;
                  sorted--;
              }
      }
      return array;
  }
  const swap = (i, j, array) => {
      const temp = array[j];
      array[j] = array[i];
      array[i] = temp;
  }