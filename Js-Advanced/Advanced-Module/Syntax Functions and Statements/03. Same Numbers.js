function solve(array) {
        array = array.toString()
    let isValid=true
    let sum = 0
    let  mark = Number(array[0])
    for (const element of array) {
        if (Number(element) != mark){ isValid = false }
        sum += Number(element)
        
    }
    console.log(isValid);
    console.log(sum);
}
solve(2222222)
solve(1234)