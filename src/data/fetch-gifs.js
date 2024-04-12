import { API_KEY, API_URL } from "../common/constants.js";

export const fetchTrendingGifs = (limit = 24) => {
  return fetch(`${API_URL}/trending?api_key=${API_KEY}&limit=${limit}`)
    .then(response => response.json())
    .then(data => data.data)
    .catch(error => console.error("Error fetching trending gifs:", error));
};

export const fetchSearchGifs = (query) => {
  return fetch(`${API_URL}/search?api_key=${API_KEY}&q=${query}&limit=24`)
    .then(response => response.json())
    .then(data => data.data)
    .catch(error => console.error("Error fetching search results:", error));
};

export const fetchGifDetails = (gifId) => {
  return fetch(`${API_URL}/${gifId}?api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => console.error("Error fetching gif details:", error));
};