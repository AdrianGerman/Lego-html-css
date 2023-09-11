const modal = document.querySelector(".modal");
const btn_navbar = document.querySelectorAll(".btn-navbar");
const closeButton = document.querySelector(".modal__content__close");
const homeButton = document.querySelector(".btn-modal");

for (let i = 0; i < btn_navbar.length; i++) {
  btn_navbar[i].addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.classList.add("visible");
  });
}

closeButton.addEventListener("click", () => {
  modal.classList.add("hidden");
  modal.classList.remove("visible");
});

homeButton.addEventListener("click", () => {
  window.location.href = "index.html";
});
