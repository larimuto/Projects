function sorting(array) {
  //check if array is 0
  if (array.length == 0) {
    return array;
  }

  //sort it in ascending order
  array = array.sort((a, b) => a - b);
  newarray = [];

  //whule  we have numbers shift   the lowest then pop the highest untill there has  length
  while (array.length > 0) {
    if (array.length > 1) {
      newarray.push(array.shift()); // deal with  even inputs
      newarray.push(array.pop());
    } else {
      newarray.push(array.shift()); // add the odd element to the array
    }
  }

  return newarray;
}
sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
// [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]
