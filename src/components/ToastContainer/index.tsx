import { useTransition } from 'react-spring';
import { IToast } from '../../hooks/toasts';
import Toast from './Toast';

import { Container } from './styles';

interface ToastContainerProps {
  toasts: IToast[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ toasts }) => {
  const toastsWithTransitions = useTransition(toasts, {
    from: { right: '-120%' },
    enter: { right: '0%' },
    leave: { right: '-120%' },
  });

  return (
    <Container>
      {toastsWithTransitions((styles, item) => (
        <Toast key={item.id} style={styles} toast={item} />
      ))}
    </Container>
  );
};

export default ToastContainer;
