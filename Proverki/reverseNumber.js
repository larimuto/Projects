function reverseNumber(num) {
    let reversedNum = parseInt(num.toString().split('').reverse().join(''));
    return (num < 0) ? -reversedNum : reversedNum;
  }
   
  console.log(reverseNumber(3542));