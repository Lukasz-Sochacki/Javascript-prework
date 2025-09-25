let computerResult = 0;
let playerResult = 0;
function playGame(playerInput) {
  clearMessages();
  clearResult();
  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return "kamień";
    } else if (argMoveId == 2) {
      return "papier";
    } else if (argMoveId == 3) {
      return "nożyce";
    } else {
      printMessage("Nie znam ruchu o id " + argMoveId + ".");
      return "nieznany ruch";
    }
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log("Wylosowana liczba to: " + randomNumber);

  let computerMove = getMoveName(randomNumber);

  /*if (randomNumber == 1) {
    computerMove = "kamień";
  } else if (randomNumber == 2) {
    computerMove = "papier";
  } else if (randomNumber == 3) {
    computerMove = "nożyce";
  } */

  printMessage("Mój ruch to: " + computerMove);

  // let playerInput = prompt(
  //   "Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce."
  // );

  console.log("Gracz wpisał: " + playerInput);

  let playerMove = getMoveName(playerInput);

  /*if (playerInput == "1") {
    playerMove = "kamień";
  } else if (playerInput == "2") {
    playerMove = "papier";
  } else if (playerInput == "3") {
    playerMove = "nożyce";
  } */

  printMessage("Twój ruch to: " + playerMove);

  function displayResult(argComputerMove, argPlayerMove) {
    console.log("moves:", argComputerMove, argPlayerMove);

    if (argComputerMove == "kamień" && argPlayerMove == "papier") {
      printMessage("Ty wygrywasz!");
      ++playerResult;
    } else if (argComputerMove == "papier" && argPlayerMove == "nożyce") {
      printMessage("Ty wygrywasz!");
      ++playerResult;
    } else if (argComputerMove == "nożyce" && argPlayerMove == "kamień") {
      printMessage("Ty wygrywasz!");
      ++playerResult;
    } else if (argComputerMove == "kamień" && argPlayerMove == "kamień") {
      printMessage("Remis!");
    } else if (argComputerMove == "papier" && argPlayerMove == "papier") {
      printMessage("Remis!");
    } else if (argComputerMove == "nożyce" && argPlayerMove == "nożyce") {
      printMessage("Remis!");
    } else if (argPlayerMove == "nieznany ruch") {
      printMessage("Nieprawidłowy wybór gracza! Gra nierozstrzygnięta!");
    } else {
      printMessage("Wygrał komputer!");
      ++computerResult;
    }
  }
  console.log(playerResult, computerResult);

  displayResult(computerMove, playerMove);
  showResult(playerResult, computerResult);
}

// playGame(3);

document.getElementById("play-rock").addEventListener("click", function () {
  playGame(1);
});

document.getElementById("play-paper").addEventListener("click", function () {
  playGame(2);
});

document.getElementById("play-scissors").addEventListener("click", function () {
  playGame(3);
});
