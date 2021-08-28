import { Handle, Position } from 'react-flow-renderer';

import { Container } from './styles';

interface OrProps {
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

const Or: React.FC<OrProps> = ({ data }) => {

  return( 
    <Container isSelected={data.isSelected}>
      <Handle 
        type="target" 
        id="a" 
        position={Position.Left} 
        style={{ top: '70%', borderRadius: 0, }} 
        isConnectable
      />

      <svg width="42" height="32" viewBox="0 0 42 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {!data.isHovered
          ? (<path d="M3 28C7.46357 17.846 7.26963 12.1544 3 2H17C26.9942 2.81757 31.7311 5.58697 38.5 15C32.7092 22.95 28.3222 26.1498 17 28H3Z"/>)
          : (
            <>
              <g filter="url(#filter0_d)">
              <path d="M3 28C7.46357 17.846 7.26963 12.1544 3 2H17C26.9942 2.81757 31.7311 5.58697 38.5 15C32.7092 22.95 28.3222 26.1498 17 28H3Z"/>
              </g>
              <defs>
              <filter id="filter0_d" x="0.234009" y="0.5" width="40.8832" height="31" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="1"/>
              <feGaussianBlur stdDeviation="1"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
              </filter>
              </defs>
            </>
          )
        }              
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

export default Or;