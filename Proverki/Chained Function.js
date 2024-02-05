function test(arg) {
    let sum = arg
    const chain = function (arg2) {
       
        sum += arg2
       
        return chain
    }


    return chain 
    
}
test(2)(3)(5)