import css from "../SearchBar/SearchBar.module.css";
import { CiSearch } from "react-icons/ci";

export const SearchBar = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(e.target.elements.query.value);
    e.target.reset();
  };

  return (
    <header>
      <form className={css.form} onSubmit={handleSubmit}>
        <label htmlFor={id}>
          <button type="submit" className={css.btn}>
            <CiSearch className={css.icon} />
          </button>
        </label>
        <input
          className={css.input}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
    // <form onSubmit={handleSubmit}>
    //   <input type="text" name="query" />
    //   <button type="submit">Search</button>
    // </form>
  );
};
