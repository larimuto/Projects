function andy(grpNum, grpType,day ) {
    let price = 0;
    let studentDiscount = 0
    let BusinessDisc = 0
    let RegularDisc = 0

    switch (grpType) {
        case "Students":
            if (day === "Friday"){ price+= 8.45}
            else if ( day === "Saturday"){ price += 9.80}
            else if (day === "Sunday"){ price += 10.46}
            break;
        case "Business":
            if (day === "Friday"){ price+= 10.90}
            else if ( day === "Saturday"){ price += 15.60}
            else if (day === "Sunday"){ price += 16}
            break;
        case "Regular":
            if (day === "Friday"){ price+= 15}
            else if ( day === "Saturday"){ price += 20}
            else if (day === "Sunday"){ price += 22.50}
            break;     
            
            
    }

if( grpType === "Students" && grpNum >= 30){ studentDiscount +=0.15} 
else if ( grpType ==="Business" && grpNum >= 100 ){ BusinessDisc += price * 10}
else if (grpType === "Regular"&& ( grpNum>=10 && grpNum<=20 ) ){RegularDisc +=0.05};


totalPrice= (price * grpNum)
finalPrice = totalPrice- (totalPrice * studentDiscount) - BusinessDisc - ( totalPrice* RegularDisc)



    console.log(`Total price: ${finalPrice.toFixed(2)}`);
}
andy(30, "Students", "Sunday")