let lpPlayer1 = document.getElementById("lp1");
let lpPlayer2 = document.getElementById("lp2");
let lpPlayer3 = document.getElementById("lp3");
let lpPlayer4 = document.getElementById("lp4");
let player3 = document.getElementById("p3");
let player4 = document.getElementById("p4");
let sub1 = document.querySelector(".sub1");
let add1 = document.querySelector(".add1");
let sub2 = document.querySelector(".sub2");
let add2 = document.querySelector(".add2");
let sub3 = document.querySelector(".sub3");
let add3 = document.querySelector(".add3");
let sub4 = document.querySelector(".sub4");
let add4 = document.querySelector(".add4");
let lifePoint = document.getElementById("lifePoint");

let NbLpPlayer1 = parseInt(lpPlayer1.innerText);
let NbLpPlayer2 = parseInt(lpPlayer2.innerText);
let NbLpPlayer3 = parseInt(lpPlayer3.innerText);
let NbLpPlayer4 = parseInt(lpPlayer4.innerText);

var players = 2;

function updateDisplay() {
  lpPlayer1.innerText = NbLpPlayer1;
  lpPlayer2.innerText = NbLpPlayer2;
  lpPlayer3.innerText = NbLpPlayer3;
  lpPlayer4.innerText = NbLpPlayer4;
}

function updatePlayers(nbOfPlayers) {
  console.log(`Nombre de joueur : ${nbOfPlayers}`);
  if (nbOfPlayers === 2) {
    player3.style.display = "none";
    player4.style.display = "none";
  } else if (nbOfPlayers === 3) {
    player3.style.display = "flex";
    player4.style.display = "none";
  } else if (nbOfPlayers === 4) {
    player3.style.display = "flex";
    player4.style.display = "flex";
  }
  updateDisplay();
}

function updateLP() {
  let gameLP = 0;
  lifePoint.addEventListener("change", function () {
    gameLP = lifePoint.value;
    if (lifePoint.value == "") {
      gameLP = 20;
    }
    lpPlayer1.innerText = gameLP;
    lpPlayer2.innerText = gameLP;
    lpPlayer3.innerText = gameLP;
    lpPlayer4.innerText = gameLP;
  });
}

function addPlayer() {
  if (players < 4) {
    players++;
    updatePlayers(players);
  } else {
    alert("Vous êtes au nombre maximum de joueurs");
  }
}

function subPlayer() {
  if (players > 2) {
    players--;
    updatePlayers(players);
  } else {
    alert("Vous êtes au nombre minimal de joueurs");
  }
}

sub1.addEventListener("click", function () {
  NbLpPlayer1--;
  updateDisplay();
});

add1.addEventListener("click", function () {
  NbLpPlayer1++;
  updateDisplay();
});

sub2.addEventListener("click", function () {
  NbLpPlayer2--;
  updateDisplay();
});

add2.addEventListener("click", function () {
  NbLpPlayer2++;
  updateDisplay();
});

sub3.addEventListener("click", function () {
  NbLpPlayer3--;
  updateDisplay();
});

add3.addEventListener("click", function () {
  NbLpPlayer3++;
  updateDisplay();
});

sub4.addEventListener("click", function () {
  NbLpPlayer4--;
  updateDisplay();
});

add4.addEventListener("click", function () {
  NbLpPlayer4++;
  updateDisplay();
});

function reset() {
  NbLpPlayer1 = 20;
  NbLpPlayer2 = 20;
  NbLpPlayer3 = 20;
  NbLpPlayer4 = 20;
  players = 2;
  lifePoint.value = "";
  updatePlayers(players);
}

updatePlayers(players);
updateLP();
