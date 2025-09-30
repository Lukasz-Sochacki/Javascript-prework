const printMessage = function (msg) {
  let div = document.createElement("div");
  div.innerHTML = msg;
  document.getElementById("messages").appendChild(div);
};

const clearMessages = function () {
  document.getElementById("messages").innerHTML = "";
};

const showResult = function (player, computer) {
  let div = document.createElement("div");
  div.innerHTML =
    "Aktualny wynik (Gracz - Komputer): " + player + " - " + computer;
  document.getElementById("result").appendChild(div);
};

const clearResult = function () {
  document.getElementById("result").innerHTML = "";
};
