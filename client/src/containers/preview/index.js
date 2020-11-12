import React, { Component } from 'react';
import PreviewStyles from './PreviewStyles';
import Carousel from '../../components/carousel/outer-carousel';
import { pic1, pic4 } from '../../assets/images';


class Preview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PreviewStyles>
        <img className="img" src={pic4} />
        <Carousel />
      </PreviewStyles>
    );
  }
}

export default Preview;