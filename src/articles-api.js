// src/articles-api.js
import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

// export const fetchArticlesWithTopic = async (topic) => {
//   const response = axios.get(`/search?query=${topic}`);
//   return response.data.hits;
// };

export const fetchImages = async (searchQuery, currentPage) => {
  const response = await axios.get("/search", {
    params: {
      client_id: "czbUvZULGNNC7UsIcW08Kp2aJWei_H3EibNIqCy4xjg",
      page: currentPage,
      query: searchQuery,
      hitsPerPage: 12,
    },
  });
  return response.data;
};
