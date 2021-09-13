import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: scroll;

  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    height: 100%;
    width: 50rem;
  }

  section {
    margin-top: 3rem;
    margin-bottom: 3rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: justify;

    h1 {
      font: 500 4rem Roboto Slab, serif;
      margin-bottom: 1rem;
      align-self: baseline;
    }

    h2 {
      font: 500 1.5rem Roboto, sans-serif;
      margin: 1rem 0;
      align-self: baseline;
    }

    p {
      width: 100%;
      font: 400 1.125rem Roboto, arial, sans-serif;
      margin: 0.5rem 0;

      span {
        margin: 3rem 0;
      }
    }

    img {
      align-self: center;
      margin: 1rem 0;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;

  margin: 1rem 0;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    max-width: 32rem;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
