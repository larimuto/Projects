function store(array) {
  let list = {};
// setup the main categories in list
  array.map((x, i) => (list[x[0]] = {}));
// feel the list with items
  for (const element of array) {
    [product, price] = element.split(" : ");
// set items with prices
    list[product[0]][product] = Number(price);
  }
// sort the  main  list 
  for (const element of Object.entries(list).sort((a, b) =>
    a[0].localeCompare(b[0])
  )) {
    // sort the secondary products list 
    secondary = Object.entries(element[1]).sort((a, b) =>
      a[0].localeCompare(b[0])
    );
// print the main list , and then go trough all of the entries row by row and split em
    console.log(element[0]);
    for (const row of secondary) {
      console.log(row.join(": "));
    }
  }
}
store([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
