const root = document.documentElement;
const themeButton = document.querySelector(".theme-toggle");
const year = document.querySelector("#year");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  root.classList.add("dark");
}

if (themeButton) {
  themeButton.addEventListener("click", () => {
    root.classList.toggle("dark");
    localStorage.setItem("theme", root.classList.contains("dark") ? "dark" : "light");
  });
}

if (year) {
  year.textContent = new Date().getFullYear();
}

document.querySelectorAll(".publication-row[data-href]").forEach((row) => {
  row.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      return;
    }
    window.location.href = row.dataset.href;
  });

  row.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      window.location.href = row.dataset.href;
    }
  });
});

document.querySelectorAll(".featured-work-card[data-href]").forEach((card) => {
  card.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      return;
    }
    window.location.href = card.dataset.href;
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      window.location.href = card.dataset.href;
    }
  });
});
