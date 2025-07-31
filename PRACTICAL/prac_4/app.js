function factorialCalculator() {
  const description = "Factorial Calculator using Recursion and Nested Functions";

  function factorial(n) {
    if (n < 0) return "Error: Negative number!";
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  }

  return function(number) {
    console.log(description);
    return factorial(number);
  };
}

const calculateFactorial = factorialCalculator();
console.log("Factorial of 5:", calculateFactorial(5));


function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci of 6:", fibonacci(6));


function outerFunction(msg) {
  return function innerFunction() {
    console.log("Closure Example Message:", msg);
  };
}

const showMessage = outerFunction("Hello from outer scope!");
showMessage();


function shadowingDemo() {
  let x = 10;
  function nested() {
    let x = 5;
    console.log("Shadowed x inside nested():", x);
  }
  nested();
  console.log("Outer x inside shadowingDemo():", x);
}

shadowingDemo();
