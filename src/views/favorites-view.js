import { toMovieSimple } from './movie-views.js';

export const toFavoritesView = (gifs) => `
<div id="gifs">
  <h1>Favorite gifs:</h1>
  <div class="content">
    ${gifs || '<p>Favorite some gifs to see them here.</p>'}
  </div>
</div>
`;
