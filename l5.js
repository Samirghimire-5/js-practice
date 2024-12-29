// let a = 40;
// // method 1
// if (a % 5 === 0) {
//     console.log("a is divisible by 5");
// } else {
//     console.log("a is not divisible by 5");
// }

// // method 2
// a % 5 === 0 ? console.log("a is divisible by 5") : console.log("a is not divisible by 5");


// *
// if length of name is greater than 5 console.log("short name is only valid" else "you are registered")
// let nam = "sanuer";
// nam.length > 5 ? console.log("short name is only valid") : console.log("you are registered");


//*
// if the starting char is @, and last letter is 3 , console.log("password is strong"), else print ("password is weak")
// const password = '@hllo123';
// if (password[0] === '@' && password[password.lastIndexOf('3')] === '3') {
//     	console.log("password is strong");    
// } else {
//     console.log("password is weak");
// }


// *
//Q3.  b greater or equals to 0.8, console.log(you are lucky),
// b is greater or equals  0.3 and less than 0.8 console.log("Good day")
// if b is less than 0.3 you are unlucky// 

// let b = Math.random();
// console.log(b);

// if (b >= 0.8) {
//     console.log("you are lucky");
// } else if (b >= 0.3 && b < 0.8) {
//     console.log("Good day");
// } else {
//     console.log("you are unlucky");
// }


// other method
// b >= 0.8 ? console.log("you are lucky") 
// : b >= 0.3 ? console.log("Good day") 
// : console.log("you are unlucky");


// *
// if the starting char is @, and last letter is number , console.log("password is strong"), else print ("password is weak")

// let password = "@samir0";

// if (password[0] === '@' && !isNaN(password[password.length -1])) {
//     console.log("password is strong");
// } else {
//     console.log("password is weak");
// }


// *
// If the length of the name is greater than 5, print "Name is too long", 
// otherwise print "Name is acceptable"

// let name = "samirkun";
// name.length >= 5 ? console.log("Name is too long") : console.log("Name is accepetable");


// *
// If the number is between 10 and 50 (inclusive), print "Number is in range",
// Otherwise, print "Number is out of range"

// let num = 99;

// num >= 10 && num <= 50 ? console.log("Number is in range") : console.log("Number is out of range");


// *
// If the string starts with the letter 'A', print "Starts with A",
// Otherwise, print "Does not start with A"

// let car = "Alto";
// car[0] === 'A' ? console.log("Starts with A") : console.log("Does not starts with A");


// *
// If the number is positive, print "Positive number",
// If the number is negative, print "Negative number",
// Otherwise, print "Zero"

// let number = 'y';
// number > 0 ? console.log("Positive number") 
// : number < 0 ? console.log("Negative number")
// : console.log("Zero");


// *
// If the score is 90 or above, print "A",
// If the score is between 80 and 89, print "B",
// If the score is between 70 and 79, print "C",
// If the score is between 60 and 69, print "D",
// Otherwise, print "Fail"

// function result() {
//     let score = 0;
    
//     if (score >= 90) {
//         console.log("A");
//     } else if (score >= 80) {
//         console.log("B");
//     } else if (score >= 70) {
//         console.log("C");
//     } else if (score >= 60) {
//         console.log("D");
//     } else {
//         console.log("Fail");
//     }
// }
// result();

// *
// If the number is even, print "Even number",
// Otherwise, print "Odd number"
// let num = 33;
// num % 2 === 0 ? console.log('Even number') : console.log('Odd number');



// let pl = "Javascript is fun";
// pl.includes("Javascript") ? console.log("Javascript is found") : console.log("Javascript is not found");


// * 
// Check if a string is a palindrome (the string is the same forwards and backwards).
// Ignore spaces and letter case. If it is a palindrome, print "Palindrome", otherwise "Not Palindrome"

// // the (/\s+/g, '') this is called a regular expression, the / marks the begining and the end of the regular expression, \s removes the whitespaces tabs /n's etc, the + means one or more of the spaces, the 'g flag' means it will search the whole string to find all whitespaces, tabs etc and finally it will replaces the spaces and tabs with an empty string like ''

// let word = "Level ";
// if (word.replace(/\s+/g, '').toLowerCase() === word.replace(/\s+/g, '').toLowerCase().split('').reverse().join('')) {
//     console.log("Plaindrome");
// } else {
//     console.log("Nor Plaindrome");
// }


// *
// Write a program to find the largest number among three given numbers using conditional statements.
// function largeNum(a, b, c) {
//  if (a > b && a > c) {
//     console.log(a, "is largest");
//  } else if (b > a && b > c) {
//     console.log(b, "is largest");
//  } else {
//     console.log(c, "is largest");
//  }
// }
// largeNum(34, 67, 37);


// *
// Write a program to check if a given character is a vowel (a, e, i, o, u) or a consonant.

// let input = 't';
// if (input.includes('a','e','i','o','u')) {
//     console.log("Vowel")
// } else {
//     console.log("Not a Vowel")
// }


// * 
// Write a program to display an action based on the traffic light color:

// let light = "red";
// switch(light) {

//     case("red") : 
//     console.log("Stop");
//     break; 

//     case("yellow") :
//     console.log("Slow Down");
//     break;

//     case("green") :
//     console.log("Go");
// }


// * 
// Write a program to check if a given character is uppercase or lowercase.

// let char = 'A';
// if (char === char.toLowerCase()) {
//     console.log("LowerCase");
// } else {
//     console.log("UpperCase")
// }


// *
// Write a program to perform basic arithmetic operations (+, -, *, /) based on user input. Use a switch statement.
// function calculate(a, b) {
//     let operation = ("*");
//     switch (operation) {
//         case ('+') :
//             console.log(a + b);
//             break;

//         case ('-') :
//             console.log(a - b);
//             break;

//         case ('*') :
//             console.log(a * b);
//     }
// }

// calculate(2, 7);


// * 
