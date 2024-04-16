import { toSingleGifView } from "./gifs-view.js";

export const toFavoritesView = (gif) => {
  return `<div>
    <div id="enjoy-random-gif">There are no favorite GIF's yet. Take this random one:</div>
    ${toSingleGifView(gif)}
    </div>
    `;
};
