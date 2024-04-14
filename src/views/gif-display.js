export const displayGifs = (gifs, containerSelector) => {
  const container = document.querySelector(containerSelector);
  container.innerHTML = ''; 
  gifs.forEach(gif => {
    const gifContainer = document.createElement('div');
    gifContainer.classList.add('gif-data');
    gifContainer.id = gif.id; 
    const img = document.createElement('img');
    img.src = gif.images.original.url;
    gifContainer.appendChild(img);
    container.appendChild(gifContainer);
  });
};