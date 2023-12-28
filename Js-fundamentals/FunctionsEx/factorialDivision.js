function factorialDivision(num1, num2) {

 
    result = calculate(num1) / calculate(num2)



    function calculate(x){

       let  sum = 1
for (let i = x; i > 0; i--){
   
    sum =sum * i ;
}
return sum
    }

console.log(result.toFixed(2)); 

}
console.log( b<100?(console.log((b+`% `+  "[" +`%`.repeat((b/10))+`.`.repeat(10-b/10)+']'  ), "\n", " Still loading... " )) : console.log())
factorialDivision(6, 2)