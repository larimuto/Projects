function foodDelivery(input){
let chickenMenus = Number(input[0]);
let fishMenus  = Number(input[1]);
let vegMenus = Number(input[2]);

let chickenMenuprice = chickenMenus * 10.35;
let fishMenuPrice = fishMenus * 12.40;
let vegMenuPrice = vegMenus * 8.15;

let totalMenuPrice = chickenMenuprice + fishMenuPrice + vegMenuPrice;
let desertPrice = 0.20 * totalMenuPrice;
let totalPrice = totalMenuPrice + desertPrice +2.50
console.log(totalPrice);
}
foodDelivery(['2','4','3']);