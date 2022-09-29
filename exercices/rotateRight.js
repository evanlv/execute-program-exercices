const arr1 = [1, 1, 1]
const arr2 = [0, 0, 1]
const arr3 = [0, 0, 0]
const arr4 = [1, 2, 3]
const arr5 = [1]
const arr6 = []
const arr7 = [1, 2, undefined]

// USE POP(), PUSH(), SHIFT(), UNSHIFT()

const rotate = (arr) => (arr.length === 0 ? [] : arr.unshift(arr.pop()))

console.log(rotate(arr1)) //[1, 1, 1]
console.log(rotate(arr2)) //[1, 0, 0]
console.log(rotate(arr3)) //[0, 0, 0]
console.log(rotate(arr4)) //[3, 1, 2]
console.log(rotate(arr5)) //[1]
console.log(rotate(arr6)) //[]
console.log(rotate(arr7)) //[undefined, 1, 2]
