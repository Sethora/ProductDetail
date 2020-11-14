import React, { useState } from 'react';
import Tab from '../tab';
import TabsStyles from './TabsStyles';

const Tabs = (props) => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <TabsStyles>
      {
        [1, 2, 3, 4, 5].map((el, index) => <Tab
          value={el}
          click={(selection) => setSelectedTab(selection)}
          selected={selectedTab}
        />)
      }
    </TabsStyles>
  );
};

export default Tabs;