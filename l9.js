// const examDetails= {
//     name: 'ram',
//     examDate: '12/12/2020',
//     highest:{
//         subject: 'Math',
//         score:99,
//         attempts:1
//     },
//     lowest: {
//         subject: 'Science',
//         score:14,
//         attempts: 3
//     }
// }

// 1. log the total scores scored in the lowest subject     // output 42

// const {score, attempts: lowestAttempt} = examDetails.lowest;
// console.log(score * lowestAttempt);

// 2. calculate the total % scored full marks is 100

// const {score: score1} = examDetails.highest;
// console.log(score1 / 100 * 100, '%')

// const {score: score2} = examDetails.lowest;
// console.log(Math.floor(score2 / 100 * 100), '%');

// let totalPercentage = ((score1 + score2) / 200 * 100).toFixed(2);
// console.log(totalPercentage, '%')


// 3. only extract subject and score from the lowest by using rest operator
// output should be : 
// {
//     subject : 'Science',
//     score : 14
// }

// const {attempts, ...others} = examDetails.lowest;
// console.log(others);



// *
// const previousAttempts = {
//     science: {
//         records: {
//             '12/12/2020': 10,
//             '12/11/2019':9
//         }
//     }
// }

// METHOD 1
// let previousTotalAttempts = previousAttempts.science.records['12/12/2020'] + previousAttempts.science.records['12/11/2019'];
// examDetails.lowest.previousTotalAttempts = previousTotalAttempts;
// console.log(examDetails);


// METHOD 2
// const {records} = previousAttempts.science;
// let previousTotalAttempts = records['12/12/2020'] + records['12/11/2019']
// examDetails.lowest.previousTotalAttempts = previousTotalAttempts;
// console.log(examDetails)



// ...SPREAD and REST operators with objects and arrays
// let names = ['samir', 'ram', 'sita'];
// let morenames = ['suman', 'suji'];


// // copy arrays using spread operators
// let ghimireFamily = {...names.concat(...morenames)};
// console.log(ghimireFamily);

// let mybike = {
//     name : 'shineSp',
//     brand : 'honda',
//     cc : '125'
// }

// const {name : shine, ...others} = mybike;
// console.log(shine);


// let herosp = {...mybike}
// herosp.disk = 'frontDisk'
// console.log(herosp)
// console.log(mybike)


// ...SPREAD operator in Strings
// let pant = 'chinos';
// let formalpant = {...pant};
// console.log(formalpant)


// ...SPREAD operator in Function Arguments
// function test(test1, test2) {
//     return test1 + test2;
// }
// let value = [1, 2];
// console.log(test(...value));

