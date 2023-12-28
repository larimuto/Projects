function arrays(array) {


  set =   array.filter((value , index) => array.indexOf(value) === index  )
   
  
  console.log(set.join(' '));

set2  =   array.filter((value , index) => array.indexOf(value) !== index  )
}

arrays([7, 8, 9, 7, 2, 3, 4, 1, 2])