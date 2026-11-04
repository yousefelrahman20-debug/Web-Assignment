const themeButton = document.getElementById("theme-toggle");
const nameInput = document.getElementById("name");
const visitorGreeting = document.getElementById("visitor-greeting");

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  const darkModeIsOn = document.body.classList.contains("dark");
  themeButton.setAttribute("aria-pressed", darkModeIsOn);
  themeButton.textContent = darkModeIsOn
    ? "Switch to light mode"
    : "Switch to dark mode";
});

nameInput.addEventListener("input", function () {
  const visitorName = nameInput.value.trim();
  visitorGreeting.textContent = visitorName
    ? `Hello, ${visitorName}!`
    : "Hello, classmate!";
});
