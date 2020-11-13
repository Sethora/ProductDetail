import React from 'react';
import CardStyles from './CardStyles';

const Card = (props) => {
  return (
    <CardStyles
      width={props.width}
      height={props.height}
      ref={props.reference}
      onScroll={() => props.scroll()}
    >
      {
        props.cards.map((el, index) => {
          return <img
            key={index}
            src={el}
            className="box"
            onClick={() => props.click(index)}
          />
        })
      }
    </CardStyles>
  );
};

export default Card;