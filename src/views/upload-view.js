import { toSingleGifView } from "./gifs-view.js";

/**
 * Converts a GIF object into an upload view HTML string.
 *
 * @param {Object} gif - The GIF object to be converted.
 * @returns {string} - The HTML string representing the upload view.
 */
export const toUploadView = (gif) => `
   <div>
      <form id="upload-form">
         <label for="gif-upload" class="custom-upload-button-label">Select GIF</label>
         <input type="file" id="gif-upload" name="gif" accept=".gif" required>
         <button class="upload-gif custom-upload-button" type="submit">Upload</button>
      </form>
      ${Object.keys(gif).length === 0 ? "" : toSingleGifView(gif)}
   </div>
`;
