import { ABOUT, FAVORITES, HOME, UPLOAD } from "./common/constants.js";
import { toggleFavoriteStatus } from "./events/favorites-events.js";
import { q, qs } from "./events/helpers.js";
import { loadPage, renderGifDetails } from "./events/navigation-events.js";
import { renderSearchItems } from "./events/search-events.js";
import { handleUpload } from "./events/upload-events.js";

document.addEventListener("DOMContentLoaded", () => {
  // add global listener
  document.addEventListener("click", (event) => {
    // nav events
    if (event.target.classList.contains("nav-link")) {
      loadPage(event.target.getAttribute("data-page"));
    }

    // show upload events
    if (event.target.classList.contains("upload-gif")) {
      handleUpload(event);
    }

    // show gif details events
    if (event.target.classList.contains("gif")) {
      renderGifDetails(event.target.getAttribute("gif-id"));
    }

    // toggle favorite event
    if (event.target.classList.contains("favorite")) {
      toggleFavoriteStatus(event.target.getAttribute("gif-id"));
    }

    if (event.target.classList.contains("fa-search")) {
      renderSearchItems(q("input#search-input").value);
    }
  });

  // search events
  q(".search-container").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      renderSearchItems(e.target.value);
    }
  });

  loadPage(HOME);

  const navItems = qs(".link-item");
  navItems.forEach((navItem, index) => {
    navItem.addEventListener("click", () => {
      document.querySelector(".active").classList.remove("active");
      navItem.classList.add("active");
      const indicator = document.querySelector(".indicator");
      indicator.style.left = `${index * 95 + 48}px`;

      const text = navItem.querySelector(".link-text").textContent;

      switch (true) {
        case text === "Trending":
          loadPage(HOME);
          break;
        case text === "Upload":
          loadPage(UPLOAD);
          break;
        case text === "Favorites":
          loadPage(FAVORITES);
          break;
        case text === "About":
          loadPage(ABOUT);
          break;

        default:
          break;
      }
    });
  });
});
