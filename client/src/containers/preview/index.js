import React, { Component } from 'react';
import PreviewStyles from './PreviewStyles';
import Carousel from '../../components/carousel/outer-carousel';
import { pic1, pic2, pic3, pic4 } from '../../assets/images';
import ModalExample from './ModalExample';
import InnerCarousel from '../../components/carousel/inner-carousel';
import { useModalContext } from '../../components/modal';


class Preview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [pic1, pic2, pic3, pic4],
      indexSelected: 0
    };
  }

  imagePreviewHandler(indexSelected) {
    this.setState({ indexSelected });
  }
  modalHandler() {
    console.log('hi mang')
  }

  render() {
    const { photos, indexSelected } = this.state;
    return (
      <PreviewStyles>
        <img
          className="img"
          onClick={() => this.modalHandler()}
          src={photos[indexSelected]}
        />
        <Carousel
          photos={photos}
          click={this.imagePreviewHandler.bind(this)}
        />
        <AppInner />
      </PreviewStyles>
    );
  }
}

const AppInner = () => {
  const { openModal } = useModalContext();
  return (
    <div className="App">
      <button
        className="btn-primary"
        onClick={() => openModal(InnerCarousel)}
      >Open Modal</button>
    </div>
  );
};

export default Preview;