function andy(num) {

    if (num % 400 === 0 || (num % 100 !== 0 && num % 4 === 0 ) ) {console.log("yes");
        
    }else {console.log("no");}

    
}

andy(1900)