
    function getFibonator() {
        first = 1;
        second = 1;
      
        return function () {
          let current = first;
          let following = first + second;
          first = second;
          second = following;
      
          return current;
        }
      
      
      
      }
      
    //   let fib = getFibonator();
    //   console.log(fib());
    //   console.log(fib()); // 1
    //   console.log(fib()); // 2
    //   console.log(fib()); // 3
    //   console.log(fib()); // 5
    //   console.log(fib()); // 8
    //   console.log(fib()); // 13
    

