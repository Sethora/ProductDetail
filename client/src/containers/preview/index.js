import React, { Component } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import PreviewStyles from './PreviewStyles';
import Carousel from '../../components/carousel/outer-carousel';
import InnerCarousel from '../../components/carousel/inner-carousel';
import { useModalContext } from '../../components/modal';

class Preview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      indexSelected: 0,
      previousIndex: 0
    };

  }

  componentDidUpdate(prevProps) {
    if (this.props.product.images !== undefined && (this.state.photos.length !== this.props.product.images.length)) {
      this.setState({ photos: this.props.product.images });
    }
  }

  imagePreviewHandler(indexSelected) {
    this.setState({ indexSelected, previousIndex: indexSelected });
  }

  onEnterHandler(index) {
    if (this.state.indexSelected !== index) {
      this.setState({ previousIndex: this.state.indexSelected, indexSelected: index });
    }
  }
  onLeaveHandler() {
    this.setState({ indexSelected: this.state.previousIndex });
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
          enter={this.onEnterHandler.bind(this)}
          leave={this.onLeaveHandler.bind(this)}
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
    <div
      className="img"
      onClick={() => openModal(InnerCarousel)}
    >
      <ReactImageMagnify {...{
        smallImage: {
          src: `${props.preview}`,
          height: 500,
          width: 440
        },
        largeImage: {
          src: `${props.preview}`,
          width: 1200,
          height: 1800
        }
      }} />
    </div>
  );
};

export default Preview;