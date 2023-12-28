function newHouse(input){
let flowerTyoe = input[0];
let flowerCount = Number(input[1]);
let budget = Number(input[2]);

let totalPrice = 0;

switch (flowerTyoe){
    case 'Roses':
        totalPrice=flowerCount * 5;
    break;
    case 'Dahlias':
        totalPrice = flowerCount * 3.80;
        break;
    case 'Tulips':
        totalPrice = flowerCount * 2.80;
        break;
        case 'Narcissus':
            totalPrice = flowerCount * 3;
            break;
            case 'Gladiolus':
                totalPrice = flowerCount * 2.50;
                break;

}
if(flowerCount > 80 && flowerTyoe === 'Roses'){
    totalPrice =totalPrice * 0.90;
}else if( flowerCount > 90 && flowerTyoe === 'Dahlias'){
    totalPrice *= 0.85;

}else if (flowerCount >80 && flowerTyoe === ' Tulips'){
    totalPrice *= 0.85;
}else if (flowerCount <120 && flowerTyoe === 'Narcissus'){
    totalPrice *= 1.15;
}else if (flowerCount <80 && flowerTyoe === 'Gladiolus'){
    totalPrice *= 1.20;
}
if (budget >= totalPrice){ 
    let moneyLeft = budget -totalPrice
    console.log(`Hey, you have a great garden with ${flowerCount} ${flowerTyoe} and ${moneyLeft.toFixed(2)} leva left.`);
}else{
    let moneyNeeded  =totalPrice - budget;
    console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`)
}
}

newHouse(['Roses', '55', '250']);