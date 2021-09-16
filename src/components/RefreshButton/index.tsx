import React, { useCallback } from 'react';
import { FiRefreshCw } from 'react-icons/fi';
import { useElements } from '../../hooks/elements';
import updateElements from '../../utils/updateElements';

// import { Container } from './styles';

const RefreshButton: React.FC = () => {
  const { setElements } = useElements();

  const handleRefresh = useCallback(async () => {
    setElements(state => updateElements(state));
  }, [setElements]);

  return (
    <button type="button" onClick={handleRefresh}>
      <FiRefreshCw />
    </button>
  );
};

export default RefreshButton;
