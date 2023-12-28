function busBurger(array) {
let cityCounter = 1
let totalEarnings = 0
let totalExpense = 0 

    for (let index = 1; index < array.length; index +=3) {
        
        cityName=array[index]
        earnedMoney=Number(array[index+1])
        expanse = Number(array[index+2])
      
        
       
   if((cityCounter % 3 == 0 ) && (cityCounter % 5 == 0 ) ){ 
    currentNet = (earnedMoney*0.9 )- expanse
    console.log( `In ${cityName} Burger Bus earned ${currentNet.toFixed(2)} leva.`);
    totalEarnings +=currentNet
    cityCounter++

}else if
(cityCounter % 3 == 0 ){
    specialEvent = earnedMoney - (expanse * 1.5)  
    totalEarnings += specialEvent
    cityCounter++
    console.log(`In ${cityName} Burger Bus earned ${specialEvent.toFixed(2)} leva.`);

}else if ( cityCounter % 5 == 0 ){ 
    rainyDay = (earnedMoney * 0.9) - expanse
    totalEarnings += rainyDay

    console.log(`In ${cityName} Burger Bus earned ${rainyDay.toFixed(2)} leva.`);

    cityCounter++


 }else { regular = earnedMoney - expanse
    totalEarnings += regular ; 

    console.log(`In ${cityName} Burger Bus earned ${regular.toFixed(2)} leva.`);

    cityCounter++

 }






}
console.log(`Burger Bus total profit: ${totalEarnings.toFixed(2)} leva.`);
}
busBurger(["3",

"Sofia",

"895.67",

"213.50",

"Plovdiv",

"2563.20",

"890.26",

"Burgas",

"2360.55",

"600.00",

"Sofia",

"895.67",

"213.50",

"Plovdiv",

"2563.20",

"890.26",

"Burgas",

"2360.55",

"600.00",

"Sofia",

"895.67",

"213.50",

"Plovdiv",

"2563.20",

"890.26",

"Burgas",

"2360.55",

"600.00",

"Sofia",

"895.67",

"213.50",

"Plovdiv",

"2563.20",

"890.26",

"Burgas",

"2360.55",

"600.00",

"Sofia",

"895.67",

"213.50",

"Plovdiv",

"2563.20",

"890.26",

"Burgas",

"2360.55",

"600.00"]) 