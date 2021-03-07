import PropTypes from 'prop-types';
import s from 'Components/Button/Button.module.css';

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className={s.Button} type="button">
      Load more...
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
