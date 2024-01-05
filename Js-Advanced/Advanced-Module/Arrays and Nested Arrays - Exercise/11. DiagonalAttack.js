function diagAttack(matrix) {
  // Use reduce to convert the original map to a numeric map
  const numericMap = matrix.reduce((acc, row) => {
    // Split the string into an array of strings representing individual numbers
    const numbersAsStrings = row.split(" ");
    // Convert each string into an integer and push it to the accumulator
    acc.push(numbersAsStrings.map((num) => Number(num)));

    return acc;
  }, []);
  // set  variables to compare the diagonals
  let diagLR = 0;
  let diagRL = 0;
  // find the length of the matrix to figure out the  diagonals positions
  let mtrxLength = numericMap.length - 1;
  // check if diagonals are equal
  for (let i = 0; i <= mtrxLength; i++) {
    let row = numericMap[i];

    diagLR += row[i];
    diagRL += row[mtrxLength - i];
  }
  // if eual
  if (diagLR === diagRL) {
    for (let i = 0; i <= mtrxLength; i++) {
      let row = numericMap[i];
      let diagL = i;
      let diagR = mtrxLength - i;
      for (let i = 0; i < row.length; i++) {
        let rpls = row[i];
        // check for indexex of the main diagonal  eual to the current and if not replace the valuse  with the sum of one of diagonals
        if (i !== diagL && i !== diagR) {
          row[i] = diagRL;
        }
      }
    }
    // print each on new row
    numericMap.forEach((x) => {
      console.log(x.join(" "));
    });
  } else {
    // if diagonals not equal  print the original matrix
    matrix.forEach((x) => {
      console.log(x.split(" ").join(" "));
    });
  }
}

diagAttack(["1 1 1", "1 1 1", "1 1 0"]);
