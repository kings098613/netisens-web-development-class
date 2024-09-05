
// let score = prompt("Please enter your score: ");
// score = score.trim();
// if(score.length > 0 && !isNaN(score) )
//     {
//     score = Number(score);
//     if(score >=0 && score <= 100){
//         if(score >= 70){
//             console.log(`Congratulations, you scored ${score}, you have an A`);
//         }else if(score >=60){
//             console.log('Congratulations, you scored ' + score + ', You have a B');
//         }else if(score >=50){
//             console.log('Congratulations, you scored a C');
//         }else if(score >=45){
//             console.log('Congratulations, you scored a D');
//         }else{
//             console.log('Congratulations, you scored an F,');
//         }
//     }else{
//         console.log('invalid input,')
//     }
   
// }else{
//     console.log('Invalid input');
// }


            //   TASK2




let carsInStock = [
    "toyota", 
    "lamborghini", 
    "ferrari", 
    "mitsubishi",
    "volvo",
    "mercedes",
    "ford",
    "chevrolet",
    "honda",
    "bmw"
]

let customerChoice = prompt("What Car would you like to buy?").toLowerCase();

// console.log('BMW'.toLowerCase())
if(carsInStock.includes(customerChoice)){
    // display congrats and the car name
    console.log(`Congratulations! You've selected ${customerChoice}.`);
}
else{
    // display an error message
    console.log(`Sorry, ${customerChoice} is not available in our stock.`);
}