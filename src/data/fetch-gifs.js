import { API_KEY, API_UPLOAD_URL, API_URL } from "../common/constants.js";

/**
 * Fetches trending gifs from the Giphy API.
 * @param {number} limit - The maximum number of gifs to fetch. Default is 24.
 * @returns {Promise<Array>} - A promise that resolves to an array of trending gifs.
 */
export const fetchTrendingGifs = async (limit = 24) => {
  try {
    const response = await fetch(`${API_URL}/trending?api_key=${API_KEY}&limit=${limit}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    return console.error("Error fetching trending gifs:", error);
  }
};

/**
 * Fetches search GIFs from the Giphy API.
 * @param {string} query - The search query.
 * @returns {Promise<Array>} - A promise that resolves to an array of GIF data.
 */
export const fetchSearchGifs = async (query) => {
  try {
    const response = await fetch(`${API_URL}/search?api_key=${API_KEY}&q=${query}&limit=24`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    return console.error("Error fetching search results:", error);
  }
};

/**
 * Fetches the details of a GIF from the Giphy API.
 * @param {string} gifId - The ID of the GIF to fetch details for.
 * @returns {Promise<Object>} - A promise that resolves to the details of the GIF.
 */
export const fetchGifDetails = async (gifId) => {
  try {
    const response = await fetch(`${API_URL}/${gifId}?api_key=${API_KEY}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    return console.error("Error fetching gif details:", error);
  }
};

/**
 * Fetches a random GIF from the Giphy API.
 * @returns {Promise<Object>} A promise that resolves to the fetched GIF data.
 */
export const fetchRandomGif = async () => {
  try {
    const response = await fetch(`${API_URL}/random?api_key=${API_KEY}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    return console.error("Error fetching random gif:", error);
  }
};


/**
 * Uploads a GIF file to the server.
 * @param {File} file - The GIF file to upload.
 * @returns {Promise<Array>} - A promise that resolves to an array of uploaded GIF data.
 */
export const uploadGifs = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch(`${API_UPLOAD_URL}/?api_key=${API_KEY}`, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      throw new Error("Failed to upload GIF:", response.statusText);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    return console.error("Error fetching search results:", error);
  }
};
