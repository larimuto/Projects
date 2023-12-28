function funName(input) {
  let days = Number(input[0]);
  let kmDayOne = Number(input[1]);

  let kmSheRan = kmDayOne;
  let totalKmRan = kmDayOne;
  for (let i = 2; i < input.length; i++) {
    data = Number(input[i]);
    procent = data / 100;

    kmSheRan = kmSheRan + kmSheRan * procent;
    totalKmRan += kmSheRan;
  }
  if (totalKmRan >= 1000) {
    console.log(
      `You've done a great job running ${Math.ceil(
        totalKmRan - 1000
      )} more kilometers!`
    );
  } else {
    console.log(
      `Sorry Mrs. Ivanova, you need to run ${Math.ceil(
        1000 - totalKmRan
      )} more kilometers`
    );
  }
}
funName(["4", "100", "30", "50", "60", "80"]);
