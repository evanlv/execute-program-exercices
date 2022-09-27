const array1 = []
const array2 = ["z"]
const array3 = ["a", "b"]
const array4 = ["a", "big", "ox"]
const array5 = ["zzz", "yy", "x"]

const sortByLength = (words) => words.sort((a, b) => a.length - b.length)

console.log(sortByLength(array1))
console.log(sortByLength(array2))
console.log(sortByLength(array3))
console.log(sortByLength(array4))
console.log(sortByLength(array5))
