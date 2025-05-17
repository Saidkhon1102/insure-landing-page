const retort = document.querySelector(".retort");
const hamburger = document.getElementById("open");
const closes = document.getElementById("close");
function showNav() {
    retort.classList.toggle("hidden");
    hamburger.classList.toggle("hidden");
    closes.classList.toggle("hidden");
}
hamburger.addEventListener("click", showNav);
closes.addEventListener("click", showNav);