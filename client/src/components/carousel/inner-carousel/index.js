import React, { useState, createRef } from 'react';
import InnerCarouselStyles from './InnerCarouselStyles';
import LeftArrow from '../left-arrow';
import RightArrow from '../right-arrow';
import Card from '../card';

export default function InnerCarousel(props) {
  const [selected, setSelected] = useState(InnerCarousel.selected);
  const [previousIndex, setPreviousIndex] = useState(InnerCarousel.selected);
  const [horizontalPoint, setHorizontalPoint] = useState(0);
  const [photos, setPhotos] = useState(InnerCarousel.photos);
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
    setPreviousIndex(position);
  };
  const onEnterHandler = (index) => {
    setPreviousIndex(selected);
    setSelected(index);
  };
  const onLeaveHandler = () => {
    setSelected(previousIndex);
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
            leave={onLeaveHandler}
            enter={onEnterHandler}
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