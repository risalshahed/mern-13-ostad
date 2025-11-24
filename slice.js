const array = [11, 22, 33, 44, 55, 66, 77, 88];

// Slice Method of Array RETURNs a New Array, DOES NOT MODIFY THE EXISTING OR ORIGINAL ARRAY

const newArr = array.slice(0, 4);

console.log('original', array);
console.log('returned new array', newArr);