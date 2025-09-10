// Inside object ,keywords can be used as variable name

let color = "Black, Red ";

let car = {
    name : "Verna",
    brand : "Hyundai",
    colors : color + " White",
    price : 15,

    // inside object function keyword need not to be used 
    onroadPrice(price){
        return this.price+2;
    }

}

car['Model'] = 2024;
car.price = 18;
console.log(car.onroadPrice(22));



// Practice Qs

let Uname = {
    name : "Krish"
}

console.log(Uname.name);
Uname.name = "Krish B"
console.log(Uname.name);
delete Uname.name;
console.log(Uname.name);