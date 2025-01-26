/* Problem1: Write a function to check if a given string is a palindrome.
function isPalindrom(str) {
  let arr = str.split("");
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }
  return arr.join("") === str;
}
console.log(isPalindrom("racecar"));
*/

/* 2. Longest Palindromic Substring
Problem2: Given a string s, return the longest palindromic substring in s.

function longestPalindromicSubstring(str) {
  function expandAroundCenter(str, left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--;
      right++;
    }
  
    return str.slice(left + 1, right);
  }

  let longest = "";

  for (let i = 0; i < str.length; i++) {
    let temp = expandAroundCenter(str, i, i);
    if (temp.length > longest.length) {
      longest = temp;
    }

    temp = expandAroundCenter(str, i, i + 1);
    if (temp.length > longest.length) {
      longest = temp;
    }
  }

  return longest;
}
// console.log(longestPalindromicSubstring("aaeaaoooiooo"));

 */

/* 3 Palindromic Substrings Count

Problem 3 : Given a string s, return the number of palindromic substrings in it.
javascript

function countSubstrings(s) {
  function expandAroundCenter(s, left, right) {
    let count = 0;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++;
      left--;
      right++;
    }
    return count;
  }

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    result += expandAroundCenter(s, i, i);
    result += expandAroundCenter(s, i, i + 1);
  }
  return result.slice(0, result);
}

console.log(countSubstrings("abccccdd")); //6
*/

/* problem 4: palindromic Words In Sentence
function palindromicWordsInSentence(str) {
  let arr = str.split(" ");
  let result = [];
  for (let ele of arr) {
    result.push(checkPalindrome(ele));
  }
  return result;
}

function checkPalindrome(ele) {
  return ele === ele.split("").reverse().join("") ? ele : " ";
}
console.log(checkPalindrome("yogesh"));
console.log(palindromicWordsInSentence("Able was I ere I saw Elba raceCar"));
*/

/*========================================================================================================*/

/*Check if Two Strings are Anagrams
Problem 1: Write a function to determine if two strings are anagrams of each other.
 Example: Input: s1 = "listen", s2 = "silent"; Output: true

function checkAnagram(s1, s2) {
  let str1 = s1.split("").sort().join("");
  let str2 = s2.split("").sort().join("");
  return str1 === str2;
}

console.log(checkAnagram("listen", "silent"));
*/

/* Group Anagrams
   Problem2: Given an array of strings, group the anagrams together.
   Example: Input: ["eat", "tea", "tan", "ate", "nat", "bat"]; Output: [["eat","tea","ate"],["tan","nat"],["bat"]]

function groupAnagrams(strs) {
  let map = new Map();
  for (let str of strs) {
    let sortedStr = str.split("").sort().join("");
    if (!map.has(sortedStr)) {
      map.set(sortedStr, []);
    }
    map.get(sortedStr).push(str);
  }
  return Array.from(map.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
[["eat","tea","ate"],["tan","nat"],["bat"]]

*/

/*Valid Anagram
Problem 3: Given two strings s and t, write a function to determine if t is an anagram of s.
Example: Input: s = "anagram", t = "nagaram"; Output: true


function isValidAnagram(s, t) {
  if (s.length !== t.length) return false;

  let count = new Array(26).fill(0);
  let aCharCode = "a".charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
    count[s[i].charCodeAt(0) - aCharCode]++;
    count[t[i].charCodeAt(0) - aCharCode]--;
  }

  for (let i = 0; i < 26; i++) {
    if (count[i] !== 0) {
      return false;
    }
  }

  return true;
}

console.log(isValidAnagram("anagram", "nagaram")); // true
console.log(isValidAnagram("rat", "car")); // false 
*/

/*Minimum Number of Steps to Make Two Strings Anagram
Problem 4: Given two strings s and t, return the minimum number of steps to make t an anagram of s. In one step, you can replace any character in t with another character.
Example: Input: s = "bab", t = "aba"; Output: 1

function minStep(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let count = new Array(26).fill(0);
  let aCharCode = "a".charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
    count[s[i].charCodeAt(0) - aCharCode]++;
    count[t[i].charCodeAt(0) - aCharCode]--;
  }

  let steps = 0;
  for (let i = 0; i < 26; i++) {
    if (count[i] > 0) {
      steps += count[i];
    }
  }

  return steps;
}

console.log(minStep("bab", "aba")); // 1
console.log(minStep("leetcode", "practice")); // 5

*/

// Extra anagram and paindrom problem

// Anagram Substring Search

// Problem: Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.
// Example: Input: s = "cbaebabacd", p = "abc"; Output: [0, 6]
// javascript
// Copy code
// function findAnagrams(s, p) {
//     const result = [];
//     const pCount = new Array(26).fill(0);
//     const sCount = new Array(26).fill(0);
//     const aCharCode = 'a'.charCodeAt(0);

//     for (let char of p) {
//         pCount[char.charCodeAt(0) - aCharCode]++;
//     }

//     for (let i = 0; i < s.length; i++) {
//         sCount[s[i].charCodeAt(0) - aCharCode]++;

//         if (i >= p.length) {
//             sCount[s[i - p.length].charCodeAt(0) - aCharCode]--;
//         }

//         if (pCount.join('') === sCount.join('')) {
//             result.push(i - p.length + 1);
//         }
//     }
//     return result;
// }

// console.log(findAnagrams("cbaebabacd", "abc")); // [0, 6]

// Find the Closest Palindrome

// Problem: Given an integer n, find the closest integer (not including itself) which is a palindrome.
// javascript
// Copy code
// function closestPalindrome(n) {
//     if (n === 0) return 1;
//     const strN = n.toString();
//     const length = strN.length;
//     const candidates = [
//         Math.pow(10, length) + 1, // case like 999 -> 1001
//         Math.pow(10, length - 1) - 1 // case like 1000 -> 999
//     ];

//     const prefix = parseInt(strN.slice(0, Math.ceil(length / 2)));
//     for (let start of [prefix - 1, prefix, prefix + 1]) {
//         let candidate = length % 2 === 0
//             ? parseInt(start.toString() + start.toString().split('').reverse().join(''))
//             : parseInt(start.toString() + start.toString().slice(0, -1).split('').reverse().join(''));
//         candidates.push(candidate);
//     }

//     candidates.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || a - b);
//     return candidates.find(candidate => candidate !== n);
// }

// console.log(closestPalindrome(123)); // 121
