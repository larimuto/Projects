function sprtby2crit(array) {
  array = array.sort((a, b) => a.length - b.length || a.localeCompare(b));

  array.forEach((x) => {
    console.log(x);
  });
}
sprtby2crit(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
// Jack
// Isacc
// George
// Theodor
// Harrison
