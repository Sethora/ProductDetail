import React, { useState, createRef } from 'react';
import InnerCarouselStyles from './InnerCarouselStyles';
import LeftArrow from '../left-arrow';
import RightArrow from '../right-arrow';
import Card from '../card';
import { pic1, pic2, pic3, pic4 } from '../../../assets/images';

export default function InnerCarousel(props) {
  const [selected, setSelected] = useState(0);
  const [horizontalPoint, setHorizontalPoint] = useState(0);
  const [photos, setPhotos] = useState([pic1, pic2, pic3, pic4]);
  const mySlide = createRef();

  const changePicture = () => {
    let newSelected = selected + 1;
    if (newSelected < photos.length) {
      setSelected(newSelected);
    }
  }

  const slideRight = () => {
    let newSelected = selected + 1;
    if (newSelected < photos.length) {
      setSelected(newSelected);
    }
    if (horizontalPoint < 1200) {
      setHorizontalPoint((state) => state + 50);
      mySlide.current.scrollLeft = horizontalPoint;
    }
  };
  const slideLeft = () => {
    let newSelected = selected - 1;
    if (newSelected >= 0) {
      setSelected(newSelected);
    }
    if (horizontalPoint > 0) {
      setHorizontalPoint((state) => state - 50);
      mySlide.current.scrollLeft = horizontalPoint;
    }
  };
  const onScroll = () => {
    setHorizontalPoint(mySlide.current.scrollLeft);
  };
  const onClick = (position) => {
    setSelected(position);
  };

  return {
    children: (
      <InnerCarouselStyles>
        <div className="mainWrapper">
          <div className='one'>
            <LeftArrow
              height={44}
              width={34}
              slide={slideLeft}
            />
          </div>
          <img
            src={photos[selected]}
            className="image"
          />
          <div className='two'>
            <RightArrow
              height={48}
              width={32}
              slide={slideRight}
            />
          </div>
        </div>
        <div className="divider"></div>
        <div className="secondaryWrapper">
          <Card
            reference={mySlide}
            cards={photos}
            scroll={onScroll}
            click={onClick}
            height={80}
            width={74}
          />
        </div>
      </InnerCarouselStyles>
    )
  };
}