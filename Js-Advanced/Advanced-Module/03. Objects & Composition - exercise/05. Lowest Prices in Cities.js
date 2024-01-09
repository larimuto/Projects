function lowestPrice(array) {
  let result = {};
  //fill the result with the products ,   check the price if its <  change it if not leave the town and the price as it is
  for (const element of array) {
    let [town, product, price] = element.split(" | ");
    // check if the product is already  in the object   , if not  add it
    if (!result.hasOwnProperty(product)) {
      result[product] = { name: town, price: Number(price) };
    } else {
      //  chek the  price  if its lower  change the city and the price
      if (Number(price) < result[product].price) {
        (result[product].name = town), (result[product].price = Number(price));
      }
    }
  }

  for (const key of Object.entries(result)) {
    console.log(`${key[0]} -> ${key[1].price} (${key[1].name})`);
  }
}
lowestPrice([
  "Sample Town | Sample Product | 1000",

  "Sample Town | Orange | 2",

  "Sample Town | Peach | 1",

  "Sofia | Orange | 3",

  "Sofia | Peach | 2",

  "New York | Sample Product | 2222.1",

  "New York | Burger | 10",
]);
// Sample Product -> 1000 (Sample Town)
// Orange -> 2 (Sample Town)
// Peach -> 1 (Sample Town)
// Burger -> 10 (New York)
