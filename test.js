function manipulateArray(inputArray, commands) {
  let list = [
    {
      Petur: { gosho: 23 },
      Stoyo: { gosho: { trinidad: "hello" } },
    },
    {
      Petur: { gosho: 23 },
      Stoyo: { gosho: { trinidad: "hello" } },
    },
  ];

  console.log(list);

  for (let element of Object.entries(list)) {
    // console.log(Object.entries(element[1])[0][1]);
    // console.log(element);
    // console.log(Object.values(element)[1]);
  }
}
manipulateArray(
  [1, 2, 4, 5, 6, 7],
  ["add 1 8", "contains 1", "contains 3", "print"]
);
