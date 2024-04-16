import {
  ABOUT,
  UPLOAD,
  UPLOADED,
  CONTAINER_SELECTOR,
  FAVORITES,
  HOME,
  LIMIT_GIFS,
} from "../common/constants.js";
import { toHomeView } from "../views/home-view.js";
import { q, setActiveNav } from "./helpers.js";
import { getFavorites } from "../data/favorites.js";
import {
  randomGif,
  fetchTrendingGifs,
  getGifsById,
} from "../data/fetch-gifs.js";
import { toDetailedGifInfo, toSingleGifView } from "../views/gifs-view.js";
import { toFavoritesView } from "../views/favorites-view.js";
import { toUploadView } from "../views/upload-view.js";
import { getUploaded } from "../data/uploaded-gifs.js";
import { toAboutView } from "../views/about-view.js";

/**
 * Loads the specified page and returns the rendered content.
 * @param {string} page - The page to load.
 * @returns {HTMLElement|null} The rendered content of the page, or null if the page is not found.
 */
export const loadPage = (page = "") => {
  switch (page) {
    case HOME:
      setActiveNav(HOME);
      return renderHome();

    case UPLOAD:
      setActiveNav(UPLOAD);
      return renderUploadPage();

    case UPLOADED:
      setActiveNav(UPLOADED);
      return renderUploadedPage();

    case FAVORITES:
      setActiveNav(FAVORITES);
      return renderFavorites();

    case ABOUT:
      setActiveNav(ABOUT);
      return renderAbout();

    default:
      return null;
  }
};

/**
 * Renders the details of a GIF.
 * @param {string|null} id - The ID of the GIF to render details for. If null, renders the default GIF.
 * @returns {Promise<void>} - A promise that resolves when the GIF details have been rendered.
 */
export const renderGifDetails = async (id = null) => {
  try {
    const gif = await getGifsById(id);
    setActiveNav();
    q(CONTAINER_SELECTOR).innerHTML = toDetailedGifInfo(gif);
  } catch (error) {
    console.error("Error rendering gif details:", error);
  }
};

/**
 * Renders the home view by fetching trending gifs and updating the container element.
 * @returns {Promise<void>} A promise that resolves when the home view is rendered.
 */
const renderHome = async () => {
  try {
    const data = await fetchTrendingGifs(LIMIT_GIFS);
    q(CONTAINER_SELECTOR).innerHTML = toHomeView(data);
  } catch (error) {
    console.error("Error rendering home:", error);
  }
};

/**
 * Renders the uploaded page with the uploaded gifs.
 */
const renderUploadedPage = () => {
  const uploadedGifs = getUploaded();

  renderSingleGifView(uploadedGifs);
};

/**
 * Renders the upload page.
 */
const renderUploadPage = () => {
  q(CONTAINER_SELECTOR).innerHTML = toUploadView({});
};

/**
 * Renders the favorites view.
 * If there are no favorites, a random GIF is displayed.
 * If there are favorites, the single GIF view is rendered.
 * @returns {Promise<void>} A promise that resolves when the rendering is complete.
 */
const renderFavorites = async () => {
  try {
    const favorites = getFavorites();

    if (favorites.length === 0) {
      const random = await randomGif();

      q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(random);
    } else {
      renderSingleGifView(favorites);
    }
  } catch (error) {
    console.error("Error rendering favorites:", error);
  }
};

/**
 * Renders the about view by updating the HTML content of the container element.
 */
const renderAbout = () => {
  q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};

/**
 * Renders a single GIF view based on the provided storage key.
 * @param {Array<string>} storageKey - An array of GIF IDs to render.
 * @returns {Promise<void>} A promise that resolves when the GIF view is rendered.
 */
export const renderSingleGifView = async (storageKey) => {
  const gifPromises = storageKey.map((id) => getGifsById(id));
  const gifs = await Promise.all(gifPromises);
  const html = gifs.map((gif) => toSingleGifView(gif)).join("");
  q(CONTAINER_SELECTOR).innerHTML = html;
};
