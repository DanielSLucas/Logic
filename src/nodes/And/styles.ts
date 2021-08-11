import styled, { css } from "styled-components";

interface ContainerProps {
  isSelected: boolean;
  isHovered: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #FFF;
  border: 1px solid #000;
  border-radius: 0 2rem 2rem 0;
  height: 6rem;
  width: 4.5rem;

  ${(props) =>
    props.isSelected && css`
      border-width: 2px;
    `}

  ${(props) =>
    props.isHovered && css`
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
    `}
`;