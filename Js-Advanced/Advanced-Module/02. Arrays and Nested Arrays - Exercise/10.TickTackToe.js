function tickTak(array) {
  let tray = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];
  let moves = 9;
  let curPlayer = 0;

  function winCondition(table) {
    for (const element of table) {
      let stuff = element.filter((x, i, arrray) => arrray.indexOf(x) === i);

      if (stuff.length === 1 && stuff[0] !== false) {
        return true;
      }
    }

    let colum1 = table
      .map((x, i) => x[0])
      .filter((x, i, arrray) => arrray.indexOf(x) === i);
    if (colum1.length === 1 && colum1[0] !== false) {
      return true;
    }

    let colum2 = table
      .map((x, i) => x[1])
      .filter((x, i, arrray) => arrray.indexOf(x) === i);
    if (colum2.length === 1 && colum2[0] !== false) {
      return true;
    }

    let colum3 = table
      .map((x, i) => x[2])
      .filter((x, i, arrray) => arrray.indexOf(x) === i);
    if (colum3.length === 1 && colum3[0] !== false) {
      return true;
    }

    let diagonalLR = table[0][0] === table[1][1] && table[0][0] === table[2][2];
    if (diagonalLR === true && table[0][0] !== false) {
      return true;
    }

    let diagonalRL = table[0][2] === table[1][1] && table[0][2] === table[2][0];
    if (diagonalRL === true && table[0][2] !== false) {
      return true;
    }
    return false;
  }

  for (i = 0; i < array.length; i++) {
    let [row, colum] = array[i].split(" ");
    row = Number(row);
    colum = Number(colum);
    let player = "X";

    if (curPlayer % 2 === 0) {
      player = "X";
    } else {
      player = "O";
    }

    if (row < 0 || row >= 3 || colum < 0 || colum >= 3) {
      curPlayer += 2;
      moves++;
      continue;
    }

    if (tray[row][colum] === false) {
      tray[row][colum] = player;
      moves--;
      curPlayer++;
    } else {
      curPlayer += 2;
      
      console.log("This place is already taken. Please choose another!");
      continue;
    }

    if (winCondition(tray) === true) {
      console.log(`Player ${player} wins!`);

      return tray.forEach((x) => {
        console.log(x.join("\t"));
      });
    }

    if (moves == 0) {
      console.log("The game ended! Nobody wins :(");
      return tray.forEach((x) => console.log(x.join("\t")));
    }
  }
}
tickTak(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"])