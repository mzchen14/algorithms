const str1 = "hello"
const str2 = "world"

console.log(str1.localeCompare(str2))

// Sorting an array alphabetically:

const arr = ['bananas', 'cranberries', 'apples', 'dragonfruits',]

arr.sort((a,b) => b.localeCompare(a))

console.log(arr)

/* localeCompare compares stringA to stringB 
if they are equal, the function returns 0
if a "is greater" or comes after b, returns 1
if a "is less than" or comes before b, returns -1
*/