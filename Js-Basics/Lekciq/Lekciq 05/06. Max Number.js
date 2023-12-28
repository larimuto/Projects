function funName(Input) {
let index = 0;    
let i=Input[index];
let maxnum = Number.MIN_SAFE_INTEGER;


while (index<Input.length) {
    check = i[index];
    data = Number(i);
    if (check ==="Stop") {console.log(maxnum);break    
    }
    if(maxnum<data){maxnum=data}
    index++
    i=Input[index]
}


console.log(maxnum);


    
}
funName(["-10", "-20", "-30", "Stop"])