const notificationBtn = document.getElementById("show-not");
const container = document.getElementById("container");

// Click event
notificationBtn.addEventListener("click", showToast);

function showToast() {
  const sentences = [
    "All human knowledge belongs to Earth!",
    "Loving someone means loving yourself!",
    "True love exist but we don't see it coz now days everything is iffy",
    "The only way to great the work is loving what you do.",
    "Truth and love always win, why can't we stay with'em?",
  ];

  const toast = document.createElement("div");
  toast.classList.add("toast__notification");
  // Randomly pick a sentence from array
  const randomWord = Math.floor(Math.random() * sentences.length);
  // Show text on screen
  toast.textContent = sentences[randomWord];
  container.appendChild(toast);

  // removing toast element from the dom after 3 seconds
  setTimeout(() => {
    toast.remove();
  }, 3000);
}
