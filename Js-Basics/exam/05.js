function funName(input) {
  let moneyGoal = Number(input[0]);

  let moneyCollected = 0;
  let index = 1;

  while (index < input.length) {
    if (input[index] === "closed") {
      break;
    } else if (moneyCollected >= moneyGoal) {
      break;
    } else {
      switch (input[index]) {
        case "haircut":
          if (input[index + 1] === "mens") {
            moneyCollected += 15;
          } else if (input[index + 1] === "ladies") {
            moneyCollected += 20;
          } else if (input[index + 1] === "kids") {
            moneyCollected += 10;
          }

          break;
        case "color":
          if (input[index + 1] === "touch up") {
            moneyCollected += 20;
          } else if (input[index + 1] === "full color") {
            moneyCollected += 30;
          }
          break;
      }
    }

    index++;
  }

  if (input[index] === "closed" && moneyCollected < moneyGoal) {
    console.log(
      `Target not reached! You need ${moneyGoal - moneyCollected}lv. more.`
    );
    console.log(`Earned money: ${moneyCollected}lv.`);
  } else if (input[index] === "closed" || moneyCollected < moneyGoal) {
    console.log(
      `Target not reached! You need ${moneyGoal - moneyCollected}lv. more.`
    );
    console.log(`Earned money: ${moneyCollected}lv.`);
  } else {
    console.log("You have reached your target for the day!");
    console.log(`Earned money: ${moneyCollected}lv.`);
  }
}
funName([
  "300",
  "haircut",
  "ladies",
  "haircut",
  "kids",
  "color",
  "touch up",
  "closed",
]);
