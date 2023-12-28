function funName(input) {
  let tShirtPrice = Number(input[0]);
  let moneyForPrice = Number(input[1]);

  let shortsPrice = tShirtPrice * 0.75;
  let socks = shortsPrice * 0.2;
  let shoes = (tShirtPrice + shortsPrice) * 2;

  let price = tShirtPrice + shortsPrice + socks + shoes;
  let finalPrice = price - price * 0.15;

  if (finalPrice >= moneyForPrice) {
    console.log("Yes, he will earn the world-cup replica ball!");
    console.log(`His sum is ${finalPrice.toFixed(2)} lv.`);
  } else {
    console.log("No, he will not earn the world-cup replica ball.");
    console.log(
      `He needs ${(moneyForPrice - finalPrice).toFixed(2)} lv. more.`
    );
  }
}
funName(["55", "310"]);
