// recursive functions

//- base case
//- update statement
//- recursive call x done

// 5=> 0 + 1 + 2 + 3 + 4 + 5 = 15
function add(n){
    if(n == 0){
        return 0;
    }
    return n + add(n-1);
}

console.log(add(5));