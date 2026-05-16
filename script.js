const root = document.documentElement;
const themeButton = document.querySelector(".theme-toggle");
const year = document.querySelector("#year");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  root.classList.add("dark");
}

themeButton.addEventListener("click", () => {
  root.classList.toggle("dark");
  localStorage.setItem("theme", root.classList.contains("dark") ? "dark" : "light");
});

year.textContent = new Date().getFullYear();
