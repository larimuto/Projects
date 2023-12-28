function nameNum(input) {
    let num1=Number(input[0]);
    let num2=Number(input[1]);
    let finalSum=0;
  
    for (let i = num1; i <= num2; i++) {
        
       
        if ( i % 9===0){
            finalSum+=i ;
            ;
           }
        


         
        
    }console.log(`The sum: ${finalSum}`)
    for (let i = num1; i <= num2; i++) {
        
       
        if ( i % 9===0){
           ;
            console.log(i);
           }
        


         
        
    }
}
nameNum(["100", "200"])