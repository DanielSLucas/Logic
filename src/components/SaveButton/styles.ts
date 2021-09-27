import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  right: 0;
  z-index: 999;

  margin: 0.5rem 0.25rem;

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

    &:hover::before {
      content: 'Save';
      position: absolute;
      bottom: -1.5rem;
      right: 0;
    }

    svg {
      height: 1.5rem;
      width: 1.5rem;
      color: ${props => props.theme.colors.secondary};
    }
  }
`;
