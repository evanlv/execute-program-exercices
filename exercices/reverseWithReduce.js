const arr1 = [1]
const arr2 = [1, 2, 3, 4, 5]
const arr3 = ["a", "b", "c"]
const arr4 = []

const reverse = (arr) => arr.reduceRight((xs, x) => [...xs, x], [])

console.log(reverse(arr1)) //[1]
console.log(reverse(arr2)) //[5,4,3,2,1]
console.log(reverse(arr3)) //["c","b","a"]
console.log(reverse(arr4)) //[]
