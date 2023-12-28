function demo(set) {

let index=undefined; 
check=false;

for (let i = 0; i < set.length; i++) {
left = 0 ;
right = 0 
    j=0;
    z= set.length-1;
    while(j>=0 && j<i){ left+=set[j]; 
  j++
    }

    while (z>i && z < set.length ){ right += set[z]
    z--
    }

    if (left==right) { check=true 
        index=i ;
        break;
        
    }  
}
if (check) {console.log(index);
    
}else{ console.log("no");}
}

demo([1])