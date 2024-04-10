// import {
//   ABOUT,
//   CATEGORIES,
//   CONTAINER_SELECTOR,
//   FAVORITES,
//   HOME,
// } from "../common/constants.js";
// import {
//   getCategory,
//   getMovieById,
//   getMoviesGeneralInfo,
// } from "../data/movies.js";
// import { loadCategories } from "../requests/request-service.js";
// import { toAboutView } from "../views/about-view.js";

// import { toCategoriesView } from "../views/category-view.js";
// import { toFavoritesView } from "../views/favorites-view.js";
// import { toHomeView } from "../views/home-view.js";
// import {
//   toMovieSimple,
//   toMoviesFromCategoryView,
//   toSingleMovieView,
// } from "../views/movie-views.js";
// import { q, setActiveNav } from "./helpers.js";
// import { renderSearchItems } from "./search-events.js";
// import { getFavorites } from "../data/favorites.js";

// // public API
// export const loadPage = (page = "") => {
//   switch (page) {
//     case HOME:
//       setActiveNav(HOME);
//       return renderHome();

//     case CATEGORIES:
//       setActiveNav(CATEGORIES);
//       return renderCategories();

//     case FAVORITES:
//       setActiveNav(FAVORITES);
//       return renderFavorites();

//     case ABOUT:
//       setActiveNav(ABOUT);
//       return renderAbout();

//     // missing partial implementation

//     /* if the app supports error logging, use default to log mapping errors */
//     default:
//       return null;
//   }
// };

// export const renderMovieDetails = (id = null) => {
//   const _movie = getMovieById(id);

//   q(CONTAINER_SELECTOR).innerHTML = toSingleMovieView(_movie);
// };

// export const renderCategory = (categoryId = null) => {
//   // missing partial implementation
//   const _category = getCategory(categoryId);
//   const _movies = getMoviesGeneralInfo(categoryId);

//   q(CONTAINER_SELECTOR).innerHTML = toMoviesFromCategoryView(
//     _category,
//     _movies
//   );
// };

// // private functions

// const renderHome = () => {
//   q(CONTAINER_SELECTOR).innerHTML = toHomeView();
// };

// const renderCategories = () => {
//   // missing implementation
//   const _categories = loadCategories();
//   q(CONTAINER_SELECTOR).innerHTML = toCategoriesView(_categories);
// };

// const renderFavorites = () => {
//   const _movie = getFavorites().map(getMovieById);

//   q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(_movie);
// };

// const renderAbout = () => {
//   q(CONTAINER_SELECTOR).innerHTML = toAboutView();
// };
