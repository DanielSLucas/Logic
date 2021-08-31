import { Handle, Position } from 'react-flow-renderer';

import { Container } from './styles';

interface NandProps {
  data: {
    isSelected: boolean;
    isHovered: boolean;
    nodeId: string;
    output?: number;
    inputs?: {
      origin: string;
      value: string;
    }[];
    setElements: any;
  };
}

const Nand: React.FC<NandProps> = ({ data }) => {

  return( 
    <Container isSelected={data.isSelected}>
      <Handle 
        type="target" 
        id="a" 
        position={Position.Left} 
        style={{ top: '70%', borderRadius: 0, }} 
        isConnectable
      />

      <svg width="41" height="31" viewBox="0 0 41 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        {!data.isHovered 
          ?(
            <>
              <path d="M2.5 1.5H20.5C27.6797 1.5 33.5 7.3203 33.5 14.5C33.5 21.6797 27.6797 27.5 20.5 27.5H2.5V1.5Z"/>
              <path d="M38 15C38 15.5304 37.7893 16.0391 37.4142 16.4142C37.0391 16.7893 36.5304 17 36 17C35.4696 17 34.9609 16.7893 34.5858 16.4142C34.2107 16.0391 34 15.5304 34 15C34 14.4696 34.2107 13.9609 34.5858 13.5858C34.9609 13.2107 35.4696 13 36 13C36.5304 13 37.0391 13.2107 37.4142 13.5858C37.7893 13.9609 38 14.4696 38 15Z" strokeLinecap="square"/>
            </>
          )
          :(
            <>
              <g filter="url(#filter0_d)">
              <path d="M2.5 1.5H20.5C27.6797 1.5 33.5 7.3203 33.5 14.5C33.5 21.6797 27.6797 27.5 20.5 27.5H2.5V1.5Z"/>
              <path d="M38 15C38 15.5304 37.7893 16.0391 37.4142 16.4142C37.0391 16.7893 36.5304 17 36 17C35.4696 17 34.9609 16.7893 34.5858 16.4142C34.2107 16.0391 34 15.5304 34 15C34 14.4696 34.2107 13.9609 34.5858 13.5858C34.9609 13.2107 35.4696 13 36 13C36.5304 13 37.0391 13.2107 37.4142 13.5858C37.7893 13.9609 38 14.4696 38 15Z" strokeLinecap="square"/>
              </g>
              <defs>
              <filter id="filter0_d" x="0" y="0" width="40.5" height="31" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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

export default Nand;