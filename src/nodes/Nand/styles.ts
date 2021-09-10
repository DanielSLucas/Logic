import styled, { css } from 'styled-components';

interface ContainerProps {
  isSelected: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: 5rem;
  width: 6.5rem;
  margin-left: -0.5rem;
  margin-right: -0.1rem;
  padding-top: 2.5px;
  box-sizing: content-box;

  svg {
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
`;
