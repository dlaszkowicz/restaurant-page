const contactBtn = document.querySelector("#contactBtn");
const homeBtn = document.querySelector("#homeBtn");
const contact = document.querySelector(".contact");
const home = document.querySelector(".home");

contactBtn.addEventListener("click", function () {
  alert("works");
  home.style.display = "none";
  contact.style.display = "flex";
});
homeBtn.addEventListener("click", function () {
  home.style.display = "flex";
  contact.style.display = "none";
});
