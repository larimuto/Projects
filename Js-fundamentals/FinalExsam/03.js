function solve(array) {
    let party = {}

    let command = array.shift()

    while( command != "End"){
        toakens = command.split(" ")
        let heroName =toakens[1]
                switch (toakens[0]) {
                    case "Enroll":
                  

                  if (heroName in party) {
                      console.log(`${heroName} is already enrolled.`);
                  }else{  party[heroName]={}}


                        
                        break;
                    case "Learn":
                        spell = toakens[2]
                        
                    if (heroName in party) {
                        if(spell in party[heroName]){console.log( `${heroName} has already learnt ${spell}.`);}
                        else{party[heroName][spell]=spell


                           }
                       
                        
                        
                    }else{console.log(`${heroName} doesn't exist.`);}
                        





                        break;
                    case "Unlearn":
                         spells = toakens[2]
                        if (heroName in party) {
                            if(spells in party[heroName]){delete party[heroName][spells]}
                            else{console.log(`${heroName} doesn't know ${spells}.`);
              
                               }
                                                          
                            
                        }else{console.log(`${heroName} doesn't exist.`);}
                        
                        break;
                
                    
                }



        command= array.shift()
    }


console.log(`Heroes:`);   
for (el of Object.entries(party)) {
  [s,f] = Object.entries(el)
  console.log(Object.values(el[1]).join(", "));
    

 
// console.log(`== ${el[0]}: ${h.join(", ")}`);

 
    
}


    
    
}
solve(["Enroll Stefan",
"Learn Stefan ItShouldWork",
"Learn Stefan ItShouldWork",
"Unlearn Stefan NotFound",
"End"])
