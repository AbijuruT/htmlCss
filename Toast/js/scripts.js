const notificationBtn = document.getElementById("show-not");
const container = document.getElementById("container");

notificationBtn.addEventListener("click", () => {
  showToast();
});

function showToast() {
  const words = [
    "All human knowledge belongs to Earth!",
    "Loving someone means loving yourself!",
    "True love exist but we don't see it coz now days everything is iffy",
  ]; 
    
  const toast = document.createElement("div");
  toast.classList.add("toast__notification");
  const randomWord = Math.floor(Math.random() * words.length);
  toast.textContent = words[randomWord];
  container.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3000);
}
