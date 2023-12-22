// Define the initial theme state
let isLightTheme = true;

// Function to toggle the theme
function toggleTheme() {
  isLightTheme = !isLightTheme;
  document.body.setAttribute("data-theme", isLightTheme ? "light" : "dark");
}

// Get the sun checkbox element
const sun = document.getElementById("sun");

// Set its initial state based on the theme
sun.checked = isLightTheme;

// Add an event listener to toggle the theme when the checkbox changes
sun.addEventListener("change", toggleTheme);
