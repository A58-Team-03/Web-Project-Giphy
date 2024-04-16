let uploadedGifs = JSON.parse(localStorage.getItem('uploaded')) || [];

/**
 * Adds a GIF to the uploadedGifs array and stores it in the local storage.
 * @param {string} gifId - The ID of the GIF to be added.
 */
export const addUploaded = (gifId) => {
    if (uploadedGifs.includes(gifId)) {
        // GIF has already been added to favorites
        return;
    }

    uploadedGifs.push(gifId);
    localStorage.setItem('uploaded', JSON.stringify(uploadedGifs));
};

/**
 * Removes the uploaded GIF with the specified ID from the list of uploaded GIFs.
 * Updates the localStorage with the updated list of uploaded GIFs.
 *
 * @param {string} gifId - The ID of the GIF to be removed.
 */
export const removeUploaded = (gifId) => {
    uploadedGifs = uploadedGifs.filter(id => id !== gifId);
    localStorage.setItem('uploaded', JSON.stringify(uploadedGifs));
};

export const getUploaded = () => [...uploadedGifs];