function search() {
  let result = document.getElementById("result");
  let command = document.getElementById("searchText").value;
  let list = document.getElementById("towns"); // take the main div that includes the  list
  let mainList = list.querySelectorAll("li");
  let counter = 0;
  // go trough the  array of towns
  for (let i = 0; i < Array.from(mainList).length; i++) {
    let town = mainList[i].textContent;
    //check if  the current town includes  the command
    // if command  is "" just  go trough the array and  remove the decorations
    if (command === "") {
      mainList[i].style.fontWeight = "";
      mainList[i].style.textDecoration = "";
      counter = 0;
    }

    // else  bold and underline the matches and  abjust the counter
    else if (town.toLowerCase().includes(command.toString().toLowerCase())) {
      counter++;

      mainList[i].style.fontWeight = "bold";
      mainList[i].style.textDecoration = "underline";
      // reset   previouse searchesh if any
    } else {
      mainList[i].style.fontWeight = "";
      mainList[i].style.textDecoration = "";
    }
  }
  // print the result
  return (result.textContent = `${counter} matches found`);
}
