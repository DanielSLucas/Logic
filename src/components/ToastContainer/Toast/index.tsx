import { useCallback } from 'react';
import { FiX } from 'react-icons/fi';
import { IToast, useToast } from '../../../hooks/toasts';

import { Container } from './styles';

interface ExplanationProps {
  toast: IToast;
  style: Record<string, unknown>;
}

const Explanation: React.FC<ExplanationProps> = ({ toast, style }) => {
  const { removeToast } = useToast();

  const handleClick = useCallback(() => {
    removeToast(toast.id);
  }, [toast.id, removeToast]);

  return (
    <Container style={style}>
      <header>
        <h2>{toast.title}</h2>
        <button type="button" onClick={handleClick}>
          <FiX />
        </button>
      </header>
      <div />
      {toast.content}
    </Container>
  );
};

export default Explanation;
