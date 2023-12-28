function modernTimes(array) {
   array = array.split(" ")

    list = []

for ( word of array) {

    if(word.length > 1 && word.includes("#")){                              //filter only words that contains # and length >1
        if(!/\d/.test(word)){list.push(word)}                                  //filter  words without numbers
  
    }
    
}


list.forEach(x => console.log(x.slice(1,x.length)))                 // remove the # and print the list
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')