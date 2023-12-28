function card(array) {
  

    cards = array.shift().split(", ")
    numCom= array.shift()
    list= array
    
    

    
      counter=0
  while(counter < Number(numCom) ){
    
    rotation = list[counter].split(", ")
    
    switch (rotation[0]) {
        case "Add":
            if( x=cards.includes(rotation[1])){ console.log("Card is already in the deck");}else{ 
                console.log("Card successfully added");
                cards.push(rotation[1])
                
            }
            
            
            break;
        case "Remove":
            tocheck=cards.includes(rotation[1])
            if( !tocheck ){console.log("Card not found" );}else{ 
            tocheck=cards.indexOf(rotation[1])
            cards.splice(tocheck, 1)
            console.log("Card successfully removed" );
         
            }
           
            break;
        case "Remove At":
            i = Number(rotation[1])

            if ((i>0 )&& (i < cards.length)) { cards.splice(i,1)
                console.log("Card successfully removed");
                
            }else{ console.log("Index out of range");}
            
            break;
        case "Insert":
            x = Number(rotation[1])
            if (((x>0 )&& (x < cards.length-1)) && cards.indexOf(rotation[2])!== -1) { console.log("Card is already added");
            
            
            
            }else if((x<0 ) ||  (x > cards.length) ){ console.log("Index out of range");}else{cards.splice(x,0,rotation[2])
            console.log("Card successfully added");}
            break;
    
    }
counter++
}




console.log(cards.join(','));

}
card(["Jack of Spades, Ace of Clubs, Jack of Clubs", "2", "Insert, -1, Queen of Spades", "Remove At, 1"])