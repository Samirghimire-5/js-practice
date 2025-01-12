// Object Destructuring Questions

// 1-> extract the name and city properties into variables?
// const person = {
//     name: 'Alice',
//     age: 25, 
//     city: 'Kathmandu'
// };

// const {name: idName, city: stayPlace} = person;
// console.log(idName);


// 2-> extract username and email and assign a default value of 'not provided' to email?
// const user = {
//     username: 'jhon_doe',
// };

// const {username, email = 'not provided'} = user;
// console.log(email);


// 3-> How do you extract name and city into variables?
// const employee = {
//     name: 'Bob',
//     address: {
//         street: '123 Main St',
//         city: 'Los Angeles'
//     }
// };
// --Method 1;
// const {name} = employee;
// const {city} = employee.address;
// --Method 2;
// const {name, address:{city}} = employee;
// console.log(name,',', city);


// 4-> extract the title property and group the remaining properties into another object?
// const book = {
//     title: '1984',
//     author: 'George Orwell',
//     year: 1949
// };

// const {title, ...remainingInfo} = book;
// console.log(title);
// console.log(remainingInfo);


// 5->
// const data = {
//     id: 1, 
//     info: { 
//     name: 'Bob', 
//     hobbies: ['reading', 'coding']
//     } 
// };

// const {id, info: {hobbies}} = data;
// console.log(id, hobbies);


// LOOP through objects keys and values
// const film = {
//     hero: 'Rajesh Hamal',
//     heroien: 'Jharana Thapa',
//     villain: 'Samir Ghimire'
// }

// for (const keys in film) {
//     console.log(`${keys} is ${film[keys]}`);
// }


// sum of all elements in an array.
// let arr = [10, 39, 55, 88];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum);


//  function that returns the sum of all elements in an array.
// function sumOfArray(arr) {
//     let sum = 0;
    
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     console.log(sum)
// }
// sumOfArray([10, 39, 55, 88]);


// function maximumValue(arr) {
    // method 1
    // let max = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] > max) {
    //         max = arr[i];
    //     }
    // }
    // console.log(max)

    // Method 2
    // let max = Math.max(...arr);
    // console.log(max)
// }
// maximumValue([10, 39, 55, 88])


// function maximum(arr) {
//     let max = 0;
//     for (let i = 0; i<arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     console.log(max);
// }

// maximum([1, 5, 9, 2]);


// function to reverse an array without using inbuilt function
// Method 1;
// function reverseArr(arr) {
//     let reversed = [];
//     for (let i = arr.length -1; i>=0; i--) {
//         reversed.push(arr[i]);
//     }
//     console.log(reversed);
// }
// reverseArr([1, 5, 9, 2])

// Method 2;
// function reverseArr(arr) {
//     let reversed = [];
//     for (let i = 0; i < arr.length; i++) {
//         reversed.unshift(arr[i]);
//     }
//     console.log(reversed);
// }
// reverseArr([1, 5, 9, 2]);

// function to reverse an array using inbuilt function
// function revArray(arr) {
    // let arrReverse = arr.reverse();
            // OR
//     let arrReversed = arr.toReversed();
//     console.log(arrReversed);
// }
// revArray([1, 5, 9, 2]);

 
// function to remove any duplicate arrays
// function removeDuplicates(bikes) {
//     let noDupliArr = [...new Set(bikes)];  // the (...)spread operators converts the set into array 
//     console.log(noDupliArr);
// }
// removeDuplicates(['honda', 'tvs', 'fz', 'fz', 'duke']);


// function to merge two arrays and remove any duplicate elements of both arrays
// function mergeAndRemoveDuplicates(school, collage) {
//     let duplicateRemove = [...new Set(school, collage)];  // new Set creates a set of unique elements, so it removes duplicate elements
//     console.log(duplicateRemove);
// }
// mergeAndRemoveDuplicates(['tarun M.V', 'takxishila', 'N.C.C.S'], ['peoples', 'takxishila', 'N.C.C.S']);

// map consoles the value because it can be returned in a new array
// let arr = [1,2,3,4];
// let newArr = arr.map(item => item+1)
// console.log(newArr);

// it console undefined because foreach cant be returned in a new array
// let arr = [1,2,3,4];
// let newArr = arr.map(item => item+1)
// console.log(newArr);

// Q - Double each number and return a new array with the doubled values.
// const numbers = [1, 2, 3, 4, 5];

// let doubled = [];
// numbers.forEach((item) => {
//     doubled.push(item * 2);
// })
// console.log(doubled);
// Expected Output:
// [2, 4, 6, 8, 10]


// Q- Given an array of names, print each name in uppercase, one by one.
// const names = ['Alice', 'Bob', 'Charlie', 'Diana'];
// Method 1
// for(let i=0; i<names.length; i++) {
//     console.log(names[i].toUpperCase())
// }
// Method 2
// for (let val of names) {
//     console.log(val.toUpperCase())
// }
// Method 3
// for (let val in names) {
//     console.log(names[val].toUpperCase())
// }
// Expected Output:
// ALICE, BOB, CHARLIE, DIANA


// Q - Count how many even numbers exist in an array.
// const nums = [3, 5, 6, 8, 9, 10, 12];

// let even = nums.filter((item) => {
//     if (item%2 === 0) {
//         return item;
//     }
// })
// console.log(even.length);
// Expected Output:
// 4


// Question 4 - Find the sum of all numbers in an array.
// const nums = [4, 7, 1, 8, 3];

// let sum = 0;
// nums.forEach((item) => {
//     sum = sum + item
// })
// console.log(sum);
// Expected Output:
// 23


// Question 5 - Create a new array where each number is increased by its index in the original array.
// const nums = [10, 20, 30, 40];

// let newArr = nums.map((item, index) => {
//     return item + index;
// })
// console.log(newArr);
// Expected Output:
// [10, 21, 32, 43]

// Question 6 - You are given an array of objects representing books. Extract the titles of all books into a new array.
// const books = [
//   { title: 'The Hobbit', author: 'J.R.R. Tolkien' },
//   { title: '1984', author: 'George Orwell' },
//   { title: 'To Kill a Mockingbird', author: 'Harper Lee' }
// ]
// const titles = books.map((item) => {
//     return item.title
// })
// console.log(titles);
// Expected Output:
// ['The Hobbit', '1984', 'To Kill a Mockingbird']

// Question 9 - Reverse the letters of each word in an array and create a new array with the reversed words.
// const words = ['hello', 'world', 'javascript'];
// const reversed = words.map((item) => {
//     return item.split('').reverse().join('');
// })
// console.log(reversed)
// Expected Output:
// ['olleh', 'dlrow', 'tpircsavaj']
