function hotelRoom(input){
    let month = input[0];
    let nightToStay= Number(input[1]);
     
    let studioPricePerNight = 0;
    let apartmentPricePerNight = 0;
    let studioDiscount = 0;
    let apartmentDiscount= 0;
    
    if(month==="May" || month === "October"){
        studioPricePerNight = 50 ; 
        apartmentPricePerNight = 65;
        }else if (month === 'June' || month === "September"){ 
            studioPricePerNight = 75.20;
            apartmentPricePerNight = 68.70;
        }else if(month === 'July' || month === 'August'){studioPricePerNight = 76;
                apartmentPricePerNight =77 ;


        }







if(nightToStay>7&& nightToStay <= 14){ if( month === 'May'|| month ==='October') { studioDiscount = 0.05 ;  } 

 
}

if(nightToStay > 14){    if (month === 'May'|| month ==='October'){studioDiscount = 0.30;
}else if(month === "June" || month === 'September'){ studioDiscount = 0.20;}
    
}



     
  
   

    if(nightToStay>14){ apartmentDiscount = 0.10;}

    let finalApartmentPrice = (nightToStay * apartmentPricePerNight) - ((nightToStay * apartmentPricePerNight) * apartmentDiscount);

    let finalStudioPrice = (nightToStay * studioPricePerNight) - ((nightToStay * studioPricePerNight) * studioDiscount);

    console.log( `Apartment: ${finalApartmentPrice.toFixed(2)} lv.`);

console.log(`Studio: ${finalStudioPrice.toFixed(2)} lv.`);
}
hotelRoom(["May",

"15"])