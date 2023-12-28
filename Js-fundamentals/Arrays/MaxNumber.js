// Write a function to find all the top integers in an array. A top integer is an integer, which is bigger than all the elements to its right. 
// Output
// Print all top integers on the console, separated by a single space.

function demo(set) {
    
    toPrint = [] ;
  
    for (let i = 0; i < set.length; i++) {
      numChek = set[i];
      topNum = true ;
      
      for (let b = i + 1; b < set .length; b++) {
                scdNum= set[b];

                if ( numChek<=scdNum){
                    topNum =false 
                break;
                }
        
      }
           
            
    if ( topNum){ toPrint.push(numChek)}
     }
          
console.log(toPrint.join(" "))
}
demo([41, 41, 34, 20])