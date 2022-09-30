const arr1 = [1, 2, 3]
const arr2 = [5, 6, 7]
const arr3 = []
const arr4 = [null]
const arr5 = [1, 2]

const find = (arr, callback) => {
  const index = arr.findIndex(callback)

  return index === -1 ? undefined : arr[index]
}

console.log(find(arr1, (n) => n === 1)) // Expected: 1
console.log(find(arr2, (n) => n / 2 === 3)) // Expected: 6
console.log(find(arr1, (n) => n > 5)) // Expected: undefined
console.log(find(arr3, (n) => n > 5)) // Expected: undefined
console.log(find(arr4, (n) => n === null)) // Expected: null

arr5[-1] = 3
console.log(find(arr5, (n) => n === 5)) // Expected: undefined
