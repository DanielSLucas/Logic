import styled from 'styled-components';

export const Container = styled.div`
  margin: 0.5rem 0.25rem;
  button {
    background: ${props => props.theme.colors.lighterBackground};
    padding: 3px;
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: 0.25rem;

    svg {
      height: 1.5rem;
      width: 1.5rem;
      color: ${props => props.theme.colors.secondary};
    }
  }
`;
