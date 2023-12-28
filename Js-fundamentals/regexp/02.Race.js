function race(array) {

list = {} ;                                         // object duh!

regEx= /[A-Za-z]/g;                         // template for letters
regExNumbers = /\d/g                        // template for numbers 

let finish = array.shift().split(", ")          // runners that finnished the race  make them into an object with 0 km ran
finish.forEach(x => { list[x] = 0  })

       let command = array.shift() ;
    while( command != 'end of race' ) 
    {

           let  match = command.match(regEx)            // find the names
           match= match.join("")
           let ran = command.match(regExNumbers)            // find the km he ran
             ran = ran.reduce((acc,value) =>Number(acc) + Number(value) )       // reduce them to  the total
          
           
        if (match in list)
        {           // if we have  match  add the Km he ran to his object value
           
            list[match]+= ran
            
        }

           command = array.shift()           // never forget  to have one on your mind :)
        
    }

list = Object.fromEntries(Object.entries(list).sort((a,b)=>b[1] - a[1]))   // sort in decending order
list = Object.keys(list)                                                    //  replace the whole list just with racers already sorted.



console.log(`1st place: ${list[0]}`);
console.log(`2nd place: ${list[1]}`);
console.log(`3rd place: ${list[2]}`);

      }
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])

 race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race'])