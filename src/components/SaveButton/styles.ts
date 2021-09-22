import styled from 'styled-components';

export const Container = styled.div`
  margin: 0.5rem 0.25rem;
  button {
    background: ${props => props.theme.colors.whiteBackground};
    padding: 3px;

    border: 1px solid ${props => props.theme.colors.border};
    border-radius: 0.25rem;

    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);

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
