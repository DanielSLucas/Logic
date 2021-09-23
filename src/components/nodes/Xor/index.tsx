import { Handle, Position } from 'react-flow-renderer';

import { Container } from './styles';

interface XorProps {
  data: {
    isSelected: boolean;
    isHovered: boolean;
    nodeId: string;
    output?: number;
    inputs?: {
      sourceNode: string;
      targetHandle: string;
      value: string;
    }[];
    setElements: any;
  };
}

const Xor: React.FC<XorProps> = ({ data }) => {
  return (
    <Container isSelected={data.isSelected} isHovered={data.isHovered}>
      <Handle
        type="target"
        id="a"
        position={Position.Left}
        style={{ top: '70%', borderRadius: 0, zIndex: 100 }}
        isConnectable
      />

      <svg
        width="46"
        height="32"
        viewBox="0 0 46 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {!data.isHovered ? (
          <>
            <path d="M7 28C11.4636 17.846 11.2696 12.1544 7 2H21C30.9942 2.81757 35.7311 5.58697 42.5 15C36.7092 22.95 32.3222 26.1498 21 28H7Z" />
            <path d="M3 2C7.17934 12.8922 7.70002 18.6767 3 28" />
          </>
        ) : (
          <>
            <g filter="url(#filter0_d)">
              <path d="M7 28C11.4636 17.846 11.2696 12.1544 7 2H21C30.9942 2.81757 35.7311 5.58697 42.5 15C36.7092 22.95 32.3222 26.1498 21 28H7Z" />
              <path d="M3 2C7.17934 12.8922 7.70002 18.6767 3 28" />
            </g>
            <defs>
              <filter
                id="filter0_d"
                x="0.533203"
                y="0.5"
                width="44.584"
                height="31"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
            </defs>
          </>
        )}
      </svg>

      <span className="inputA">
        {data.inputs?.find(input => input.targetHandle === 'a')?.value}
      </span>
      <span className="inputB">
        {data.inputs?.find(input => input.targetHandle === 'b')?.value}
      </span>
      <span className="output">{data.output && data.output}</span>

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
  );
};

export default Xor;
