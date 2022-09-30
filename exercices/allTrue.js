const allTrueOneLiner = (values) => values.reduce((xs, x) => xs && x, true)

console.log(allTrue([false]))
console.log(allTrue([true, false]))
console.log(allTrue([false, true]))
console.log(allTrue([false, false]))
console.log(allTrue([true, true]))
console.log(allTrue([]))
