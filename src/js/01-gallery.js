// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

    // ** Create gallery of images

const galleryBox = document.querySelector('.gallery');
const galleryOfImages = createGallery(galleryItems);

galleryBox.insertAdjacentHTML('beforeend', galleryOfImages);

// console.log(galleryBox)

function createGallery(galleryItems) {
    const gallery = galleryItems.map(({preview, original, description}) => {
        return `
            <div class="gallery__item">
                <a class="gallery__link" href="${preview}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </div>
        `;
    }).join('')

    return gallery;
}


// Добавь библиотеку SimpleLightbox как 
// зависимость проекта используя
// npm(ссылка на CDN из твоей прошлой работы больше не нужна).
// Используй свой JavaScript код из предыдущей 
// домашней работы, но выполни рефакторинг с учетом того,
// что библиотека была установлена через npm(синтаксис import /export).
// Для того чтобы подключить CSS код библиотеки в проект,
// необходимо добавить еще один импорт,
// кроме того который описан в документации.

// // Описан в документации
// import SimpleLightbox from "simplelightbox";
// // Дополнительный импорт стилей
// import "simplelightbox/dist/simple-lightbox.min.css";


