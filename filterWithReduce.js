const arr1 = [1, 2, 3]
const arr2 = [1, 2, 3]
const arr3 = [1, 2, 3]
const arr4 = [null, undefined]
const arr5 = []

const filter = (arr, callback) => {
  return arr.reduce((xs, x) => {}, [])
}

console.log(filter([1, 2, 3], (num) => num >= 0))
console.log(filter([1, 2, 3], (num) => num > 1))
console.log(filter([1, 2, 3], (num) => num > 5))
console.log(filter([null, undefined], (num) => true))
console.log(filter([], (num) => true))
