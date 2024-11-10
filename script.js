var typed = new Typed("#skills", {
  strings: ["more clients?", "more trust?", "more growth?"],
  typeSpeed: 90,
  backSpeed: 60,
  backDelay: 700,
  loop: true,
});

const hamburger = document.querySelector(".hamburger");
const linksContainer = document.querySelector(".links-container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  linksContainer.classList.toggle("active");
});

const navlink = document.querySelectorAll(".navlink");
navlink.forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    linksContainer.classList.remove("active");
  })
);

const downArrowIcon = document.querySelectorAll(".bx-chevron-down");

function toggleAnswer(element) {
  const answer = element.nextElementSibling;

  if (answer.style.display === "block") {
    answer.style.display = "none";
    downArrowIcon.classList.replace("bx bx-chevron-up", "bx bx-chevron-down");
  } else {
    answer.style.display = "block";
    downArrowIcon.classList.replace("bx bx-chevron-down", "bx bx-chevron-up");
  }
}

let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");
const html = document.querySelector("html");

const date = new Date();
const time = date.getHours();
const nightTime = time <= 6 || time >= 18;

function enableDarkMode() {
  document.body.classList.add("darkmode");
  html.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
}

function disableDarkMode() {
  document.body.classList.remove("darkmode");
  html.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
}

if (nightTime) {
  darkmode = "active";
} else if (nightTime !== true) {
  darkmode = null;
}

if (darkmode === "active") {
  enableDarkMode();
}

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkMode() : disableDarkMode();
});
