function cordinates(array) {


for (let i = 0; i < array.length; i++) {

    name = array[i];
    number= name.length
     let person={}
            person.name = array[i] ;
            person.number = array[i].length ;

 console.log(`Name: ${person.name} -- Personal Number: ${person.number}` );           
}


           


    
}

cordinates ([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])