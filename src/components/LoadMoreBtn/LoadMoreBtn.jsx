import css from "../LoadMoreBtn/LoadMoreBtn.module.css";

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={css.button} onClick={onClick}>
      Load More
    </button>
  );
};
