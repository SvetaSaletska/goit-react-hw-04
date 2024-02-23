import { useState } from "react";
import axios from "axios";
import "../App/App.module.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { ImageGallery } from "../ImageGallery/ImageGallery";

export const App = () => {
  const accessKey = "l4xYo5foTcEtYf4LKVHijcpD9g7msckFKhsP7uMi2GA";
  const [articles, setArticles] = useState([]);

  const searchImages = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/?client_id=${accessKey}`
      );
      setArticles(response.data.hits);
    } catch (error) {}
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
      {articles.length > 0 && <ImageGallery />}
    </div>
  );
};
