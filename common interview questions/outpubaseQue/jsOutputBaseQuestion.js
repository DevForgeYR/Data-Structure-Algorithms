//Q:1
// const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => console.log(b[i]), 1000);//1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// }

// for (var i = 0; i < 10; i++) {
//   setTimeout(() => console.log(b[i]), 1000);// 10 times undefine as var is having funcational scope and i will same for each loop
// }

//Q:2 In JavaScript, how do you turn an Object into an Array []?
let obj = { id: "1", name: "user22", age: "26", work: "programmer" };

//Method 1: Convert the keys to Array using - Object.keys()
console.log(Object.keys(obj));
// ["id", "name", "age", "work"]

// Method 2 Converts the Values to Array using - Object.values()
console.log(Object.values(obj));
// ["1", "user22r", "26", "programmer"]

// Method 3 Converts both keys and values using - Object.entries()
console.log(Object.entries(obj));
//[["id", "1"],["name", "user22"],["age", "26"],["work", “programmer"]]

// Q:3 code modification
// Code 2

// Each time bigFunc is called, an array of size 700 is being created,
// Modify the code so that we don't create the same array again and again

// function bigFunc(element){
//   let newArray = new Array(700).fill('♥');
//   return newArray[element];
// }

// console.log(bigFunc(599)); // Array is created
// console.log(bigFunc(670)); // Array is created again

// function bigFunc(){
//   let newArray = new Array(700).fill('♥');
//   return (element) => newArray[element];
// }

// let getElement = bigFunc(); // Array is created only once
// getElement(599);
// getElement(670);
