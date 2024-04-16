import { API_KEY, API_URL } from "../common/constants.js";

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
