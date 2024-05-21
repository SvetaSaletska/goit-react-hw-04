import css from "../SearchBar/SearchBar.module.css";
import { CiSearch } from "react-icons/ci";
import toast from "react-hot-toast";

export const SearchBar = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.elements.query.value.trim() === "") {
      toast.error("EMPTY STRING");
      return;
    }

    onSearch(e.target.elements.query.value);
    e.target.reset();
  };

  return (
    <header>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.wrap}>
          <input
            className={css.input}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit" className={css.btn}>
            <CiSearch className={css.icon} />
          </button>
        </div>
      </form>
    </header>
    // <form onSubmit={handleSubmit}>
    //   <input type="text" name="query" />
    //   <button type="submit">Search</button>
    // </form>
  );
};
