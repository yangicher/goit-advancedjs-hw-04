const gallery = document.querySelector('.gallery');

export function clearGallery() {
  gallery.innerHTML = '';
}

export function renderGallery(images) {
  gallery.insertAdjacentHTML('beforeend', images
    .map(
      ({
         webformatURL,
         largeImageURL,
         tags,
         likes,
         views,
         comments,
         downloads,
       }) => `
      <li class="gallery-item">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-item">
            <p class="title">Likes</p>
            <p>${likes}</p>
          </div>
          <div class="info-item">
            <p class="title">Views</p>
            <p>${views}</p>
          </div>
          <div class="info-item">
            <p class="title">Comments</p>
            <p>${comments}</p>
          </div>
          <div class="info-item">
            <p class="title">Downloads</p>
            <p>${downloads}</p>
          </div>
        </div>
      </li>
    `
    )
    .join(''));
}

export function showElement(element) {
  element.classList.remove('hidden');
}

export function hideElement(element) {
  element.classList.add('hidden');
}