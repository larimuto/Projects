function toyShop(input){
    let priceeVacation = Number(input[0]);
    let puzzlesCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let totalPrice = puzzlesCount * 2.60 + dollCount * 3 + bearsCount * 4.10 + minionsCount * 8.20 + trucksCount * 2;
    let totalCount = puzzlesCount + dollCount + bearsCount + minionsCount + trucksCount;
    if (totalCount >=50){
        totalPrice = 0.75 * totalPrice;
    }
    totalPrice = 0.90 * totalPrice;

    if(totalPrice >=priceeVacation){
        let moneyLeft = totalPrice - priceeVacation;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    }else{
        let moneyNeeded = priceeVacation - totalPrice;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }
    

}
toyShop(["40.8", "20", "25", "30", "50", "10"]);