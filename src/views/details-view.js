export const toGifDetailed = (gif) => `
  <div class="gif-detailed">
    <div class="poster">
      <img src="${gif.images.original.url}" alt="${gif.title}">
    </div>
    <div class="gif-info">
      <p>Title: ${gif.title}</p>
      <p>Rating: ${gif.rating}</p>
      <p>Uploaded By: ${gif.user ? gif.user.display_name : 'Anonymous'}</p>
      <p>Source: ${gif.source}</p>
      <p>Description: ${gif.alt_text}</p>
      <p>View on Giphy: <a href="${gif.url}" target="_blank">${gif.url}</a></p>
    </div>
  </div>
`;
