var fbuser = {
  username: "Heather",
  password: "test"
}

var database = [
  {
  username: "Heather",
  password: "test"
  },
  {
  username: "Sally",
  password: "test"
  },
  {
  username: "Ingrid",
  password: "test"
  }

];

var newsfeed = [
  {username: "Fred", timeline: "good"},
  {username: "Sam", timeline: "great"},
  {username: "Jo", timeline: "Ok"}
];

var userNamePrompt = prompt("What is your name?");
var passwordPrompt = prompt("password?");

// function signIn(user, pass) {
// if (user === database[0].username && pass === database[0].password) 
//   { console.log(newsfeed); }
// else
//   { alert("nope"); }
// }

function isUserValid(username, password) {
    for(var i=0; i<database.length; i++) {
      if(database[i].username === username &&
        database[i].password === password)
        {return true;}
  } return false;
}

function signIn(username, password) {
  if(isUserValid(username, password))
    {console.log(newsfeed);} 
  else 
    {console.log("no");}
}

signIn(userNamePrompt,passwordPrompt );

