let square = (x) => {
    let result = x*x;
    return result;
}
console.log(square(9));

let squareEs6 = (x) => x*x;
console.log(squareEs6(9));

let squareEs6New = x => x*x;
console.log(squareEs6New(9));

let user ={
    name: "chanaka",
    sayHi: () => {
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
}

user.sayHi();
user.sayHiAlt(1,2,3,'Bhagya');