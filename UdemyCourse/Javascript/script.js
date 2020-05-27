// function sayHello () {
//   console.log("Hello");
// }

// sayHello();

// var sayBye = function() {
//   console.log("Bye");
// }

// sayBye();

// function sing() {
//   console.log("Ahh");
//   console.log("Tee");
// }

// // build a function instead, DRY - Do Not Repeat yourself

// sing();

// function singa(song) {
//   console.log(song);
// }

// singa("la de da");
// singa("hello");
// singa("other");

// function multiply (a, b) {
//   return a * b;
// }

// multiply(5,10);

// // This is the same thing
// var a = function(a,b) {
//   return a * b;
// }

// alert(a(5,6));

// var b = multiply(5,10);

// console.log(b)




// if (Number(age) < 18) {
// 	alert("Sorry, you are too yound to drive this car. Powering off");
// } else if (Number(age) > 18) {
// 	alert("Powering On. Enjoy the ride!");
// } else if (Number(age) === 18) {
// 	alert("Congratulations on your first year of driving. Enjoy the ride!");
// }

// function checkDriverAge() {
//   var age = prompt("What is your age?");
//     if (Number(age) < 18) {
//     alert("Sorry, you are too yound to drive this car. Powering off");
//   } else if (Number(age) > 18) {
//     alert("Powering On. Enjoy the ride!");
//   } else if (Number(age) === 18) {
//     alert("Congratulations on your first year of driving. Enjoy the ride!");
//   }
// }



// var list = ["tiger", "cat", "Bear", "Bird"];

// console.log(list[0]);

// var numbers = [1, 2, 3, 4];

// var bools = [true, false, true, true];

// var functions = [function apple(){console.log("Apple");}
//                 , function bannana() {console.log("bannana");}
//                 ];

// //Not advised - having mixed lists
// var mixedlist = ["apples", 3, undefined, true, function peas(){console.log("Peas");}];

// var listlist = [
//   ["blue", "black", "pink"],
//   ["tall", "short", "flat"]
// ];

// console.log(listlist);
// console.log(listlist[0][0]);
// console.log(listlist[1][2]);

// list.shift(); Take off the first one
// list.pop(); take off the last one
// list.push("Other"); put on the end

// list.concat(["bee", "deer"]); add array of items to array at end
// - this is a new array, need to store in new variable
// var mynewlist = list.concat(["bee", "deer"]);

// mynewlist.sort();


// var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// array.shift();

// array.sort();

// array.push("Kiwi");

// array.shift();

// array.reverse();

// console.log(array);

// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

// console.log(array2[1][1][0]);


// var user = {
//   name: "John",
//   age: 34, 
//   hobby: "Soccer", 
//   isMarried: false,
//   spellbook: ["invisible", "fire", "light"],
//   shout: function() {
//     console.log("AHH");
//   }
// };

// console.log(user.name);

// user.favfood = "pizza";

// console.log(user);

// var userList = [
//   {
//     username: "andy",
//     password: "secret",
//   },
//   {
//     username: "jess",
//     password: "123",
//   }
// ];


// console.log(user.spellbook[1]);

// console.log(userList[1].password);

// user.shout();


var todos = [
  "Clean",
  "Brush",
  "exercise",
  "study",
  "eat",
  "sleep",
]

// for (var i=0; i < todos.length; i++) {
//   todos[i] = todos[i] + "!";
//   console.log(todos[i]);
// }

// var myLenght = todos.length;

// for (var i=0; i < myLenght; i++) {
//   todos.pop();
// }

// var counterOne = 0;
// while (counterOne < 10) {
//   console.log(counterOne);
//   counterOne++;
// }

// var counterOne = 10;
// while (counterOne > 0) {
//   console.log(counterOne);
//   counterOne--;
// }


// var counterTwo = 10;
// do {
//   console.log(counterTwo);
//   counterTwo--;
// } while (counterTwo > 0);


todos.forEach(function(todo, i){
  console.log(todo, i);
})

