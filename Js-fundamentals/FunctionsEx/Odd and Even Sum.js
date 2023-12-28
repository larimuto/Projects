function oodSumEven(set) {
    // You will receive a single number. You have to write a function, that returns the sum of all even and all odd digits from that number. 
        let even= 0 ; 
        let odd = 0 ;

    set = set.toString()
        for (let i = 0; i < set.length; i++) {
            if (set[i] % 2 === 0 ){
                even += Number(set[i]);

            }else { odd += Number(set[i])}   
            
                    }

console.log(` Odd sum = ${odd}, Even sum = ${even}`);

    }
oodSumEven( 3495892137259234)
oodSumEven( 1000435)