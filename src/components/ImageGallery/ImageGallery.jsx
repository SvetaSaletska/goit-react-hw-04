import { ImageCard } from "../ImageCard/ImageCard";

export const ImageGallery = ({ items, onSelectedcard }) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id} onClick={() => onSelectedcard(item.id)}>
            <ImageCard
              key={item.id}
              url={item.urls.small}
              altName={item.alt_description}
              likes={item.likes}
            />
          </li>
        );
      })}
    </ul>
  );
};
