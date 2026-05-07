/*
  <div class="container">
    <h1>Dark Mode Project</h1>

    <button id="toggleBtn" class="toggle-btn">
      <span id="icon">🌙</span>
    </button>
  </div>
*/  

const button = document.getElementById("toggleBtn");
const icon = document.getElementById("icon");

// Load saved theme
let theme = localStorage.getItem("theme");

// Apply saved theme
if (theme === "dark") {
  document.body.classList.add("dark");
  icon.textContent = "☀️";
} else {
  icon.textContent = "🌙";
}

// Button
button.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    icon.textContent = "☀️"; // show sun
  } else {
    localStorage.setItem("theme", "light");
    icon.textContent = "🌙"; // show moon
  }
});