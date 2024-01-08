//spread to avoid clutter
function cooker(...array) {
  //take the number and  make the support object
  let number = Number(array.shift());
  let commands = {
    chop: (x) => x / 2,
    dice: (x) => Math.sqrt(x),

    spice: (x) => x + 1,

    bake: (x) => x * 3,

    fillet: (x) => x - x * 0.2,
  };
  // run trough comands and match them to the  object
  for (const element of array) {
    number = commands[element](number)
    console.log(number);
  }
}
cooker("32", "chop", "chop", "chop", "chop", "chop");
