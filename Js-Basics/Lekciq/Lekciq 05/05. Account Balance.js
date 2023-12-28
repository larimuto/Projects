function funName(input) {
    let index=0
    let i=input[index];

    let money= 0;

while (index<input.length) {
    add = Number(input[index]); 
    if (i ==="NoMoreMoney") {console.log(`Total: ${money.toFixed(2)}`);break        
    }else if (i === "Invalid operation" ) {console.log("Invalid operation!");console.log(`Total: ${money.toFixed(2)}`);break;   
        
    }else if (add<0) {console.log("Invalid operation!");console.log(`Total: ${money.toFixed(2)}`);break; 
        
    }else { 
        add = Number(input[index]); 
    money+=add; console.log(`Increase: ${(add).toFixed(2)}`);
    
    }
        
index++
i=input[index];
    }       
}

        
funName(["6575", "65445.55", "65456150"])