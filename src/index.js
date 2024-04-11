import { fetchTrendingGifs } from "./events/fetch-gifs.js";

document.addEventListener("DOMContentLoaded", () => {
  fetchTrendingGifs();
});
// document.addEventListener("DOMContentLoaded", () => {
//   // add global listener
//   document.addEventListener("click", (event) => {
//     // nav events
//     if (event.target.classList.contains("nav-link")) {
//       loadPage(event.target.getAttribute("data-page"));
//     }

//     // show category events
//     if (event.target.classList.contains("view-category")) {
//       renderCategory(+event.target.getAttribute("category-id"));
//     }

//     // show movie events
//     if (event.target.classList.contains("button")) {
//       renderMovieDetails(+event.target.getAttribute("data-movie-id"));
//     }

//     // toggle favorite event
//     if (event.target.classList.contains("favorite")) {
//       toggleFavoriteStatus(+event.target.getAttribute("data-movie-id"));
//     }
//   });

//   // search events
//   q("input#search").addEventListener("input", (event) => {
//     renderSearchItems(event.target.value);
//   });

//   loadPage(HOME);
// });
