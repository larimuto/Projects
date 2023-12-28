function stringSubstring(words , text) {
    words = words.toLowerCase().split(", ")                             //fix to lowercase and  split it to array of strings
    text = text.toLowerCase().split(" ")
  

//check the words for matches in the text
    for ( word of words) {
        primeWord = ''
        count = 0
        
        for ( match of text) {
            //if  match  add to count and  add the word
            if (match == word) {
                primeWord = word
                count++
                
            }
          


            
        }
       // print word  if count is >0 
        if(count>0){ console.log(primeWord);}else{ console.log(`${word} not found!`);} 
        
    }
    
}
stringSubstring('javascript',
'JavaScript is the best programming language')