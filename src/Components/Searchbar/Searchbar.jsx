import PropTypes from 'prop-types';
import s from 'Components/Searchbar/Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = eve => {
    eve.preventDefault();
    const query = eve.currentTarget.query.value;

    onSubmit(query);
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
