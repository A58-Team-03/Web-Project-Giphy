// import { API_URL, API_KEY } from '../common/constants.js';

// export const fetchTrendingGifs = () => {
//   return fetch(`${API_URL}/trending?api_key=${API_KEY}&limit=24`)
//     .then(response => response.json())
//     .then(data => {
//       console.log("Trending GIFs Data:", data);
//       return data.data;
//     })
//     .catch(error => {
//       console.error("Error fetching trending gifs:", error);
//       return [];
//     });
// }

// export const fetchSearchGifs = (query) => {
//   return fetch(`${API_URL}/search?api_key=${API_KEY}&q=${query}&limit=24`)
//     .then(response => response.json())
//     .then(data => {
//       console.log("Search GIFs Data:", data);
//       return data.data;
//     })
//     .catch(error => {
//       console.error("Error fetching search results:", error);
//       return [];
//     });
// }

// export const fetchGifDetails = (gifId) => {
//     return fetch(`${API_URL}/${gifId}?api_key=${API_KEY}`)
//         .then(response => response.json())
//         .then(data => data.data)
//         .catch(error => {
//             console.error("Error fetching gif details:", error);
//             return null; // Return null or appropriate error handling
//         });
// };
