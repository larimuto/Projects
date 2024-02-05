function add(value) {
  let sum = value;

  const finaleVal = function (newValue) {
    sum += newValue;
    return finaleVal;
  };
  finaleVal.toString = function () {
    return sum;
  };

  return finaleVal;
}

const result = add(1)(2)(3)(5);
console.log(result.toString());
