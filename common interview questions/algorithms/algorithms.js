/*Binary Search

function binarySearch(arr, k) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === k) {
      return mid;
    }

    if (arr[mid] < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch([2, 5, 6, 4, 8, 9], 9));
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // Output: 2
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // Output: -1
*/

/* sorting algorithms
// time complexity: O(n2)
//space complexity: O(1)

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

console.log(bubbleSort([7, 8, 9, 2, 5, 3, 4, 8, 56, 7]));
*/

//Quick Sort
// time complexity: O(n log n)
//space complexity: O(n)

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr.pop();
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

let sorted = quickSort([6, 7, 3, 5, 2, 3, 8]);
console.log(sorted);

//merge Sort
// time complexity: O(n log n)
//space complexity: O(n)

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

let arr = [3, 9, 10, 1, 8, 7, 5, 2];
console.log(mergeSort(arr));

//Eculid Algo to find gcd
// function gcd(a, b) {
//   if (b === 0) {
//     return a;
//   } else {
//     return gcd(b, a % b);
//   }
// }

// console.log(gcd(48, 18)); // Output: 6

// -------------------------------------------------------------------------------------------------------------------------------------------

/* linklist  
    push
    pop
    shift 
    unshift
    getFirst
    getLast
    getElementByIndex
    set */
class NODE {
  constructor(data) {
    this.node = data;
    this.next = null;
  }
}

class linklist {
  constructor(value) {
    this.head = value;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    let newNode = new NODE(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  pop() {
    const temp = this.head;
    const prev = this.head;

    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }
    prev.next = null;
    this.tail = prev;
    this.length--;

    return temp.node;
  }
}

const linkedlist = new linklist();
