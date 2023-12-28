function funName(input) {
    let tournamentCount= Number(input[0]);
    let statingPoints = Number(input[1]);

    let totalPoints=0;
    let gamesPlayed=0;
    let winGames= 0 ;
    
    
for (let i = 2; i < input.length; i++) {
    let id=input[i];
   if(id==='W'){totalPoints += 2000; gamesPlayed += 1;;winGames +=1;}else if(id==='F'){totalPoints += 1200;gamesPlayed += 1;}else if (id==='SF'){totalPoints += 720;gamesPlayed += 1;}
    }
let finalPoints= totalPoints+ statingPoints;
let avgPoints = totalPoints / gamesPlayed;
let prcWin = (winGames / gamesPlayed) * 100;

console.log(`Final points: ${finalPoints}` );
console.log(`Average points: ${Math.floor(avgPoints)}`);
console.log(`${prcWin.toFixed(2)}%`);


}
funName(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])