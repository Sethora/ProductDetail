import React, { useState } from 'react';
import Tab from '../tab';
import TabsStyles from './TabsStyles';
import Section from '../section';

const Tabs = (props) => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <TabsStyles>
      <div className="tabs">
        {
          ['Details', 'How to Use', 'Ingredients', 'About te Brand', 'Shipping & Returns'].map((el, index) => <Tab
            key={`tabland-${el}`}
            value={el}
            position={index}
            click={(selection) => setSelectedTab(selection)}
            selected={selectedTab}
          />)
        }
      </div>
      <Section />
    </TabsStyles>
  );
};

export default Tabs;