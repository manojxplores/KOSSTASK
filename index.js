 //logging something on the console
 console.log("hello world!!");


/*cannot be a reserved keyword
they should be meaningful
cannot start with number(3name)
cannot contain space or hyphen(-)
are case-sensitive
*/

let firstName = 'manoj', lastName = 'sai';

const interestRate = 0.3;
//cannot be reassigned
console.log(interestRate)

let Name = 'manoj'; //string literal 
let age = 30; //Number literal
let isApprovede = true; //Boolean literal
let n = null; //used to clear the value of a variable
let u = undefined;


let person = {
    name:'Mosh',
    age: 30   
};

console.log(person);

person.name = 'John';
console.log(person);

person['name'] = 'Mary';
console.log(person)

let selectedColors = ['red', 'blue'];
selectedColors.unshift('green')
console.log(selectedColors);
console.log(selectedColors.length)

function greet(n){//n is known as a parameter
    console.log('hello world ' + n);
}

greet('mosh');
//'mosh' is the argument overhere

function square(num1){
    return num1*num1;
}

let square1 = square(4);
console.log(square1);





 
 //string--->sequence of characters
