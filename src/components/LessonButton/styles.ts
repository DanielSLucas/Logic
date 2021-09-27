import styled, { css } from 'styled-components';

interface ContainerProps {
  isDone: boolean;
  isSelected: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;

  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  color: ${props => props.theme.colors.text};
  text-align: left;
  font: 1.125rem Roboto, arial, sans-serif;

  border-top: 1px solid ${props => props.theme.colors.border};
  border-bottom: 1px solid ${props => props.theme.colors.border};

  transition: box-shadow 0.3s;

  button {
    color: ${props => props.theme.colors.text};
  }

  ${props =>
    props.isSelected &&
    css`
      &::after {
        content: '';
        width: 2px;
        height: 100%;
        background: ${props.theme.colors.primary};
      }
    `}

  button:first-child {
    width: 3rem;
    height: 3rem;
    background-color: transparent;

    border: none;
    border-right: 1px solid ${props => props.theme.colors.border};

    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.2s;

    &:hover {
      background-color: ${props => props.theme.colors.hoverBackground};
    }

    ${props =>
      props.isDone &&
      css`
        background: ${props.theme.colors.primary};
        svg {
          width: 1.5rem;
          height: 1.5rem;
          color: ${props.theme.colors.checkIcon};
        }

        &:hover {
          background-color: ${props.theme.colors.doneHoverBackground};
        }
      `}
  }

  &:hover {
    box-shadow: 0px 2px 3px ${props => props.theme.colors.shadow};
  }

  button:last-child {
    background: 0;
    width: 100%;
    height: 100%;
    border: 0;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    padding-left: 1rem;

    transition: background-color 0.2s;

    &:hover {
      background-color: ${props => props.theme.colors.hoverBackground};
    }
  }
`;
