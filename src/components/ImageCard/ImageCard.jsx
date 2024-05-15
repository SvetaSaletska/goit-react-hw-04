import css from "../ImageCard/ImageCard.module.css";

export const ImageCard = ({ url, altName, likes }) => {
  return (
    <div className={css.image_card}>
      <img src={url} alt={altName} className={css.image} />
      <p>Likes: {likes}</p>
    </div>
  );
};
