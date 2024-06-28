let lpPlayer1 = document.getElementById("lp1");
let lpPlayer2 = document.getElementById("lp2");
let sub1 = document.querySelector(".sub1");
let add1 = document.querySelector(".add1");
let sub2 = document.querySelector(".sub2");
let add2 = document.querySelector(".add2");
let NbLpPlayer1 = parseInt(lpPlayer1.innerText);
let NbLpPlayer2 = parseInt(lpPlayer2.innerText);

function updateDisplay() {
  lpPlayer1.innerText = NbLpPlayer1;
  lpPlayer2.innerText = NbLpPlayer2;
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

function reset() {
  NbLpPlayer1 = 20;
  NbLpPlayer2 = 20;
  updateDisplay();
}
