let favorites = JSON.parse(localStorage.getItem("favorites")) || [];


/**
 * Adds a GIF ID to the favorites list and stores it in local storage.
 * @param {string} gifId - The ID of the GIF to be added to favorites.
 */
export const addFavorite = (gifId) => {
  if (favorites.includes(gifId)) {
    return;
  }

  favorites.push(gifId);
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

/**
 * Removes a favorite GIF from the favorites list and updates the local storage.
 * @param {string} gifId - The ID of the GIF to be removed.
 */
export const removeFavorite = (gifId) => {
  favorites = favorites.filter((id) => id !== gifId);
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const getFavorites = () => [...favorites];
