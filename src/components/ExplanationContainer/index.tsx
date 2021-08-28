import { useTransition } from 'react-spring';
import { IExplanation } from '../../hooks/explanation';
import Explanation from './Explanation';

import { Container } from './styles';

interface ExplanationContainerProps {
  explanations: IExplanation[];
}

const ExplanationContainer: React.FC<ExplanationContainerProps> = ({ explanations }) => {
  const explanationsWithTransitions = useTransition(
    explanations,
    {
      from: { right: '-120%'},
      enter: { right: "0%" },
      leave: { right: "-120%" }
    }
  );
  
  return (
    <Container> 
      {explanationsWithTransitions((styles, item) => (
        <Explanation key={item.id} style={styles} explanation={item}/> 
      ))}
    </Container>
  );
};

export default ExplanationContainer;