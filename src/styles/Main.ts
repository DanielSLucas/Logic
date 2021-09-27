import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: none;

  main {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    & > div {
      width: 100%;
      height: 100%;
    }
  }
  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const ReactFlowContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div.react-flow__controls {
    background: ${props => props.theme.colors.lighterBackground};

    button.react-flow__controls-button {
      background: ${props => props.theme.colors.lighterBackground};
      border-color: ${props => props.theme.colors.border};

      svg {
        fill: ${props => props.theme.colors.text};
      }

      &:last-child {
        border-bottom: 0;
      }
    }
  }
`;

export const ScreenSizeWarning = styled.div`
  position: absolute;
  z-index: 1001;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.lighterBackground};

  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font: 500 3rem Roboto, arial, sans-serif;
  text-align: center;

  h1 {
    margin-top: 1.9rem;
    font-family: Roboto Slab, serif;
    color: ${props => props.theme.colors.primary};
  }

  p {
    margin: auto;
    max-width: 80%;
  }

  footer {
    margin-bottom: 0.5rem;
    a {
      margin-top: 0.5rem;

      display: flex;
      align-items: center;
      justify-content: center;

      font: 1.5rem Roboto, arial, sans-serif;
      color: ${props => props.theme.colors.secondary};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }

      svg {
        margin-right: 0.5rem;
      }
    }
  }

  @media (max-width: 1024px) {
    display: flex;
  }
`;
