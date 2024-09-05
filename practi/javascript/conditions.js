// Conditionals are used to perform different actions based on different conditions. 
// The main conditional statements in JavaScript are:


// if Statement:

// if (condition) {
//   code to execute if condition is true
// }

// let password = '12345678';

// if(password === '12345678wqwttrtry'){
//     console.log('logged in successfully');
// }else{
//     console.log('invalid credentials');
// }

// console.log(typeof 'Musa');
// console.log(typeof {});
// console.log(typeof []);
// console.log(typeof '55');


// Get the user input and store it in the variable
let score = prompt("Please enter your score: ");
console.log('Score before trimming: ' + score);
console.log('length before trimming: ' + score.length);

// Remove any leading or trailing whitespaces from the score
score = score.trim();
console.log('Score after trimming: ' + score);
console.log('length after trimming: ' + score.length);


// check if score is greater than 0
if(score.length > 0 && !isNaN(score) )
    // Convert Score into a number
    score = Number(score);
    console.log('Score after converting to number: ' + score);
    if(score >=0 && score <= 100)
        if(score >= 70){
            console.log('Congratulations, you scored an A');
            console.log(`Congratulations, you scored ${score}, you have an A`);
        }else if(score >=60){
            console.log('Congratulations, you scored a B');
            console.log('Congratulations, you scored ' + score + ', You have a B');
        }else if(score >=50){
            console.log('Congratulations, you scored a C');
        }else if(score >=45)
            


if(score.length > 0 && !isNaN(score) )
//       code to execute if expression doesn't match any case
//   }

let num = 2 + 5;
// switch (num){
//     case 7:
//         console.log('seven');
//         break;
//     case 4:
//         console.log('four');
//         break;
//     default:
//         console.log('invalid number');
// }
// let num = 2 + 50;
// switch (num){
//     case 7:
//         console.log('seven');
//         break;
//     case 4:
//         console.log('four');
//         break;
//     default:
//         console.log('invalid number');
// }

let word1 = 'happy';
let word2 = 'birthday';
let word3 = 'Bassey';

// string concatenation method
// console.log(word1 + ' ' + word2  + ' ' + word3);
// console.log('Merry' + " " + 'christmas')

// let word4 = 'Good';
// let word5 = 'day';
// let word6 = 'Bro';

// // string interpolation method
// console.log(`${word4} ${word5} ${word6} Nathaniel`);