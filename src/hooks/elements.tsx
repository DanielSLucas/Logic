import { useContext, useCallback, createContext, useState } from 'react';
import { Elements } from 'react-flow-renderer';
// import updateElements from '../utils/updateElements';

interface ElementsContextData {
  elements: Elements;
  setElements: any;
}

const ElementsContext = createContext<ElementsContextData>(
  {} as ElementsContextData,
);

const ElementsProvider: React.FC = ({ children }) => {
  const [elements, setElements] = useState<Elements>([]);

  // const setNewElements = useCallback((newElements: Elements) => {
  //   setElements(updateElements(newElements));
  // }, []);

  return (
    <ElementsContext.Provider value={{ elements, setElements }}>
      {children}
    </ElementsContext.Provider>
  );
};

function useElements(): ElementsContextData {
  const context = useContext(ElementsContext);

  if (!context) {
    throw new Error('useExplanation must be used within a ExplanationProvider');
  }

  return context;
}

export { ElementsProvider, useElements };
