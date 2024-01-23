let num:number = 10
const str:string ="shdgksaug"

const arr:number[]=[32,234,454]


//Tuples Array
let address:[number, string, number]
address=[10,"dsadsa", 432]

//object 

let person: {name:string, num:number}

person = {name:'dshds', num:32423}

let anotherPerson: {name:string, age?:number}
anotherPerson = {name:"manish", age:34}
anotherPerson = {name:"rahul"}


//function

function add(num:number, num2:string){
    return num + num2;
}
console.log(add(2,"2"))

function person1(name:string, address?:string){
    return name
}
console.log(person1("manish"))


//find odd number

const numb:number = 50
let count=0;

for(let i=1; i<=numb; i++){
    if(i%2!=0){
        count++;
    }
}
console.log(count)

//find even number

const numb1:number = 50
let count1=0;

for(let i=1; i<=numb; i++){
    if(i%2===0){
        count1++;
    }
}
console.log(count1)

// Find Odd Number;
const num3:number = 50;
for (let i = 1; i <= num3; i++) {
        if (i % 2 != 0) {
            console.log("Odd Number", i);
        }else{
            console.log("Even Number:-",i);
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
const number1:number = 3
let isPrime:boolean = true;


if (number1 === 1) {
    console.log("1 is neither prime nor composite number.");
}


else if (number1 > 1) {

   
    for (let i = 2; i < number1; i++) {
        if (number1 % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number1} is a prime number`);
    } else {
        console.log(`${number1} is a not prime number`);
    }
}


else {
    console.log("The number is not a prime number.");
}



