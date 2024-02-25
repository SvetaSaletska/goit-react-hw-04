import { useState } from "react";
import axios from "axios";
import "../App/App.module.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { Loader } from "../Loader/Loader";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { LoadMoreBtn } from "../LoadMoreBtn/LoadMoreBtn";

export const App = () => {
  const accessKey = "l4xYo5foTcEtYf4LKVHijcpD9g7msckFKhsP7uMi2GA";
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchImages = async (newQuery) => {
    setQuery(newQuery);
    // setError(false);
    // setLoading(true);
    setArticles([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function fetchData() {
      try {
        setError(false);
        setLoading(true);
        // setArticles([]);
        const { data } = await axios.get(
          `https://api.unsplash.com/search/photos?client_id=${accessKey}&page=1&query=${query}&per_page=12`
        );

        // setArticles(data.results);

        setArticles((prevArticles) => [...prevArticles, ...data.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }

      const response = await axios.get(
        `https://api.unsplash.com/photos/?client_id=${accessKey}`
      );
      setArticles(response.data.hits);
    }
    fetchData();
  }, [query, page]);

  return (
    <div>
      <SearchBar onSearch={searchImages} />
      {/* {error && <b>Oops, there was an error, please try reloading 😭</b>} */}
      {error && <ErrorMessage />}

      {loading && <Loader />}

      <ImageGallery items={articles} />
      <LoadMoreBtn onClick={handleLoadMore} />
    </div>
  );
};
