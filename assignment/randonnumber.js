// Assignment 1: Even and Odd Number Seperator

// Algorithm (Steps to Solve):
// 1.) Create an empty array called randomNumbers.
// 2.) Generate 20 random numbers using a loop and store them in randomNumbers.
// 3.) Create two more empty arrays: evenNumbers and oddNumbers.
// 4.) Loop through the randomNumbers array:
// 5.) For each number, check if it's even or odd.
// 6.) If it's even, add it to evenNumbers.
// 7.) If it's odd, add it to oddNumbers.
// 8.) Display the evenNumbers and oddNumbers arrays in the console.

// let randomNumbers = [];
// let evenNumbers = [];
// let oddNumbers = [];

// console.log(randomNumbers);

// // generate 20 random numbers between 1 and 30, inclusive
// for(let i = 1; i <= 20; i++){
//     // generate a random number between 0 and 0.9
//     let randomNumber = Math.random();
//     // console.log(randomNumber);
    
//     // multiply them by 30 to make them greater than 1
//     randomNumber = randomNumber * 30;
//     // console.log(randomNumber);

//     // convert them to integers
//     randomNumber = Math.round(randomNumber);
//     // console.log(randomNumber);

//     randomNumbers.push(randomNumber);

//     // let randomNumber = Math.round(Math.random() * 30);
// }

// console.log(randomNumbers);

// // seperate even numbers from odd numbers

// for(let num of randomNumbers){
//     if(num % 2 === 0){
//         evenNumbers.push(num);
//     }else{
//         oddNumbers.push(num);
//     }
// }

// console.log(evenNumbers);
// console.log(oddNumbers);


// let randomNumbers = [];
// let count = 0;

// for(let k = 0; k <=15; k++){
//     let randomNumber = Math.round(Math.random() * 50);
//     randomNumbers.push(randomNumber)
// }

// console.log(randomNumbers);

// for(let i = 0; i < randomNumbers.length; i++){
//     for(let j = 0; j < randomNumbers.length - 1; j++){
//         if(randomNumbers[j] > randomNumbers[j + 1]){
//             let biggerNumber = randomNumbers[j];
//             let smallerNumber = randomNumbers[j + 1];
//             randomNumbers[j] = smallerNumber;
//             randomNumbers[j + 1] = biggerNumber;
//         }
//     }    
// }

// // randomNumbers.sort((a, b) => a-b);

// // randomNumbers.sort((a, b) => {
// //     return a - b;
// // })


// // randomNumbers.sort(function(a, b) {
// //     return a - b 
// // })
// // randomNumbers[0] = 67;

// console.log(randomNumbers);

// for(let number of randomNumbers){
//     if(number > 25){
//         count++;
//     }
// }

// console.log(count);


// const calculate = (num1, num2, operation) => {
    
//     if(num1.length < 1 || num2.length < 1 || operation.length < 1){
//         // console.log('You cannot submit empty prompts');
//         return 'You cannot submit empty prompts';
//     }else{
//         num1 = Number(num1);
//         num2 = Number(num2);
    
//         if(['addition', 'add', '+', 'plus'].includes(operation)){
//             return num1 + num2;
//         }else if(['subtraction', 'subtract', '-', 'minus'].includes(operation)){
//             return num1 - num2;
//         }else if(['divide', 'division', '/'].includes(operation)){
//             return num1 / num2;
//         }else if(['multiply', '*', 'multiplication'].includes(operation)){
//             return num1 * num2;
//         }else if(['modulus', 'modulo', '%'].includes(operation)){
//             return num1 % num2;
//         }else{
//             return "Invalid operation!";
//         }
//     }

   
// }

// let num1 = prompt('Enter the first number:').trim();
// let num2 = prompt('Enter the second number:').trim();
// let operation = prompt('Enter the operation:').trim().toLowerCase();


// const result = calculate(num1, num2, operation);

// console.log({result});







// Assignment 2: Number Sorter and Counter

// Algorithm (Steps to Solve):
// 1.) Create an empty array called randomNumbers.
// 2.) Generate 15 random numbers using a loop and store them in randomNumbers.
// 3.) Sort the randomNumbers array in ascending order.
// 4.) Create a variable to count how many numbers are greater than 25.
// 5.) Loop through the randomNumbers array:
// 6.) For each number, check if it is greater than 25.
// 7.) If it is, increase the count.
// 8.)  the sorted array and the count of numbers greater than 25.
// 9.) Display the sorted array and the count of numbers greater than 25 in the console


// let randomNumbers = [];
// let evenNumbers = [];
// let oddNumbers = [];

// for(let i = 1; i<=20; i++){
// //     // generate a random number between 0 and 0.9
// // let randomNumber = Math.random(); 
// //     console.log(randomNumber);
// //     // multiply them by 30 to make them greater than 1
//     // randomNumber = randomNumber *30;
// //     // console.log(randomNumber);
// //     randomNumber = Math.round(randomNumber);
// //     // console.log(randomNumber);

//     // randomNumbers.push(randomNumber);

//     let randomNumber = Math.round(math.random()*30);

// }


// const randomNumbers = [];
// for (let i = 0; i < 15; i++) {
//     const randomNumber = Math.floor(Math.random() * 100) + 1;
//     randomNumbers.push(randomNumber);
// }

// randomNumbers.sort((a, b) => a - b);
// let countGreaterThan25 = 0;
// for (let i = 0; i < randomNumbers.length; i++) {
//     const number = randomNumbers[i];
//     if (number > 25) {   
//         countGreaterThan25++;
//     }
// }
// console.log("Sorted Numbers:", randomNumbers);
// console.log("Count of Numbers Greater Than 25:", countGreaterThan25);






// Assignment 3: Mini Calculator

// Algorithm (Steps to Solve):
// 1.) Create an function called Calculate.
// 2.) Give it three parameter num1, num2 and operation (num1 and num2 should be numbers, while operation is a string).
// 3.) the users should provide num1, num2 and operation arguments using three different prompts.
// 4.)  Prevent users from entering anything that is not a number as num1 or num2, and anything that is not a string as the operation.
// 5.) Inside the function, create a conditional block (either else if statement or switch statement) that conditionally performs math operations on num1 and num2 based on the operation you provided e.g if the operation is Substract, perform num1 - num2.
// 6.)users should be able to perform addition, subtraction, division, multiplication, modulus operations.




// function Calculate(num1, num2, operation) {
//     if (isNaN(num1) || isNaN(num2)) {
//         return "Error: num1 and num2 must be valid numbers.";
//     }
//     if (typeof operation !== "string") {
//         return "Error: operation must be a valid string.";
//     }

//     switch (operation.toLowerCase()) {
//         case "add":
//         case "+":
//             return num1 + num2;
//         case "subtract":
//         case "-":
//             return num1 - num2;
//         case "multiply":
//         case "*":
//             return num1 * num2;
//         case "divide":
//         case "/":
//             if (num2 === 0) {
//                 return "Error: Division by zero is not allowed.";
//             }
//             return num1 / num2;
//         case "modulus":
//         case "%":
//             return num1 % num2;
//             default:
//                 return "Error: Unknown operation.";
//         }
//     }
    
//     const num1 = parseFloat(prompt("Enter the first number (num1):"));
//     const num2 = parseFloat(prompt("Enter the second number (num2):"));
//     const operation = prompt("Enter the operation (add, subtract, multiply, divide, modulus):");
    
//     const result = Calculate(num1, num2, operation);
//     alert("Result: " + result);

// const calculate = (num1, num2, operation)=> {
//    if (['addition','add','+','plus'].includes(operation)){
//     return num1+ num2;
//    }else if(['subtraction','subtract','-','minus'].includes(operation)){
//     return num1- num2;
//    }else if(['divide','division','/'].includes(operation)){
// return num1+ num2;
//    }else if(['multiply','*','multiplication'].includes(operation)){
//     return num1+ num2;
//    }else if(['modulus','modulo','%'].includes(operation)){
//     return num1+ num2;
//    }else{
//     return"Invalid operation!";
//    }
// }

// let num1 = prompt('Enter the first number').trim();
// let num2 = prompt('Enter the second number').trim();


// num1 = Number(num1);
// num2 = Number(num2);

// if(isNaN(num1)){
//     console.log('First number must be a number');
// }
// if(isNaN(num2)){
//     console.log('Second number must be a number');
// }
     
// const result = calculate(num1, num2, operation);


