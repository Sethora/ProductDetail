import React from 'react';
import SectionStyles from './SectionStyles';
import Detail from '../detail';

const Section = (props) => {
  return (
    <SectionStyles>
      {
        (props.section instanceof Object) ? Object.entries(props.section).map(([key, value], index) => <Detail
          key={`indexing-${index}`}
          title={`${key}:`}
          text={value}
        />) : <Detail
            title={''}
            text={props.section}
          />
      }
    </SectionStyles>
  );
};

export default Section;