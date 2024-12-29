// let password = 'hello@123';

// length of password
// console.log(password.length);

// check if password contains @
// console.log(password.includes('@'));

// // console.log the reverse of the string
// let reversedPassword =  password.split('').reverse().join('');
// console.log(reversedPassword);

// replace @ with - and console the output
// console.log(password.replace('@','-'));

// for the reversed string, only output 321 as a number
// let number = parseInt(reversedPassword, 10);
// console.log(number);


// *console the remaining after removing first 3 char of a string
// let nam = 'Samir Ghimire';
// console.log(nam.substr('3', '10'));

// Another method
// let nam = 'samir';
// console.log(nam.substring('1', '2'));


// *
// Array.push() adds new element at the end of the array 
// Array.pop() removes the last element from the end of the array
//Array.shift() removes the first element from the beginning of the array
// Array.unahift() adds the first element from the beginning of the array
// let pi = ['samir', 'ghimire'];
// console.log(pi.push('18'));
// console.log(pi);

// console.log(pi.pop());
// console.log(pi);

// console.log(pi.unshift('mula'));
// console.log(pi);

// console.log(pi.shift());
// console.log(pi);


// *
// remove duplicate from an array
// function removeDuplicates(array) {
//     return [...new Set(array)];
// }
// let bikes = ['honda', 'T.V.S', 'bajaj', 'kawasaki', 'honda'];
// console.log(removeDuplicates(bikes));



// let bikes = ['honda', 'tvs', 'duke', 'dominar'];
// console.log(bikes.indexOf('duke'))		// check if an element exists in an array
// console.log(bikes.includes('duke'))		// check if an element exists in an array
// console.log(bikes.length)
// console.log(bikes.slice('2', '3'))		// access the third element of an array
// for (let i = 0; i<bikes.length; i++) {			//  Write a loop to print all elements of the array [1, 2, 3, 4, 5]
//     console.log(bikes[i])			
// }
// bikes.splice(2, 3);     // remove element using splice   
// bikes.splice(2, 0, 'splender', 'R15');    // add element using splice
// bikes.splice(2, 3, 'splender', 'R15');   // Replace element using splice
// console.log(bikes);


// How do you combine two arrays [1, 2] and [3, 4]?
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// const combined = arr1.concat(arr2);		// using CONCAT Method
// console.log(combined);
// const add = [...arr1, ...arr2];		// Using Spread operator(...)
//  console.log(add);
// const pushAdd = arr1.push(...arr2);		// Using Push with Spread operator
// console.log(arr1);


// * sort the array [4, 2, 1, 3] in ascending order.
// let arr = [1, 4, 3, 6, 5 ,2];
// console.log(arr.sort((a, b) => a - b));	// Ascending Order
// console.log(arr.sort());		// Ascending Order
// // console.log(arr.sort((b, a) => a - b));	// Descending Order	


// * reverse the elements of an array.
// let reversedArray = arr.slice('').reverse();
// console.log(reversedArray)

