function demo(set) {
    sumPrime=0;
    sumMod  =0;
    

    //check for odd and even
    //if EVEN adds to its value its index
    // if ODD subtract  its index

    for (let i = 0; i < set.length; i++) {
        num=Number(set[i]);
        sumPrime += num ; 
   
       if ( set[i] % 2 === 0){
        num+=i

       

       }else {

        num -= i ;

       }
       sumMod +=num ;
       set[i]=num;


    }


console.log(set);
console.log(sumPrime);
console.log(sumMod);



}
demo([5, 15, 23, 56, 35]);