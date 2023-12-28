function sort(set) {
    let set2 = [] ;
    set1 = set.sort((a,b) => b-a)
    
    
  while (index=set1.length > 0) 
      
  {
        max = set1.shift( )
        min= set1.pop( )
        
            set2.push(max)
            set2.push(min)

index --
    }
    console.log(set2.join(' '));
    }
sort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])