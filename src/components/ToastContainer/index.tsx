import { useTransition } from 'react-spring';
import { IToast } from '../../hooks/toasts';
import Toast from './Toast';

import { Container } from './styles';

interface ExplanationContainerProps {
  toasts: IToast[];
}

const ExplanationContainer: React.FC<ExplanationContainerProps> = ({
  toasts,
}) => {
  const explanationsWithTransitions = useTransition(toasts, {
    from: { right: '-120%' },
    enter: { right: '0%' },
    leave: { right: '-120%' },
  });

  return (
    <Container>
      {explanationsWithTransitions((styles, item) => (
        <Toast key={item.id} style={styles} toast={item} />
      ))}
    </Container>
  );
};

export default ExplanationContainer;
