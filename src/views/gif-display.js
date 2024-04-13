

export const displayGifs = (gifs, containerSelector) => {
    const container = document.querySelector(containerSelector);
    container.innerHTML = ''; 
    gifs.forEach(gif => {
      const img = document.createElement('img');
      img.src = gif.images.original.url;
      container.appendChild(img);
    });
  };
