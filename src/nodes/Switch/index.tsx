import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Handle, Position, Node } from 'react-flow-renderer';

import { Container, OnButton, OffButton } from './styles';

interface AndProps {
  data: {
    isSelected: boolean;
    isHovered: boolean;
    nodeId: string;
    inputValue: number;
    setElements: any; 
  };
}

const Switch: React.FC<AndProps> = ({ data }) => {
  const [onButtonSelected, setOnButtonSelected] = useState(false);
  const [offButtonSelected, setOffButtonSelected] = useState(true);
 
  useEffect(() => {
    data.setElements((state: any) => state.map((element: Node) => {
      if (element.id === data.nodeId) {
        return {
          ...element,
          data: {
            ...element.data,
            inputValue: onButtonSelected ? 1 : 0,
          },
        }
      }
      return element;
    }))
  }, [onButtonSelected, offButtonSelected, data.nodeId]);

  const handleClick = useCallback((button: number) => {
    if ( button === 1) {
      setOnButtonSelected(true);
      setOffButtonSelected(false)
    } else {
      setOnButtonSelected(false);
      setOffButtonSelected(true)
    }
  }, []);

  return( 
    <Container isSelected={data.isSelected} isHovered={data.isHovered}>
      <OnButton onClick={() => handleClick(1)} isSelected={onButtonSelected} >
        1
      </OnButton>
      <OffButton onClick={() => handleClick(0)} isSelected={offButtonSelected} >
        0
      </OffButton>

      <Handle
        type="source"
        position={Position.Bottom}
        style={{ borderRadius: 0 }}
      />
    </Container>
  )
}

export default Switch;