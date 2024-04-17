import { toSingleGifView } from "./gifs-view.js";

/**
 * Converts a GIF object to the favorites view HTML string.
 *
 * @param {Object} gif - The GIF object to be converted.
 * @returns {string} The HTML string representing the favorites view.
 */
export const toFavoritesView = (gif) => {
  return `<div>
    <div id="enjoy-random-gif">There are no favorite GIFs yet. Take this random one:</div>
    ${toSingleGifView(gif)}
    </div>
    `;
};
