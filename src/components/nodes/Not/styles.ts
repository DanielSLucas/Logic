import styled, { css } from 'styled-components';

interface ContainerProps {
  isSelected: boolean;
  isHovered: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: fit-content;
  width: fit-content;
  margin-left: -1.4rem;
  margin-right: -0.5rem;
  padding-top: 6px;
  box-sizing: content-box;

  svg {
    position: relative;
    width: 5.5rem;
    height: 100%;
    stroke: ${props => props.theme.colors.nodeStroke};
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
          top: 2.3rem;
          left: -0.6rem;
        }

        &.output {
          position: absolute;
          top: 2.3rem;
          right: 1.6rem;
        }
      }
    `}
`;
