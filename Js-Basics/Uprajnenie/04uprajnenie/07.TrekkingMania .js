function funName(input) {
    let groupNumber =Number(input[0]);
    
    let musalaPeopleClimbing = 0;
    let monblanPeopleClimbing = 0;
    let kilimandjaroPeopleClimbing = 0;
    let k2PeopleClimbing = 0;
    let everestPeopleClimbing = 0;

    for (let i = 1; i < input.length; i++) {
        let numbers=Number(input[i]);
        if (numbers<=5) {musalaPeopleClimbing+=numbers;}
        else if(numbers<=12){monblanPeopleClimbing += numbers;}
        else if(numbers<=25){kilimandjaroPeopleClimbing += numbers;}
        else if(numbers<=40){k2PeopleClimbing += numbers;}
        else if(numbers>40){everestPeopleClimbing += numbers;}
            
        }
 
 let totalClimbers = musalaPeopleClimbing+monblanPeopleClimbing+kilimandjaroPeopleClimbing+k2PeopleClimbing+everestPeopleClimbing;
        
 let musalaPrc=(musalaPeopleClimbing/totalClimbers)*100;
 let monblanPrc=(monblanPeopleClimbing/totalClimbers)*100;
 let kilimanPrc=(kilimandjaroPeopleClimbing/totalClimbers)*100;
 let k2Prc=(k2PeopleClimbing/totalClimbers)*100;
 let everesPrc=(everestPeopleClimbing/totalClimbers)*100;
 console.log(`${(musalaPrc.toFixed(2))}%`);
 console.log(`${(monblanPrc.toFixed(2))}%`);
 console.log(`${(kilimanPrc.toFixed(2))}%`);
 console.log(`${(k2Prc.toFixed(2))}%`);
 console.log(`${(everesPrc.toFixed(2))}%`);
 

}
funName(["5",

"25",

"41",

"31",

"250",

"6"]) 