import { renderFavoriteStatus } from "../events/favorites-events.js";

export const toSingleGifView = (gif) => {
  if (Object.keys(gif).length === 0) return;

  return `
     <div class="gif-only">
         ${renderFavoriteStatus(gif.id)}
        <img class="gif" gif-id="${gif.id}" src="${gif.images.original.url}"/>
    </div>`;
};

export const toGifsView = (gifs) => {
  return gifs
    .map((gif) => {
      return toSingleGifView(gif);
    })
    .join("");
};

export const toDetailedGifInfo = (gif) => `
<div class="detailed-gif">
    <h4>Gif details</h4>
    <p>Title: ${gif.title}</p>
    <p>User: ${gif.username}</p>
    <p>Rating: ${gif.rating}</p>
    ${toSingleGifView(gif)}
</div>
`;
