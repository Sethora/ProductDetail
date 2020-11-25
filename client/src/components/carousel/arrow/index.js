import React from 'react';
import ArrowStyles from './ArrowStyles';
import { leftArrow, rightArrow } from '../../../assets/images';

const Arrow = (props) => {
  return (
    <ArrowStyles
      height={props.height}
      width={props.width}
      onClick={() => props.slide(props.side)}
    >
      <img className="icons" src={(props.side === 'right') ? rightArrow : leftArrow} />
    </ArrowStyles>
  );
};

export default Arrow;