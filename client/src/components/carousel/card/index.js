import React, { useState } from 'react';
import CardStyles from './CardStyles';

const Card = (props) => {
  return (
    <CardStyles
      width={props.width}
      height={props.height}
      ref={props.reference}
    >
      {
        props.cards.map((el, index) => {
          return <img
            key={index}
            src={el}
            onMouseEnter={() => props.enter(index)}
            onMouseLeave={() => props.leave()}
            className={`box ${props.styling}`}
            onClick={() => props.click(index)}
          />
        })
      }
    </CardStyles>
  );
};

export default Card;