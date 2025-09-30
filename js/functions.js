function printMessage(msg) {
  let div = document.createElement("div");
  div.innerHTML = msg;
  document.getElementById("messages").appendChild(div);
}

function clearMessages() {
  document.getElementById("messages").innerHTML = "";
}

function showResult(player, computer) {
  let div = document.createElement("div");
  div.innerHTML =
    "Aktualny wynik (Gracz - Komputer): " + player + " - " + computer;
  document.getElementById("result").appendChild(div);
}

function clearResult() {
  document.getElementById("result").innerHTML = "";
}
