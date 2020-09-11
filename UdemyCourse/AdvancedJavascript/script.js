
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

// // Solve the below problems:


// // #1) Check if this array includes the name "John".
// const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
// dragons.includes("John");
// // false


// // #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// // name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.filter(name => name.includes('John'))
// [ 'Johnathan' ]

// // #3) Create a function that calulates the power of 100 of a number entered as a parameter

// const power = (x) => x**100;
// power(2);
// power(10000);

// // #4) Useing your function from #3, put in the paramter 10000. What is the result?
// // Research for yourself why you get this result

// //Infinity




// // Solve the below problems:

// // #1) Line up the Turtle and the Rabbit at the start line:
// const startLine = '     ||<- Start line';
// let turtle = '🐢';
// let rabbit = '🐇';

// console.log(startLine);
// console.log(turtle.padStart(9));
// console.log(rabbit.padStart(9));

// // it should look like this:
// '     ||<- Start line'
// '       🐢'
// '       🐇'

// // when you do:
// console.log(startLine);
// console.log(turtle);
// console.log(rabbit);


// // #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// // Read about what the second parameter does in padEnd and padStart
// let turtle = '🐢';
// turtle = turtle.trim().padEnd(9, "=");
// // fills the pad with whatever is in the ""


// // #3) Get the below object to go from:
// let obj = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// }
// // to this:
// 'my name is Rudolf the raindeer'

// let myThing = "";
// Object.keys(obj).forEach((key, index)=> {
//   myThing = myThing + " " + key + " " + obj[key];
// })
// console.log(myThing);

// // correct way
// let obj = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// }
// Object.entries(obj).map(value => value);
// Object.entries(obj).map(value => value.join(" "));
// Object.entries(obj).map(value => value.join(" ")).join(' ');





Solve the below questions:

//#1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1],[2],[3],[[[4]]],[[[5]]]];
array.flat(2);


// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];

const greeting2 = greeting.flatMap(item => item.join(' '));
console.log(greeting2);

// solution
greeting.flatMap(x => x.join(' '));

//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'

const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
console.log(greeting.flatMap(x => x.join(' ')).join(' '))

//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];

//Solution
console.log(trapped.flat(Infinity))
// Infintiy is actually a LARGE number in JavaScipt. It represents the maximum amount of memory that we can hold for a number! Learn more here: https://riptutorial.com/javascript/example/2337/infinity-and--infinity

//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
const userEmail4 = userEmail3.trimStart().trimEnd();
console.log(userEmail4);

//Solution:
console.log(userEmail3.trimEnd().trimStart())

//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }

//Solution
const usersArray = Object.entries(users)

console.log(usersArray);


//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

const other = usersArray.map(item => [item[0], item[1] * 2]);
console.log(other);

//Solution
updatedUsersArray = usersArray.map((user) => [user[0], user[1] * 2]);


// //#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }


// const newUpdatedUsers = Object.fromEntries(updatedUsersArray);
// console.log(newUpdatedUsers);

// // advance loops

// const basket = ['Apples', 'Oranges','Grapes']
// //1
for (let i = 0; i< basket.length; i++) {
  console.log(basket[i]);
}

// //2
// basket.forEach(item =>{
//   console.log(item);
// })

// // For of - arrays and strings
// // iterating
// for (item of basket) {
//   console.log(item);
// }


// // For In - Works with objects - see object properties
// // enumerating
// const detailedBasket = {
//   apples: 5,
//   oranges: 10,
//   grapes: 15
// }

// for (item in detailedBasket) {
//   console.log(item);
// }
// HOmework


// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
  let mybig = 0;
  arr.forEach(item =>{
    if(item>mybig) {
      mybig = item;
    }
  })
  console.log(mybig);
}

function biggestNumberInArray2(arr) {
  let mybig = 0;
  for (item of arr) {
    if(item>mybig) {
      mybig = item;
    }
  }
  console.log(mybig);
}

function biggestNumberInArray3(arr) {

}

biggestNumberInArray(array);
biggestNumberInArray2(array);


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {
  for (item in basket) {
    if (item === lookingFor) {
      return `${lookingFor} is in your basket`
    }
  }
  return 'that does not exist in your basket'
}

checkBasket(amazonBasket, "booddks");


// make list of items, pop off random

let arrEquip = ["Sword", "Hammer", "Bow", "Dagger", "Sheild", "Apples"];

function drawEquip(deck) {
  let eindex = Math.floor( Math.random()*deck.length );
  console.log( deck[eindex] ); // Log the item
  deck.splice( eindex, 1 ); // Remove the item from the array
  console.log(deck);
}

drawEquip(arrEquip);
drawEquip(arrEquip);
drawEquip(arrEquip);
drawEquip(arrEquip);

// let eindex = Math.floor( Math.random()*arrEquip.length );
// console.log( arrEquip[eindex] ); // Log the item
// arrEquip.splice( eindex, 1 ); // Remove the item from the array
// console.log(arrEquip);


// Practice

// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]


//goal return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]
let myRoom = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
sortArray(myRoom);

function compareNumbers(a, b) {
  return a - b;
}

function sortArray(arr) {
  arr.sort(compareNumbers); 
  let i = 1;
  let oldArray = [...arr];
  let newArray = [];
  let dnew = [];

  for (item of arr) {
    if (item < arr[i]) {
      for (let c = 0; c < arr.filter(x => x === item).length; c++ ) {
        newArray.push(item);
        oldArray.splice(1,1);
        }
      dnew.push(newArray);
    }
    if (i >= arr.length) {
          newArray.push(item);
          oldArray.splice(1,1);
          dnew.push(newArray);
        }
    i++;
    newArray = [];
  }
  
  console.log(dnew);
  return arr;
}







console.log(myRoom);


// Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.