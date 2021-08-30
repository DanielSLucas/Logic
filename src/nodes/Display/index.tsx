import { Handle, Position } from 'react-flow-renderer';

import { Container } from './styles';

interface AndProps {
  data: {
    isSelected: boolean;
    isHovered: boolean;
    nodeId: string;
    inputValue: number;
    setElements: any; 
    output: string
  };
}

const Display: React.FC<AndProps> = ({ data }) => {
  return( 
    <Container isSelected={data.isSelected} isHovered={data.isHovered}>
      {data.output}
      <Handle
        type="target"
        position={Position.Bottom}
        style={{ borderRadius: 0 }}
      />
    </Container>
  )
}

export default Display;