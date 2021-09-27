import React, { useCallback, useEffect, useState } from 'react';
import { Elements } from 'react-flow-renderer';
import { FiPlus, FiX } from 'react-icons/fi';
import { useElements } from '../../hooks/elements';

import { Container, Tab, AddTab } from './styles';

interface Tab {
  name: string;
  tabElements: Elements;
}

const TabsBar: React.FC = () => {
  const { elements, setElements } = useElements();
  const [tabs, setTabs] = useState<Tab[]>([]);
  const [selectedTab, setSelectedTab] = useState<Tab>({} as Tab);
  const [lastTab, setLastTab] = useState<Tab>({} as Tab);

  useEffect(() => {
    setTabs([{ name: 'Tab 1', tabElements: elements }]);
    setSelectedTab({ name: 'Tab 1', tabElements: elements });
  }, []);

  const handleTabClick = useCallback(
    (tab: Tab) => {
      setLastTab(selectedTab);
      setElements(tab.tabElements);
      setSelectedTab(tab);
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
      { name: `Tab ${tabs.length + 1}`, tabElements: [], isSelected: false },
    ]);
  }, [tabs]);

  useEffect(() => {
    if (tabs.length === 1) {
      setSelectedTab(tabs[0]);
    }
  }, [tabs]);

  useEffect(() => {
    setTabs(state =>
      state.map(tab => {
        if (tab.name === selectedTab.name) {
          return {
            ...tab,
            tabElements: elements,
          };
        }

        return tab;
      }),
    );
  }, [elements, selectedTab]);

  return (
    <Container>
      {tabs.map((tab, index) => (
        <Tab key={tab.name} isSelected={selectedTab.name === tab.name}>
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
