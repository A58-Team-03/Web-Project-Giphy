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

export const renderGifDetails = async (id = null) => {
  try {
    const gif = await getGifsById(id);
    setActiveNav();
    q(CONTAINER_SELECTOR).innerHTML = toDetailedGifInfo(gif);
  } catch (error) {
    console.error("Error rendering gif details:", error);
  }
};

const renderHome = async () => {
  try {
    const data = await fetchTrendingGifs(LIMIT_GIFS);
    q(CONTAINER_SELECTOR).innerHTML = toHomeView(data);
  } catch (error) {
    console.error("Error rendering home:", error);
  }
};

const renderUploadedPage = () => {
  const uploadedGifs = getUploaded();

  renderSingleGifView(uploadedGifs);
};

const renderUploadPage = () => {
  q(CONTAINER_SELECTOR).innerHTML = toUploadView({});
};

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

const renderAbout = () => {
  q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};

export const renderSingleGifView = async (storageKey) => {
  const gifPromises = storageKey.map((id) => getGifsById(id));
  const gifs = await Promise.all(gifPromises);
  const html = gifs.map((gif) => toSingleGifView(gif)).join("");
  q(CONTAINER_SELECTOR).innerHTML = html;
};
