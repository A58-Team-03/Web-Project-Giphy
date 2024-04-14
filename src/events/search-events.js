import { displayGifs } from "../views/gif-display.js";
import { CONTAINER_SELECTOR } from "../common/constants.js";
import { fetchSearchGifs } from "../data/fetch-gifs.js";

export const renderSearchItems = (searchTerm) => {
  fetchSearchGifs(searchTerm)
    .then((gifs) => {
      displayGifs(gifs, CONTAINER_SELECTOR);
    })
    .catch((error) =>
      console.error("Failed to fetch and display search results:", error)
    );
};
