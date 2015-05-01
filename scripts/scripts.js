var turn 

function startGame() {
  turn = "X";
  setMessage(turn + " gets to start.");
}

function setMessage(msg){
  document.getElementById("message").innerText = msg;
}

function nextMove(square) {
  square.innerText = turn;
  switchTurn();
}

function switchTurn(){
  if (turn == "X") {
    turn = "O"
  } else {
    turn = "X";
  }
}


$(function(){
  startGame();
})