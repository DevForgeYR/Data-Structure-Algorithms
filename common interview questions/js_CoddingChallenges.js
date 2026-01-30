/*Question 1: Write a function to reverse a string in JavaScript.*/

// function reverseString(str) {
//   let newString = str.split("");
//   let left = 0;
//   let right = str.length - 1;

//   while (left < right) {
//     let temp = newString[left];
//     newString[left] = newString[right];
//     newString[right] = temp;

//     left++;
//     right--;
//   }

//   return newString.join("");
// }

// console.log(reverseString("Yogesh"));

/*Question 2: Write a function to check if a given string is a palindrome.

function checkPalindrome(str) {
  let newString = str.split("");
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    let temp = newString[left];
    newString[left] = newString[right];
    newString[right] = temp;

    left++;
    right--;
  }

  return newString.join("") === str;
}

console.log(checkPalindrome("racecar"));

*/

/*Question 3: Write a function that prints the numbers from 1 to 100. For multiples of three, print "Fizz" instead of the number and for
 multiples of five print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz"

function printNum() {
  let numArr = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      numArr.push("FizzBuzz");
    } else if (i % 3 == 0) {
      numArr.push("Fizz");
    } else if (i % 5 == 0) {
      numArr.push("Buzz");
    } else {
      numArr.push(i);
    }
  }
  return numArr;
}

console.log(printNum());

*/

/*Question 4: Write a function to find the largest number in an array.

function largestNum(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr[arr.length - 1];
}

function largestNum(arr) {
  let max = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(largestNum([15, 5, 7, 6, 9]));

*/

/*Question 5: Write a function to remove duplicates from an array.
function removeDuplicates(arr) {
  let uniqueNums = new Set(arr);

  return uniqueNums;
}

function removeDuplicates(arr) {
  let uniqueNums = [];
  let duplicates = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    if (uniqueNums.includes(arr[i])) {
      duplicates.push(arr[i]);
    } else {
      uniqueNums.push(arr[i]);
    }
  }

  return uniqueNums;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
console.log(removeDuplicates(["a", "b", "a", "c", "b"])); // Output: ['a', 'b', 'c']

*/

/*Question 6: Write a function to flatten a nested array.

// function flattenArray(arr) {
//   return arr.flat(Infinity);
// }

function flattenArray(arr) {
  let result = [];

  function flatten(arr) {
    for (let item of arr) {
      if (Array.isArray(item)) {
        flatten(item);
      } else {
        result.push(item);
      }. 
    }
  }

  flatten(arr);
  return result;
}

+ 
*/

/*Question 7: Write a function to calculate the sum of all elements in an array.

function sumOfNum(arr) {
  let sum = 0;

  for (item of arr) {
    sum += item;
  }

  return sum;
}

function sumOfNum(arr) {
  return arr.reduce((acc, curr) => {
    return (acc += curr);
  }, 0);
}

console.log(sumOfNum([3, 4, 5, 6, 7, 9]));

*/

/* Question 8: Write a function to check if two strings are anagrams of each other.

function anagram(str1, str2) {
  let objStr = {};

  if (str1.length !== str2.length) {
    return false;
  }

  for (ch of str1) {
    objStr[ch] = (objStr[ch] || 0) + 1;
  }

  for (ch of str2) {
    if (!objStr[ch]) return false;
  }

  return true;
}

console.log(anagram("yogesh", "hesgoyjs"));

*/

/* Q:9 write a funtion t evaluate the frequency of characters of the string

function countCharFreq(str) {
  let obj = {};

  for (ch of str) {
    obj[ch] = (obj[ch] || 0) + 1;
  }

  return obj;
}

console.log(countCharFreq("coddingchallenges"));

*/

/* Question 10: Implement binary search in JavaScript.

function binarySearch(arr, k) {
  let n = arr.length;
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === k) return mid;
    if (arr[mid] < k) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 3)); // Output: 2
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // Output: -1

 */

/*Question 9: Write a debounce function in JavaScript.

function debounce(func, timer) {
  let timerId; 

  return function (...args) {
    clearInterval(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, timer);
  };
}

let log = debounce((msg) => console.log(msg), 5000);
log("hello");
*/

/*Question 10: Write a function to find the first non-repeating character in a string.

function firstNonRepeatingCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }

  return null;
}

console.log(firstNonRepeatingCharacte r("swiss"));

/*Question 11: Write a function to calculate the sum of the digits of a given number.

function sumOfDigits(num) {
  let number = num.toString();
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += parseInt(number[i]);
  }
  return sum;
}

console.log(sumOfDigits(1234));

/*Question 12: Write a function to generate the first n numbers in the Fibonacci sequence.

function FibonacciSeries(n) {
  let sequence = [0, 1];

  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

console.log(FibonacciSeries(10));

*/

/*Question 13: Write a function to calculate the factorial of a given number.

function factorialNum(n) {
  if (n == 0) {
    return 1;
  }

  return n * factorialNum(n - 1);
}

console.log(factorialNum(5));

/*Question 14: Write a function to find the longest word in a sentence.

function longestWord(str) {
  let words = str.split(" ");
  let longest = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}

console.log(longestWord("The quick brown fox jumped over the lazy dog")); // Output: "jumped"

*/

/*Question 15: Write a function to check if two strings are permutations of each other.

function arePermutations(str1, str2) {
  let objChar = {};

  if (str1.length !== str2.length) {
    return false;
  }

  for (ch of str1) {
    objChar[ch] = (objChar[ch] || 0) + 1;
  }

  for (ch of str2) {
    if (!objChar[ch] || objChar[ch] === 0) {
      return false;
    }
  }

  return true;
}

// Example usage:
console.log(arePermutations("listen", "silent")); // Output: true
console.log(arePermutations("hello", "world")); // Output: false

*/

/*Question 16: Write a function to find the intersection of two arrays.

function intersection(arr1, arr2) {
  return arr1.filter((value) => arr2.includes(value));
}

function intersection(arr1, arr2) {
  let set = new Set(arr1);

  let result = new Set();
  // let dump = [];
  for (const item of arr2) {
    // If the item is in the first set, add it to the result set
    if (set.has(item)) {
      result.add(item);
    }
  }
  return result;
}

console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6])); // Output: [3, 4]

 /*Question 17: Write a function to flatten a nested object.

function flattenObject(obj, prefix = "") {
  return Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + "." : "";
    if (
      typeof obj[k] === "object" &&
      obj[k] !== null &&
      !Array.isArray(obj[k])
    ) {
      Object.assign(acc, flattenObject(obj[k], pre + k));
    } else {
      acc[pre + k] = obj[k];
    }
    return acc;
  }, {});
}

// Example usage:
const nestedObj = { a: 1, b: { c: 2, d: { e: 3 } } };
console.log(flattenObject(nestedObj)); // Output: { 'a': 1, 'b.c': 2, 'b.d.e': 3 }

*/

/*Question 18: Write a function to rotate an array k times to the right.

function rotateArr(arr, k) {
  for (let i = 0; i <= k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
}

console.log(rotateArr([2, 3, 4, 5, 6], 2));

*/

/*Question 19: Write a function to check if a given number is prime.

function checkPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }

    return true;
  }
}

console.log(checkPrime(5));

*/

/*Question 20: Write a function to remove all vowels from a given string.
function removeVovel(str) {
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      str = str.replace(str[i], "");
    }
  }

  return str;
}

console.log(removeVovel("yogesh"));

*/

/*Question 21: Write a function to capitalize the first letter of each word in a given string.

function capitalizeWords(str) {
  let arr = str.split(" ");

  for (let ch = 0; ch < arr.length; ch++) {
    arr[ch] = arr[ch].charAt(0).toUpperCase() + arr[ch].slice(1);
  }

  return arr.join(" ");
}

console.log(capitalizeWords("hello gorld")); // Output: "Hello World"

*/

/*Question22: Write a function to merge two sorted arrays into a single sorted array.

function mergeSortedArrays(arr1, arr2) {
  let result = [...arr1, ...arr2];
  result.sort((a, b) => a - b);

  return result;
}

function mergeSortedArrays(arr1, arr2) {
  let result = [];

  for (let i = 0; i <= arr1.length - 1; i++) {
    result.push(arr1[i]);
  }
  for (let i = 0; i <= arr2.length - 1; i++) {
    result.push(arr2[i]);
  }

  return result.sort((a, b) => a - b);
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]

*/

/*Question23: Write a function to check if a given string has balanced parentheses.

function isBalanced(str) {
  let stack = [];

  let openingBrackets = ["(", "[", "{"];
  let closingBrackets = [")", "]", "}"];

  for (let i = 0; i < str.length - 1; i++) {
    if (openingBrackets.includes(str[i])) {
      stack.push(str[i]);
    } else if (closingBrackets.includes(str[i])) {
      if (stack.length === 0) return false;
      let lastOpeningBracket = stack.pop();
      if (
        lastOpeningBracket !== openingBrackets[closingBrackets.indexOf(str[i])]
      )
        return false;
    }
  }

  return true;
}

console.log(isBalanced("(())")); // Output: true

*/

/* Remove Duplicates from Sorted Array II

function removeDuplicatesFromSortedArrayII(n, arr) {
  let count = 1; // Initialize count for the first occurrence of each element
  let j = 1; // Pointer for the new length and position to place the next n-on-duplicate element

  // Iterate through the array starting from the second element
  for (let i = 1; i < n; i++) {
      // If the current element is equal to the previous element
      if (arr[i] === arr[i - 1]) {
          count++; // Increment count for the current duplicate element
      } else {
          count = 1; // Reset count for a new element
      }

      // If count is less than or equal to 2, copy the current element to its correct position
      if (count <= 2) {
          arr[j] = arr[i];
          j++; // Move the pointer to the next position
      }
  }

  return j; // Return the new length of the array
}

// Sample Input
const n = 7;
const arr = [2, 2, 2, 3, 4, 4, 9];

// Remove duplicates in-place
const newLength = removeDuplicatesFromSortedArrayII(n, arr);

// Output the new length and the array up to the new length
console.log(newLength);
console.log(arr.slice(0, newLength).join(' ')); // Convert the array to string for output
*/

// // 202. Happy Number

// function isHappy(n) {
//   function getNext(number) {
//     let totalSum = 0;
//     while (number > 0) {
//       let digit = number % 10;
//       totalSum += digit * digit;
//       number = Math.floor(number / 10);
//     }
//     return totalSum;
//   }

//   let seen = new Set();
//   while (n !== 1 && !seen.has(n)) {
//     seen.add(n);
//     n = getNext(n);
//   }

//   return n === 1;
// }

// // Example usage:
// const n = 19;
// console.log(isHappy(n)); // Output: true

// function prefix().

//Question: Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// Follow-up: Can you find a solution that runs in O(n) time?

function findIndices(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    let secodNum = k - arr[i];
    if (secodNum + arr[i] === k) {
      return [i, arr.indexOf(secodNum)];
    }
  }

  return -1;
}

console.log(findIndices([2, 3, 5, 1, 6], 7));

var removeDuplicates = function (nums) {
  let count = 1;
  let j = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      count++;
    } else {
      count = 1;
    }

    if (count <= 2) {
      nums[j] = nums[i];
      j++;
    }
  }

  return j;
};

var removeDuplicates = function (nums) {
  let count = 1;
  let j = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      count++;
    } else {
      count = 1;
    }

    if (count <= 1) {
      nums[j] = nums[i];
      j++;
    }
  }

  return j;
};

var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let k = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k]) {
      k++;
      nums[k] = nums[i];
    }
  }
  return k + 1;
};
