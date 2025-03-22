
// hamburger.js

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const hamburgerMenu = document.querySelector(".hamburger-menu");

  hamburger.addEventListener("click", function () {
    // Toggle the visibility of the hamburger menu
    if (hamburgerMenu.style.display === "block") {
      hamburgerMenu.style.display = "none";
    } else {
      hamburgerMenu.style.display = "block";
    }
  });

  // Close the hamburger menu when clicking outside of it
  document.addEventListener("click", function (event) {
    if (
      !hamburger.contains(event.target) &&
      !hamburgerMenu.contains(event.target)
    ) {
      hamburgerMenu.style.display = "none";
    }
  });
});
