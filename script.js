function sumRange(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + sumRange(n - 1);
  }
}

function power(num, ex) {
  if (ex == 0) {
    return num;
  }
  return num * power(num, ex - 1);
}
// console.log(power(2, 4));

function factorial(num) {
  if (num === 1) {
    return num;
  }
  return num * factorial(num - 1);
}
// console.log(factorial(3432));

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}
// let arr = [1, 2, 3, 123];
// console.log(productOfArray(arr));

function totalInts(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let total = 0;
  let first = arr.shift();

  if (Array.isArray(first)) {
    total += totalInts(first);
  } else if (Number.isInteger(first)) {
    total++;
  }

  return total + totalInts(arr);
}
// const arr = [["fasdf"], ["asf", 3], []];
// console.log(totalInts(arr));
function fibonanci(n) {
  let prev2 = 0;
  let prev1 = 1;
  let current;
  for (let i = n; i >= 2; i--) {
    current = prev2 + prev1;
    prev2 = prev1;
    prev1 = current;
  }
  return current;
}
// console.log(fibonanciRecursive(14));

function fibonanciRecursive(n) {
  if (n < 2) {
    return n;
  }

  return fibonanci(n - 1) + fibonanci(n - 2);
}
// console.log(fibonanci(14));

function mergeSort(arr) {
  // sort left
  // sort right
  // merge

  if (arr.length <= 1) {
    return arr;
  }
  const halfIndex = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, halfIndex));
  const right = mergeSort(arr.slice(halfIndex));

  return merge(left, right);
}
function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else if (right[j] <= left[i]) {
      result.push(right[j]);
      j++;
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

const array = [3, 2, 1, 2, 13, 8, 5, 0];
const sortedArray = mergeSort(array);
console.log(sortedArray);
