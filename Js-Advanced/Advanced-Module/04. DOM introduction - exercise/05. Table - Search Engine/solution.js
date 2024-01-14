function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    let result = document.getElementById("result");
    let command = document.getElementById("searchField").value;
    let xTable = document.querySelectorAll("table.container tbody tr");
    let condition = false;

    for (let row = 0; row < xTable.length; row++) {
      mainCell = xTable[row];

      for (const cell of Array.from(mainCell.querySelectorAll("td"))) {
        state = cell.textContent.toLowerCase().includes(command.toLowerCase());
        if (state && command !== "") {
          condition = true;
          mainCell.classList.add("select");
        } else if (command === "" || condition === false) {
          mainCell.classList.remove("select");
        }
      }
    }
  }
}
