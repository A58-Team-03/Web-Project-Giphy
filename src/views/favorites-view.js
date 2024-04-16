import { fetchRandomGif } from '../data/fetch-gifs.js';
import { displayGifs } from './gif-display.js';
import { toMovieSimple } from './movie-views.js';


export const toFavoritesView = async (gifs) => `
<div id="gifs">
  <h1>Favorite gifs:</h1>
  <div class="content">
    ${gifs || displayGifs([await fetchRandomGif()])};
  </div>
</div>
`;
