/* 
In Math, x = y & y = x -> SIMILAR

BUT, In Programming,

x = y -> "y" er value "x" variable a store koro

let x = 5

*/

/* 
What is Factorial?

Positive Integer er any number er factorial mane hoilo, oi number ta 1 porjonto goon (multiply)


0! = 1

1! = 1
2! = 2 * 1
3! = 3 * 2 * 1
4! = 4 * 3 * 2 * 1
5! = 5 * 4 * 3 * 2 * 1
6! = 6 * 5 * 4 * 3 * 2 * 1

6! = 6 * 5!
5! = 5 * 4!

n! = n * (n - 1)!
*/

// Function Declare
function factorialWithLoop(n) {
  if(n < 0) {
    return 'Negative number not allowed';
  }

  // Initial value of our result
  let result = 1;
  
  if(n === 0) {
    return 1;
  }

  // if n is not negative or not equal to zero, then
  /* 
    A few sample Inputs
    1 -> 1
    2 -> 2 * 1 = 1 * 2
    3 -> 3 * 2 * 1 = 1 * 2 * 3
    4 -> 4 * 3 * 2 * 1 = 1 * 2 * 3 * 4
    5 -> 5 * 4 * 3 * 2 * 1 = 1 * 2 * 3 * 4 * 5
  */
  // Now, the Logic to Bring the Expected Output or Result
  for(let i = 1; i <= n; i++) {
    // result *= i;
    result = result * i;
    // console.log(result);
  }

  return result;

  /* 
    When, i = 1 -> the previous result = 1; new result = prevRes * i = 1 * 1 = 1
    When, i = 2 -> the previous result = 1; new result = prevRes * i = 1 * 2 = 2
    When, i = 3 -> the previous result = 2; new result = prevRes * i = 2 * 3 = 6
    When, i = 4 -> the previous result = 6; new result = prevRes * i = 6 * 4 = 24
  */
}

// Function Invoce/ Function Call
const output1 = factorialWithLoop(4);

console.log(output1);


/* 

Install Code Runner Extension in VS Code

Windows -> Alt + Ctrl + N
Mac -> Option + Ctrl + N

*/



/* 

0! = 1
1! = 1

6! = 6 * 5!
5! = 5 * 4!

n! = n * (n - 1)!
*/

function factorialWithRecursive(n) {
  if(n < 0) {
    return 'Negative number not allowed';
  }
  if(n === 0 || n === 1) {
    return 1;
  }
  // else
  return n * factorialWithRecursive(n - 1);
}

const output2 = factorialWithRecursive(4);
console.log(output2);


// Variable Declare kora
let x;

// Variable er value assign kora
x = 8;

// Re-assign
x = 12;