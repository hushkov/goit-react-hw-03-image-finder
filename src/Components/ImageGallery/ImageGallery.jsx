import PropTypes from 'prop-types';
import ImageGalleryItem from 'Components/ImageGalleryItem';
import s from 'Components/ImageGallery/ImageGallery.module.css';

const ImageGallery = ({ collection, hoistFullImageSource }) => {
  return (
    <ul className={s.ImageGallery}>
      {collection.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id * Math.ceil(Math.random() * 300)}
          previewImage={webformatURL}
          fullImage={largeImageURL}
          name={tags}
          hoistFullImageSource={hoistFullImageSource}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  collection: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  hoistFullImageSource: PropTypes.func.isRequired,
};

export default ImageGallery;
