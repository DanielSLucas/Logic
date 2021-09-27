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
  background: 0;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  ${props =>
    props.isSelected &&
    css`
      border-width: 2px;
    `}

  ${props =>
    props.isHovered &&
    css`
      box-shadow: 2px 2px 2px ${props.theme.colors.shadow};
    `}
`;

export const OnButton = styled.button<ButtonProps>`
  color: ${props => props.theme.colors.switchOffText};
  width: 100%;
  height: 100%;
  border: 1px solid ${props => props.theme.colors.switchBorder};
  border-radius: 0.5rem 0 0 0.5rem;
  transition: 0.5s background-color;
  background: ${props => props.theme.colors.switchOffBackground};

  ${props =>
    props.isSelected &&
    css`
      color: ${props.theme.colors.switchOnText};
      background: ${props.theme.colors.switchOnBackground};
    `}
`;

export const OffButton = styled.button<ButtonProps>`
  color: ${props => props.theme.colors.switchOffText};
  width: 100%;
  height: 100%;
  border: 1px solid ${props => props.theme.colors.switchBorder};
  border-radius: 0 0.5rem 0.5rem 0;
  transition: 0.5s background-color;
  background: ${props => props.theme.colors.switchOffBackground};

  ${props =>
    props.isSelected &&
    css`
      color: ${props.theme.colors.switchOnText};
      background: ${props.theme.colors.switchOnBackground};
    `}
`;
