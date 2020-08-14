
/*
// change everything below to the newer Javascript!

// let + const
let a = 'test';
const b = true;
const c = 789;
a = 'test2';


// Destructuring
const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

const {firstName, lastName, age, eyeColor} = person;


// Object properties
const a = 'test';
const b = true;
const c = 789;

const okObj = {a, b, c};


// Template strings
const message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;


// default arguments
// default age to 10;
const isValidAge = (age=10) => age;


// Symbol
// Create a symbol: "This is my first Symbol"

// Arrow functions
const whereAmI = (username, location) => {
  if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }  
}
*/

/*
//Solve these problems:

//#1 Create a one line function that adds adds two parameters

const add = (a, b) => a+b;

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)
13


//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)
31


//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)
17


//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)
16


//What are the two elements of a pure function?
no side effects
always return same value with same inputs

*/


/*


// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

let names = [];
array.forEach(user => {
  let {username} = user;
  username = username + '!';
  names.push(username);
})

console.log(names);


//Create an array using map that has all the usernames with a "? to each of the usernames

const myArray = array.map(user => {
  let {username} = user;
  return username  + '?';
  } );

console.log(myArray);

//Filter the array to only include users who are on team: red

const red = array.filter(user => {
  return user.team === "red";
})

console.log(red);

//Find out the total score of all users using reduce

// (1), what is the value of i?

const score = array.reduce((acc, user) => {
  return acc + user.score;
}, 0)

console.log(score);


// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	return num * 2;
})


//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

const newusers = array.map(user =>{
  user.items = user.items.map(item => {
    return item + '!';
  })
  return user;
})

console.log(newusers);

*/

/*
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce(){
    console.log(`hi i am ${this.name}, I'm a ${this.type}.`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type)
  }
  play() {
    console.log(`weeee I'm playing ${this.type}`);
  }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

wizard1.play();
*/


/*
//Evaluate these:
//#1
[2] === [2] //false
{} === {}  //false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; //4
const object2 = object1; //4
const object3 = object2; //4
const object4 = { a: 5}; //5
object1.a = 4;


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    
  }
}

class Mamal extends Animal {
  constructor(name, type, color) {
    super(name, type)
    this.color = color;
  }
  playSound() {
    console.log(`My name is ${this.name}, I'm a ${this.color} ${this.type}`);
  }
}

const cow = new Mamal('Elsie', 'Cow', 'Brown');
cow.playSound();

*/

// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.includes("John");
// false


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.filter(name => name.includes('John'))
// [ 'Johnathan' ]

// #3) Create a function that calulates the power of 100 of a number entered as a parameter

const power = (x) => x**100;
power(2);
power(10000);

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result

//Infinity




// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

console.log(startLine);
console.log(turtle.padStart(9));
console.log(rabbit.padStart(9));

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
let turtle = '🐢';
turtle = turtle.trim().padEnd(9, "=");
// fills the pad with whatever is in the ""


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

let myThing = "";
Object.keys(obj).forEach((key, index)=> {
  myThing = myThing + " " + key + " " + obj[key];
})
console.log(myThing);

// correct way
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
Object.entries(obj).map(value => value);
Object.entries(obj).map(value => value.join(" "));
Object.entries(obj).map(value => value.join(" ")).join(' ');