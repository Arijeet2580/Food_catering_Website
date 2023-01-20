// Select HTML elements
const navMenu = document.getElementsByClassName("container__menu")[0];
const navLinks = document.querySelectorAll("#navbar ul li a");
const scrollback = document.getElementById("scrollback");

// Implement callback function to toggle class
const toggler = () => {
  navMenu.classList.toggle("change");
  if (navMenu.classList.contains("change")) {
    navLinks.forEach((link) => {
      link.classList.add("show");
    });
  } else {
    navLinks.forEach((link) => {
      link.classList.remove("show");
    });
  }
};

// Event Listener calling the toggler function
const navMenuToggle = navMenu.addEventListener("click", toggler);
// Event Listener for the scrollback button
scrollback.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
