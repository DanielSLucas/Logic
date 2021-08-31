import { useCallback } from 'react';
import { FiX } from 'react-icons/fi';
import { IExplanation, useExplanation } from '../../../hooks/explanation';

import { Container } from './styles';

interface ExplanationProps {
  explanation: IExplanation;
  style: object;
}

const Explanation: React.FC<ExplanationProps> = ({ explanation, style }) => {
  const { removeExplanation } = useExplanation();
  
  const handleClick = useCallback(() => {
    removeExplanation(explanation.id);
  }, [explanation.id, removeExplanation]);

  return (
    <Container style={style}> 
      <header>
        <h2>
          {explanation.title}
        </h2>
        <button onClick={handleClick}>
          <FiX />
        </button>
      </header>
      <div />
      {explanation.content}
    </Container>
  );
};

export default Explanation;