// open & close mobile menu
const mobileMenu = document.querySelector("#mobile-menu");
const openBtn = document.querySelector("#open-mobile-menu");
const closeBtn = document.querySelector("#close-mobile-menu");
const body = document.querySelector("body");

openBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-full");
  body.classList.add("overflow-hidden");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.add("translate-x-full");
  body.classList.remove("overflow-hidden");
});
