const buttons = document.querySelectorAll(".ripple"); // This can be used to all buttons having ripple class
buttons.forEach((button) => {
  button.addEventListener("click", function (e){
    const xAxis = e.clientX;
    const yAxis = e.clientY;

    const buttonTop = e.target.offsetTop;
      const buttonLeft = e.target.offsetLeft;
      
    // Calculating where we click in button
    const xInside = xAxis - buttonLeft;
    const yInside = yAxis - buttonTop;

    // creating the circle element whenever user clicks a button
    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

      this.appendChild(circle);
      
    //   removing element from dom
    setTimeout(() => circle.remove(), 500);
  });
});
