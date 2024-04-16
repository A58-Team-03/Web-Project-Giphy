import { toGifsView } from "./gifs-view.js";

/**
 * Converts an array of GIFs into a HTML string representing the home view.
 *
 * @param {Array} gifs - The array of GIFs to be displayed in the home view.
 * @returns {string} - The HTML string representing the home view.
 */
export const toHomeView = (gifs) => {
  return `
<div id="trending-gifs">
    <div class="gifs-container">
    ${toGifsView(gifs)}
     </div>
    
</div>
`;
};
