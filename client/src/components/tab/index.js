import React from 'react';
import TabStyles from './TabStyles';

const Tab = (props) => {
  const { selected, value, click } = props;
  const clicked = selected === value;
  return (
    <TabStyles
      onClick={() => click(value)}
      position={props.position}
    >
      <div className={clicked ? 'clicked' : 'outer'}>
        {props.value}
      </div>
      {(clicked) ? <div className="divider"></div> : null}
    </TabStyles>
  );
};

export default Tab;