function funName(input) {
    let age = Number(input[0]);
    let priceOfDream = Number(input[1]);
    let pricerPerToy = Number(input[2]);

    let birthDayMoney = 0 ;
    let toysCount = 0;
    let moneyToSteal= 0;

    for (let i = 1; i <= age; i++) {
        if(i%2===0){birthDayMoney+= ((i*10)/2);moneyToSteal++}else{toysCount++}              
    }

birthDayMoney+= (toysCount * pricerPerToy) - moneyToSteal;

if(birthDayMoney>=priceOfDream){console.log(`Yes! ${(birthDayMoney-priceOfDream).toFixed(2)}` );
}else{console.log(`No! ${(priceOfDream - birthDayMoney).toFixed(2)}`)}




    
}
funName(["10","170.00","6"]) 