import { toMovieSimple } from './movie-views.js';

export const toSearchView = (gifs, searchTerm) => `
<div id="gifs">
  <h1>GIFs found for "${searchTerm}":</h1>
  <div class="content">
    ${gifs.map((gif) => `<img src="${gif.url}" alt="${gif.title}">`).join("\n")}
  </div>
</div>`;