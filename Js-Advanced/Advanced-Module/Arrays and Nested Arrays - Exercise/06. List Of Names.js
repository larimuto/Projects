function list(array) {
  //sort the array
  array = array.sort((a, b) => a.localeCompare(b));

  //use for each with index to set the list
  array.forEach((x, i) => {
    console.log(`${i + 1}.${x} `);
  });
}
list(["John", "Bob", "Christina", "Ema"]);
// 
// 1.Bob
// 2.Christina
// 3.Ema
// 4.John
// 
