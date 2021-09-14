import styled, { css } from 'styled-components';

interface ContainerProps {
  isSelected: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: fit-content;
  width: fit-content;
  margin-left: -1.4rem;
  margin-right: -0.5rem;
  padding-top: 6px;
  box-sizing: content-box;

  svg {
    width: 7rem;
    height: 100%;
    stroke: #323232;
    fill: ${props => props.theme.colors.background};

    ${props =>
      props.isSelected &&
      css`
        stroke-width: 1.25px;
      `}
  }
`;
