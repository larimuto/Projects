function funName(input) {
    let nameOfActor =input[0];
    let basePoints = Number(input[1]);
    let peopleGivingPoints = input[2];
   
   
        
        let pointsCollected=basePoints;
    
    let actorPoints =0
    let basepointsActor= 0
    for (let i = 3 ; i < input.length; i++) {
        if(i % 2!==0){  actorPoints =Number(input[i].length);
            

        }else{basepointsActor=Number(input[i]) ;
        let totalpoints=(actorPoints*basepointsActor)/2
        pointsCollected+=totalpoints
        }
        
        if(pointsCollected>=1250.5){console.log(`Congratulations, ${nameOfActor} got a nominee for leading role with ${pointsCollected.toFixed(1)}!`);
            break;}
        
    }
    if (pointsCollected<1250.5) {console.log(`Sorry, ${nameOfActor} you need ${(1250.5-pointsCollected).toFixed(1)} more!`);
        
    }
}
funName(["Zahari Baharov","205","4","Johnny Depp","45","Will Smith","29","Jet Lee","10","Matthew Mcconaughey",
"39"])