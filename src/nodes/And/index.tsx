import { useEffect } from 'react';
import { Handle, Position, Node } from 'react-flow-renderer';

import { Container } from './styles';

interface AndProps {
  data: {
    isSelected: boolean;
    isHovered: boolean;
    nodeId: string;
    outPut?: number;
    inputs?: {
      origin: string;
      value: number
    }[];
    setElements: any;
  };
}

const And: React.FC<AndProps> = ({ data }) => {

  useEffect(() => {
    data.setElements((state: any) => state.map((element: Node) => {
      if (element.id === data.nodeId) {
        return {
          ...element,
          data: {
            ...element.data,
            outPut: data.inputs?.some(input => input.value === 0) ? 0 : 1,
          },
        }
      }
      return element;
    }));
  }, [data]);

  return( 
    <Container isSelected={data.isSelected} isHovered={data.isHovered}>
      <Handle 
        type="target" 
        id="a" 
        position={Position.Left} 
        style={{ top: '70%', borderRadius: 0 }} 
        isConnectable
      />

      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="27" viewBox="0 0 32 27" fill="none">
        <path d="M0.5 0.5H18.5C25.6797 0.5 31.5 6.3203 31.5 13.5C31.5 20.6797 25.6797 26.5 18.5 26.5H0.5V0.5Z" />
      </svg>

      <Handle
        type="target"
        position={Position.Left}
        id="b"
        style={{ top: '30%', borderRadius: 0 }}
        isConnectable
      />
      <Handle
        type="source"
        position={Position.Right}
        style={{ borderRadius: 0 }}
      />
    </Container>
  )
}

export default And;