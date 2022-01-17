const search = document.querySelector(".search"),
  searchBtn = document.querySelector(".search__btn"),
  searchInput = document.querySelector(".search__input");
searchBtn.addEventListener("click", () => {
  search.classList.toggle("active");
  searchInput.focus();
});
