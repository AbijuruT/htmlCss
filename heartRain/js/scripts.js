const rainingHearts = () => {
  const heart = document.createElement("i");

  // adding this class from icons library boxicons https://boxicons.com/

  heart.classList.add("bx", "bxs-heart", "heart");
  heart.style.left = Math.random() * 250 + "vh";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";

  document.body.appendChild(heart);

  // Remove elements after 5mils
  setTimeout(() => {
    heart.remove();
  }, 5000);
};

// creating element in 100 mils
setInterval(rainingHearts, 100);
