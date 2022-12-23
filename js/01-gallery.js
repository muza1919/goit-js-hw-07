import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

  const imageMarkup = galleryItems
    .map(({ preview, original, description }) =>
    `<div class="gallery__item">
    <a class="gallery__link" href='${original}'>
    <img class="gallery__image"
    src ='${preview}' 
    alt ='${description}' 
    data-source='${original}'
    />
  </a>
</div>`
    )
    .join('');

gallery.insertAdjacentHTML('beforeend', imageMarkup);
gallery.addEventListener('click', onImageClick);


function onImageClick(event) {
  event.preventDefault();

  
  if (!event.target.classList.contains('gallery__image')) {
    return
  }

  const imageModal = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`);
  imageModal.show();
  

  const links = document.querySelectorAll('.gallery__link')
  links.forEach( link => {
      if (link.getAttribute('href') === event.target.dataset.source) {
          link.addEventListener('keydown', e => {
              if (e.key === 'Escape') {
                imageModal.close()
              }return
          })
        }
    })
  };
