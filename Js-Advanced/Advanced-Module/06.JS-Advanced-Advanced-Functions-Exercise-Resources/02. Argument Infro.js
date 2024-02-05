function arguments(...arg) {
  let list = {};

  for (const cur of arg) {
    let type = typeof cur;
    console.log(`${type}: ${cur} `);
    if (!list.hasOwnProperty(type)) {
      list[type] = 0;
    }

    list[type] += 1;
  }

  let sortetList = Object.entries(list).sort((a, b) => b[1] - a[1]);
  sortetList.forEach((x) => {
    console.log(`${x[0]} = ${x[1]}`);
  });
}
arguments("cat", 42, 42, 42, 42, 42, 42, 42, 42, function () {
  console.log("Hello world!");
});
