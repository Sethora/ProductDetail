import React, { Component } from 'react';
import PreviewStyles from './PreviewStyles';
import Carousel from '../../components/carousel/outer-carousel';
import { pic1, pic2, pic3, pic4 } from '../../assets/images';


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

  render() {
    const { photos, indexSelected } = this.state;
    return (
      <PreviewStyles>
        <img className="img" src={photos[indexSelected]} />
        <Carousel
          photos={photos}
          click={this.imagePreviewHandler.bind(this)}
        />
      </PreviewStyles>
    );
  }
}

export default Preview;