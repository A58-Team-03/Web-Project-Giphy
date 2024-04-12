import { toMovieSimple } from './movie-views.js';

export const toSearchView = (gifs, searchTerm) => {
  console.log(gifs);
  return `
<div id="gifs">
  <h1>GIFs found for "${searchTerm}":</h1>
  <div class="content">
    ${gifs.map(
      (gif) => `<img src="${gif.images.fixed_width.url}" alt="picture">`
    )}
  </div>
</div>`;
};