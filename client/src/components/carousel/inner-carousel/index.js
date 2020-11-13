import React, { useState } from 'react';
import InnerCarouselStyles from './InnerCarouselStyles';
import LeftArrow from '../left-arrow';
import RightArrow from '../right-arrow';
import { pic4 } from '../../../assets/images';

export default function InnerCarousel(props) {
  return {
    children: (
      <InnerCarouselStyles>
        <div className='one'>
          <LeftArrow />
        </div>
        <img className="image" src={pic4} />
        <div className='two'>
          <RightArrow />
        </div>
      </InnerCarouselStyles>
    )
  };
}