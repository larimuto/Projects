function addItem() {
  const text = document.querySelector("#newItemText");
  const curValue = document.querySelector("#newItemValue");
  const menu = document.querySelector("#menu");
  // make the new element
  let newOption = document.createElement("option");
  newOption.textContent = text.value;
  newOption.value = curValue.value;
  // append the new element
  menu.appendChild(newOption);
  // reset state
  text.value = "";
  curValue.value = "";
}
