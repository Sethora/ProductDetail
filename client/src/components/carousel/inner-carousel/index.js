import React, { useState } from 'react';
import InnerCarouselStyles from './InnerCarouselStyles';
import LeftArrow from '../left-arrow';
import RightArrow from '../right-arrow';
import { pic4, pic2 } from '../../../assets/images';

export default function InnerCarousel(props) {
  return {
    children: (
      <InnerCarouselStyles>
        <div class="mainWrapper">
          <div className='one'>
            <LeftArrow
              height={44}
              width={34}
            />
          </div>
          <img className="image" src={pic2} />
          <div className='two'>
            <RightArrow
              height={48}
              width={32}
            />
          </div>
        </div>
        <div className="divider"></div>
        <div className="secondaryWrapper"></div>
      </InnerCarouselStyles>
    )
  };
}