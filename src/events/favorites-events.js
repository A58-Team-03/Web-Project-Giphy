import { EMPTY_HEART, FULL_HEART } from "../common/constants.js";
import {
  addFavorite,
  getFavorites,
  removeFavorite,
} from "../data/favorites.js";
import { q } from "./helpers.js";

/**
 * Toggles the favorite status of a GIF.
 * If the GIF is already in the favorites list, it will be removed.
 * If the GIF is not in the favorites list, it will be added.
 *
 * @param {string} gifId - The ID of the GIF to toggle the favorite status for.
 */
export const toggleFavoriteStatus = (gifId) => {
  const favorites = getFavorites();
  const heartSpan = q(`span[gif-id="${gifId}"]`);

  if (favorites.includes(gifId)) {
    removeFavorite(gifId);
    heartSpan.classList.remove("active");
    heartSpan.innerHTML = EMPTY_HEART;
  } else {
    addFavorite(gifId);
    heartSpan.classList.add("active");
    heartSpan.innerHTML = FULL_HEART;
  }
};

/**
 * Renders the favorite status of a GIF.
 * 
 * @param {string} gifId - The ID of the GIF.
 * @returns {string} - The HTML markup representing the favorite status of the GIF.
 */
export const renderFavoriteStatus = (gifId) => {
  const favorites = getFavorites();

  return favorites.includes(gifId)
    ? `<span class="favorite active" gif-id="${gifId}">${FULL_HEART}</span>`
    : `<span class="favorite" gif-id="${gifId}">${EMPTY_HEART}</span>`;
};
