function A() { }
function B() { return a }

let a = new A;
let b = new B;

alert( a == b ); // true

//this answer is practically working but it is not a good or practical solution.