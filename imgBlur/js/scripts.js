const loadText = document.querySelector(".loading__text"),
  bg = document.querySelector(".bg");
let load = 0;
let interval = setInterval(unBlurring, 50);
function unBlurring() {
  load++;
  if (load > 99) {
    clearInterval(interval);
  }
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, inMin, inMax, outMin, outMax) => {
  /**
   * This function is responsible for mapping a range of number to other number.
   */
  return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};
