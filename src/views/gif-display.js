import { CONTAINER_SELECTOR } from '../common/constants.js';
import { toggleFavoriteStatus, renderFavoriteStatus } from '../events/favorites-events.js';


export const displayGifs = (gifs) => {
    const container = document.querySelector(CONTAINER_SELECTOR);
    container.innerHTML = "";
    gifs.forEach((gif) => {
        const gifContainer = document.createElement("div");
        gifContainer.classList.add("gif-data");
        gifContainer.id = gif.id;

        const img = document.createElement("img");
        img.src = gif.images.original.url;
        img.alt = gif.title;
        img.gif = gif.id;

        // Create and append the favorite icon
        const favoriteIcon = document.createElement("span");
        favoriteIcon.innerHTML = renderFavoriteStatus(gif.id);
        favoriteIcon.classList.add("favorite-icon");
        favoriteIcon.onclick = () => toggleFavoriteStatus(gif.id);
        gifContainer.appendChild(favoriteIcon);

        gifContainer.appendChild(img);
        container.appendChild(gifContainer);
    });
}; 