import { renderFavoriteStatus } from "../events/favorites-events.js";

/**
 * Converts a single GIF object into a view.
 * @param {Object} gif - The GIF object to convert.
 * @returns {string} - The HTML representation of the GIF view.
 */
export const toSingleGifView = (gif) => {
  if (Object.keys(gif).length === 0) return;

  return `
     <div class="gif-only">
         ${renderFavoriteStatus(gif.id)}
        <img class="gif" gif-id="${gif.id}" src="${gif.images.original.url}"/>
    </div>`;
};

/**
 * Converts an array of gifs to a string representation of the gifs view.
 *
 * @param {Array} gifs - The array of gifs to be converted.
 * @returns {string} - The string representation of the gifs view.
 */
export const toGifsView = (gifs) => {
  return gifs
    .map((gif) => {
      return toSingleGifView(gif);
    })
    .join("");
};

/**
 * Converts a gif object into a detailed gif information HTML string.
 *
 * @param {Object} gif - The gif object containing the gif details.
 * @returns {string} - The HTML string representing the detailed gif information.
 */
export const toDetailedGifInfo = (gif) => `
<div class="detailed-gif">
    <h4>Gif details</h4>
    <p>Title: ${gif.title}</p>
    <p>User: ${gif.username}</p>
    <p>Rating: ${gif.rating}</p>
    ${toSingleGifView(gif)}
</div>
`;
