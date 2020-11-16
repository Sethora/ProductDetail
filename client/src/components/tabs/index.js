import React, { useState, useEffect } from 'react';
import Tab from '../tab';
import TabsStyles from './TabsStyles';
import Section from '../section';

const Tabs = (props) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [sections, setSections] = useState(props.tabs);

  useEffect(() => {
    setSections(props.tabs);
  }, [selectedTab, sections, props]);

  return (
    <TabsStyles>
      <div className="tabs">
        {
          ['Details', 'How to Use', 'Ingredients', 'About the Brand', 'Shipping & Returns'].map((el, index) => <Tab
            key={`tabland-${el}`}
            value={el}
            position={index}
            selected={selectedTab}
            click={(selection) => setSelectedTab(selection)}
          />)
        }
      </div>
      <Section section={sections[selectedTab]} />
    </TabsStyles>
  );
};

export default Tabs;