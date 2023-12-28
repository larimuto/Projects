function shopping(input){
    let buget = Number(input[0]);
    let videoCardCount = Number(input[1]);
    let processorCount = Number(input[2]);
    let ramCount       = Number(input[3]);

    let procesorPrice = (250 * videoCardCount) * 0.35;
    let ramPrice = (250 * videoCardCount) * 0.1;

    let totalPrice = (250 * videoCardCount) + (procesorPrice * processorCount ) + (ramPrice * ramCount)
     let finalSum = totalPrice;
    if(videoCardCount > processorCount){
        finalSum = totalPrice - (totalPrice * 0.15);
            } 
            if (finalSum > buget ){
                sss=finalSum - buget
                console.log(`Not enough money! You need ${(sss).toFixed(2)} leva more!`)
        
       
    } else {
        xxx=buget - finalSum 
        console.log(`You have ${(xxx).toFixed(2)} leva left!`);
     
    }

 



}

shopping(["920.45",

"3",

"1",

"1"])