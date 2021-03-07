import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import s from 'App.module.css';
import imageApi from 'Composables/useApi';
import ImageGallery from 'Components/ImageGallery';
import Searchbar from 'Components/Searchbar';
import Button from 'Components/Button';
import Modal from 'Components/Modal';

class App extends Component {
  state = {
    collection: [],
    searchQuery: '',
    currentPage: 1,
    fullImage: null,
    isLoading: false,
    showModal: false,
    altName: '',
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, currentPage } = this.state;

    if (prevState.searchQuery !== searchQuery) {
      this.setState({ collection: [], currentPage: 1 });
      this.getCollection(searchQuery, currentPage);
    }
  }

  getCollection = async (query, page) => {
    try {
      this.setState({ isLoading: true });
      const res = await imageApi(query, page);
      const minimizedCollection = this.minimizeCollection(res);
      this.setState(prevState => ({
        collection: [...prevState.collection, ...minimizedCollection],
        currentPage: prevState.currentPage + 1,
      }));
    } catch (err) {
      this.setState({ error: err.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  loadMore = () => {
    const { searchQuery, currentPage } = this.state;
    this.getCollection(searchQuery, currentPage).then(res => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    });
  };

  onChangeQuery = newQuery => {
    this.setState({ searchQuery: newQuery });
  };

  minimizeCollection = collection => {
    return collection.map(({ id, webformatURL, largeImageURL, tags }) => ({
      id,
      webformatURL,
      largeImageURL,
      tags,
    }));
  };

  handleFullImageSource = (source, name) => {
    this.toggleModal();

    this.setState({
      fullImage: source,
      altName: name,
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { collection, isLoading, showModal, fullImage, altName } = this.state;
    const shouldShowButton = !isLoading && collection.length > 0;

    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery
          collection={collection}
          hoistFullImageSource={this.handleFullImageSource}
        />
        {showModal && (
          <Modal source={fullImage} name={altName} onClose={this.toggleModal} />
        )}
        {shouldShowButton && <Button onClick={this.loadMore} />}
        {isLoading && (
          <Loader
            type="Grid"
            color="#00BFFF"
            height={100}
            width={100}
            className={s.loader}
          />
        )}
      </div>
    );
  }
}

export default App;
