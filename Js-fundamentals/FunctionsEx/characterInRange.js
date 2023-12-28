function switcheroo(set1, set2) {

    let fist = 0
    let second = 0
    let result = []

    if ( set1.charCodeAt() >set2.charCodeAt()){  
                first = set2.charCodeAt();
                second = set1.charCodeAt();

    }else { 
        first = set1.charCodeAt();
        second = set2.charCodeAt();    
    }
    
for (let i = first+1; i < second; i++){

    let curRotation= String.fromCharCode(i);
          result.push(curRotation);
      
}

 console.log(result.join(' '))

}

switcheroo('#',
':')