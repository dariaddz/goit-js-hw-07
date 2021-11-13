import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(pictures) {
  return pictures
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"  />
</a>`;
    })
    .join("");
}

var lightbox = new SimpleLightbox(".gallery a");

galleryContainer.addEventListener("click", onPictureClick);

function onPictureClick(evt) {
  evt.preventDefault();

  lightbox.options.captionDelay = 250;

  const pictures = document.querySelectorAll(".gallery__image");
  for (let picture of pictures) {
    picture.setAttribute("title", `${evt.target.getAttribute("alt")}`);
  }
}
