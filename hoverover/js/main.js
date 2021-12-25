const container = document.getElementById("container"),
  colors = [
    "#ee82ee",
    "#8e44ad",
    "#3498db",
    "#ff0000",
    "#e74c3c",
    "#ffff00",
    "#2ecc71",
    "#ffa500",
    "#008000",
    "#0000ff",
    "#e67e22",
    "#4b0082",
  ],
  numberOfshapes = 500;

// Body elements that will change color also when mouse over
const shape1 = document.getElementById("shape1"),
  shape2 = document.getElementById("shape2");
shape1.addEventListener("mouseover", () => setColor(shape1));
shape2.addEventListener("mouseover", () => setColor(shape2));

//Creating element and events
for (let i = 0; i < numberOfshapes; i++) {
  const shape = document.createElement("div");
  shape.classList.add("shape");
  shape.addEventListener("mouseover", () => setColor(shape));
  shape.addEventListener("mouseout", () => removeColor(shape));
  container.appendChild(shape); //adding element to a container
}
function setColor(e) {
  //function that will set color with element as parameter
  const color = getRandomColor(); //function that will randomize colors and return value
  e.style.background = color;
  e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(e) { //function to remove color
  e.style.background = "transparent";
  e.style.boxShadow = "0 0 2px rgba(22, 8, 43, 0)";
}
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
