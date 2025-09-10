/* let x = 10;

// Common method
if(x>0){
    console.log('Positive');
}
else if (x<0){
    console.log('Negative');
}
else{
    console.log('Zero');
}

// without using else
if(x>0){
    console.log('Positive');
}
if (x<0){
    console.log('Negative');
}
if(x == 0){
    console.log('Zero');
} */


// Leap year

// divisible by 4
// divisible by 100 ? divisible by 400
let yr = 1900;

if(yr % 4 == 0)
{
    if(yr % 100 == 0)
    {
        if(yr % 400 == 0)
        {
            console.log("Leap Year");
        }
        else
        {
            console.log('Not a leap year');
        }
    }
    else
    {
        console.log('Leap year')
    }
}
else
{
    console.log('Not a leap year')
}