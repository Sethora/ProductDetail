import React from 'react';
import CardStyles from './CardStyles';

const Card = (props) => {
  return (
    <CardStyles width={props.width} height={props.height} ref={props.reference} onScroll={() => props.scroll()}>
      {
        props.cards.map((el, index) => {
          return <div key={index} className="box"></div>
        })
      }
    </CardStyles>
  );
};

export default Card;