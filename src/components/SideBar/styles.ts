import styled from 'styled-components';


export const Container = styled.aside`
  height: 100%;
  width: 16rem;
  border-right: 1px solid #d3d3d3;
  background: #FAFAFC;

  display: flex;
  flex-direction: column;
  align-items: center;

  nav {
    margin-top: 2rem;
    width: 100%;

    ul li {
      width: 100%;
      height: 3rem;
    }

    ul li + li {
      margin-top: 0.5rem;
    }
  }

  .divider {
    height: 1px;
    width: 100%;
    background: #d3d3d3;
    margin-top: 2.1rem;
  }

  footer {
    width: 100%;
    margin-top: auto;
    margin-bottom: 0.5rem;
    
    border-top: 1px solid #d3d3d3;
    
    a {
      margin-top: 0.5rem;

      display: flex;
      align-items: center;
      justify-content: center;
      
      font: 1.125rem Roboto, arial, sans-serif;
      color: #366587;
      text-decoration: underline;

      svg {
        margin-right: 0.5rem;
      }
    }
  }
`;

export const Title = styled.h1`
  font: 500 3rem Roboto Slab, serif;
  color: #0E5487;
  text-align: center;
  margin-top: 1rem;
`;
