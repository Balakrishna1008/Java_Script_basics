/* let a = 12; b = 11;
// global variable
function operation(var1, var2){
    // local variable
    let c = ((var1+var2 * var2/var1)*var2);
    return c;
}
 
operation(a,b);
// operation(2);
// console.log(c);
console.log(operation(3,4)); */


// practice qs

function OddOrEven(num){
    if(num % 2 == 1){
        return 'Odd number';
    }
    else{
        return 'Even number';
        console.log("After return"); // unreachable code
    }
}

console.log(OddOrEven(23));

let oddEven = OddOrEven;
console.log(oddEven);