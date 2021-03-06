import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  right: 0;
  z-index: 999;

  margin: 0.5rem 0.25rem;

  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;

  span {
    display: none;
  }

  &:hover span {
    display: flex;
    white-space: nowrap;
    margin-right: 0.5rem;
    /* position: absolute;
    top: 21%;
    left: -430%; */
  }

  button {
    position: relative;
    background: ${props => props.theme.colors.lighterBackground};
    padding: 3px;

    border: 1px solid ${props => props.theme.colors.border};
    border-radius: 0.25rem;

    box-shadow: 0px 2px 3px ${props => props.theme.colors.shadow};

    &:active {
      transform: translateY(3px);
      box-shadow: none;
    }

    svg {
      height: 1.5rem;
      width: 1.5rem;
      color: ${props => props.theme.colors.secondary};
    }
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  border: 2px solid ${props => props.theme.colors.border};
  border-radius: 50%;
  border-top: 2px solid ${props => props.theme.colors.secondary};
  width: 1.5rem;
  height: 1.5rem;
  -webkit-animation: ${spin} 2s linear infinite; /* Safari */
  animation: ${spin} 2s linear infinite;
`;
