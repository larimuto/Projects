function funName(input){
let name=input[0];
let index = 1 ;
let i = input[index]

let combinedScore= 0;
let gradecounter=0;
let passinggrade= true

while (index < input.length ) {
    score=Number(i);
    
if(score<4){console.log(`${name} has been excluded at ${index} grade`);passinggrade= false ; break;}
else{ combinedScore+=score ; gradecounter++}
 index++
    i = input[index]
   
}
let avgScore=combinedScore / gradecounter;
if (passinggrade) {console.log(`${name} graduated. Average grade: ${avgScore.toFixed(2)}`)
    }
}
funName(["Mimi", "5", "6", "5","6", "5", "6", "6", "2", "3"])