import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const markupLightbox = galleryItems
.map(({ preview, original, description }) => 
`<li><a href="${original}" class="gallery__item">
    <img src="${preview}" data-source = "${original}" alt="${description}" class="gallery__image">
</a></li>`)
.join('');
gallery.insertAdjacentHTML('beforeend', markupLigthbox);

new SimpleLightbox(".gallery a", {
    captionsData: `alt`,
    captionDelay: `250`,
  captionPosition: `bottom`
});

