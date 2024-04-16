import { postUploadedGif } from "../data/upload.js";
import { toUploadView } from "../views/upload-view.js";
import { q } from "./helpers.js";
import { CONTAINER_SELECTOR } from "../common/constants.js";
import { addUploaded, getUploaded } from "../data/uploaded-gifs.js";
import { getGifsById } from "../data/fetch-gifs.js";

/**
 * Handles the upload event for a GIF file.
 *
 * @param {Event} event - The event object representing the form submission event.
 * @returns {Promise<void>} - A Promise that resolves once the upload process is complete.
 * @throws {Error} - Throws an error if there is an issue with the upload process.
 */

export const handleUpload = async (event) => {
  event.preventDefault();

  const file = document.querySelector("#gif-upload").files[0];

  if (!file) return;

  try {
    const gif = await postUploadedGif(file);

    addUploaded(gif.id);

    const uploadedGifs = getUploaded();

    const gifId = uploadedGifs[0];
    const fetchedGif = await getGifsById(gifId);

    q(CONTAINER_SELECTOR).innerHTML = toUploadView(fetchedGif);
  } catch (error) {
    console.error("Error uploading gif:", error);
  }
};
