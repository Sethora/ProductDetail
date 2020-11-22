import React from 'react';
import LeftArrowStyles from './LeftArrowStyles';
import { leftArrow } from '../../../assets/images';

const LeftArrow = (props) => {
  return (
    <LeftArrowStyles
      id="right"
      className="lefty"
      onClick={() => props.slide()}
      height={props.height}
      width={props.width}
    >
      <img className="icons" src={"https://grubini-images.s3.amazonaws.com/icons/leftArrow.png"} />
    </LeftArrowStyles>
  );
};

export default LeftArrow;