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
        style={{ top: '48%', borderRadius: 0, zIndex: 100, left: '-30%' }}
      />

      <svg
        width="33"
        height="32"
        viewBox="0 0 33 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {!data.isHovered ? (
          <>
            <path
              d="M30.0002 15.0021C30.0002 15.5326 29.7895 16.0413 29.4144 16.4164C29.0393 16.7914 28.5306 17.0022 28.0001 17.0022C27.4697 17.0022 26.961 16.7914 26.5859 16.4164C26.2108 16.0413 26.0001 15.5326 26.0001 15.0021C26.0001 14.4717 26.2108 13.963 26.5859 13.5879C26.961 13.2128 27.4697 13.0021 28.0001 13.0021C28.5306 13.0021 29.0393 13.2128 29.4144 13.5879C29.7895 13.963 30.0002 14.4717 30.0002 15.0021Z"
              strokeLinecap="square"
            />
            <path d="M3.12877 28.111L25.5642 14.9998L3.00009 2.11133L3.12877 28.111Z" />
          </>
        ) : (
          <>
            <g filter="url(#filter0_d)">
              <path
                d="M30.0002 15.0021C30.0002 15.5326 29.7895 16.0413 29.4144 16.4164C29.0393 16.7914 28.5306 17.0022 28.0001 17.0022C27.4697 17.0022 26.961 16.7914 26.5859 16.4164C26.2108 16.0413 26.0001 15.5326 26.0001 15.0021C26.0001 14.4717 26.2108 13.963 26.5859 13.5879C26.961 13.2128 27.4697 13.0021 28.0001 13.0021C28.5306 13.0021 29.0393 13.2128 29.4144 13.5879C29.7895 13.963 30.0002 14.4717 30.0002 15.0021Z"
                strokeLinecap="square"
              />
              <path d="M3.12877 28.111L25.5642 14.9998L3.00009 2.11133L3.12877 28.111Z" />
            </g>
            <defs>
              <filter
                id="filter0_d"
                x="0.495819"
                y="0.128662"
                width="32.0044"
                height="31.8511"
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
        style={{ top: '48%', borderRadius: 0 }}
      />
    </Container>
  );
};

export default Not;
