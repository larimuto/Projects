function magic(array) {
  let biggest = array[0];
  // make a function to compair the numbers
  function check(a, x) {
    if (a == x) {
      return true;
    } else if (a > x) {
      biggest = a;
      return true;
    }
  }
  //filter the  array for the expected output x > biggest
  let newarray = array.filter((x) => check(x, biggest));

  if (newarray.length <= 0) {
    return [];
  } else {
    return newarray;
  }
}
magic([1, 3, 8, 4, 10, 12, 12, 3, 2, 24]);
// // [1, 3, 8, 10, 12, 24]
magic([1, 2, 3, 4]);
// // //[1, 2, 3, 4]
magic([]);
//[20]
