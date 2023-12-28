function operations(input){
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator = input[2];

    switch (operator) {
        case "+":
        let sum1=num1 + num2 ; 
        if(sum1 % 2 === 0){console.log( `${num1} ${operator} ${num2} = ${sum1} - ${'even'}`);}else{console.log( `${num1} ${operator} ${num2} = ${sum1} - ${'odd'}`);}
            
            break;
        case "-":
            let sum2=num1 - num2 ; 
        if(sum2 % 2 === 0){console.log( `${num1} ${operator} ${num2} = ${sum2} - ${'even'}`);}else{console.log( `${num1} ${operator} ${num2} = ${sum2} - ${'odd'}`);}
            break;
        case "*":
            let sum3=num1 * num2 ; 
        if(sum3 % 2 === 0){console.log( `${num1} ${operator} ${num2} = ${sum3} - ${'even'}`);}else{console.log( `${num1} ${operator} ${num2} = ${sum3} - ${'odd'}`);}
            break;
        case "/" :
            if(num2 === 0){console.log(`Cannot divide ${num1} by zero`);}else{ let sum4=num1 / num2; console.log(`${num1} / ${num2} = ${(sum4).toFixed(2)}`); }
          

            break;
        case "%":
            let sum5 = num1 % num2 ;
            if( num2 === 0){console.log(`Cannot divide ${num1} by zero`);}else{ let sum5=num1 % num2; console.log(`${num1} % ${num2} = ${sum5}`)};            
            break;
        }  
}
operations(["7", "3", "*"])