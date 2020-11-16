import React, { Component } from 'react';
import PreviewStyles from './PreviewStyles';
import Carousel from '../../components/carousel/outer-carousel';
import InnerCarousel from '../../components/carousel/inner-carousel';
import { useModalContext } from '../../components/modal';

class Preview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      indexSelected: 0
    };

  }

  componentDidUpdate(prevProps) {
    if (this.props.product.images !== undefined && (this.state.photos.length !== this.props.product.images.length)) {
      this.setState({ photos: this.props.product.images });
    }
  }

  imagePreviewHandler(indexSelected) {
    this.setState({ indexSelected });
  }

  render() {
    const { photos, indexSelected } = this.state;
    return (
      <PreviewStyles>
        <ImgInner
          photos={photos}
          preview={photos[indexSelected]}
          selected={indexSelected}
        />
        <Carousel
          photos={photos}
          click={this.imagePreviewHandler.bind(this)}
        />
      </PreviewStyles>
    );
  }
}

const ImgInner = (props) => {
  const { openModal } = useModalContext();
  InnerCarousel.photos = props.photos;
  InnerCarousel.selected = props.selected;
  return (
    <img
      className="img"
      onClick={() => openModal(InnerCarousel)}
      src={props.preview}
    />
  );
};

export default Preview;