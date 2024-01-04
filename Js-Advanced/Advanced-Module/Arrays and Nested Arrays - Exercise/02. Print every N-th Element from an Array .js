function nthElement(array, x) {
  // filter the array by the expontent
  return array.filter((_, i) => i % x == 0);
}
// nthElement(["5", "20", "31", "4", "20"], 2);
// nthElement(["1", "2", "3", "4", "5"], 6);
nthElement(["dsa", "asd", "test", "tset"], 2);
