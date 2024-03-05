// Toggle class active untuk hamburger menu

const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
document.querySelector("#list").onclick = (event) => {
  event.preventDefault();
  navbarNav.classList.toggle("active");
};

document.querySelector(".navbar").addEventListener("click", function () {
  this.classList.toggle("active");
});