import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { loadImages } from './js/pixabay-api.js';
import { clearGallery, renderGallery, showElement, hideElement } from './js/render-functions.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');
const loader = document.querySelector('.loader');

let currentPage = 1;
let currentQuery = '';
let totalImages = 0;
let loadedImages = 0;
const limitPerPage = 15;

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
  showElement(loader);

  currentPage = 1;
  loadedImages = 0;

  try {
    const images = await loadImages(query, currentPage, limitPerPage);
    totalImages = images.length;

    if (!images.length) {
      iziToast.show(toastErrorOptions('Sorry, there are no images matching your search query. Please try again!'));
      return;
    }
    loadedImages += images.length;

    renderGallery(images);
    lightbox.refresh();

    if (loadedImages < totalImages) {
      showElement(loadMoreBtn);
    }
  } catch (error) {
    iziToast.show(toastErrorOptions('Something went wrong. Please try again later.'));
  } finally {
    hideElement(loader);
  }
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;
  hideElement(loadMoreBtn);
  showElement(loader);

  try {
    const images = await loadImages(currentQuery, currentPage);
    loadedImages += images.length;
    renderGallery(images);

    const { height: cardHeight } = document
      .querySelector('.gallery-item')
      .getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    if (loadedImages >= totalImages) {
      iziToast.show(toastErrorOptions('We\'re sorry, but you\'ve reached the end of search results.'));
    } else {
      showElement(loadMoreBtn);
    }
  } catch (error) {
    iziToast.show(toastErrorOptions('Failed to load more images.'));
  } finally {
    hideElement(loader);
  }
});

