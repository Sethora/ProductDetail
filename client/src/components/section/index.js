import React from 'react';
import SectionStyles from './SectionStyles';
import Detail from '../detail';

const Section = (props) => {
  return (
    <SectionStyles>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((pos, index) => <Detail />)}
    </SectionStyles>
  );
};

export default Section;