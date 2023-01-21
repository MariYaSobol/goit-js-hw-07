import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const imagesContainer = document.querySelector(".gallery");
const imagesMarkup = creatImageList(galleryItems);
imagesContainer.insertAdjacentHTML("beforeend", imagesMarkup);

function creatImageList(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join("");
}
function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" alt="${event.target.alt}" width="800" height="600">
`);
  instance.show();
  document.addEventListener("keydown", (event) => {
    if (event.key == "Escape") {
      instance.close();
    }
  });
}
imagesContainer.addEventListener("click", onImageClick);
