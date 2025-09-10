let a={
    name : "Krish"
}

function User(a){

    //this = { };
    this.name = a
    //return this;

    this.age = function(){
        return 23;
    }
};


let krish = new User('krish');
let bala = new User('bala');


console.log(krish.age());



function Sum(){
    this.num1 = 10;
    this.num2 = 11;
    this.add = function(num3){
        return this.num1+this.num2+num3;
    }
}

let res = new Sum();

console.log(res.add(12));