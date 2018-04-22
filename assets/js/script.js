var button = document.getElementById("button");
var rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
howLong();

function howLong() {
  var timeStart = performance.now();
  btnCheck();
  var timeEnd = performance.now();
  console.info('%cReturned in ' + (timeEnd - timeStart) + ' ms.', "color:blue");
}

function change() {
  document.body.style.background = rainbow[Math.floor(7 * Math.random())];
  howLong();
}

function btnCheck() {
  button.addEventListener("click", change);
}
