function palindromes(array) {
    
for (let index = 0; index < array.length; index++) {
    const  number = array[index].toString().split('').reverse().join('');
   if(Number(number) ==Number(array[index])){ console.log(true);}else{console.log(false);}
} 
}

palindromes([32,2,232,1010])
// palindromes([123,323,421,121])