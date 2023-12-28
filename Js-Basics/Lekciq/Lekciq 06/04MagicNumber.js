function funName(input){
let startInterval = Number(input[0]);
let endInterval = Number(input[1]);
let magicNumber = Number(input[2]);
let combinationCounter = 0;
let isValidCombination = false ;

for( let i=startInterval; i<= endInterval; i++){
    for( let j=startInterval; j<= endInterval; j++){
       
        combinationCounter++;
        let sum = i + j;
        if( sum=== magicNumber){
            console.log( `Combination N:${combinationCounter} (${i} + ${j} = ${sum})`);
            isValidCombination = true;
            break               
          }


    }
                 if(isValidCombination){
                    break
                              
            }   




}
if(!isValidCombination){
    console.log(`${combinationCounter} combinations - neither equals ${magicNumber}`);
}


}
funName(["1",

"10",

"5"])