var turn 

function startGame() {
  turn = "X";
  setMessage(turn + " gets to start.");
}

function setMessage(msg){
  document.getElementById("message").innerText = msg;
}

function nextMove(square) {
  if (square.innerText =="") {
    square.innerText = turn;    
    switchTurn();
  } else {
    setMessage("That square is already taken")
  }
}

function switchTurn(){
  if (turn == "X") {
    turn = "O"
  } else {
    turn = "X";
  }
  setMessage("It's " + turn + "'s turn")
}

function checkRow(a,b,c,move){
  var result = false;
  if (getBox(a) == move && getBox(b) == move && getBox(b) == move) {
    result = true;
  } 
  return result;
}

function getBox(number) {
  document.getElementById("s" + number).innerText;
}

$(function(){
  startGame();
})