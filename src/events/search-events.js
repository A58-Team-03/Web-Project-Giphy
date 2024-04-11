import { CONTAINER_SELECTOR } from "../common/constants.js";
import { fetchSearchGifs } from "../data/fetch-gifs.js";
import { toSearchView } from "../views/search-view.js";
import { q } from "./helpers.js";

export const renderSearchItems = (searchTerm) => {
  fetchSearchGifs(searchTerm).then((gifs) => {
    q(CONTAINER_SELECTOR).innerHTML = toSearchView(gifs, searchTerm);
  });
};