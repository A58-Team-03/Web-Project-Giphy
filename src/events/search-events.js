import { CONTAINER_SELECTOR } from "../common/constants.js";
import { fetchSearchGifs } from "../data/fetch-gifs.js";
import { toSearchView } from "../views/search-view.js";
import { q } from "./helpers.js";
import { displayGifs } from "../views/gif-display.js";


export const renderSearchItems = (searchTerm) => {
  fetchSearchGifs(searchTerm).then(gifs => {
    displayGifs(gifs, CONTAINER_SELECTOR);
  }).catch(error => console.error("Failed to fetch and display search results:", error));
};