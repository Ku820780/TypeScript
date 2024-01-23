var num = 10;
var str = "shdgksaug";
var arr = [32, 234, 454];
//Tuples Array
var address;
address = [10, "dsadsa", 432];
//object 
var person;
person = { name: 'dshds', num: 32423 };
var anotherPerson;
anotherPerson = { name: "manish", age: 34 };
anotherPerson = { name: "rahul" };
//function
function add(num, num2) {
    return num + num2;
}
console.log(add(2, "2"));
function person1(name, address) {
    return name;
}
console.log(person1("manish"));
//find odd number
var numb = 50;
var count = 0;
for (var i = 1; i <= numb; i++) {
    if (i % 2 != 0) {
        count++;
    }
}
console.log(count);
//find even number
var numb1 = 50;
var count1 = 0;
for (var i = 1; i <= numb; i++) {
    if (i % 2 === 0) {
        count1++;
    }
}
console.log(count1);
// Find Odd Number;
var num3 = 50;
for (var i = 1; i <= num3; i++) {
    if (i % 2 != 0) {
        console.log("Odd Number", i);
    }
    else {
        console.log("Even Number:-", i);
    }
}
//find Even Number 
// const num4:number = 50;
// for (let i = 1; i <= num4; i++) {
//     if (i % 2 == 0) {
//         console.log("Even Number:-",i);
//     }
// }
// Prime Number
var number1 = 3;
var isPrime = true;
if (number1 === 1) {
    console.log("1 is neither prime nor composite number.");
}
else if (number1 > 1) {
    for (var i = 2; i < number1; i++) {
        if (number1 % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log("".concat(number1, " is a prime number"));
    }
    else {
        console.log("".concat(number1, " is a not prime number"));
    }
}
else {
    console.log("The number is not a prime number.");
}
