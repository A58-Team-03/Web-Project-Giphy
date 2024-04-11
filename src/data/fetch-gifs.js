import { API_KEY, API_URL } from "../common/constants.js";

export const fetchTrendingGifs = (limit) => {
  return fetch(`${API_URL}/trending?api_key=${API_KEY}&limit=${limit}`)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => console.error("Error fetching trending gifs:", error));
};
