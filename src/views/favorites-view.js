import { fetchRandomGif } from '../data/fetch-gifs.js';
import { displayGifs } from './gif-display.js';
import { toMovieSimple } from './movie-views.js';


/**
 * Converts an array of gifs into a favorites view HTML string.
 * @param {Array} gifs - The array of gifs to be displayed.
 * @returns {string} - The HTML string representing the favorites view.
 */
export const toFavoritesView = async (gifs) => `
<div id="gifs">
  <h1>Favorite gifs:</h1>
  <div class="content">
    ${gifs || displayGifs([await fetchRandomGif()])};
    
    ${(displayGifs([await fetchRandomGif()]))};
  </div>
</div>
`;
// ${console.log(await fetchRandomGif())};