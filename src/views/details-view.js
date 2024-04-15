export const toGifDetailed = (gif) => `
  <div class="gif-detailed" style="position: relative; text-align: center; padding-top: 20px;">
    <img src="${gif.images.original.url}" alt="${gif.title}" style="margin-top: 50px; display: block; margin-left: auto; margin-right: auto;">
    <button class="details-toggle-btn" style="position: absolute; top: 20px; left: 10px;">Show Details</button>
    <div class="gif-info" style="display: none;">
      <p>Title: ${gif.title}</p>
      <p>Rating: ${gif.rating}</p>
      <p>Uploaded By: ${gif.user ? gif.user.display_name : 'Anonymous'}</p>
      <p>Source: ${gif.source}</p>
      <p>Uploaded: ${gif.import_datetime}</p>
      <p>View on Giphy: <a href="${gif.url}" target="_blank">${gif.url}</a></p>
    </div>
  </div>
`;