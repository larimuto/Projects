function time(input) {
    let initialHour = Number(input[0]);
    let initialMin = Number(input[1]);

    let totalMin = initialHour * 60 + initialMin + 15;
    let hour = Math.floor(totalMin/60);
    let mins = totalMin % 60;
    if(hour ===24 ){hour = 0}
    
    if (mins < 10 ) {
        console.log(`${hour}:0${mins}`);
    }else{
        console.log(`${hour}:${mins}`);
    }
}
       time(["1","46"]);