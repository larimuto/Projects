function generateReport() {
  let table = document.querySelector("table");
 
  let output = document.getElementById("output")

  // take the colums status and names
  let colums = document.querySelectorAll("thead tr input");

 
  let finalList = [];
  //status as boolean
  columStatus = [];
  // make it  work with judge
  checkboxes = Array.from(colums);

  // take the status
  for (let entry of checkboxes) {
    // add  the name and style it  to be able later to use it
    if (entry.checked) {
      entry = entry.name;
      entry = entry.split("");

      entry[0] = entry[0].toUpperCase();
      entry = entry.join("");

      columStatus.push(entry);
      // add false
    } else {
      columStatus.push(entry.checked);
    }
  }


  // row
  for (let i = 1; i < table.rows.length; i++) {
    // Get the current row
    let row = table.rows[i];
    let obj = {};

    // cell
    for (let j = 0; j < row.cells.length; j++) {
      // Get the current cell
      let cell = row.cells[j];
      // check if current column is checked  and add the text content
      if (columStatus[j] !== false) {
        obj[colums[j].name] = cell.textContent;
      }
    }
    // push the row to the  list
    finalList.push(obj);
  }
output.value = JSON.stringify(finalList)
}
