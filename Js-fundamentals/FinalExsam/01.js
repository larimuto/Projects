function solve(array) {
  let text = array.shift();

  let command = array.shift();

  while (command != "End") {
    toakens = command.split(" ");

    switch (toakens[0]) {
      case "Translate":
        let toReplace = toakens[1];
        let replacer = toakens[2];
        text = text.split(toReplace).join(replacer);
        console.log(text);
        break;
      case "Includes":
        let substr = toakens[1];

        c = text.indexOf(substr);
        if (c != -1) {
          console.log("True");
        } else {
          console.log("False");
        }
        break;
      case "Start":
        let start = toakens[1];
        if (text.startsWith(start)) {
          console.log("True");
        } else {
          console.log("False");
        }

        break;
      case "Lowercase":
        text = text.toLowerCase();
        console.log(text);
        break;
      case "FindIndex":
        let last = toakens[1];

        console.log(text.lastIndexOf(last));
        break;
      case "Remove":
        let first = Number(toakens[1]);
        let second = Number(toakens[2]);

        text = text.split("");
        text.splice(first, second);
        console.log(text.join(""));

        break;
    }

    command = array.shift();
  }
}
solve([
  "*S0ftUni is the B3St Plac3**",

  "Translate 2 o",

  "Includes best",

  "Start the",

  "Lowercase",

  "FindIndex p",

  "Remove 2 7",

  "End",
]);
