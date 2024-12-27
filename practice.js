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

