function decensure(command, text) {
    words = command.split(", ")                                     // take the word to undo
    
    

    for (word of  words) {

        split = '*'.repeat(word.length)                                     //simple fix to undo the ****

       text =  text.replace(split , word)

        // text = text.split(` ${split} `).join(` ${word} `)               // replace the **
        
    }
console.log(text);
}
decensure(
'great','softuni is ***** place for learning new programming languages'
    )