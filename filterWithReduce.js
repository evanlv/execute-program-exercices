const arr1 = [1, 2, 3];
const arr2 = [null, undefined];

const filter = (arr, callback) =>
  callback ? arr.reduce((xs, x) => [...xs, x], []) : [];

console.log(filter(arr1, (num) => num >= 0));
console.log(filter(arr1, (num) => num > 1));
console.log(filter(arr1, (num) => num > 5));
console.log(filter(arr2, (num) => true));
console.log(filter([], (num) => true));
