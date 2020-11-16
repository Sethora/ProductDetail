import React from 'react';
import TabStyles from './TabStyles';

const Tab = (props) => {
  const { selected, value, click, position } = props;
  const clicked = selected === position;
  return (
    <TabStyles
      onClick={() => click(props.position)}
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