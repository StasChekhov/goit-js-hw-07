import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryDiv = document.querySelector(".gallery");
const allGallery = galleryMarkup(galleryItems);
 

function galleryMarkup(galleryItems) {
    return galleryItems.map((galleryItem) => {
        return `
        <div class="gallery__item">
        <a href="${galleryItem.original}">
        <img
        class ="gallery__image"
        src="${galleryItem.preview}" 
        data-source="${galleryItem.original}" 
        alt="${galleryItem.description}"
        />
        </a>
        </div>`;
    })
    .join("")
};

galleryDiv.insertAdjacentHTML("beforeend", allGallery)

galleryDiv.addEventListener(`click`, e => {
    e.preventDefault();
    if (e.target.nodeName !== `IMG`) {
        return;
    }

    instance.element().querySelector(`img`).src = e.target.dataset.source;

    instance.show();
});

window.addEventListener(`keydown`, e => {
    if (e.code === `Escape`) {
        instance.close();
    }
});

const instance = basicLightbox.create(`<img src="" />`, {
  onShow: instance => ('onShow', instance),
  onClose: instance => ('onClose', instance),
});


// galleryDiv.addEventListener('click', onGalleryClick);
// function onGalleryClick(e) {
//     console.log(e.target)
   
// }

// const imageClick = document.querySelector(".gallery__image");

// imageClick.addEventListener("click", onImageClick);
// function onImageClick (e) {
//     e.preventDefault();

//     const imageElement = e.target.classList.containds(".gallery__image");

//     if (!imageElement) {
//         return
//     }
// }

// const imageClick = document.querySelector(".gallery__image")
// imageClick.addEventListener("click", () => {
//   alert("HEY SUKA");
// });










