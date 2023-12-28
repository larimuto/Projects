function demo(set) {

    longString = ''
    count =0;

    for (let i = 0; i < set.length; i++) {
        curlongString=[]
        curlongString.push(set[i])
        curCount = 0 ;
        while( set[i]==set[i-1]  ){ 
            curlongString.push(set[i]) 
            curCount += 1
            i++
        
        
        }
       if (curCount >count){ count = curCount 
             longString = curlongString}      
        }
        
        
    
    
console.log(longString.join(' '));

    }
demo([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])

demo([1, 1, 1, 2, 3, 1, 3, 3]    )                                                   
demo([0, 1, 1, 5, 2, 2, 6, 3, 3])                           
demo([4, 4, 4, 4]    )
