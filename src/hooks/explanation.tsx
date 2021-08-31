import { useContext, useCallback, createContext, useState  } from "react";
import { v4 as uuid } from 'uuid';
import ExplanationContainer from "../components/ExplanationContainer";

interface ExplanationContexData {
  addExplanation(explanationData: Omit<IExplanation, 'id'>): IExplanation;
  removeExplanation(id: string): void;
}

const ExplanationContext = createContext<ExplanationContexData>({} as ExplanationContexData);

export interface IExplanation {
  id: string;
  title: string;
  description: string;
}

const ExplanationProvider: React.FC = ({ children }) => {
  const [explanations, setExplanations] = useState<IExplanation[]>([])

  const addExplanation = useCallback(
    ({ title, description }: Omit<IExplanation, 'id'>): IExplanation => {
      console.log("addExplanation");
      const explanation = {
        id: uuid(),
        title,
        description,
      }

      setExplanations((state) => [...state, explanation]);
      return explanation;
    },[]
  );

  const removeExplanation = useCallback((id: string) => {
    console.log("removeExplanation");
    setExplanations((state) => state.filter(explanation => explanation.id !== id));
  }, []);

  return (
    <ExplanationContext.Provider value={{ addExplanation, removeExplanation }}>
      {children}
      <ExplanationContainer explanations={explanations}/>
    </ExplanationContext.Provider>
  );
};

function useExplanation(): ExplanationContexData {
  const context = useContext(ExplanationContext);

  if (!context) {
    throw new Error('useExplanation must be used within a ExplanationProvider');
  }

  return context;
}

export { ExplanationProvider, useExplanation };