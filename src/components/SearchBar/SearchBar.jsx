import css from "../SearchBar/SearchBar.module.css";

export const SearchBar = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(e.target.elements.query.value);
    e.target.reset();
  };

  return (
    <header>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
    // <form onSubmit={handleSubmit}>
    //   <input type="text" name="query" />
    //   <button type="submit">Search</button>
    // </form>
  );
};
