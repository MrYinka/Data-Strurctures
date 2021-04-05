// const fib = n => {
//     if(n == 0) return 0;
//     if(n == 1) return 1;
//
//     return  fib(n-1) + fib(n-2);
// }
//
//
// console.log(fib(4));


const fib = n => {
  let first = 0;
  let second = 1;
  let next;
  let fibSeries = [first,second];

  for(let i = 2; i<=n; i++){
      next = first + second;
      first = second;
      second = next;
  }

  return next;
}


console.log(fib(4));