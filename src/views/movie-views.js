import { renderFavoriteStatus } from "../events/favorites-events.js";

export const toMoviesFromCategoryView = (category, movies) => `
<div id="movies">
  <h1>${category.name} movies:</h1>
  <div class="content">
    ${movies.map(toMovieSimple).join("\n")}
  </div>
</div>
`;

export const toSingleMovieView = (movie) => `
     ${toMovieDetailed(movie)} 
`;

export const toMovieSimple = (movie) => `
<div class="movie">
    <h2>${movie.title}</h2>
    <p>Year: ${movie.year}</p>
    <img src="${movie.poster}" alt="${movie.title}" width="50%"> 
      <div class="movie-details">
          <button class="button" data-movie-id="${
            movie.id
          }">View Details</button>
          ${renderFavoriteStatus(movie.id)}
      </div>
    </div>
`;

const toMovieDetailed = (movie) => `
<div class="movie-detailed">
    <h2>${movie.title}</h2>
    <img src="${movie.poster}" alt="${movie.title}" width="15%"> 
    <p>Genre: ${movie.genre}</p>
    <p>Director: ${movie.director}</p>
    <p>Plot: ${movie.description}</p>    
</div>
`;
