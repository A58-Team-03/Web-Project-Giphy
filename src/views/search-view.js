import { EMPTY_LENGTH } from "../common/constants.js";
import { toGifsView } from "./gifs-view.js";

/**
 * Converts the given array of gifs and search term into a search view HTML string.
 *
 * @param {Array} gifs - The array of gifs to display.
 * @param {string} searchTerm - The search term used to find the gifs.
 * @returns {string} - The HTML string representing the search view.
 */
export const toSearchView = (gifs, searchTerm) => `
<div id="search-gifs">
    ${
      gifs.length > EMPTY_LENGTH
        ? `<h2>You searched:</h2>
            <h3>${searchTerm}</h3>
            <div class ="gifs-container">
                ${toGifsView(gifs)}
            </div>`
        : searchTerm.length > EMPTY_LENGTH
        ? `<p>No GIFs found for: ${searchTerm}</p>`
        : "<p>Please enter a GIF name.</p>"
    }
</div>`;
