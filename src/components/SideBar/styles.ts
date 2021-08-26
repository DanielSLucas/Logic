import styled from "styled-components";

export const Container = styled.aside`
  height: 100%;
  width: 20rem;
  background-color: #FAFAFC;
  box-shadow: 3px 0px 5px rgba(0, 0, 0, 0.25);

  div.dndnode {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1rem;
    margin: 0.5rem;

    border: 1px solid #d3d3d3;
    border-radius: 0.5rem;

    transition: box-shadow 0.2s;

    svg {
      margin-right: 1rem;
      width: 2rem;
      height: 100%;
      stroke: #323232;
    }

    &:hover {
      box-shadow: 3px 0px 5px rgba(0, 0, 0, 0.25);
    }
  }

  
`