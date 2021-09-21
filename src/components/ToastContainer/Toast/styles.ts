import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled(animated.div)`
  width: 29rem;
  height: 45rem;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  position: relative;
  z-index: 999;

  background: #fafafc;
  border: 1px solid #d3d3d3;
  border-radius: 0.5rem;

  padding: 0.5rem 1rem;

  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      color: #0e5487;
      font: 1.5rem Roboto Condensed, serif;
    }

    svg {
      height: 1.5rem;
      width: 1.5rem;
    }

    button {
      background: none;
      border: none;
      color: #d3d3d3;
    }

    button:hover {
      svg {
        color: #a3a3a3;
      }
    }

    button:active {
      svg {
        color: #a3a3a3;
        transform: translateY(2px);
      }
    }
  }

  div.divider {
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

export const Content = styled.div`
  margin-top: 1rem;

  p {
    margin: 0.5rem 0;
  }

  h2 {
    margin: 1rem 0;
  }

  img {
    width: 100%;
  }

  table {
    border-collapse: collapse;
    height: 10rem;
    width: 15rem;
    text-align: center;
    table-layout: fixed;
    margin: 0 auto;
  }

  table td {
    border: 1px solid black;
  }

  table th {
    border: 1px solid black;
  }
`;
