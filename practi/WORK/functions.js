// A function is a block of reuseable code.

// function Greetings(){
//     console.log('Hello World');
//     console.log('Hello People');
//     console.log('how far');
//     console.log('Wa Guan!'); 
//     console.log('    ');   
// }


// Greetings();

const num3 = 10;

function addNum(num1, num2){
    // let num1 = 4;
    // let num2 = 5;
    const num3 = 50;
    // console.log('result >>>>' + num1 + num2);
    console.log(`result >>>>> ${num1 + num2}`);
    // console.log(num3);
}

function example() {
    var x = 10;
    if (true) {
        var y = 20; // Block scope
        console.log(y); // 20
    }
    console.log(x); // 10
    console.log(y); // Error: y is not defined
}

// example();

console.log(num3);
// console.log(num4);
// console.log(num1);

// AddNum();
// AddNum();
// AddNum();
addNum(5);
addNum(50, 100);

// function substractNums(num1, num2){
//     return num1 - num2;
// }



// Arrow functions
var substractNums = (num1, num2) => {
    return num1 - num2;
}

let substractNums = (num1, num2) => {
    return num1 + num2;
}

// let result = substractNums(7,5);
let result = substractNums(7,5);
console.log({result});



// // food prices
// var beer_cost = 6.25;
// var burger_cost = 4.750;
// var pop_cost = 3.00;

// // user's money
// var account_balance = 15.75;

// // drink beer
// function drink_beer(){
//   account_balance = account_balance - beer_cost;
//   console.log(account_balance);
// }


// // eat burger
// function eat_burger(){
//  account_balance = account_balance - burger_cost;
//  console.log(account_balance);
// }

// // drink pop
// function drink_pop(){
//    account_balance = account_balance - pop_cost;
//    console.log(account_balance);
// }

// drink_pop();
// eat_burger();
// drink_beer();

// visit the carnival, eat, and drink
// var mealList = [drink_beer, drink_pop, eat_burger, drink_beer];
// function visitCarnival(mList){
//     for(var i=0, num=mList.lenght; i<num;i++)
//         // mList[i]();
//     mList[i].call();
     
// }
// visitCarnival(mealList);