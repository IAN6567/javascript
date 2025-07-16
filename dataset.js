//Here are 20 algorithm questions designed to test your knowledge of loops, conditions, functions, array length and indexes, dot notation, and operators—without using array or string methods (like push, pop, split, join, etc.):

//1. Write a function that takes an array of numbers and returns the sum of all the numbers.
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
//2. Write a function that takes an array and returns the largest number in the array.
function maxNumber(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
//3. Write a function that counts how many even numbers are in an array.
function countEvens(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}
//4. Write a function that returns the index of the first negative number in an array, or -1 if there are none.
function firstNegativeIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      return i;
    }
  }
  return -1;
}
//5. Write a function that takes an array and returns a new array with only the positive numbers.
function filterPositives(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result[result.length] = arr[i];
    }
  }
  return result;
}
//6. Write a function that checks if a given number exists in an array.
function containsNumber(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return true;
    }
  }
  return false;
}
//7. Write a function that takes an array and returns the smallest number in the array.
function minNumber(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
//8. Write a function that counts how many times a specific value appears in an array.
function countValue(arr, value) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      count++;
    }
  }
  return count;
}
//9. Write a function that returns true if all numbers in an array are greater than 10, otherwise false.
function allGreaterThanTen(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 10) {
      return false;
    }
  }
  return true;
}
//10. Write a function that finds the sum of all odd numbers in an array.
function sumOdds(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum += arr[i];
    }
  }
  return sum;
}
//11. Write a function that takes an array and returns the average of the numbers.
function averageArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
//12. Write a function that finds the difference between the largest and smallest numbers in an array.
function rangeArray(arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  return max - min;
}
//13. Write a function that takes an array and returns a new array with all numbers multiplied by 2.
function doubleArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result[result.length] = arr[i] * 2;
  }
  return result;
}
//14. Write a function that returns the last element of an array.
function lastElement(arr) {
  return arr[arr.length - 1];
}
//15. Write a function that takes an array and a number, and returns true if the number is found at an even index.
function isAtEvenIndex(arr, num) {
  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i] === num) {
      return true;
    }
  }
  return false;
}
//16. Write a function that counts how many numbers in an array are greater than a given value.
function countGreaterThan(arr, value) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > value) {
      count++;
    }
  }
  return count;
}
//17. Write a function that returns the sum of numbers at even indexes in an array.
function sumEvenIndexes(arr) {
  let sum = 0;node
  for (let i = 0; i < arr.length; i += 2) {
    sum += arr[i];
  }
  return sum;
}
//18. Write a function that takes an array and returns true if the array is sorted in ascending order.
function isSortedAscending(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}
//19. Write a function that takes an array and returns the second largest number.
function secondLargest(arr) {
  let max = arr[0];
  let second = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      second = max;
      max = arr[i];
    } else if (arr[i] > second && arr[i] !== max) {
      second = arr[i];
    }
  }
  return second;
}
//20. Write a function that takes an array and returns the number of elements that are both positive and even.
function countPositiveEven(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}
