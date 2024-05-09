import { ImageCard } from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";

export const ImageGallery = ({ items, onSelectedcard }) => {
  return (
    <ul className={css.list}>
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
