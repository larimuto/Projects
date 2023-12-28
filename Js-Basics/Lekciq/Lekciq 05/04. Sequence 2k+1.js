function funName(input) {
let check=Number(input[0]);
let i=1;
let  sum=0;


while (i<=9999999999999 && sum<=check) {
    data=sum*2+1;
    sum=data ;
    i++
    if (data <= check) {console.log(data);
        
    }
    }
    }
funName(['31'])