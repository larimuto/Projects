function perfectNum(n) {

    check = 0; 

    for (let i = 1; i < n; i++){
       
            if ( n % i === 0 ){ 
                check += i ;
            }
    }
if (check === n ) {console.log( "We have a perfect number!");
    }else{
console.log(`It's not so perfect.`);
}
}
    perfectNum(6)