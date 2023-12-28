function solution(array) {
    targetWords = array.shift().split(' ') 
    finallist= {}
    for (let word of targetWords) {
        finallist[word]=0
        for (let i = 0; i < array.length; i++) {
            if(word==array[i])
            {finallist[word]+=1
            
            }
    
            }

            }

   toSort=Object.entries(finallist).sort((a,b) => b[1]-a[1])
   finallist = Object.fromEntries(toSort)
   for (let [word, count] of Object.entries(finallist)) {
    console.log(word,"-",count );
    
   }
    
}
solution(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])