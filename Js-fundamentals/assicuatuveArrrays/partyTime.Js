function partyTime(array) {
    guestList={}
    test =[]
    
    
    let index = 0
    
    
    function isNumber(value) {                                  //cheking input if  its a number
        return /^-?\d+(\.\d+)?$/.test(value);   
    }
    
    while(array[index] != `PARTY`){                              
    
        guest = array.shift(array[index])                       //filing up the  initial list
        isVip = isNumber(guest[0])                              // ccheking  if its a vip with IsNumber Fn
        guestList.name = guest
        
    
        if (isVip){ guestList.isVip = true }else{guestList.isVip = false } // set in IsVip  key
        
        test.push(guestList)                                        // sending  the object into array and then removing the values from it
    
        guestList={}
       
          
    }
     
    array.shift()                                                               // removing party command
    for ( key of array) {
        
  
        
      let indexOfObject = test.findIndex(object => {                                // finding the  index of the first guest that arraives and removing it
        return object.name === key;
      });
      if (indexOfObject != -1) {
      
      test.splice(indexOfObject, 1);
        
      }
            
    
      }
    
           
    console.log(test.length);                 // gest that has not shown up
    
    
    test.forEach(x =>{ if(x.isVip){console.log(x.name);}                // printing first vips and then the rest
        }    
    )
    
    test.forEach(x =>{ if(!x.isVip){console.log(x.name);}
}    
)
    

    }
    
   
partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
])