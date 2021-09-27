import styled, { css } from 'styled-components';

interface TabProps {
  isSelected: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 2.1rem;
  display: flex;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Tab = styled.div<TabProps>`
  height: 100%;
  background: transparent;

  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 0 0 0.5rem 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: color 0.3s, background-color 0.3s;

  button {
    height: 100%;
    border: 0;
    background: 0;
    margin: 0 0.25rem;

    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.switchOffText};
  }

  ${props =>
    props.isSelected &&
    css`
      background: ${props.theme.colors.lighterBackground};
      button {
        color: ${props.theme.colors.secondary};
      }
    `}
`;

export const AddTab = styled.button`
  height: 1.5rem;
  width: 1.5rem;
  background: ${props => props.theme.colors.background};

  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 50%;

  margin-left: 0.25rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;
