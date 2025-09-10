// number data type
let pi = 3.14
let prime = 29;

console.log(pi,prime);

console.log(typeof pi);

// special numeric values
let infi = Infinity;
let neg_infi = -Infinity;
let nan = NaN;
nan = nan ** 0; // Anything power 0 is 1. So NaN ** 0 is 1.
console.log(infi);
console.log(neg_infi);
console.log(nan);

console.log(typeof infi);
console.log(typeof neg_infi);
console.log(typeof nan);

console.log(1/0);

// big int datatype

let limit = 987654974645484746n;

console.log(limit +1n);
console.log(limit +2n);
console.log(limit +3n);

console.log(typeof limit);