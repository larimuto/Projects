function demo(num1, num2, num3)
 {
    let mont = num2-1     // svalqme za da doide na 0-11 a ne  1-12 
    let a = new Date(num1, mont, num3, );

  

   a.setDate(a.getDate()+1)
  
   let b = a.getDate()
   let c = a.getMonth()+1   // digame za da doide ot 1 -12  a ne ot  0- 11
   let d = a.getFullYear()

   




console.log(`${d}-${c}-${b}`);
}



demo(2016, 9, 30);

//  qnuari zapochva ot 0 i dekemvri e na 11  zatova  svalqme na vhoda s 1  , a na  izhoda digame s edno predi printa 