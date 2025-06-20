const API_KEY = '50706028-1c89dce29f588a1d4e8ec62d3';
const BASE_URL = 'https://pixabay.com/api/';

export function loadImages(query) {
  const searchParams = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true'
  };

  return axios.get(BASE_URL, { params: searchParams })
    .then(response => {
      const { hits } = response.data;
      if (hits.length === 0) {
        throw new Error('No images found');
      }
      return hits;
    })
    .catch(error => {
      console.error('Error loading images:', error.message || error);
      throw error;
    });
}