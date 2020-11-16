import React from 'react';
import DetailStyles from './DetailStyles';

const Detail = (props) => {
  return (
    <DetailStyles>
      <p><span>{props.title} </span>{props.text}</p>
    </DetailStyles>
  );
};

export default Detail;