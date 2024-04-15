export const displayGifs = (gifs, containerSelector) => {
  const container = document.querySelector(containerSelector);
  container.innerHTML = gifs.map(gif => `
    <div class="gif-data" id="${gif.id}">
      <button class="details-btn" data-id="${gif.id}">Show Details</button>
      <img src="${gif.images.original.url}" alt="${gif.title}">
    </div>
  `).join('');
};