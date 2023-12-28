function bonusPoints(input){
let inPoints = Number(input[0]);
let bonusPoints = 0;
if (inPoints<= 100){
    bonusPoints = 5;
}
else if (inPoints <=1000){
    bonusPoints= 0.20 *inPoints;}
else {bonusPoints=0.10 * inPoints;}

if (inPoints % 2 === 0){
    bonusPoints=bonusPoints + 1;
}else if (inPoints % 10 === 5){
    bonusPoints = bonusPoints + 2;
}
console.log(bonusPoints);
console.log(inPoints + bonusPoints);
}

bonusPoints(["20"]);