import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { OnLoadParams } from 'react-flow-renderer';
import { FiShare } from 'react-icons/fi';

import { Container, Loader } from './styles';

interface ShareButtonProps {
  rfInstance: OnLoadParams;
}

const ShareButton: React.FC<ShareButtonProps> = ({ rfInstance }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [hoverMessage, setHoverMessage] = useState('');

  const handleShare = useCallback(async () => {
    setIsLoading(true);
    const circuitId = router.query.id ? `?id=${router.query.id}` : '';

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/circuit${circuitId}`,
      {
        method: circuitId ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(rfInstance.toObject()),
      },
    );

    response.json().then(data => {
      router.replace(`${process.env.NEXT_PUBLIC_URL}/?id=${data.id}`);
      setIsLoading(false);
      window.navigator.clipboard.writeText(
        `${process.env.NEXT_PUBLIC_URL}/?id=${data.id}`,
      );
      document.execCommand('copy');
      setHoverMessage('Copied!');
    });
  }, [rfInstance, router]);

  useEffect(() => {
    setTimeout(() => {
      setHoverMessage('Share this circuit!');
    }, 1000);
  }, [hoverMessage]);

  return (
    <Container>
      <button type="button" onClick={handleShare}>
        {isLoading ? <Loader /> : <FiShare />}
      </button>
      <span>{hoverMessage}</span>
    </Container>
  );
};

export default ShareButton;
