var button = document.querySelector("#addItem");
var input = document.querySelector("#userInput");
var ul = document.querySelector("ul");

function inputLenght() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
   li.appendChild(document.createTextNode(input.value));
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


button.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", addListAfterKeyPress)


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

