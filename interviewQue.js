
// console.log(!'hello'); // ->false  // hello is a string so it is true and !(not operator) turns it into false value
// console.log(+false); // -> 0     // false is also 0 so +0 = 0
// console.log("" == false);    // -> the == operator (the "loose equality" operator) performs type coercion before comparing the two values.
//  When the empty string is compared to a number, it is converted to a number.
//  When false is involved in a loose comparison, it is converted to the number 0.

// console.log("" === false);  // -> false // the === operator (the "strict equality" operator) does not perform type coercion.
//  Instead, it checks for both:
// Value equality: The values must be the same.
// Type equality: The types of the two operands must also be the same.


// let arr = [1,2,3,4,5];
// arr[10] = 100;
// console.log(arr);    // [1, 2, 3, 4, 5, <5-empty strings> , 100]

// var xyz = 1 + abc;
// var abc = 100;       // NaN
// //or
// abc = 100;      // error
// console.log(xyz);



// FOR DELETE OPERATORS
// Delete operator cant remove whole object or array.
// Delete operator only removes properties of objects and indexes or elements of array.
// And Importantly it returns the value in boolean datatype, for example:
// let arr = [2,3]
// console.log(delete arr);        // it will print false cause delete cant remove whole array
// console.log(delete arr[0]);     // it will print true cause delete can remove elements inside array
// And same goes for objects tooo
