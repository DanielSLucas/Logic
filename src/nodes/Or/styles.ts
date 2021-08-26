import styled, { css } from "styled-components";

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
    width: 6.8rem;
    height: 100%;
    stroke: #323232;
    fill: #F3F3F3;

    ${(props) =>
    props.isSelected && css`
      stroke-width: 1.25px;
    `}
  }

  /* ${(props) =>
    props.isHovered && css`
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);      
    `} */
`;