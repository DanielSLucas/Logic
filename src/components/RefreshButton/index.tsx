import React, { useCallback } from 'react';
import { FiRefreshCw } from 'react-icons/fi';
import updateElements from '../../utils/updateElements';

// import { Container } from './styles';
interface RefreshButtonProps {
  setElements: any;
}

const RefreshButton: React.FC<RefreshButtonProps> = ({
  children,
  setElements,
}) => {
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
