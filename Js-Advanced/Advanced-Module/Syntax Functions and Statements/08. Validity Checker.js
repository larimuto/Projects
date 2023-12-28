function validity(x1, y1, x2, y2) {
  //check the pairs for validity by passing them trough  function
  x1y1 = first(x1, y1, 0, 0);
  x2y2 = first(x2, y2, 0, 0);
  x1y1x2y2 = first(x1, y1, x2, y2);
  // pass  it on to  the func and check inside if its a valid ( integer )
  function first(x1, y1, x2, y2) {
    a =
      (x2 * x2 - 2 * x2 * x1 + x1 * x1 + y2 * y2 - 2 * y2 * y1 + y1 * y1) **
      0.5;
    if (Number.isInteger(a)) {
      return `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`;
    } else {
      return `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;
    }
  }

  console.log(x1y1);
  console.log(x2y2);
  console.log(x1y1x2y2);
}
validity(3, 0, 0, 4);
validity(2, 1, 1, 1);
