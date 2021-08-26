import { Handle, Position } from 'react-flow-renderer';

import { Container } from './styles';

interface XnorProps {
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

const Xnor: React.FC<XnorProps> = ({ data }) => {

  return( 
    <Container isSelected={data.isSelected}>
      <Handle 
        type="target" 
        id="a" 
        position={Position.Left} 
        style={{ top: '70%', borderRadius: 0, }} 
        isConnectable
      />

      <svg width="50" height="32" viewBox="0 0 50 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {!data.isHovered
          ? (
            <>
              <path d="M7 28C11.4636 17.846 11.2696 12.1544 7 2H21C30.9942 2.81757 35.7311 5.58697 42.5 15C36.7092 22.95 32.3222 26.1498 21 28H7Z"/>
              <path d="M47 15C47 15.5304 46.7893 16.0391 46.4142 16.4142C46.0391 16.7893 45.5304 17 45 17C44.4696 17 43.9609 16.7893 43.5858 16.4142C43.2107 16.0391 43 15.5304 43 15C43 14.4696 43.2107 13.9609 43.5858 13.5858C43.9609 13.2107 44.4696 13 45 13C45.5304 13 46.0391 13.2107 46.4142 13.5858C46.7893 13.9609 47 14.4696 47 15Z" stroke-linecap="square"/>
              <path d="M3 2C7.17934 12.8922 7.70002 18.6767 3 28"/>
            </>
          )
          : (
            <>
              <g filter="url(#filter0_d)">
              <path d="M7 28C11.4636 17.846 11.2696 12.1544 7 2H21C30.9942 2.81757 35.7311 5.58697 42.5 15C36.7092 22.95 32.3222 26.1498 21 28H7Z"/>
              <path d="M47 15C47 15.5304 46.7893 16.0391 46.4142 16.4142C46.0391 16.7893 45.5304 17 45 17C44.4696 17 43.9609 16.7893 43.5858 16.4142C43.2107 16.0391 43 15.5304 43 15C43 14.4696 43.2107 13.9609 43.5858 13.5858C43.9609 13.2107 44.4696 13 45 13C45.5304 13 46.0391 13.2107 46.4142 13.5858C46.7893 13.9609 47 14.4696 47 15Z" stroke-linecap="square"/>
              <path d="M3 2C7.17934 12.8922 7.70002 18.6767 3 28"/>
              </g>
              <defs>
              <filter id="filter0_d" x="0.533203" y="0.5" width="48.9668" height="31" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
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

export default Xnor;