// Optional Chaning :

// const userDetails = {
//     hari: {
//      ielts:{
//          '12 /2/2020': 32
//      }
//     },
//     shyam: {
//      pte: {
//          '12/2/2020':34
//      }
//     }
//  }

 // 1: log 32
// console.log(userDetails.hari.ielts['12/2/2020']) ;



// 2 : optionally chain the following 
// console.log(userDetails.shyam.itels.12/12/2020)

// answer=>
// console.log(userDetails.shyam.itels?.['12/12/2020'])


// 3 : ---
const technical_A = {
    math: 32,
    science: 40
}

const technical_B = {
    computer: 40,
    gk: 30
}

// Q 3.1: output should be {
//     math: 32,
//     science: 40,
//     computer: 40,
//     gk: 30
// }

const combine = {...technical_A, ...technical_B}
// console.log(combine)



const practical_B = {
    computer: 50,
    gk:20
}

// Q 3.2: --- 
//  output should be {
//      math: 32,
//      science: 40,
//      computer: 40,
//      gk: 30,
//      computer_prac: 50,
//      gk_prac:20
// }

const total = {
    ...combine,
    computer_pra: practical_B.computer,
    gk_pra: practical_B.gk
}

console.log(total)
