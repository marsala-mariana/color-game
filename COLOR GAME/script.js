var numSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var mensaje = document.querySelector("#message");
var h1 = document.querySelector("h1");
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var modeBtn = document.querySelectorAll(".mode");
var resetBtn = document.querySelector("#reset");

init();
function init() {
  setUpModeBtns();
  setUpSquares();
  reset();
}

function setUpModeBtns() {
  for (var i = 0; i < modeBtn.length; i++) {
    modeBtn[i].addEventListener("click", function () {
      modeBtn[0].classList.remove("selected");
      modeBtn[1].classList.remove("selected");
      this.classList.add("selected");
      numSquares = this.textContent === "Easy" ? 3 : 6;
      reset();
    });
  }
}
function setUpSquares() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        mensaje.textContent = "Correcto!";
        resetBtn.textContent = "Juega de nuevo!";
        changeColors(clickedColor);
        h1.style.background = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        mensaje.textContent = "Intentelo nuevamente!";
      }
    });
  }
}

function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
      squares[i].style.display = "block";
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
  mensaje.textContent = "";
  resetBtn.textContent = "Nuevos Colores";
}
resetBtn.addEventListener("click", function () {
  reset();
}); //

function changeColors(colors) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors;
  }
}
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr[i] = randomColor();
  }
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
