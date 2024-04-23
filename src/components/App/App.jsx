import { useState, useEffect } from "react";
import "../App/App.module.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { Loader } from "../Loader/Loader";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { LoadMoreBtn } from "../LoadMoreBtn/LoadMoreBtn";
import { fetchImages } from "../../articles-api";

export const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchImages = (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function getImages() {
      try {
        setError(false);
        setLoading(true);
        // const { data } = await axios.get(
        //   `https://api.unsplash.com/search/photos?client_id=${accessKey}&page=1&query=${query}&per_page=12`
        // );

        const data = await fetchImages(query, page);

        setImages((prevImages) => {
          return [...prevImages, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, [query, page]);

  return (
    <div>
      <SearchBar onSearch={searchImages} />
      {error && <ErrorMessage />}
      {loading && <Loader />}
      <ImageGallery items={images} />
      <LoadMoreBtn onClick={handleLoadMore} />
    </div>
  );
};
