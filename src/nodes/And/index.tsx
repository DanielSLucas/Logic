// import { useEffect } from 'react';
// import { Handle, Position, Node } from 'react-flow-renderer';
import { Handle, Position } from 'react-flow-renderer';

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

  // useEffect(() => {
  //   data.setElements((state: any) => state.map((element: Node) => {
  //     if (element.id === data.nodeId) {
  //       return {
  //         ...element,
  //         data: {
  //           ...element.data,
  //           outPut: data.inputs?.some(input => input.value === 0) ? 0 : 1,
  //         },
  //       }
  //     }
  //     return element;
  //   }));
  // }, [data]);

  return( 
    <Container isSelected={data.isSelected} isHovered={data.isHovered}>
      <Handle 
        type="target" 
        id="a" 
        position={Position.Left} 
        style={{ top: '70%', borderRadius: 0 }} 
        isConnectable
      />

      <svg width="36" height="31" viewBox="0 0 36 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        {!data.isHovered
          ? (<path d="M2.5 1.5H20.5C27.6797 1.5 33.5 7.3203 33.5 14.5C33.5 21.6797 27.6797 27.5 20.5 27.5H2.5V1.5Z"/>)
          : (
            <>
              <g filter="url(#filter0_d)">
              <path d="M2.5 1.5H20.5C27.6797 1.5 33.5 7.3203 33.5 14.5C33.5 21.6797 27.6797 27.5 20.5 27.5H2.5V1.5Z"/>
              </g>
              <defs>
              <filter id="filter0_d" x="0" y="0" width="36" height="31" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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

export default And;