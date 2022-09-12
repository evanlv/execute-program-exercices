const arr1 = [0, 0]
const arr2 = [3]
const arr3 = [4]
const arr4 = [5]
const arr5 = [1, 2]
const arr6 = [1, 2, 3]
const arr7 = [1, 2, 3, 4, 5]
const arr8 = [2, 2, 2, 2]
const arr9 = []

const f = (arr) => {
  const oddNumbers = arr
    .filter((value) => value % 2 === 1)
    .map((oddNumber) => Math.pow(oddNumber, 2))
    .reduce((acc, squaredNumber) => acc + squaredNumber, 0)
  return oddNumbers
}

console.log(f(arr1))
console.log(f(arr2))
console.log(f(arr3))
console.log(f(arr4))
console.log(f(arr5))
console.log(f(arr6))
console.log(f(arr7))
console.log(f(arr8))
console.log(f(arr9))
