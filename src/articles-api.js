import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImages = async (query, page) => {
  console.log(query);
  const response = await axios.get("/search/photos", {
    params: {
      client_id: "czbUvZULGNNC7UsIcW08Kp2aJWei_H3EibNIqCy4xjg",
      query,
      page,
      hitsPerPage: 12,
      orientation: "landscape",
    },
  });
  return response.data.results;
};
