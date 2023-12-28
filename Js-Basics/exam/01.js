function funName(input) {
  let processDollars = Number(input[0]);
  let videoCardDollars = Number(input[1]);
  let ramDollars = Number(input[2]);
  let ramCount = Number(input[3]);
  let namalenie = Number(input[4]);

  let procesInlev = processDollars * 1.57;
  let videCardInLev = videoCardDollars * 1.57;
  let ramInLev = ramDollars * 1.57;

  let discountedItems =
    procesInlev + videCardInLev - (procesInlev + videCardInLev) * namalenie;

  let finalsum = discountedItems + ramInLev * ramCount;

  console.log(`Money needed - ${finalsum.toFixed(2)} leva.`);
}
funName(["500", "200", "80", "2", "0.05"]);
