// Get the button element
var backToTopBtn = document.getElementById("backToTopBtn");

// Add a click event listener to the button
backToTopBtn.addEventListener("click", function () {
  // Scroll to the top of the page
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Use smooth scrolling for a smooth transition
  });
});


