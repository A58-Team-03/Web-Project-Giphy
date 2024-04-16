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
    <h2>Your searched word:</h2>
    <h3>${searchTerm}</h3>
    <div class ="gifs-container">
    ${
      gifs.length > EMPTY_LENGTH
        ? toGifsView(gifs)
        : searchTerm.length > EMPTY_LENGTH
        ? `<p>No gifs found for ${searchTerm}</p>`
        : "<p>Enter a gif name.</p>"
    }
    </div>
</div>`;
