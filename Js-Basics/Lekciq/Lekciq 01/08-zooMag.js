function Zoo(input){
let dogFoodQt=input[0];
let catFooQt =input[1];
let totalPrice = dogFoodQt * 2.5 + catFooQt * 4 ;
console.log(`${totalPrice} lv.`);
}
Zoo([5 , 4])