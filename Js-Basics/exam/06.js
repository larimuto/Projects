function funName(input) {
  let aRange = Number(input[0]);
  let bRange = Number(input[1]);
  let cRange = Number(input[2]);
  let a = "";
  let b = "";
  let c = "";

  for (let index = 1; index <= aRange; index++) {
    let data = "";
    let aNum = Number(index);
    if (aNum % 2 === 0) {
      a = aNum;
    } else {
      continue;
    }

    for (let index = 1; index <= bRange; index++) {
      let data2 = Number([index]);

      if (data2 === 2) {
        b = data2;
      } else if (data2 === 3) {
        b = data2;
      } else if (data2 === 5) {
        b = data2;
      } else if (data2 === 7) {
        b = data2;
      } else {
        continue;
      }

      for (let index = 1; index <= cRange; index++) {
        let cnum = Number([index]);

        if (cnum % 2 === 0) {
          c = cnum;
          console.log(`${a} ${b} ${c}`);
          continue;
        } else {
          continue;
        }
      }
    }
  }
}

funName(["9", "9", "9"]);
