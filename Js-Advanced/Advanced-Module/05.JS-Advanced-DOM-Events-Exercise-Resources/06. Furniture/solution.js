function solve() {
  const allButtons = document.querySelectorAll("button");
  let [generate, buy] = Array.from(allButtons);
  generate.addEventListener("click", addItems);
  buy.addEventListener("click", buyItems);

  const allTextAreas = document.querySelectorAll("textarea");
  let [addText, buyText] = Array.from(allTextAreas);

  function addItems() {
    xObj = Array.from(JSON.parse(addText.value));
    console.log(xObj);
    xObj.forEach((element) => {
      const mainTable = document.querySelector("tbody");

      //curent object to add
      let obj = element;
      //current row to add the object on
      let currentRow = document.createElement("tr");
      // image colum
      let imageColume = document.createElement("td");
      let image = document.createElement("img");
      image.src = obj.img;
      imageColume.appendChild(image);
      currentRow.appendChild(imageColume);

      //name  table colum //
      const nameColum = document.createElement("td");
      const nameColumText = document.createElement("p");
      nameColumText.textContent = obj.name;
      nameColum.appendChild(nameColumText);
      currentRow.appendChild(nameColum);

      //price

      const priceColum = document.createElement("td");
      const priceColumText = document.createElement("p");
      priceColumText.textContent = obj.price;
      priceColum.appendChild(priceColumText);
      currentRow.appendChild(priceColum);

      // decoration factor

      const decoColum = document.createElement("td");
      const decoColumText = document.createElement("p");
      decoColumText.textContent = obj.decFactor;
      decoColum.appendChild(decoColumText);
      currentRow.appendChild(decoColum);

      // checkbox
      const chekColum = document.createElement("td");
      const chekColumText = document.createElement("input");
      chekColumText.type = "checkbox";
      chekColum.appendChild(chekColumText);
      currentRow.appendChild(chekColum);

      // attach the new row
      mainTable.appendChild(currentRow);
    });
  }

  function buyItems() {
    let boughtItems = [];
    let totalPrice = 0;
    let avgDecoFactor = 0 ;

    mainTable = document.querySelectorAll("table.table tbody tr");
    mainTable = Array.from(mainTable);

    for (let i = 1; i < mainTable.length; i++) {
      colums = Array.from(mainTable[i].querySelectorAll("td"));
      checker = colums[4].querySelector("input");

      if (checker.checked) {
        boughtItems.push(colums[1].textContent.trim());
        totalPrice += Number(colums[2].textContent);
        avgDecoFactor += Number(colums[3].textContent);
      }
    }

    buyText.value =`Bought furniture: ${boughtItems.join(
      ", "
    )}\nTotal price: ${totalPrice.toFixed(
      2
    )}\nAverage decoration factor: ${avgDecoFactor/boughtItems.length}`;
  }
}
