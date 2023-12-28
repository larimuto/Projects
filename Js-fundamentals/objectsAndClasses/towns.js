function cordinates(array) {


    for (let i = 0; i < array.length; i++) {
    
        [name, latitude, longitude] = array[i].split(" | ");
        number= name.length
         let cordinates={}
                cordinates.town = name ;
                cordinates.latitude = Number(latitude).toFixed(2) ;
                cordinates.longitude = Number(longitude).toFixed(2) ;
    
     console.log(cordinates);          
    }
    
    
               
    
    
        
    }
    
    cordinates(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625'] )