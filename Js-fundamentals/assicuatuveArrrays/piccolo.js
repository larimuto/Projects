function piccolo(array) {
list={}

for (element of array) {                            //adding  and removing cars from the lot 
    [command, plate] = element.split(", ")
    if( command == "IN"){ list[plate] = plate}      //happy path
    
    else{  

        delete list[plate]                          //sad path
    
    
}
}
tetris = ([test1,test2]=Object.entries(list)).sort((a,b)=>a[0].localeCompare(b[0]) || a[0] - b[0] ) // sorting  assending 


// num = test1.replace(/[^0-9]/g, '')
// console.log(num);


if (tetris.length==0) {console.log("Parking Lot is Empty");  // cheking for  no cars
    
}else{
console.log((Object.keys(Object.fromEntries(tetris))).join(`\n`));   // log  cars that are still in
}

    

}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA'])