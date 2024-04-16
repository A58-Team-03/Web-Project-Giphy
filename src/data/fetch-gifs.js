import { API_KEY, API_URL } from "../common/constants.js";

/**
 * Fetches trending gifs from the Giphy API.
 * @param {number} limit - The maximum number of gifs to fetch.
 * @returns {Promise<Array>} - A promise that resolves to an array of trending gifs.
 * @throws {Error} - If there is an error fetching the gifs.
 */
export async function fetchTrendingGifs(limit) {
  try {
    const response = await fetch(
      `${API_URL}/trending?api_key=${API_KEY}&limit=${limit}`
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching trending gifs:", error);
    throw error;
  }
}

/**
 * Fetches GIF data by ID from the Giphy API.
 * @param {string} gifId - The ID of the GIF to fetch.
 * @returns {Promise<Object>} - A promise that resolves to the GIF data.
 * @throws {Error} - If the GIF ID is not provided.
 */
export const getGifsById = async (gifId = null) => {
  try {
    if (!gifId) {
      throw new Error("GIF ID is required");
    }

    const response = await fetch(`${API_URL}/${gifId}?api_key=${API_KEY}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching GIF by ID:", error);
    throw error;
  }
};

/**
 * Fetches a random GIF from the Giphy API.
 * @returns {Promise<Object>} A promise that resolves to the fetched GIF data.
 * @throws {Error} If there is an error fetching the random GIF.
 */
export const randomGif = async () => {
  try {
    const response = await fetch(`${API_URL}/random?api_key=${API_KEY}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching random GIF:", error);
    throw error;
  }
};

/**
 * Searches for GIFs based on the provided search term and limit.
 * @param {string} searchTerm - The term to search for GIFs.
 * @param {number} limit - The maximum number of GIFs to retrieve.
 * @returns {Promise<Array>} - A promise that resolves to an array of GIF data.
 */
export const searchGifs = async (searchTerm = "", limit) => {
  try {
    const response = await fetch(
      `${API_URL}/search?api_key=${API_KEY}&q=${searchTerm}&limit=${limit}`
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    return console.error("Error searching gifs:", error);
  }
};
