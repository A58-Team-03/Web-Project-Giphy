import { toSingleGifView } from "./gifs-view.js";

export const toUploadView = (gif) => `
   <div>
   <form id="upload-form">
   <input type="file" id="gif-upload" name="gif" accept=".gif" required>
   <button class="upload-gif" type="submit">Upload</button>
   </form>
   ${Object.keys(gif).length === 0 ? "" : toSingleGifView(gif)}
   </div>
`;
