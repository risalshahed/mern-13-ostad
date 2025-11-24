/* 
doOperation(10, 5, '/') -> 2
doOperation(10, 5, '*') -> 50
doOperation(10, 0, '/') -> Infinity

*/

function doOperation(num1, num2, operator) {
  // + - * /
  if(operator === '+') {
    return num1 + num2;
  } else if(operator === '-') {
    return num1 - num2;
  } else if(operator === '*') {
    return num1 * num2;
  } else if(operator === '/') {
    /* if(num2 === 0) {
      return 'Error';
    } */
    // else
    return num1 / num2;
  }
}

const result = doOperation(10, 5, '-');

console.log(result);