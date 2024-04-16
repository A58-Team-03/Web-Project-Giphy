import { UPLOAD_URL, API_KEY } from "../common/constants.js";

/**
 * Uploads a GIF file to the server.
 * @param {File} file - The GIF file to be uploaded.
 * @returns {Promise<Object>} - A promise that resolves to the uploaded GIF data.
 * @throws {Error} - If there is an error uploading the GIF.
 */
export const postUploadedGif = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${UPLOAD_URL}?api_key=${API_KEY}`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error uploading GIF:", error);
    throw error;
  }
};
