function rotation(array, counter) {
  //check the rotation count
  for (let i = 0; i < counter; i++) {
    // take the last element and put it in the begining
    let last = array.pop();
    array.unshift(last);
  }

  console.log(array.join(" "));
}
rotation(["1", "2", "3", "4"], 2);
rotation(["Banana", "Orange", "Coconut", "Apple"], 15);
