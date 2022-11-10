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

const instance = basicLightbox.create(`<img src="" alt=""/>`,
  {
    onShow: (instance) => { console.log(`show`); document.addEventListener('keydown', keypress) },
    onClose: (instance) => { console.log(`close`); document.removeEventListener('keydown', keypress) }
  }
);
gallery.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') return;
  instance.element().querySelector("img").alt = e.target.alt;
  instance.element().querySelector("img").src = e.target.dataset.source;
  instance.show();
});
function keypress(evt) {
  if (evt.key === `Escape`) {
    instance.close();
  }
}


