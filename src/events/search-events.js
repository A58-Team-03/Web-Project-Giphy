import { CONTAINER_SELECTOR } from "../common/constants.js";
import { toSearchView } from "../views/search-view.js";
import { q } from "./helpers.js";
import { fetchSearchGifs } from "../data/fetch-gifs.js";
export const renderSearchItems = (searchTerm) => {
    fetchSearchGifs(searchTerm).then(() => {
        q(CONTAINER_SELECTOR).innerHTML = toSearchView(searchTerm);
    });
};
// search bar
