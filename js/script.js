"use strict";

{
  let computerResult = 0;
  let playerResult = 0;

  for (let i = 1; i < 1001; i++) {
    const playGame = function (playerInput) {
      clearMessages();
      clearResult();

      const getMoveName = function (argMoveId) {
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
      };
      const randomNumber = Math.floor(Math.random() * 3 + 1);
      const computerMove = getMoveName(randomNumber);
      console.log("Wylosowana liczba to: " + randomNumber);

      /*if (randomNumber == 1) {
    computerMove = "kamień";
  } else if (randomNumber == 2) {
    computerMove = "papier";
  } else if (randomNumber == 3) {
    computerMove = "nożyce";
  } */

      // let playerInput = prompt(
      //   "Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce."
      // );

      printMessage("Mój ruch to: " + computerMove);
      const playerMove = getMoveName(playerInput);
      console.log("Gracz wpisał: " + playerInput);

      /*if (playerInput == "1") {
    playerMove = "kamień";
  } else if (playerInput == "2") {
    playerMove = "papier";
  } else if (playerInput == "3") {
    playerMove = "nożyce";
  } */

      printMessage("Twój ruch to: " + playerMove);

      const displayResult = function (argComputerMove, argPlayerMove) {
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
      };
      console.log(playerResult, computerResult);

      displayResult(computerMove, playerMove);
      showResult(playerResult, computerResult);
      printMessage("Rozegrano " + i + " gier.");
      printMessage(
        "Gracz: " +
          Math.floor((playerResult / i) * 100) +
          "% " +
          " Komputer: " +
          Math.floor((computerResult / i) * 100) +
          "%"
      );
      i += 1000;
    };

    // playGame(3);

    document.getElementById("play-rock").addEventListener("click", function () {
      playGame(1);
    });

    document
      .getElementById("play-paper")
      .addEventListener("click", function () {
        playGame(2);
      });

    document
      .getElementById("play-scissors")
      .addEventListener("click", function () {
        playGame(3);
      });
  }
}
