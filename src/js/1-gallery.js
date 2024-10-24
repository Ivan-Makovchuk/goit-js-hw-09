import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview: 'link-to-small-image-1.jpg',
    original: 'link-to-large-image-1.jpg',
    description: 'Image 1',
  },
  {
    preview: 'link-to-small-image-2.jpg',
    original: 'link-to-large-image-2.jpg',
    description: 'Image 2',
  },
];

function createGalleryMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery-item">
          <a class="gallery-link" href="${original}">
            <img class="gallery-image" src="${preview}" alt="${description}" />
          </a>
        </li>
      `;
    })
    .join('');
}

const galleryContainer = document.querySelector('.gallery');
galleryContainer.innerHTML = createGalleryMarkup(images);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
