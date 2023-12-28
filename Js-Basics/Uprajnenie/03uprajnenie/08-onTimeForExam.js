function onTimee(input) {
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arraivalMinute = Number(input[3]);


    let totalExamminutes = (examHour*60) + examMinute ;
    let totalArrivalMinutes = (arrivalHour * 60) + arraivalMinute ;

    if(totalArrivalMinutes > totalExamminutes){console.log('Late' );}    
    if(totalExamminutes >=totalArrivalMinutes && (totalExamminutes-totalArrivalMinutes) <=30){console.log('On time');}
    if(totalExamminutes >totalArrivalMinutes && (totalExamminutes-totalArrivalMinutes) >30){console.log('Early');}
    
   
   if(totalExamminutes>= totalArrivalMinutes && (totalExamminutes - totalArrivalMinutes)<=59){console.log(`${(totalExamminutes - totalArrivalMinutes)} minutes before the start`);}
   
   if(totalExamminutes < totalArrivalMinutes && (totalArrivalMinutes - totalExamminutes <= 59  )){
    console.log( `${totalArrivalMinutes-totalExamminutes} minutes after the start`);}
    if(totalExamminutes>totalArrivalMinutes && (totalExamminutes - totalArrivalMinutes >=60)){ 
        totalTime=totalExamminutes -totalArrivalMinutes
        let hour= 0;
        let minutes = 0;
        
        while(totalTime>=60){
            if(totalTime>=60){
                totalTime-=60
                hour++
            }
        }if(totalTime<=59){ minutes+=totalTime}
        if (minutes>=10){console.log( `${hour}:${minutes} hours before the start`);}else{console.log( `${hour}:0${minutes} hours before the start`);}
    


        
        


    }
    if(totalArrivalMinutes>totalExamminutes && (totalArrivalMinutes - totalExamminutes) >=60){ 
        totalTime= totalArrivalMinutes - totalExamminutes;
        let hour= 0;
        let minutes = 0;
        
        while(totalTime>=60){
            if(totalTime>=60){
                totalTime-=60
                hour++
            }
        }if(totalTime<=59){ minutes+=totalTime}
        if (minutes>=10){console.log( `${hour}:${minutes} hours after the start`);}else{console.log( `${hour}:0${minutes} hours after the start`);}
    
}
}
onTimee(["16", "00", "15", "00"])