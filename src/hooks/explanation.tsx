import { useContext, useCallback, createContext, useState, ReactNode } from "react";
import { v4 as uuid } from 'uuid';
import ExplanationContainer from "../components/ExplanationContainer";

interface ExplanationContexData {
  addExplanation(explanationData: Omit<IExplanation, 'id'>): IExplanation;
  removeExplanation(id: string): void;
  isShowingAnExplanation: boolean;
}

const ExplanationContext = createContext<ExplanationContexData>({} as ExplanationContexData);

export interface IExplanation {
  id: string;
  title: string;
  content: ReactNode;
}

const ExplanationProvider: React.FC = ({ children }) => {
  const [explanations, setExplanations] = useState<IExplanation[]>([])
  const [isShowingAnExplanation, setIsShowingAnExplanation] = useState(false);

  const addExplanation = useCallback(
    ({ title, content }: Omit<IExplanation, 'id'>): IExplanation => {
      const explanation = {
        id: uuid(),
        title,
        content,
      }

      setExplanations((state) => [...state, explanation]);
      setIsShowingAnExplanation(true);
      return explanation;
    },[]
  );

  const removeExplanation = useCallback((id: string) => {
    setExplanations((state) => state.filter(explanation => explanation.id !== id));
    setIsShowingAnExplanation(false);
  }, []);

  return (
    <ExplanationContext.Provider value={{ isShowingAnExplanation, addExplanation, removeExplanation }}>
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