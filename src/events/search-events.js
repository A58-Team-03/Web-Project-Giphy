import { CONTAINER_SELECTOR, LIMIT_GIFS } from "../common/constants.js";
import { searchGifs } from "../data/fetch-gifs.js";
import { toSearchView } from "../views/search-view.js";
import { q, setActiveNav } from "./helpers.js";

/**
 * Renders the search items based on the provided search term.
 * @param {string} searchTerm - The search term to be used for searching gifs.
 */
export const renderSearchItems = (searchTerm) => {
  setActiveNav();
  searchGifs(searchTerm, LIMIT_GIFS).then(
    (data) => (q(CONTAINER_SELECTOR).innerHTML = toSearchView(data, searchTerm))
  );
};
