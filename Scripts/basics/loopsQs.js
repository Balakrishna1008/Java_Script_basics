// Factorial sum 

// using for loop
let n = 4;
let ans = 1;
for(let i = 1; i <= n; i++){
    ans *= i;
}
console.log(ans);

// using while loop
let i = 1;
let ans2 = 1;
while(i<=n){
    ans2 *=i;
    i++;
}
console.log(ans2);


// Sum of N numbers

let N = 5;
let a = 1;
let ans3 = 0;
while(a<=N){
    ans3 += a;
    a++;
}
console.log(ans3);


// break, continue
let n1 = 10;

let ans4 = 1;

for(let i = 1; i<=n1; i++){
    if(i % 2 == 1){
        continue;
    }
    ans4 *= i;
}
console.log(ans4);

