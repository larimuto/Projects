function andy(num1, num2) {
let sum = 0;
let numbers = '';

for ( let counter = num1 ; counter <= num2; counter++ )
 {
     sum +=counter
     numbers+=counter + " "
    
} 


console.log(numbers);
console.log(`Sum: ${sum}`);
    
}
andy(5, 10)


   
    
