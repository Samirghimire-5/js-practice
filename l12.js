//Array

// []
// based on index

// const total = [2, 'hi']
//destructuring total
// const [roll, greet] = total
// console.log(greet)





// Q1 . destructure the array into name age and car and log
// 'ram of age 21 owns bmw'
// const user = ['ram', 21, 'bmw'];

// const [name, age, car] = user;
// console.log(`${name} of age ${age} owns ${car}`)


// skipping element of array
// const [name, , car] = user;
// console.log(name);
// console.log(car);


// using REST Operator extracting elements
// const [name, ...others] = user;
// let age_car = others;
// console.log(age_car);


// set a default value in element
// const [name = 0, age = 0, car = 0, kids = 50] = user;
// console.log(kids);


// Swapping values
// let a = 5;
// let b = 10;
// [a, b] = [b, a];
// console.log(a, b);