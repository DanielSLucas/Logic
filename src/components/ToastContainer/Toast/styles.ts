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

  background: ${props => props.theme.colors.lighterBackground};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 0.5rem;

  padding: 0.5rem 1rem;

  box-shadow: 3px 3px 5px ${props => props.theme.colors.shadow};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      color: ${props => props.theme.colors.primary};
      font: 1.5rem Roboto Condensed, serif;
    }

    svg {
      height: 1.5rem;
      width: 1.5rem;
    }

    button {
      background: none;
      border: none;
      color: ${props => props.theme.colors.border};
    }

    button:hover {
      svg {
        color: ${props => props.theme.colors.toastCloseButton};
      }
    }

    button:active {
      svg {
        color: ${props => props.theme.colors.toastCloseButton};
        transform: translateY(2px);
      }
    }
  }

  div.divider {
    background: ${props => props.theme.colors.border};
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
