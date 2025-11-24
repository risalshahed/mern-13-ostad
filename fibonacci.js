/* 
Fibonacci Number Series

In this series,
First Number is 0
Second Number is 1
r Porer Number gula aager 2ta Number er Jogfol

0 1 1 2 3 5 8 13 21 34 55 89 144

getFibonacciSeries(7) -> FibonacciSeries er Prothom 7 ta number dekhao

*/


function getFibonacciSeries(n) {
  if(n < 0) {
    return 'Please Enter a Positive Number';
  }

  let series = [0, 1];

  // 0 1 1 2 3 5 8 13 21 34 55 89 144

  for(let i = 2; i < n; i++) {
    // Value of 3rd Element -> Value of 1st Elm + Value of 2nd Elm
    // Value of 4th Element -> Value of 2nd Elm + Value of 3rd Elm
    // Value of i-th Element -> Value of (i-2)-th Elm + Value of (i-1)-th Elm
    series[i] = series[i - 2] + series[i - 1];
    // console.log(series);
  }
  // NOW, the "series" array has been updated
  // [0, 1, 1, 2, 3, 5, 8]

  return series.slice(0, n);
}

const fibSeries = getFibonacciSeries(6);

console.log(fibSeries);