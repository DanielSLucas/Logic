import styled, { css } from 'styled-components';

interface ContainerProps {
  isSelected: boolean;
  isHovered: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: 5rem;
  width: 6.5rem;
  margin-left: -1rem;
  margin-right: -0.3rem;
  padding-top: 2.5px;
  box-sizing: content-box;

  svg {
    position: relative;
    width: 6.8rem;
    height: 100%;
    stroke: #323232;
    fill: ${props => props.theme.colors.background};

    ${props =>
      props.isSelected &&
      css`
        stroke-width: 1.25px;
      `}
  }

  span {
    display: none;
    opacity: 0.3;
  }

  ${props =>
    props.isHovered &&
    css`
      span {
        display: inherit;

        &.inputA {
          position: absolute;
          bottom: 1rem;
          left: 0.5rem;
        }

        &.inputB {
          position: absolute;
          top: 1rem;
          left: 0.5rem;
        }

        &.output {
          position: absolute;
          top: 2rem;
          right: 0.8rem;
        }
      }
    `}
`;
