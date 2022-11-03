import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(basicLightbox);
console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) =>
    `<div class="gallery__item">
     <a class="gallery__link" href="${original}">
     <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`).join('');
gallery.insertAdjacentHTML('beforeend', markup);

gallery.addEventListener('click', onOpenPicture);
function onOpenPicture(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") { return };
    const instance = basicLightbox.create(`<img src = ${event.target.dataset.source} alt = "${event.target.alt}"/>`);
    instance.show();
    document.addEventListener('keydown', onModalCloseToEscape);
    function onModalCloseToEscape(evt) {
        if (evt.code === "Escape") {
            instance.close();
            document.removeEventListener("keydown", onModalCloseToEscape);
        }
    }
}
   



