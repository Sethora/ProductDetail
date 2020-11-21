import React from 'react';
import DetailStyles from './DetailStyles';

const Detail = (props) => {
  return (
    <DetailStyles>
      <p className="fan"><span data-testid="spantag">{props.title} </span>{props.text}</p>
    </DetailStyles>
  );
};

export default Detail;