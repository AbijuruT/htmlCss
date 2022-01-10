// Functionality of showing or hide inputs
const showHiddenInputs = (inputOverlay, inputPwd, inputIcon) => {
  const overlay = document.getElementById(inputOverlay);
  const input = document.getElementById(inputPwd);
  const icon = document.getElementById(inputIcon);
  icon.addEventListener("click", () => {
    if (input.type === "password") {
      input.type = "text";
      //change the hide icon to show icon
      icon.classList.add("bx-show");
    } else {
      //Reverse the first operation
      input.type = "password";
      icon.classList.remove("bx-show");
    }
    //  now add overlay to the content by toggling it
    overlay.classList.toggle("overlay-content");
  });
};
// invoke the function and pass the params
showHiddenInputs("input-overlay", "input-pwd", "input-icon");
