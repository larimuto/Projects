function funName(input) {
    let numbersCount=Number(input[0]);

    let p1=0;
    let p2=0;
    let p3=0;
    let p4=0; 
    let p5=0;
 
       for (let i = 1; i <= numbersCount; i++){ 
        let id=Number(input[i]);

        if (id<200) {p1++;          
        }else if (id<=399) {p2++;
        }else if (id<=599){p3++;
        }else if (id<=799){p4++;
        }else if (id>=800){p5++;}
                }
console.log(`${(p1/numbersCount * 100).toFixed(2)}%`);
console.log(`${(p2/numbersCount * 100).toFixed(2)}%`);
console.log(`${(p3/numbersCount * 100).toFixed(2)}%`);
console.log(`${(p4/numbersCount * 100).toFixed(2)}%`);
console.log(`${(p5/numbersCount * 100).toFixed(2)}%`);   
}
funName(["3","999","2","999"])