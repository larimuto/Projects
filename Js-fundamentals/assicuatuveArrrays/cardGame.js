function cardGame(array) {

    let obj = {2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10:10, J:11, Q:12, K:13, A:14, S:4, H:3, D:2, C:1  }    // reference for power of cards

  
    let players = {}                // main object to hold Name   : [ cards ]
  

for (element of array) {                                            // deconstructing
    [player, deck] = element.split(": ")
      deck = deck.split(", ")
  
   
    
   
  if (player in players){                                           // build the Player keys

players[player].push(...deck)
;

  }else{players[player]=deck}
  
}
entries = Object.entries(players)

for ( [name, deck] of entries) {                                    // build the deck 
    unqDeck = new Set(deck)                                         // removing the duplicates 
    count = 0

for(element of unqDeck){                                                            // counting the card power 
    
     type = element.slice(element.length - 1)
     
    power = element.slice(0, element.length-1)
        deckPower= obj[power] * obj[type]
    count += deckPower





    
}
console.log(`${name}: ${count}`);                                                   // log the result   Name and Power
}


  

}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ])