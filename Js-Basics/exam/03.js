function funName(input) {
  let dancersCount = Number(input[0]);
  let pointsCount = Number(input[1]);
  let season = input[2];
  let Country = input[3];

  let moneyPrice = 0;

  switch (Country) {
    case "Bulgaria":
      moneyPrice = pointsCount * dancersCount;

      if (season === "summer") {
        moneyPrice = moneyPrice - moneyPrice * 0.05;
      } else if (season === "winter") {
        moneyPrice = moneyPrice - moneyPrice * 0.08;
      }

      break;
    case "Abroad":
      moneyPrice =
        pointsCount * dancersCount + pointsCount * dancersCount * 0.5;
      if (season === "summer") {
        moneyPrice = moneyPrice - moneyPrice * 0.1;
      } else if (season === "winter") {
        moneyPrice = moneyPrice - moneyPrice * 0.15;
      }
      break;
  }

  let charity = moneyPrice * 0.75;
  let moneyPerdancer = (moneyPrice - charity) / dancersCount;

  console.log(`Charity - ${charity.toFixed(2)}`);
  console.log(`Money per dancer - ${moneyPerdancer.toFixed(2)}`);
}
funName(["25", "98", "winter", "Bulgaria"]);
