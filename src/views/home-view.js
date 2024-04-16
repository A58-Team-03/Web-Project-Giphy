import { toGifsView } from "./gifs-view.js";

export const toHomeView = (gifs) => {
  return `
<div id="trending-gifs">
    <div class="gifs-container">
    ${toGifsView(gifs)}
     </div>
    
</div>
`;
};
