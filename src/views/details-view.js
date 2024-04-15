export const toGifDetailed = (gif) => `
  <div class="gif-detailed">
    <div class="poster">
      <img src="${gif.images.original.url}" alt="${gif.title}">
      <button class="details-toggle-btn">Show Details</button>
    </div>
    <div class="gif-info" style="display: none;">
      <p>Title: ${gif.title}</p>
      <p>Rating: ${gif.rating}</p>
      <p>Uploaded By: ${gif.user ? gif.user.display_name : 'Anonymous'}</p>
      <p>Source:$ ${gif.source}</p>
      <p>Uploaded: ${gif.import_datetime}</p>
      
    </div>
  </div>
`;