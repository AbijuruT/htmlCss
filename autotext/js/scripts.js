const textEl = document.getElementById("cmd");
const speedEl = 2;
const msg =
  " We are anonymous, we are region, we do not forget, we do not forgive.Expect us.";
let x = 1;
let speed = 300 / speedEl;

writeText();

function writeText() {
  textEl.innerText = msg.slice(0, x);
  x++;
  if (x > msg.length) {
    x = 1;
  }
  setTimeout(writeText, speed);
}
