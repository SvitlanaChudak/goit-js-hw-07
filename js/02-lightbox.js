import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(SimpleLightbox)
console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) =>
    `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a>`).join('');
gallery.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionSelector: "img",
    captionType: "alt",
    captionDelay: 250,
    captionPosition: "bottom",
});