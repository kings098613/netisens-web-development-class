

let x ;
let y ;
let z ;

document.getElementById("rollbutton").onclick = 

function(){

 x = math.floor(math.random() *6) +1;
 y = math.floor(math.random() *6) +1;
 z = math.floor(math.random() *6) +1;

 document.getElementById("xlabel").innerHTML = x;
 document.getElementById("ylabel").innerHTML = y;
 document.getElementById("zlabel").innerHTML = z;

}

console.log(x)
console.log(y)
console.log(z)

// let x = 3.14;

// x = Math.round(x);
// x = Math.floor(x);
// // x = Math.cell(x);
// console.log(x)