function magicMatrix(array) {
  // assume its true and go on
  let isMagic = true;
  // find the magic number by  first row
  let maticNum = array[0].reduce((acc, sum) => acc + sum, 0);
  // check every row if its match the magicNumber
  for (const element of array) {
    let curScore = element.reduce((acc, sum) => acc + sum, 0);
    if (curScore != maticNum) {
      return console.log("false");
    }
  }
  // setup basic borders for the counter
  let n = array[0].length;
  let counter = 0;
  while (counter < n) {
    let colum = 0;

    // sum the colums by n+1
    array.forEach((x, i) => (colum += x[counter]));

    // check the sum if its equal to the magicNumber for the matrix
    if (colum != maticNum) {
      return console.log("false");
    }

    // never forget
    counter++;
  }

  console.log(isMagic);
}
magicMatrix([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
// true
magicMatrix([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
//false
