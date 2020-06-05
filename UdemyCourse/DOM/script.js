var button = document.querySelector("#addItem");
var input = document.querySelector("#userInput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");
var delButtons = document.getElementsByClassName("fa-trash");

function inputLenght() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  
  
  var but = document.createElement("button");
  but.classList.add("fa", "fa-trash");
  but.addEventListener('click', removeLine)
  li.appendChild(but);

  ul.appendChild(li);

  input.value = "";
}

function addListAfterClick() {
  if (inputLenght() > 0) {
    createListElement();
  }   
}

function addListAfterKeyPress (event) {
  if (inputLenght() > 0 && event.keyCode === 13) {
    createListElement();
  }  
}

function toggleDone () {
  this.classList.toggle('done');
}

function addDoneListener() {
  for(i=0; i<li.length; i++) {
    li[i].addEventListener('click', toggleDone)
  }
}

function addButtonElements() {
  for(i=0; i<li.length; i++) {
    var but = document.createElement("button");
    but.classList.add("fa", "fa-trash");
    li[i].appendChild(but);
  }
}

function removeLine() {
  this.parentNode.remove();
}

function addDeleteListener() {
  for (i=0; i<delButtons.length; i++) {
    delButtons[i].addEventListener('click', removeLine)
  }
}



button.addEventListener("click", addListAfterClick)
input.addEventListener("keypress", addListAfterKeyPress)
addDoneListener();
addButtonElements();
addDeleteListener();

// button.addEventListener("click", function(){
//   if (inputLenght() > 0) {
//     createListElement();
//   }  
// })

// input.addEventListener("keypress", function(event){
//   if (inputLenght() > 0 && event.keyCode === 13) {
//     createListElement();
//   }  
// })


// button.addEventListener("click", function(){
//   if (input.value.length > 0) {
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = "";
//   }  
// })

// input.addEventListener("keypress", function(event){
//   if (input.value.length > 0 && event.keyCode === 13) {
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = "";
//   }  
// })

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");

function changeBackground() {
  body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
  css.textContent = body.style.background + ";";
}

function setRandomColors() {
  color1.value = "#" + Math.floor(Math.random()*16777215).toString(16);
  color2.value = "#" + Math.floor(Math.random()*16777215).toString(16);
}

color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground);
setRandomColors();
changeBackground();