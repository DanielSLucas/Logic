import styled, { css } from "styled-components";

interface ContainerProps {
  isSelected: boolean;
  isHovered: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: 4rem;
  width: 3.5rem;
  background: #FFF;
  border: 1px solid #d3d3d3;
  border-radius: 0.5rem;
  
  display: flex;
  align-items: center; 
  justify-content: center;

  ${(props) =>
    props.isSelected && css`
      border-width: 2px;
    `}

  ${(props) =>
    props.isHovered && css`
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    `}
`;
