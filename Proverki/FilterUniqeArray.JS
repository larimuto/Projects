function arrays(array) {


    set =   array.filter((value , index) => array.indexOf(value) === index  )
     
    
    //prints the uniqe
    console.log(set);
  
  set2  =   array.filter((value , index) => array.indexOf(value) !== index  )


// print the non-uniqe , so if there are 5  repreating  numbers it will return  4 repeats
  console.log(set2);

  }
  
  arrays([6,6,6,6,6,6,3,3,3,])