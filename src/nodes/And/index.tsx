import { Handle, Position } from 'react-flow-renderer';

import { Container } from './styles';

interface AndProps {
  data: {
    text?: string;
    isSelected: boolean;
    isHovered: boolean;
  };
}

const And: React.FC<AndProps> = ({ data }) => {
  return( 
    <Container isSelected={data.isSelected} isHovered={data.isHovered}>
      <Handle 
        type="target" 
        id="a" 
        position={Position.Left} 
        style={{ top: '70%', borderRadius: 0 }} 
        isConnectable
      />
      {data && (<div>{data.text}</div>)}
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