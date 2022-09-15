const allTrue = (values) => {
  if (values.length) {
    return values.reduce((xs, x) => {
      if (x === false) {
        return false;
      }
      return xs ? true : false;
    });
  }
  return true;
};

// const allTrueOneLiner = (values) => values.reduce((acc, x) => acc && x, true);

console.log(allTrue([false]));
console.log(allTrue([true, false]));
console.log(allTrue([false, true]));
console.log(allTrue([false, false]));
console.log(allTrue([true, true]));
console.log(allTrue([]));