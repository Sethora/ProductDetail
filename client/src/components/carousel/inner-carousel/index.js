import React, { useState, createRef } from 'react';
import InnerCarouselStyles from './InnerCarouselStyles';
import Arrow from '../arrow';
import Card from '../card';
import $ from 'jquery';

export default function InnerCarousel(props) {
  const mySlide = createRef();
  const [x, setX] = useState(0);
  const [references, setReferences] = useState([]);
  const [direction, setDirection] = useState(false);
  const [photos, setPhotos] = useState(InnerCarousel.photos);
  const [selected, setSelected] = useState(InnerCarousel.selected);
  const [previousIndex, setPreviousIndex] = useState(InnerCarousel.selected);

  const changePicture = () => {
    let newSelected = selected + 1;
    if (newSelected < photos.length) {
      setSelected(newSelected);
    }
  }

  const slideRight = () => {
    if (selected < photos.length - 1) {
      setSelected(selected + 1);
      setX(x - 660);
    }
  };
  const slideLeft = () => {
    if (selected > 0) {
      setX(x + 660);
      setSelected(selected - 1);
    }
  };
  const onClick = (position) => {
    setSelected(position);
    setPreviousIndex(position);
    $(references[position])[0].scrollIntoView();
  };
  const onEnterHandler = (index) => {
    setPreviousIndex(selected);
    $(references[index])[0].scrollIntoView();
  };
  const onLeaveHandler = () => {
    setSelected(previousIndex);
    $(references[previousIndex])[0].scrollIntoView();
  };


  return {
    children: (
      <InnerCarouselStyles x={x}>
        <div className="mainWrapper">
          <div className='one container'>
            <Arrow
              height={44}
              width={34}
              side={'left'}
              slide={slideLeft}
            />
          </div>
          <div className="photoContainer">
            {
              photos.map((photo, index) => (
                <img
                  src={photo}
                  className={'image'}
                  key={`index-${index}image`}
                  ref={(ref) => {
                    if (references.length < photos.length) {
                      references.push(ref);
                    }
                  }}
                />
              ))
            }
          </div>
          <div className='two container'>
            <Arrow
              height={48}
              width={32}
              side={'right'}
              slide={slideRight}
            />
          </div>
        </div>
        <div className="divider"></div>
        <div className="secondaryWrapper">
          <Card
            height={80}
            width={74}
            cards={photos}
            click={onClick}
            reference={mySlide}
            direction={direction}
            leave={onLeaveHandler}
            enter={onEnterHandler}
          />
        </div>
      </InnerCarouselStyles>
    )
  };
}