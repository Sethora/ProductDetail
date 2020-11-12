import React from 'react';
import LeftArrowStyles from './LeftArrowStyles';
import { leftArrow } from '../../../assets/images';

const LeftArrow = (props) => {
  return (
    <LeftArrowStyles id="right" onClick={() => props.slide()}>
      <img className="icons" src={leftArrow} />
    </LeftArrowStyles>
  );
};

export default LeftArrow;