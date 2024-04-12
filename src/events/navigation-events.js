import {
  ABOUT,
  UPLOAD,
  CONTAINER_SELECTOR,
  FAVORITES,
  HOME,
  LIMIT_GIFS,
} from "../common/constants.js";
import { fetchTrendingGifs, fetchGifDetails } from "../data/fetch-gifs.js";
import { displayGifs, toGifDetailed } from "../views/gif-display.js";
import { q, setActiveNav } from "./helpers.js";
import { getFavorites } from "../data/favorites.js";

// public API
export const loadPage = (page = "", id = null) => {
  switch (page) {
    case HOME:
      setActiveNav(HOME);
      renderHome();
      break;
    case 'gif-detail':  
      renderGifDetails(id);
      break;
    case UPLOAD:
      setActiveNav(UPLOAD);
      renderCategories();
      break;
    case FAVORITES:
      setActiveNav(FAVORITES);
      renderFavorites();
      break;
    case ABOUT:
      setActiveNav(ABOUT);
      renderAbout();
      break;
    default:
      console.error('Page not found');
      break;
  }
};

const renderHome = () => {
  fetchTrendingGifs(LIMIT_GIFS).then((gifs) => {
    displayGifs(gifs, CONTAINER_SELECTOR);
  }).catch(error => console.error("Failed to fetch and render trending gifs:", error));
};

const renderGifDetails = (gifId) => {
  fetchGifDetails(gifId).then(gifDetails => {
      if (gifDetails) {
          const detailedViewContainer = document.getElementById("detailed-view");
          detailedViewContainer.innerHTML = toGifDetailed(gifDetails);
          detailedViewContainer.style.display = 'block'; // Show the detailed view
          document.getElementById("trending-gifs").style.display = 'none'; // Optionally hide the list
      } else {
          console.error("Failed to load GIF details.");
      }
  }).catch(error => console.error("Error fetching gif details:", error));
};

const renderCategories = () => {
  console.log('Render categories view here');
};

const renderFavorites = () => {
  const favorites = getFavorites();
  console.log('Render favorites view here with:', favorites);
};

const renderAbout = () => {
  console.log('Render about view here');
};
// hodim mejdu stranicite navigation
