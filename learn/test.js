// const memo = [0, 1];
// const memorizedFibo = (n) => {
//   if (memo[n]) {
//     return memo[n];
//   } else {
//     return (memo[n] = memorizedFibo[n - 1] + memorizedFibo[n - 2]);
//   }
// };

// console.log(memorizedFibo(5));
function fibonacciMemoization() {
  const memo = [0, 1]; // {1}
  const fibonacci = (n) => {
    if (memo[n] !== undefined) {
      return memo[n];
    } else {
      return (memo[n] = fibonacci(n - 1) + fibonacci(n - 2)); // {3}
    }
  };
  return fibonacci;
}
const fibo = fibonacciMemoization();
console.log(fibo(5));
