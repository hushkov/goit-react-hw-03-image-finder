import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import s from 'Components/Modal/Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleBackdropClick = eve => {
    if (eve.target === eve.currentTarget) {
      this.props.onClose();
    }
  };

  handleKeyDown = eve => {
    if (eve.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { source, name } = this.props;

    return createPortal(
      <div className={s.Overlay} onClick={this.handleBackdropClick}>
        <div className={s.Modal}>
          <img src={source} alt={name} />
        </div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  source: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Modal;
