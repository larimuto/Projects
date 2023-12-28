function journey(input){
    let buget = Number(input[0]);
    let season = input[1];

    let bugetQuty = 0 ;
    let typeOfVacation = '';
    let destination = ''

    
    if (buget <=100)
    { destination = "Bulgaria"
        if(season === "summer"){bugetQuty =0.30}else{bugetQuty = 0.70}
    }else if(buget <= 1000)
    { destination = "Balkans"
    if(season === "summer"){bugetQuty =0.40}else{bugetQuty = 0.80}  }
    else{ destination = "Europe"
        bugetQuty = 0.90}
        if(season === 'summer' && destination !== "Europe"){ typeOfVacation = 'Camp'}else{ typeOfVacation = 'Hotel'}
    let finalSum = buget - (buget * bugetQuty)

    console.log(`Somewhere in ${destination}`);
    console.log(`${typeOfVacation} - ${(buget-finalSum).toFixed(2)}`);



}

journey(["504444", "summer"]) 