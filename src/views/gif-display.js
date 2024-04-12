

export const displayGifs = (gifs, containerSelector) => {
    const container = document.querySelector(containerSelector);
    container.innerHTML = ''; 
    gifs.forEach(gif => {
      const img = document.createElement('img');
      img.src = gif.images.original.url;
      container.appendChild(img);
    });
  };
  export const toGifDetailed = (gifDetails) => {
    return `
        <div>
            <h2>${gifDetails.title}</h2>
            <img src="${gifDetails.images.original.url}" alt="${gifDetails.title}" />
            <p>Size: ${Math.round(gifDetails.images.original.size / 1024)} KB</p>
            <p>Frames: ${gifDetails.images.original.frames}</p>
            <p>Uploaded: ${gifDetails.import_datetime}</p>
            <p>Rating: ${gifDetails.rating}</p>
        </div>
    `;
  };