// Цена на тренировките за година: 365 
// Цена на баскетболните кецове: 365 – 40% = 219 
// Цена на баскетболен екип: 219 – 20% = 175.20
//  Цена на баскетболна топка: 1 / 4 от 175.20 = 43.80 
//  Цена на баскетболни аксесоари: 1 / 5 от 43.80 = 8.76 
//  Обща цена за екипировката: 365 + 219 + 175.20 + 43.80 + 8.76 = 811.76 
function basketBall(input){
    let yearTax = Number(input[0]);
    let shoes = yearTax - (yearTax * 0.40);
    let uniform = shoes - (shoes * 0.20);
    let ball = uniform  / 4 ;
    let stuff = ball / 5;
    let sum = yearTax + shoes + uniform + ball + stuff;
    console.log(sum);


}
basketBall(['365'])