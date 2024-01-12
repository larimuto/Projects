function solve() {
  // take the  initial  values of the objects
  let text = document.getElementById("text").value;
  let state = document.getElementById("naming-convention").value.trim();
  let result = document.getElementById("result");
 debugger

  // make a funtion to trow  and make it pascal case  for a base
  function trimer(someTxt, state) {
    text = text.split(" ");
    let final = "";

    for (const element of text) {
      let start = element[0].toUpperCase();

      let end = element
        .slice(1)
        .split("")
        .map((x) => x.toLowerCase())
        .join("");
      final += start.concat(end) ;
    }
    // check for state and  leave it base  for PC ,
    if (state === "Pascal Case") {
      return (result.textContent = final);
      // modify it for CC
    } else if (state === "Camel Case") {
      str = final[0].toLowerCase();
      end = final.slice(1);

      return str.concat(end);

      // trow Error! if  its not one of the two
    } else {
      return "Error!";
    }
  }

  result.textContent = trimer(text, state);
}
