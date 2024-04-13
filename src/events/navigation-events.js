import { fetchTrendingGifs } from "../requests/request-service.js";
import { displayGifs } from "../views/gif-display.js";
import { CONTAINER_SELECTOR, HOME, UPLOAD } from "../common/constants.js"; // Corrected import line
import { fetchGifDetails } from "../data/fetch-gifs.js"; // Corrected import line
import { toGifDetailed } from "../views/details-view.js";
import { toUploadView } from "../views/upload-view.js";
import { q, setActiveNav } from "./helpers.js";

export const loadPage = (page = "") => {
  switch (page) {
    case HOME:
      renderHome();
      break;
    case UPLOAD:
      return renderUpload();
    // Handle other cases as needed
    default:
      console.error("Page not found");
      break;
  }
};

export const renderHome = () => {
  fetchTrendingGifs()
    .then((gifs) => {
      displayGifs(gifs, CONTAINER_SELECTOR);
    })
    .catch((error) =>
      console.error("Failed to fetch and render trending gifs:", error)
    );
};

export const renderGifDetails = async (id = null) => {
  try {
    // Fetch gif details asynchronously
    const gifDetails = await fetchGifDetails(id);
    
    // Once the details are fetched, render them onto the page
    q(CONTAINER_SELECTOR).innerHTML = toGifDetailed(gifDetails);
  } catch (error) {
    console.error("Error rendering gif details:", error);
  }
};

export const renderUpload = () => {
  const container = q("#upload-container");
  container.innerHTML = toUploadView();
  container.style.display = 'block'; 
  q("#trending-gifs").style.display = 'none'; 
  q(".search-container").style.display = 'none';
};

// import {
//   ABOUT,
//   UPLOAD,
//   CONTAINER_SELECTOR,
//   FAVORITES,
//   HOME,
//   LIMIT_GIFS,
// } from "../common/constants.js";
// // import {
// //   loadCategories,
// //   loadCategory,
// //   loadMovies,
// //   loadSingleMovie,
// // } from "../requests/request-service.js";
// // import { toAboutView } from "../views/about-view.js";
// // import { toCategoriesView } from "../views/category-view.js";
// // import { toFavoritesView } from "../views/favorites-view.js";
// import { toHomeView } from "../views/home-view.js";
// // import {
// //   toMoviesFromCategoryView,
// //   toSingleMovieView,
// // } from "../views/movie-views.js";
// import { q, setActiveNav } from "./helpers.js";
// import { getFavorites } from "../data/favorites.js";
// import { fetchTrendingGifs } from "../data/fetch-gifs.js";

// // public API
// export const loadPage = (page = "") => {
//   switch (page) {
//     case HOME:
//       setActiveNav(HOME);
//       return renderHome();

//     case UPLOAD:
//       setActiveNav(UPLOAD);
//       return renderCategories();

//     case FAVORITES:
//       setActiveNav(FAVORITES);
//       return renderFavorites();

//     case ABOUT:
//       setActiveNav(ABOUT);
//       return renderAbout();

//     /* if the app supports error login, use default to log mapping errors */
//     default:
//       return null;
//   }
// };

// export const renderMovieDetails = (id = null) => {
//   const movie = loadSingleMovie(id);

//   q(CONTAINER_SELECTOR).innerHTML = toSingleMovieView(movie);
// };

// export const renderCategory = (categoryId = null) => {
//   const category = loadCategory(categoryId);
//   const movies = loadMovies(category.id);

//   q(CONTAINER_SELECTOR).innerHTML = toMoviesFromCategoryView(category, movies);
// };

// // private functions

// const renderHome = () => {
//   fetchTrendingGifs(LIMIT_GIFS).then((data) => {
//     q(CONTAINER_SELECTOR).innerHTML = toHomeView(data);
//   });
// };

// const renderCategories = () => {
//   const categories = loadCategories();

//   q(CONTAINER_SELECTOR).innerHTML = toCategoriesView(categories);
// };

// const renderFavorites = () => {
//   const favorites = getFavorites();
//   const movies = favorites.map((id) => loadSingleMovie(id));

//   q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(movies);
// };

// const renderAbout = () => {
//   q(CONTAINER_SELECTOR).innerHTML = toAboutView();
// };

// // hodim mejdu stranicite navigation
