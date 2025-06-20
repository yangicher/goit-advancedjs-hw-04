import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { loadImages } from './js/pixabay-api.js';
import { clearGallery, hideLoader, renderGallery, showLoader } from './js/render-functions.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector('.form');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function toastErrorOptions(message) {
  return ({
    progressBar: false,
    position: 'topRight',
    animateInside: false,
    message: `${message}`,
    color: '#EF4040',
    maxWidth: '432px'
  });
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const query = form.elements.query.value.trim();
  form.reset();
  if (!query) {
    iziToast.show(toastErrorOptions('Please enter a search query!'));
    return;
  }

  clearGallery();
  showLoader();

  try {
    const images = await loadImages(query);

    if (!images.length) {
      iziToast.show(toastErrorOptions('Sorry, there are no images matching your search query. Please try again!'));
      return;
    }

    renderGallery(images);
    lightbox.refresh();
  } catch (error) {
    iziToast.show(toastErrorOptions('Something went wrong. Please try again later.'));
  } finally {
    hideLoader();
  }
});

