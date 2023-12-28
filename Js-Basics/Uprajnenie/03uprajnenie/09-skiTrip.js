function skiTrip(input) {
    let daysToStay=Number(input[0]);
    let typeOfRoom = input[1];
    let review = input[2];

    
    let possibleDiscount = 0;
    
    let roomPrice = 0

    switch (typeOfRoom) {
        case 'apartment':
            if(daysToStay<10){possibleDiscount=0.30;}else if(daysToStay < 16){possibleDiscount = 0.35;}else{possibleDiscount = 0.50;}
            
            break;
        case 'president apartment':
            if(daysToStay<10){possibleDiscount=0.10;}else if(daysToStay < 16){possibleDiscount = 0.15;}else{possibleDiscount = 0.20;}
        default:
            break;
    }
    
    switch (typeOfRoom) {
        case 'apartment':
           
            roomPrice= 25;
            break;
        case 'president apartment':
           roomPrice = 35;
           break;
        default:
            roomPrice = 18
            break;



}

    let nights = (daysToStay - 1) * roomPrice ;
    let price = nights - (nights * possibleDiscount);
    

    if (review === "positive"){let finalSum = price * 1.25;
    console.log(finalSum.toFixed(2));
    }else{console.log((price -(price * 0.1) ).toFixed(2))};
     

}
skiTrip(["30",

"president apartment",

"negative"])