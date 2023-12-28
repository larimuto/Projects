function boatTrip(input){
    let buget = Number(input[0]);
    let season = input[1];
    let fishermanCount = Number(input[2]);
    
    let discountPerPerson = 0;
    let additionalDiscount = 0;
    let boatPrice = 0 ;

    if (fishermanCount % 2 ===0 && season !== "Autumn") {
         additionalDiscount = 0.05
    }
    if (fishermanCount <=6){
         discountPerPerson = 0.1
    }else if(fishermanCount <=11){ 
         discountPerPerson = 0.15
    }else if(fishermanCount>=12){
         discountPerPerson = 0.25
    }
if(season === "Spring"){ boatPrice = 3000;}else if(season === "Winter"){ boatPrice = 2600}else if(season ==="Autumn"){  boatPrice = 4200}else if(season ==="Summer"){ boatPrice = 4200}
    

    let totalPrice=(boatPrice -(boatPrice * discountPerPerson) )   ;
    let finalsum = totalPrice -(totalPrice *additionalDiscount);

if(finalsum<=buget){ 
    console.log(`Yes! You have ${(buget - finalsum).toFixed(2)} leva left.`);
}else{console.log(`Not enough money! You need ${(finalsum -buget).toFixed(2)} leva.`) }



}

boatTrip(["2000", "Winter", "12"])