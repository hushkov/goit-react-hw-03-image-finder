import PropTypes from 'prop-types';
import s from 'Components/ImageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = ({
  previewImage,
  fullImage,
  name,
  hoistFullImageSource,
}) => {
  return (
    <li
      className={s.ImageGalleryItem}
      onClick={() => hoistFullImageSource(fullImage, name)}
    >
      <img
        src={previewImage}
        alt={name}
        className={s.ImageGalleryItemImage}
        data-fullimage={fullImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  previewImage: PropTypes.string.isRequired,
  fullImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  hoistFullImageSource: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
