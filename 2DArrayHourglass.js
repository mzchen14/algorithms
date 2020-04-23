/*
Given a  2D Array, :

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
We define an hourglass in  to be a subset of values with indices falling in this pattern in 's graphical representation:

a b c
  d
e f g
There are  hourglasses in , and an hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum.

For example, given the 2D array:

-9 -9 -9  1 1 1 
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
 0  0  8  6 6 0
 0  0  0 -2 0 0
 0  0  1  2 4 0
We calculate the following  hourglass values:

-63, -34, -9, 12, 
-10, 0, 28, 23, 
-27, -11, -2, 10, 
9, 17, 25, 18
Our highest hourglass value is  from the hourglass:

0 4 3
  1
8 6 6 
*/
// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let max = -Infinity
    let sum //Note initializing to zero gave an error
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(i > 0 && i < arr.length-1 && j > 0 && j < arr.length-1){
                let a = arr[i-1][j-1]
                let b = arr[i-1][j]
                let c = arr[i-1][j+1]
                let d = arr[i][j]
                let e = arr[i+1][j-1]
                let f = arr[i+1][j]
                let g = arr[i+1][j+1]
                sum = a+b+c+d+e+f+g
            }
            if(sum > max) {
            max = sum
            }
        }
    }
    return max
}