import { EMPTY_LENGTH } from "../common/constants.js";
import { toGifsView } from "./gifs-view.js";

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
