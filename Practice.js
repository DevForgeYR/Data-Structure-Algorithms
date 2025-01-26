// function reverseStr(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverseStr("qwerty"));

// function reverseStr(str) {
//   let arr = [];
//   for (let i = str.length; i >= 0; i--) {
//     arr.push(str[i]);
//   }

//   return arr.join("");
// }

// console.log(reverseStr("point"));// t:n,s:1

// function reverseStr(str) {
//   let arr = str.split("");
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;

//     left++;
//     right--;
//   }

//   return arr.join("");
// }

// console.log(reverseStr("zxcvbnm"));

// function largestNum(arr) {
//   let max = 0;

//   for (let ele of arr) {
//     if (ele > max) {
//       max = ele;
//     }
//   }

//   return max;
// }
// console.log(largestNum([1, 3, 4, 2, 5, 6, 53, 9]));

// function removeDuplicates(arr) {
//   let set = new Set(arr);
//   return [...set];
// }
// console.log(removeDuplicates(["a", "b", "a", "c", "b"])); // Output: ['a', 'b', 'c']

// function removeDuplicates(arr) {
//   let uniqueNums = [];

//   for (ele of arr) {
//     if (!uniqueNums.includes(ele)) {
//       uniqueNums.push(ele);
//     }
//   }

//   return uniqueNums;
// }
// console.log(removeDuplicates(["a", "b", "a", "c", "b"])); // Output: ['a', 'b', 'c']

// function flattenArray(arr) {
//   let result = [];
//   function flatten(arr) {
//     for (let ele of arr) {
//       if (Array.isArray(ele)) {
//         flatten(ele);
//       } else {
//         result.push(ele);
//       }
//     }
//   }
//   flatten(arr);
//   return result;
// }
// console.log(flattenArray([2, [23, 5, 4, 7], 4, [4, 6], [65, 4]]));
// console.log(flattenArray([[2, [3, [4, [5, [6, 7]]]]]]));

// function freqStr(str) {
//   let obj = {};

//   for (let ele of str) {
//     obj[ele] = (obj[ele] || 0) + 1;
//   }

//   return obj;
// }

// console.log(freqStr("qwertyuiiuytr4"));

// function binarySearch(arr, k) {
//   let sortedArr = arr.sort((a, b) => a - b);
//   let left = 0;
//   let right = sortedArr.length - 1;

//   let targetInSortedArrr;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (sortedArr[mid] === k) {
//       targetInSortedArrr = mid;
//     }

//     if (sortedArr[mid] < k) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }

//   return arr.indexOf(targetInSortedArrr);
// }

// console.log(binarySearch([5, 3, 2, 6, 2, 21, 66, 7], 21));

// function findIndices(arr, k) {
//   for (let i = 0; i < arr.length; i++) {
//     let secodNum = k - arr[i];
//     if (secodNum + arr[i] === k) {
//       return [i, arr.indexOf(secodNum)];
//     }
//   }

//   return -1;
// }

// console.log(findIndices([2, 3, 5, 1, 6], 7));

// function balancedPranthesis(str) {
//   let stack = [];

//   let openingBrackets = ["(", "[", "{"];
//   let closingBrackets = [")", "]", "}"];

//   for (let i = 0; i < str.length; i++) {
//     if (openingBrackets.includes(str[i])) {
//       stack.push(str[i]);
//     } else if (closingBrackets.includes(str[i])) {
//       if (stack.length === 0) return false;

//       let lastOpeningBracket = stack.pop();

//       if (
//         lastOpeningBracket !== openingBrackets[closingBrackets.indexOf(str[i])]
//       ) {
//         return false;
//       }
//     }
//   }

//   return true;
// }
// //
// // console.log(balancedPranthesis("(())"));

// function palindromicWordsInSentence(str) {
//   let arr = str.split(" ");
//   let result = [];
//   for (let ele of arr) {
//     result.push(checkPalindrome(ele));
//   }
//   return result;
// }

// function checkPalindrome(ele) {
//   return ele === ele.split("").reverse().join("") ? ele : " ";
// }
// console.log(checkPalindrome("yogesh"));
// console.log(palindromicWordsInSentence("Able was I ere I saw Elba racecar"));

// /* Question 7: Write a function to check if two strings are anagrams of each other.

// function anagram(str1, str2) {
//   let objStr = {};

//   if (str1.length !== str2.length) {
//     return false;
//   }

//   for (ch of str1) {
//     objStr[ch] = (objStr[ch] || 0) + 1;
//   }

//   for (ch of str2) {
//     if (!objStr[ch]) return false;
//   }

//   return true;
// }

// console.log(anagram("yogesh", "hesgoy"));

// up Anagrams
//    Problem2: Given an array of strings, group the anagrams together.
//    Example: Input: ["eat", "tea", "tan", "ate", "nat", "bat"]; Output: [["eat","tea","ate"],["tan","nat"],["bat"]]

// function groupAnagrams(strs) {
//   let map = new Map();

//   for (let str of strs) {
//     let sortedStr = str.split("").sort().join("");
//     if (!map.has(sortedStr)) {
//       map.set(sortedStr, []);
//     }

//     map.get(sortedStr).push(str);
//   }

//   return Array.from(map.values());
// }

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]];

// function anagram(str1, str2) {
//   let obj = {};

//   if (str1.length !== str2.length) {
//     return false;
//   }

//   for (let ch of str1) {
//     obj[ch] = (obj[ch] || 0) + 1;
//   }

//   for (let ch of str2) {
//     if (!obj[ch]) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(anagram("qwerty", "ytrwq"));

// function longestPalindromicSubstring(str) {
//   function expandAroundCenter(str, left, right) {
//     while (left >= 0 && right <= str.length && str[left] === str[right]) {
//       left--;
//       right++;
//     }
//     return str.slice(left + 1, right);
//   }

//   let longest = "";

//   for (let i = 0; i < str.length; i++) {
//     let temp = expandAroundCenter(str, i, i);
//     if (temp.length > longest.length) {
//       longest = temp;
//     }

//     temp = expandAroundCenter(str, i, i + 1);
//     if (temp.length > longest.length) {
//       longest = temp;
//     }
//   }

//   return longest;
// }

// console.log(longestPalindromicSubstring("aeaeoooiooo"));

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

console.log(bubbleSort([2, 5, 7, 6, 555, 48, 8, 422, 25, 6, 7, 89, 5]));
