let uploadedGifs = JSON.parse(localStorage.getItem('uploaded')) || [];

export const addUploaded = (gifId) => {
    if (uploadedGifs.includes(gifId)) {
        // GIF has already been added to favorites
        return;
    }

    uploadedGifs.push(gifId);
    localStorage.setItem('uploaded', JSON.stringify(uploadedGifs));
};

export const removeUploaded = (gifId) => {
    uploadedGifs = uploadedGifs.filter(id => id !== gifId);
    localStorage.setItem('uploaded', JSON.stringify(uploadedGifs));
};

export const getUploaded = () => [...uploadedGifs];