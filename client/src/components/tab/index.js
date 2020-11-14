import React from 'react';
import TabStyles from './TabStyles';

const Tab = (props) => {
  const { selected, value, click } = props;
  console.log(selected)
  console.log(value)
  return (
    <TabStyles
      onClick={() => click(value)}
    >
      <div className={(selected === value) ? 'clicked' : 'outer'}>
        How To use
      </div>
    </TabStyles>
  );
};

export default Tab;