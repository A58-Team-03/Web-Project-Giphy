import { HOME, UPLOAD } from "./common/constants.js";
import { loadPage, renderGifDetails } from "./events/navigation-events.js";
import { renderSearchItems } from "./events/search-events.js";
import { q, qs } from "./events/helpers.js";
import { uploadGifs } from "./data/fetch-gifs.js";

document.addEventListener("DOMContentLoaded", () => {
  loadPage(HOME);

  const searchButton = q("#search-button");
  const searchInput = q("#search-input");
  const logo = q(".team-name");
  const uploadText = q(".link-text#upload");

  searchButton.addEventListener("click", () => {
    renderSearchItems(searchInput.value);
  });

  searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      renderSearchItems(searchInput.value);
    }
  });

  logo.addEventListener("click", () => {
    loadPage(HOME);
  });

  uploadText.addEventListener("click", (event) => {
    event.preventDefault();
    loadPage(UPLOAD);
  });

  const navItems = qs(".link-item");
  navItems.forEach((navItem, index) => {
    navItem.addEventListener("click", () => {
      document.querySelector(".active").classList.remove("active");
      navItem.classList.add("active");
      const indicator = document.querySelector(".indicator");
      indicator.style.left = `${index * 95 + 48}px`;

      const text = navItem.querySelector(".link-text").textContent;

      switch (true) {
        case text === "Trending":
          loadPage(HOME);
          break;
        case text === "Upload":
          loadPage(UPLOAD);
          break;
        case text === "Favorites":
          loadPage(FAVORITES);
          break;
        case text === "About":
          loadPage(ABOUT);
          break;

        default:
          break;
      }
    });
  });

  document.addEventListener("submit", (event) => {
    if (event.target.id === "uploadForm") {
      event.preventDefault();

      const fileInput = q("#fileInput");
      const file = fileInput.files[0];
      if (!file) {
        alert("Please select a file.");
        return;
      }

      uploadGifs(file)
        .then(() => {
          console.log("Upload successful!");
        })
        .catch((error) => {
          console.error("Error uploading GIF:", error);
        });
    }
  });

  document
    .getElementById("trending-gifs")
    .addEventListener("click", (event) => {
      if (event.target.tagName === "IMG") {
        const gifId = event.target.dataset.id;
        renderGifDetails(gifId);
      }
    });
});

// import { HOME } from './common/constants.js';
// import { toggleFavoriteStatus } from './events/favorites-events.js';
// import { q } from './events/helpers.js';
// import { loadPage, renderCategory, renderMovieDetails } from './events/navigation-events.js';
// import { renderSearchItems } from './events/search-events.js';

// document.addEventListener('DOMContentLoaded', () => {

//   // add global listener
//   document.addEventListener('click', event => {

//     // nav events
//     if (event.target.classList.contains('nav-link')) {

//       loadPage(event.target.getAttribute('data-page'));
//     }

//     // show category events
//     if (event.target.classList.contains('view-category-btn')) {
//       renderCategory(+event.target.getAttribute('data-category-id'));
//     }

//     // show movie events
//     if (event.target.classList.contains('view-movie-btn')) {
//       renderMovieDetails(+event.target.getAttribute('data-movie-id'));
//     }

//     // toggle favorite event
//     if (event.target.classList.contains('favorite')) {
//       toggleFavoriteStatus(+event.target.getAttribute('data-movie-id'));
//     }

//   });

//   // // search events
//   // q('input#search').addEventListener('input', e => {
//   //   renderSearchItems(e.target.value);
//   // });

//   q("button#search-button").addEventListener("click", () => {
//     const searchTerm = q("input#search").value;
//     renderSearchItems(searchTerm);
//   });

//   loadPage(HOME);

// });

// q("input#search").addEventListener("keypress", (event) => {
//   if (event.key === "Enter") {
//     const searchTerm = q("input#search").value;
//     renderSearchItems(searchTerm);
//   }
// });
