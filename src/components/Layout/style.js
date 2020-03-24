import styled from 'styled-components';

export const App = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Top = styled.div`
  margin-bottom: auto;
`;

export const Bottom = styled.div`
  margin-top: auto;
`;

export const Middle = styled.div`
  height: 100%;
  overflow: scroll;
  padding: 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
