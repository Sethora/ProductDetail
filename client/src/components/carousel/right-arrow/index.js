import React from 'react';
import RightArrowStyles from './RightArrowStyles';
import { rightArrow } from '../../../assets/images';

const RightArrow = (props) => {
  return (
    <RightArrowStyles id="right" onClick={() => props.slide()}>
      <img className="icons" src={rightArrow} />
    </RightArrowStyles>
  );
};

export default RightArrow;