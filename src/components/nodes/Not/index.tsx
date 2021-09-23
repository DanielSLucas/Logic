import { Handle, Position } from 'react-flow-renderer';

import { Container } from './styles';

interface NotProps {
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

const Not: React.FC<NotProps> = ({ data }) => {
  return (
    <Container isSelected={data.isSelected} isHovered={data.isHovered}>
      <Handle
        type="target"
        id="a"
        position={Position.Left}
        isConnectable
        style={{ borderRadius: 0 }}
      />

      <svg
        width="39"
        height="33"
        viewBox="0 0 39 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {!data.isHovered ? (
          <>
            <path
              d="M36 16C36 16.5304 35.7893 17.0391 35.4142 17.4142C35.0391 17.7893 34.5304 18 34 18C33.4696 18 32.9609 17.7893 32.5858 17.4142C32.2107 17.0391 32 16.5304 32 16C32 15.4696 32.2107 14.9609 32.5858 14.5858C32.9609 14.2107 33.4696 14 34 14C34.5304 14 35.0391 14.2107 35.4142 14.5858C35.7893 14.9609 36 15.4696 36 16Z"
              strokeLinecap="square"
            />
            <path d="M8.50215 3.02635L31.0114 16.0007L8.52065 29.0071L8.50215 3.02635Z" />
          </>
        ) : (
          <>
            <g filter="url(#filter0_d)">
              <path
                d="M36 16C36 16.5304 35.7893 17.0391 35.4142 17.4142C35.0391 17.7893 34.5304 18 34 18C33.4696 18 32.9609 17.7893 32.5858 17.4142C32.2107 17.0391 32 16.5304 32 16C32 15.4696 32.2107 14.9609 32.5858 14.5858C32.9609 14.2107 33.4696 14 34 14C34.5304 14 35.0391 14.2107 35.4142 14.5858C35.7893 14.9609 36 15.4696 36 16Z"
                strokeLinecap="square"
              />
              <path d="M8.50215 3.02635L31.0114 16.0007L8.52065 29.0071L8.50215 3.02635Z" />
            </g>
            <defs>
              <filter
                id="filter0_d"
                x="6.00153"
                y="1.14362"
                width="32.4985"
                height="31.7299"
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
      <span className="output">{data.output && data.output}</span>

      <Handle
        type="source"
        position={Position.Right}
        style={{ borderRadius: 0 }}
      />
    </Container>
  );
};

export default Not;
