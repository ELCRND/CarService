const modal = document.querySelector(".modal");
const mainImage = document.querySelector(".work__main-image").firstElementChild;
const othersImages = document.querySelector(".work__others-images").childNodes;

document.querySelector(".header__menu").addEventListener("click", () => {
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
});
document.querySelector(".modal-close").addEventListener("click", () => {
  modal.classList.add("hidden");
  document.body.style.overflow = "visible";
});

othersImages.forEach((img) =>
  img.addEventListener("click", (e) => {
    const prev = mainImage.src;
    mainImage.src = e.target.src;
    e.target.src = prev;
  })
);
