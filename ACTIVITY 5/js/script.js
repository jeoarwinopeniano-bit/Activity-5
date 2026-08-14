// Get the menu button and navigation
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

// Open and close the mobile menu
menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});

// Change the hero text
const changeTextButton = document.getElementById("change-text-button");
const heroText = document.getElementById("hero-text");

changeTextButton.addEventListener("click", function () {
    heroText.textContent =
        "Thank you for visiting our gallery. Enjoy exploring beautiful art!";
});

// Show a message when card buttons are clicked
const learnMoreButtons =
    document.querySelectorAll(".learn-more-button");

learnMoreButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        alert("Thank you for your interest in our Art Gallery!");
    });
});

// Display the current year
document.getElementById("year").textContent =
    new Date().getFullYear();