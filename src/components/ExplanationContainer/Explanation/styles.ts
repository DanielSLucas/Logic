import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled(animated.div)`
  width: 29rem;
  height: 45rem;
  overflow-y: scroll;
  
  
  position: relative;
  z-index: 999;

  background: #fafafc;
  border: 1px solid #d3d3d3;
  border-radius: 0.5rem;

  padding: 0.5rem 1rem;

  box-shadow: 3px 3px 5px rgba(0,0,0, 0.25);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      color: #0E5487;
      font: 1.5rem Roboto Condensed, serif;
    }

    svg {
      height: 1.5rem;
      width: 1.5rem;
    }

    button {
      background: none;
      border: none;
      color: #d3d3d3
    }

    button:hover {
      svg {
        color: #A3A3A3;        
      }
    }

    button:active {
      svg {
        color: #A3A3A3;
        transform: translateY(2px);
      }
    }
  }

  & div.divider  {
    background: #d3d3d3;
    width: 100%;
    height: 1px;
    margin: 0.5rem 0;
  }

  p {
    text-align: justify;
    font: 1rem Roboto, arial, sans-serif;
  }
`;