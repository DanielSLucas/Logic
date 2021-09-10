import styled, { css } from 'styled-components';

interface ContainerProps {
  isSelected: boolean;
  isHovered: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: 4rem;
  width: 3.5rem;
  background: #fff;
  border: 1px solid #000;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  & div:first-child {
    width: 90%;
    height: 90%;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${props => props.theme.colors.whiteBackground};
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: 0.5rem;

    font: bold 1.5rem Roboto, sans-serif;
  }

  ${props =>
    props.isSelected &&
    css`
      border-width: 2px;
    `}

  ${props =>
    props.isHovered &&
    css`
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    `}
`;
