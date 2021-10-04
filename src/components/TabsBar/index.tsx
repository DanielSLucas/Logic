import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { OnLoadParams, Elements } from 'react-flow-renderer';
import { FiPlus, FiX } from 'react-icons/fi';
import { v4 as uuid } from 'uuid';
import { useElements } from '../../hooks/elements';

import { Container, Tab, AddTab } from './styles';

interface ITab {
  id: string;
  circuitId?: string;
  name: string;
  tabElements: Elements;
}

interface TabsBarProps {
  rfInstance: OnLoadParams;
}

const firstUuid = uuid();

const TabsBar: React.FC<TabsBarProps> = ({ rfInstance }) => {
  const router = useRouter();
  const { elements, setElements } = useElements();
  const [tabs, setTabs] = useState<ITab[]>([
    {
      id: firstUuid,
      name: 'Tab 1',
      tabElements: [],
    },
  ]);
  const [selectedTab, setSelectedTab] = useState(firstUuid);
  const [lastTab, setLastTab] = useState('');
  const [isShowingInput, setIsShoingInput] = useState(false);

  useEffect(() => {
    setTabs(state =>
      state.map(tab => {
        if (tab.id === selectedTab) {
          return {
            ...tab,
            tabElements: rfInstance?.toObject().elements,
          };
        }

        return tab;
      }),
    );
  }, [elements, selectedTab, rfInstance]);

  useEffect(() => {
    setTabs(state => {
      const selectedTabIndex = state.findIndex(tab => tab.id === selectedTab);

      const newTabs = state.map((tab, index) => {
        if (selectedTabIndex === index) {
          return { ...tab, circuitId: router.query.id as string };
        }
        return tab;
      });

      return newTabs;
    });
  }, [router.query, selectedTab]);

  const handleTabClick = useCallback(
    (tab: ITab) => {
      if (tab.circuitId) {
        router.replace(`${process.env.NEXT_PUBLIC_URL}/?id=${tab.circuitId}`);
      } else if (router.query.id && !tab.circuitId) {
        router.replace(`${process.env.NEXT_PUBLIC_URL}/`);
      }
      setLastTab(selectedTab);
      setElements(tab.tabElements);
      setSelectedTab(tab.id);
    },
    [setElements, selectedTab, router],
  );

  const handleTabDoubleClick = useCallback(() => {
    setIsShoingInput(true);
  }, []);

  const handleTabNameChange = useCallback(
    (value: string, tabIndex: number) => {
      const tab = tabs[tabIndex];
      tab.name = value;

      const newTabs = tabs.map((item, index) => {
        if (index === tabIndex) {
          return tab;
        }

        return item;
      });

      setTabs(newTabs);
    },
    [tabs],
  );

  const handleCloseTab = useCallback(
    (tabIndex: number) => {
      setTabs(state => state.filter((tab, index) => index !== tabIndex));

      const selectedTabIndex = tabs.findIndex(tab => tab.id === selectedTab);
      if (selectedTabIndex > tabIndex) {
        setSelectedTab(tabs[selectedTabIndex - 1].id);
      }

      if (tabs[tabIndex].id === selectedTab) {
        const lastTabIndex = tabs.findIndex(tab => tab.id === lastTab);

        if (tabs[lastTabIndex].circuitId) {
          router.replace(
            `${process.env.NEXT_PUBLIC_URL}/?id=${tabs[lastTabIndex].circuitId}`,
          );
        } else {
          router.replace(`${process.env.NEXT_PUBLIC_URL}/`);
        }

        setSelectedTab(lastTab);
        setElements(tabs[lastTabIndex].tabElements);
      }
    },
    [lastTab, router, tabs, selectedTab, setElements],
  );

  const handleAddTab = useCallback(() => {
    setTabs(state => [
      ...state,
      {
        id: uuid(),
        name: `Tab ${tabs.length + 1}`,
        tabElements: [],
      },
    ]);
  }, [tabs]);

  useEffect(() => {
    if (tabs.length === 1) {
      setSelectedTab(tabs[0].id);
    }
    if (tabs.length === 0) {
      setSelectedTab('');
      setTabs([
        {
          id: uuid(),
          name: 'Tab 1',
          tabElements: [],
        },
      ]);
    }
  }, [tabs, router]);

  return (
    <Container>
      {tabs.map((tab, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Tab key={tab.id} isSelected={selectedTab === tab.id}>
          <button
            type="button"
            onClick={() => handleTabClick(tab)}
            onDoubleClick={handleTabDoubleClick}
          >
            {isShowingInput && selectedTab === tab.id ? (
              <input
                value={tab.name}
                onChange={e => handleTabNameChange(e.target.value, index)}
                onBlur={() => setIsShoingInput(false)}
              />
            ) : (
              tab.name
            )}
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
