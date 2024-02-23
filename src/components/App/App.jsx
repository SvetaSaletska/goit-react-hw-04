import { useState } from "react";
import axios from "axios";
import "../App/App.module.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { ImageGallery } from "../ImageGallery/ImageGallery";

export const App = () => {
  const accessKey = "l4xYo5foTcEtYf4LKVHijcpD9g7msckFKhsP7uMi2GA";
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchImages = async (query) => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?client_id=${accessKey}&page=1&query=${query}&per_page=12`
      );
      setArticles(response.data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   async function fetchArticles() {
  //     const response = await axios.get(
  //       `https://api.unsplash.com/photos/?client_id=${accessKey}`
  //     );
  //     setArticles(response.data.hits);
  //   }
  //   fetchArticles();
  // }, []);

  return (
    <div>
      <SearchBar onSearch={searchImages} />
      {error && <b>Oops, there was an error, please try reloading 😭</b>}
      {loading && <b>Loading articles, please wait...</b>}

      <ImageGallery items={articles} />
    </div>
  );
};
