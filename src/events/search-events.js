// import { searchMovies } from "../data/movies.js";
// import { toSearchView } from "../views/search-view.js";
// import { q } from "./helpers.js";
// import { CONTAINER_SELECTOR } from "../common/constants.js";

// export const renderSearchItems = (searchTerm) => {
//   // missing implementation
//   const data = searchMovies(searchTerm);
//   q(CONTAINER_SELECTOR).innerHTML = toSearchView(data, searchTerm);
// };
export function fetchSearchGifs(query) {
    fetch(`${apiUrl}/search?api_key=${apiKey}&q=${query}&limit=24`)
        .then(response => response.json())
        .then(data => displayGifs(data.data))
        .catch(error => console.error("Error fetching search results:", error));
}


document.addEventListener("DOMContentLoaded", () => {
    fetchTrendingGifs();

    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            fetchSearchGifs(searchInput.value);
        }
    });
});