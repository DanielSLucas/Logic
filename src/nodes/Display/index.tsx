import { Handle, Position } from 'react-flow-renderer';

import { Container } from './styles';

interface AndProps {
  data: {
    isSelected: boolean;
    isHovered: boolean;
    nodeId: string;
    inputValue: number;
    setElements: any;
    inputs: {
      value: string;
    }[];
  };
}

const Display: React.FC<AndProps> = ({ data }) => {
  return (
    <Container isSelected={data.isSelected} isHovered={data.isHovered}>
      <div>{data.inputs.length !== 0 ? data.inputs[0].value : '0'}</div>
      <Handle
        type="target"
        position={Position.Bottom}
        style={{ borderRadius: 0 }}
      />
    </Container>
  );
};

export default Display;
