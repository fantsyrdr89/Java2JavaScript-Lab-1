" use strict ";

var display = document.getElementById("display");
var oneToTenString = "";
function oneToTen () {
  for (var i = 1; i <= 10; i++){
    oneToTenString += i + "<br>";
  }
  display.innerHTML = oneToTenString;
}

var oddNumbersString = "";
function oddNumbers () {
  for (var i = 1; i < 20; i++){
    if (i % 2 === 1){
      oddNumbersString += i + "<br>";
    }
  }
  display.innerHTML = oddNumbersString;
}

var squareNumbersString = "";
function squareNumbers () {
  for(var i = 1; i <= 10; i++){
    squareNumbersString += (i * i) + "<br>";
  }
  display.innerHTML = squareNumbersString;
}

var randomNumbersString = "";
function randomNumbers () {
  for(var i = 1; i <= 4; i++){
    randomNumbersString += (Math.round(Math.random() * 100)) + "<br>";
  }
  display.innerHTML = randomNumbersString;
}

var evenNumbersString = "";
function evenNumbers () {
  for(var i = 1; i <= 20; i++){
    if (i % 2 === 0){
      evenNumbersString += i + "<br>";
    }
  }
  display.innerHTML = evenNumbersString;
}

var powersOf2String = "";
function powersOf2 () {
  var n = document.getElementById('value').value;
  for(var i = 1; i <= n; i++){
    powersOf2String += (Math.pow(2, i)) + "<br>";
  }
  display.innerHTML = powersOf2String;
}

var areWeThereYetString = "Are we there yet? <br>";
function areWeThereYet () {
  var answer = document.getElementById('value').value;
  if(answer != yes){
    display.innerHTML = areWeThereYetString;
    areWeThereYet();
  }else{
    areWeThereYetString = "Good!";
    display.innerHTML = areWeThereYetString;
  }
}

var triangleString = "";
function triangle () {
  for(var i = 1; i <= 5; i++){
    for(var j = 1; j<= i; j++){
      triangleString += "*" ;
    }
      triangleString += "<br>";
  }
  display.innerHTML = triangleString;
}

var tableSquare4String = "";
function tableSquare4() {
  for(var i = 1; i <= 4; i++){
    tableSquare4String += ("|");
    for(var j = 1; j <= 4; j++){
      tableSquare4String += ((j * i) + " | ");
    }
    tableSquare4String += "<br>";
  }
  display.innerHTML = tableSquare4String;
}

var tableSquare6String = "";
function tableSquare6() {
  for(var i = 1; i <= 6; i++){
    tableSquare6String += ("|");
    for(var j = 1; j <= 6; j++){
      tableSquare6String += ((j * i) + " | ");
    }
    tableSquare6String += "<br>";
  }
  display.innerHTML = tableSquare6String;
}
