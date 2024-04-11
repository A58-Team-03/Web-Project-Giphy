export const displayGifs = (gifs) => {
  const gifContainer = document.getElementById("trending-gifs");
  gifContainer.innerHTML = "";
  gifs.forEach((gif) => {
    const img = document.createElement("img");
    img.src = gif.images.original.url;
    gifContainer.appendChild(img);
    img.addEventListener("click", () => displayGifDetails(gif.id));
  });
};
