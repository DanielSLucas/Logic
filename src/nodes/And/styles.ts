import styled, { css } from "styled-components";

interface ContainerProps {
  isSelected: boolean;
  isHovered: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: 5rem;
  width: 5.96rem;
  border-radius: 0 2.6rem 2.6rem 0;
  box-sizing: content-box;

  svg {
    width: 6rem;
    height: 100%;
    stroke: #323232;

    ${(props) =>
    props.isSelected && css`
      stroke-width: 1.25px;
    `}
  }

  

  ${(props) =>
    props.isHovered && css`
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    `}
`;