import styled from 'styled-components';


export const Container = styled.aside`
  /* grid-area: "sideBar"; */

  height: 100%;
  width: 16rem;
  border-right: 1px solid #d3d3d3;
  background: #FAFAFC;

  display: flex;
  flex-direction: column;
  align-items: center;

  nav {
    margin-top: 4rem;
    width: 100%;
  }

  .divider-2 {
    height: 1px;
    width: 100%;
    background: #d3d3d3;
    margin-top: auto;
  }
`;

export const Title = styled.h1`
  font: 500 3rem Roboto Slab, serif;
  color: #0E5487;
  text-align: center;
  margin-top: 1rem;
`;

export const Step = styled.li`
  width: 100%;
  height: 3rem;
  
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  color: black;
  text-align: left;

  padding: 8px 24px;
      
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;

  transition: box-shadow 0.3s;

  & + & {
    margin-top: 0.5rem;
  }

  div {
    width: 2rem;
    height: 2rem;
    border: 1px solid #d3d3d3;
    border-radius: 50%;
    background-color: transparent;
    margin-right: 8px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
  }
`;

export const Button = styled.button`
  height: 4rem;
  width: 90%;

  background-color: rgba(0, 0, 0, 0);
  transition: background-color 0.2s;

  color: #0E5487;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  border: 1px solid #d3d3d3;
  border-radius: 0.5rem;

  margin-bottom: 2rem;
  margin-top: 2rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }

`;