import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(pictures) {
  return pictures
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title = "${description}" />
</a>`;
    })
    .join("");
}

var lightbox = new SimpleLightbox(".gallery a");

lightbox.options.captionDelay = 250;

galleryContainer.addEventListener("click", (evt) => {
  evt.preventDefault();
});
