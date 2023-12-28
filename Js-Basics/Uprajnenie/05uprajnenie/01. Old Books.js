function funName(input) {
    let bookName=input[0];
    index=1;
    row=input[index];
    let checkedBooks = 0;

    while (index<input.length) {
        let currentBook=input[index];
        if(currentBook==="No More Books"){
            console.log("The book you search is not here!");
            console.log(`You checked ${index-1} books.`);
        }else if (currentBook===bookName){console.log(`You checked ${index-1} books and found it.`) }
        index++
        
    }
    
}
funName(["Troy",

"Stronger",

"Life Style",

"Troy"])