import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryBox = document.querySelector('.gallery');
const galleryOfImages = createGallery(galleryItems);

galleryBox.style.listStyle = 'none';

galleryBox.insertAdjacentHTML('beforeend', galleryOfImages);

// console.log(galleryBox)

function createGallery(galleryItems) {
    const gallery = galleryItems.map(({ preview, original, description }) => {
        return `
        <li>
            <a class="gallery__item" href="${preview}">
                <img class="gallery__image" src="${original}" alt="${description}" />
            </a >
        </li>
        `;
    }).join('');

    return gallery;
}

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
