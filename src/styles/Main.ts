import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  main {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    & > div {
      width: 100%;
      height: 100%;
    }
  }
`;

export const ReactFlowContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
