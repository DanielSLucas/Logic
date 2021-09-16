import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { FiSave } from 'react-icons/fi';

// import { Container } from './styles';
interface SaveButtonProps {
  rfInstance: any;
}

const SaveButton: React.FC<SaveButtonProps> = ({ rfInstance }) => {
  const router = useRouter();

  const handleSave = useCallback(async () => {
    const circuitId = router.query.id ? `?id=${router.query.id}` : '';

    const response = await fetch(
      `http://localhost:3000/api/circuit${circuitId}`,
      {
        method: circuitId ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(rfInstance.toObject()),
      },
    );

    response
      .json()
      .then(data => router.replace(`http://localhost:3000/?id=${data.id}`));
  }, [rfInstance, router]);

  return (
    <button type="button" onClick={handleSave}>
      <FiSave />
    </button>
  );
};

export default SaveButton;
