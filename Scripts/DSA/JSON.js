// JavaScript Object Notation

// Representing of data in what format it has been stored is called JSON

let user = {
    name : 'Krish',
    age : 23,
    salary : 10000
}

console.log(JSON.stringify(user)); // stringify function is used to convert JSON into string

let user1 = '{"name" : "krish", "age" : 23, "salary" : 10000}';
console.log(JSON.parse(user1));// parse function is used to JSON formatted string into object

