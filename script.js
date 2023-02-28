const hamburgerIcon = document.getElementById("hamburger-icon");

const responsiveNavbar = document.getElementById("responsive-navbar");

hamburgerIcon.addEventListener("click", () => {
    responsiveNavbar.classList.toggle("invisible"); 
});