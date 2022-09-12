const arr1 = ["a"]
const arr2 = ["a", "b"]
const arr3 = ["a", "b", "c"]
const arr4 = ["a", "b", "c", "d"]
const arr5 = ["a", "b"]
const arr6 = ["", "", ""]
const arr7 = []

const join = (arr, separator) =>
  arr.reduce((acc, joinedItem) => {
    console.log(joinedItem.concat(separator))
  }, [])

// console.log(join(arr1, ","))
console.log(join(arr2, ","))
// console.log(join(arr3, ""))
console.log(join(arr4, "x"))
// console.log(join(arr5, "COMMA"))
// console.log(join(arr6, ","))
// console.log(join(arr7, ","))
