// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryContainer = document.querySelector(`.gallery`);
const elementsGallery = createElementGallery(galleryItems);

galleryContainer.insertAdjacentHTML(`beforeend`, elementsGallery);

function createElementGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"        
        alt="${description}"
      />
    </a>
  </li >
    `;
    })
    .join('');
}

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
