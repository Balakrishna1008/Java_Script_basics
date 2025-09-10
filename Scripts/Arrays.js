/* //Array
let veggies = ['carrot', 'onion', 'beetroot'];
console.log(veggies);


// object and function inside an array
let veggies1 = ['carrot', {name : 'krish', age : 23}, function add(a,b){return a+b}, 'onion', 'beetroot'];

console.log(veggies1[1]);
console.log(veggies1[2](1,2)); */


// Adding elements
let veggies = ['carrot', 'onion', 'beetroot'];

veggies.push('beans'); // to insert at end
veggies.unshift('beans'); // to insert at begininning

console.log(veggies.shift());// to remove the first
console.log(veggies.pop()); // to remove the last element

console.log(veggies);


for(veggie of veggies){
    console.log(veggie);
}

// While using "in" operator
for(veggie in veggies){
    console.log(veggies[veggie]);
}

// length
console.log(veggies.length);


// 2D Arrays
let mat = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(mat);
console.log(mat[0][2]);