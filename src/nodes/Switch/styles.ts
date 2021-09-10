import styled, { css } from 'styled-components';

interface ContainerProps {
  isSelected: boolean;
  isHovered: boolean;
}

interface ButtonProps {
  isSelected: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: 2rem;
  width: 6rem;
  background: #fff;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  ${props =>
    props.isSelected &&
    css`
      stroke-width: 1.25px;
    `}

  ${props =>
    props.isHovered &&
    css`
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    `}
`;

export const OnButton = styled.button<ButtonProps>`
  color: #d3d3d3;
  width: 50%;
  height: 100%;
  border: 1px solid #b1acac;
  border-radius: 0.5rem 0 0 0.5rem;
  transition: 0.5s background-color;

  ${props =>
    props.isSelected &&
    css`
      color: ${props.theme.colors.text};
      background: #1ca0f2;
    `}
`;

export const OffButton = styled.button<ButtonProps>`
  color: #d3d3d3;
  width: 50%;
  height: 100%;
  border: 1px solid #b1acac;
  border-radius: 0 0.5rem 0.5rem 0;
  transition: 0.5s background-color;

  ${props =>
    props.isSelected &&
    css`
      color: ${props.theme.colors.text};
      background: #1ca0f2;
    `}
`;
