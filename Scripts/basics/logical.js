// logical ops
// - AND , - OR, - NOT , - NULL Coalescing

// AND, OR are previously studied and worked on -- 

console.log(121 && 11 && 1233 || 0 && 142 && 122);


console.log(!0);

// NULL Coalescing 
// ??
let age = 11;
let curr_age = age ?? 19;

console.log(curr_age);

console.log(null || 0 && undefined);