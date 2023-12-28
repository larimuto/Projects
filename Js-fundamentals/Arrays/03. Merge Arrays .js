 // Write a function, which receives two string arrays and merges them into a third array.  
    // If the index of the element is even, add into the third array the sum of both elements at that index
    // If the index of the element is odd, add the concatenation of both elements at that index
    function demo(set1,set2) {
   stringToPrint= [];
    
   for (let i = 0, j= 0; i < set1.length, j<set2.length;j++, i++) {
    if (i % 2== 0 ) {stringToPrint.push(Number(set1[i])+ Number(set2[j]));
        
    }else{ stringToPrint.push(set1[i]+ set2[j])

    }
               
    }
      
console.log(stringToPrint.join(' - '));

}
demo(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']);