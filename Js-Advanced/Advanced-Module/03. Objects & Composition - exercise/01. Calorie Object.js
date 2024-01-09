function solve(array) {
     let list = {}

     for (let i = 0; i < array.length; i += 2 ) {
                    list[array[i]] = Number(array[i+1])
        
     }
    console.log(list);
}
solve(['Yoghurt', '48', 'Rise', '138',

'Apple', '52'] )