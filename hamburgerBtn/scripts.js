const hamburgerBtn = document.querySelector("#hamburger");
const navMenu = document.querySelector("nav");

// show menu when button is clicked
hamburgerBtn.addEventListener("click", showMenu);

function showMenu() {
    navMenu.classList.toggle("active");
    hamburgerBtn.classList.toggle("active");
}
