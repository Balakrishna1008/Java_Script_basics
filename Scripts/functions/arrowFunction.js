// If arrow functions are used, it's better to write function in single line 
// Nameless function
let oddOreven1 = (num) => num%2 == 0? "Even number" : "Odd number";

// This is normal function 
let oddOreven = (num) => {
    if(num % 2 == 1){
        return 'Odd number';
    }
    else{
        return 'Even number';
    }
}

console.log(oddOreven(6));
console.log(oddOreven1(7));