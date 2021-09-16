import { useCallback, useEffect, useState } from 'react';
import { Handle, Position, Node } from 'react-flow-renderer';
import { useElements } from '../../../hooks/elements';
import updateElements from '../../../utils/updateElements';

import { Container, OnButton, OffButton } from './styles';

interface AndProps {
  data: {
    isSelected: boolean;
    isHovered: boolean;
    nodeId: string;
    inputValue: string;
  };
}

const Switch: React.FC<AndProps> = ({ data }) => {
  const [isActive, setIsActive] = useState(data.inputValue !== '0');
  const { setElements } = useElements();

  const handleClick = useCallback(() => {
    setIsActive(state => !state);

    setElements((state: any) => {
      return updateElements(
        state.map((element: Node) => {
          if (element.id === data.nodeId) {
            return {
              ...element,
              data: {
                ...element.data,
                inputValue: element.data.inputValue === '0' ? '1' : '0',
              },
            };
          }
          return element;
        }),
      );
    });
  }, [data, setElements]);

  useEffect(() => {
    setElements((state: any) => updateElements(state));
  }, [setElements, isActive]);

  return (
    <Container isSelected={data.isSelected} isHovered={data.isHovered}>
      <OnButton onClick={handleClick} isSelected={isActive}>
        1
      </OnButton>
      <OffButton onClick={handleClick} isSelected={!isActive}>
        0
      </OffButton>

      <Handle
        type="source"
        position={Position.Bottom}
        style={{ borderRadius: 0 }}
      />
    </Container>
  );
};

export default Switch;
