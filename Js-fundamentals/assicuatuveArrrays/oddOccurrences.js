#!/usr/bin/env node


function solution(array) {
    list=array.toLowerCase().split(' ')
    finalList=[]
    

    for ( main of list) {
         wordCount= 0
         word = main
         
         if ( finalList.find((x) =>x.main === word)) // check for duplicates in obj
         { 
            
         }else {

         for( el of list){ 
            if(el == word){
                wordCount++
            }
         }
if(wordCount % 2 != 0 ){ finalList.push({main})}  // checks for odds
         }
       
         
    }
   

        
 // return the  answer  as string
result = ' '        

for ( element of finalList) {

    ([key , value ] = Object.entries(element))
    
  result += key[1] + " "


       
}


console.log(result);
} 


solution('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')