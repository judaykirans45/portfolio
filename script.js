// Toggle dark/light mode
const toggleButton = document.getElementById("theme-toggle");

function updateThemeIcon() {
  toggleButton.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
}

updateThemeIcon(); // Set initial icon

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  updateThemeIcon();
});

// AOS scroll animations
AOS.init();
