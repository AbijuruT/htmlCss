/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  toggle.addEventListener("click", () => {
    //  add show-menu class to nav menu
    nav.classList.toggle("show-menu");

    toggle.classList.toggle("show-icon");
  });
};

showMenu("nav-toggle", "nav-menu");

/*=============== SHOW DROPDOWN MENU ===============*/
const dropdownItems = document.querySelectorAll(".dropdown__item");
// Select each dropdown
dropdownItems.forEach((item) => {
  const dropdownButton = item.querySelector(".dropdown__button");

  // Select each button on click
  dropdownButton.addEventListener("click", () => {
    // current show dropdown
    const showDropdown = document.querySelector(".show-dropdown");
    // call  the toggleItem function
    toggleItem(item);
    // Remove show-dropdown class to other items unless the current one
    if (showDropdown && showDropdown != item) {
      toggleItem(showDropdown);
    }
  });
});

// Function to show dropdown

const toggleItem = (item) => {
  // Dropdown content
  const dropdownContainer = item.querySelector(".dropdown__container");
  // Check if any of the dropdown item has show-dropdown class and remove it
  if (item.classList.contains("show-dropdown")) {
    dropdownContainer.removeAttribute("style");
    item.classList.remove("show-dropdown");
  } else {
    // Add max height and show-dropdown class
    dropdownContainer.style.height = dropdownContainer.scrollHeight + "px";
    item.classList.add("show-dropdown");
  }

  //
};
/*=============== DELETE DROPDOWN STYLES ===============*/
const mediaQuery = matchMedia("(min-width: 1118px)");
const dropdownContainer = document.querySelectorAll(".dropdown__container");

// This function removes mobile styles for dropdown on large screen

const removeStyles = () => {
  // Check if screen reaches 1118px
  if (mediaQuery.matches) {
    // Get lid the dropdown container's height
      dropdownContainer.forEach(e => {
          e.removeAttribute('styles')
      })
    //   also remove show-dropdown class from dropdown item
      dropdownItems.forEach(e => {
          e.classList.remove('show-dropdown')
      })
  }
};
addEventListener("resize", removeStyles);
