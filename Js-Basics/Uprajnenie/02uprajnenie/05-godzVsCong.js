function godzilaVsCong(input){
let moviebuged = Number(input[0]);
let  extra = Number(input[1]);
let priceClothPerActor = Number(input[2]);

let decorPrice= 0.10 * moviebuged;
let totalClothPerActor = extra * priceClothPerActor;
if (extra > 150 ){
   totalClothPerActor = 0.90 * totalClothPerActor
}
let totalPrice = decorPrice + totalClothPerActor
if (totalPrice > moviebuged){
    let moneyNeeded= totalPrice -moviebuged;
console.log(("Not enough money!"));
console.log(` Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
}else{
    let moneyLeft=moviebuged - totalPrice;
    console.log("Action!");
    console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
}
}
godzilaVsCong(["20000","120","55.5"])