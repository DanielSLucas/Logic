import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { useStoreState } from 'react-flow-renderer';
import { FiSave } from 'react-icons/fi';

// import { Container } from './styles';

const SaveButton: React.FC = () => {
  const router = useRouter();
  const storedElements = useStoreState(store => [
    ...store.nodes,
    ...store.edges,
  ]);

  const handleSave = useCallback(async () => {
    const circuitId = `/${router.query.id}` || '';

    const response = await fetch(
      `http://localhost:3000/api/circuit${circuitId}`,
      {
        method: circuitId ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(storedElements),
      },
    );

    response
      .json()
      .then(data => router.replace(`http://localhost:3000/?id=${data.id}`));
  }, [storedElements, router]);

  return (
    <button type="button" onClick={handleSave}>
      <FiSave />
    </button>
  );
};

export default SaveButton;
