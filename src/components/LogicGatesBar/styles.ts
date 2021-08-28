import styled from "styled-components";

export const Container = styled.aside`
  height: 8rem;
  width: 100%;
  background-color: transparent;
  border-bottom: 1px solid #D3D3D3;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  div.dndnode {
    width: 5rem;
    height: 6rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 1rem;
    margin-left: 0.5rem;

    border: 1px solid #eee;
    border-radius: 0.5rem;

    transition: box-shadow 0.2s;

    color: #366587;
    font: 1.125rem Roboto, sans-serif;

    svg {
      width: 2rem;
      height: 100%;
      stroke: #323232;
    }

    &:hover {
      box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.25);
    }

    &:first-child {
      margin-left: 0;
    }
  }

  div.nand, div.or {
    svg {
      width: 2.5rem;
    }
  }

  div.nor {
    svg {
      width: 2.7rem;
    }
  }

  div.not {
    svg {
      width: 2.6rem;
    }
  }

  div.xor {
    svg {
      width: 2.8rem;
    }
  }
  
  div.xnor {
    svg {
      width: 3rem;
    }
  }

  div.switch {
    div {
      display: flex;
      flex-direction: row;

      background: #F3F3F3;
      border: 1px solid #D3D3D3;
      border-radius: 0.5rem;

      padding: 0.2rem 0.5rem;
      margin-bottom: 0.6rem;

      font-size: 1rem;

      hr {
        height: 100%;
        width: 1px;
        margin: 0 0.5rem;
      }

    }
  }

`