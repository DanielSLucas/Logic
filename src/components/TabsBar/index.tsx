import React, { useCallback, useEffect, useState } from 'react';
import { OnLoadParams, Elements } from 'react-flow-renderer';
import { FiPlus, FiX } from 'react-icons/fi';
import { useElements } from '../../hooks/elements';

import { Container, Tab, AddTab } from './styles';

interface Tab {
  name: string;
  tabElements: Elements;
}

interface TabsBarProps {
  rfInstance: OnLoadParams;
}

const TabsBar: React.FC<TabsBarProps> = ({ rfInstance }) => {
  const { elements, setElements } = useElements();
  const [tabs, setTabs] = useState<Tab[]>([
    {
      name: 'Tab 1',
      tabElements: [],
    },
  ]);
  const [selectedTab, setSelectedTab] = useState('Tab 1');
  const [lastTab, setLastTab] = useState('');

  useEffect(() => {
    setTabs(state =>
      state.map(tab => {
        if (tab.name === selectedTab) {
          return {
            ...tab,
            tabElements: rfInstance?.toObject().elements,
          };
        }

        return tab;
      }),
    );
  }, [elements, selectedTab, rfInstance]);

  const handleTabClick = useCallback(
    (tab: Tab) => {
      setLastTab(selectedTab);
      setElements(tab.tabElements);
      setSelectedTab(tab.name);
    },
    [setElements, selectedTab],
  );

  const handleCloseTab = useCallback(
    (tabIndex: number) => {
      setTabs(state =>
        state
          .filter((tab, index) => index !== tabIndex)
          .map((tab, index) => ({ ...tab, name: `Tab ${index + 1}` })),
      );

      setSelectedTab(lastTab);
    },
    [lastTab],
  );

  const handleAddTab = useCallback(() => {
    setTabs(state => [
      ...state,
      {
        name: `Tab ${tabs.length + 1}`,
        tabElements: [],
      },
    ]);
  }, [tabs]);

  useEffect(() => {
    if (tabs.length === 1) {
      setSelectedTab(tabs[0].name);
    }
    if (tabs.length === 0) {
      setSelectedTab('');
      setTabs([
        {
          name: 'Tab 1',
          tabElements: [],
        },
      ]);
    }
  }, [tabs]);

  return (
    <Container>
      {tabs.map((tab, index) => (
        <Tab key={tab.name} isSelected={selectedTab === tab.name}>
          <button type="button" onClick={() => handleTabClick(tab)}>
            {tab.name}
          </button>
          <button type="button" onClick={() => handleCloseTab(index)}>
            <FiX />
          </button>
        </Tab>
      ))}

      <AddTab type="button" onClick={handleAddTab}>
        <FiPlus />
      </AddTab>
    </Container>
  );
};

export default TabsBar;
