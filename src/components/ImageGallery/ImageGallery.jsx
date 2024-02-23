import { ImageCard } from "../ImageCard/ImageCard";

export const ImageGallery = ({ items }) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <ImageCard
            key={item.id}
            url={item.urls.small}
            altName={item.alt_description}
            likes={item.likes}
          />
        );
      })}
    </ul>
  );
};
