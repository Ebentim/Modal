const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const hidden = document.querySelectorAll(".hidden");
const btnOpenModal = document.querySelectorAll(".show-modal");

const openModalCallback = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModalCallback = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener("click", openModalCallback);

btnCloseModal.addEventListener("click", closeModalCallback);
overlay.addEventListener("click", closeModalCallback);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden"))
    closeModalCallback();
});
