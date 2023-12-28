function swimingRecord(input) {
    let worldRecordSeconds = Number(input[0]);
    let distanceToSwim = Number(input[1]);
    let timeToswimDistanceOneMeter = Number(input[2]);

    let penaltyTime = Math.floor(distanceToSwim / 15) * 12.5 ;
    let swimtime= distanceToSwim * timeToswimDistanceOneMeter ;
    let totalSwimTime= penaltyTime + swimtime ;
    
    if(worldRecordSeconds<=totalSwimTime){
       console.log(`No, he failed! He was ${(totalSwimTime - worldRecordSeconds).toFixed(2)} seconds slower.`);            
    }else { 
        console.log(`Yes, he succeeded! The new world record is ${totalSwimTime.toFixed(2)} seconds.`);
    }
}
swimingRecord(["10464","1500","20"]) 