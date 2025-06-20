import axios from 'axios';

const API_KEY = '50706028-1c89dce29f588a1d4e8ec62d3';
const BASE_URL = 'https://pixabay.com/api/';

export function loadImages(query, page = 1, limit = 15) {
  const searchParams = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: limit,
    page
  };

  return axios.get(BASE_URL, { params: searchParams })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error loading images:', error.message || error);
      throw error;
    });
}